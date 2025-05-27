export interface ShortReviewOptionRepository {
    getContentById(id: number): Promise<string>;
}