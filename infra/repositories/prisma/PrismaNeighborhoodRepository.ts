import type { NeighborhoodRepository } from "@/domain/repositories/NeighborhoodRepository";
import { type Neighborhood, PrismaClient } from '@/prisma/generated';

export class PrismaNeighborhoodRepository implements NeighborhoodRepository {
  private prisma : PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }

  async findByName(name: string): Promise<Neighborhood | null>  {
    return await this.prisma.neighborhood.findUnique({
      where: { name },
    });
  }
  async findById(id: number): Promise<Neighborhood |null> {
    return await this.prisma.neighborhood.findUnique({
      where: { id },
    });
  }
}
