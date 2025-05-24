import type { ClusterRepository } from "@/domain/repositories/ClusterRepository";

export class GetClusterDataUsecase {
  constructor(private clusterRepo: ClusterRepository) {}

  async execute(): Promise<
    { id: number; lat: number; lng: number; count: number }[]
  > {
    return this.clusterRepo.getNeighborhoodClusters();
  }
}
