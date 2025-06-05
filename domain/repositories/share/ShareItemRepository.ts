import type { ShareItem } from "@/prisma/generated";



export interface ShareItemRepository {
  findAvailableItems(excludeIds?: number[]) : Promise<ShareItem[]>
}
