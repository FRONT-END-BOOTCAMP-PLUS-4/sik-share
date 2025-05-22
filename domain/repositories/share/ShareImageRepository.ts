import type { ShareImage } from "@/prisma/generated";

export interface ShareImageRepository {
  save(images : Partial<ShareImage>[]) : Promise<void>;
  findByShareId(shareId : number) : Promise<ShareImage[]>;
}
