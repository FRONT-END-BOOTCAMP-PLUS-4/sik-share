import type { ProfileImage } from "../entities/ProfileImage";

export interface ImageStorageRepository {
  uploadUserProfileImage(
    userPublicId: string,
    file: File,
  ): Promise<ProfileImage>;

  uploadPostImage(
    id: number,
    order: number,
    file: File,
    bucketName : string
  ): Promise<string>;

}
