import type { Share } from "@/prisma/generated";

export interface ShareRepository {
  save(share: Partial<Share>): Promise<Share>;
  findById(id:number):Promise<Share | null>;
}
