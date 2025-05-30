import type { ShortReviewOptionRepository } from "@/domain/repositories/review/ShortReviewOptionRepository";
import { PrismaClient } from "@/prisma/generated";

export class PrismaShortReviewOptionRepository implements ShortReviewOptionRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    return await this.prisma.shortReviewOption.findMany();
  }
  
  async getContentById(id: number): Promise<string> {
    const option = await this.prisma.shortReviewOption.findUnique({
      where: { id },
      select: { content: true },
    });

    if (!option) {
      throw new Error(`Short review option with id ${id} not found`);
    }

    return option.content;
  }
}
