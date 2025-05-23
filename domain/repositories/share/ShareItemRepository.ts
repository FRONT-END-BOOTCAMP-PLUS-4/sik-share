import type { ShareItem } from "@/prisma/generated";

export interface ShareItemRepository {
  findAll() : Promise<ShareItem[]>
}
