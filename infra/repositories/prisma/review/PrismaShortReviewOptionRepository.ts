import type { ShortReviewOptionRepository } from "@/domain/repositories/review/ShortReviewOptionRepository";
import { PrismaClient } from "@/prisma/generated";

export class PrismaShortReviewOptionRepository
  implements ShortReviewOptionRepository
{
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAll() {
    return await this.prisma.shortReviewOption.findMany();
  }
}
