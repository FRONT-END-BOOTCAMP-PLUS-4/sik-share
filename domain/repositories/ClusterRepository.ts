export interface ClusterRepository {
  getNeighborhoodClusters(): Promise<
    { id: number; name: string; lat: number; lng: number; count: number }[]
  >;
}
