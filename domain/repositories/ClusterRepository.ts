export interface ClusterRepository {
  getNeighborhoodClusters(): Promise<
    { id: number; lat: number; lng: number; count: number }[]
  >;
}
