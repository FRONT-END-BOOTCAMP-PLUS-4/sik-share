import { PrismaClient } from "@/prisma/generated";
import type { ShareChatRepository } from "@/domain/repositories/share/ShareChatRepository";

export class PrismaShareChatRepository implements ShareChatRepository {
  private prisma = new PrismaClient();

  async findByShareId(shareId: number) {
    return this.prisma.shareChat.findMany({
      where: { shareId },
      include: { participants: true },
    });
  }

  async create(data: { shareId: number }): Promise<{ id: number }> {
    const chat = await this.prisma.shareChat.create({
      data: { shareId: data.shareId },
    });
    return { id: chat.id };
  }

  async getOwnerId(shareId: number): Promise<string> {
    const share = await this.prisma.share.findUnique({
      where: { id: shareId },
      select: { ownerId: true },
    });
    if (!share?.ownerId) throw new Error("작성자를 찾을 수 없습니다.");
    return share.ownerId;
  }
}
