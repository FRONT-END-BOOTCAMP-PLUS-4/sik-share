import type { ProfileImage } from "../entities/ProfileImage";

export interface ImageStorageRepository {
  uploadUserProfileImage(
    userPublicId: string,
    file: File,
  ): Promise<ProfileImage>;

  uploadeShareImage(
    shareId: number,
    order: number,
    file: File,
  ): Promise<string>;
}
