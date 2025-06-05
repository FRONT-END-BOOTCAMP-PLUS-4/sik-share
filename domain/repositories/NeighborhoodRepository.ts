import type { Neighborhood } from "@/prisma/generated";

export interface NeighborhoodRepository {
  findByName(name: string): Promise<Neighborhood | null>;
  findById(id: number): Promise<Neighborhood | null>;
}
