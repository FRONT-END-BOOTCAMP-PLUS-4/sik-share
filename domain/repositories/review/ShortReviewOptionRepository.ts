import type { ShortReviewOption } from "@/prisma/generated";

export interface ShortReviewOptionRepository {
    findAll(): Promise<ShortReviewOption[]>;
    getContentById(id: number): Promise<string>;
}
