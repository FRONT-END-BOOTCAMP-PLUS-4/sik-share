import type { Prisma, Share } from "@/prisma/generated";

export type ShareWithRelations = Prisma.ShareGetPayload<{
  include: {
    images: true;
    shareItem: true;
    owner: true;
    neighborhood: true;
  };
}>;

export interface ShareListRepository {
  findById(userId: string): Promise<ShareWithRelations[]>;
}