import type { ShareImageRepository } from "@/domain/repositories/share/ShareImageRepository";
import { PrismaClient, type ShareImage } from "@/prisma/generated";

export class PrismaShareImageRepository implements ShareImageRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  update(images: Partial<ShareImage>[]): Promise<void> {
    throw new Error('Method not implemented.');
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

  async replace(images: ShareImage[]): Promise<void> {
    const tx = await this.prisma.$transaction([
      this.prisma.shareImage.deleteMany({ where: { shareId: images[0].shareId } }),
      this.prisma.shareImage.createMany({ data: images }),
    ]);
  }
}
