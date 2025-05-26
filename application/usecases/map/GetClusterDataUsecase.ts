import type { ClusterRepository } from "@/domain/repositories/ClusterRepository";

export class GetClusterDataUsecase {
  constructor(private clusterRepo: ClusterRepository) {}

  async execute(): Promise<
    { id: number; name: string; lat: number; lng: number; count: number }[]
  > {
    return this.clusterRepo.getNeighborhoodClusters();
  }
}
