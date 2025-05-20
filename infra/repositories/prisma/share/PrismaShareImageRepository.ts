import type { ShareImageRepository } from "@/domain/repositories/share/ShareImageRepository";
import { PrismaClient, type ShareImage } from "@/prisma/generated";

export class PrismaShareImageRepository implements ShareImageRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async save(images: ShareImage[]): Promise<void> {
    await this.prisma.shareImage.createMany({data : images});
  }

  async findByShareId(shareId : number): Promise<ShareImage[]> {
    return await this.prisma.shareImage.findMany({
      where : {shareId},
      orderBy : {order: 'asc'}
    })
  }
}
