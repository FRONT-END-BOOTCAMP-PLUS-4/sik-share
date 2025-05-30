import { PrismaClient } from "@/prisma/generated";
import type { ShareChatRepository } from "@/domain/repositories/share/ShareChatRepository";

export class PrismaShareChatRepository implements ShareChatRepository {
  private prisma = new PrismaClient();

  async create(data: { shareId: number }): Promise<{ id: number }> {
    const chat = await this.prisma.shareChat.create({
      data: {
        share: {
            connect: { id: data.shareId }
        }
      },
    });

    return { id: chat.id };
  }
}
