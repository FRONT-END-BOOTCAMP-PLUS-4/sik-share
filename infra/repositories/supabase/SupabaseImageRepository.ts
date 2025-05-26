import { supabase } from "@/lib/supabase";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import { ProfileImage } from "@/domain/entities/ProfileImage";

export class SupabaseImageStorageRepository implements ImageStorageRepository {
  async uploadUserProfileImage(userPublicId: string, file: File): Promise<ProfileImage> {
    const supaUserStorage = supabase.storage.from("user-profile");

    // 기존 이미지 삭제
    const { data: list, error: listError } = await supaUserStorage.list("");
    if (listError) {
      console.warn("기존 이미지 목록 조회 실패:", listError.message);
    }

    const deleteTargets = list?.filter((item) => item.name.startsWith(`${userPublicId}`)).map((item) => item.name) ?? [];
    if (deleteTargets.length > 0) {
      const { error: deleteError } = await supaUserStorage.remove(deleteTargets);
      if (deleteError) {
        console.warn("기존 이미지 삭제 실패:", deleteError.message);
      }
    }

    // 이미지 업로드
    const fileExtension = file.name.includes('.') ? file.name.split('.').pop() : 'jpg';
    const filePath = `${userPublicId}_${Date.now()}.${fileExtension}`;

    const { error } = await supaUserStorage.upload(filePath, file, { contentType: file.type, upsert: true });

    if (error) throw error;

    const { data } = supabase.storage
      .from("user-profile")
      .getPublicUrl(filePath);
    return new ProfileImage(data.publicUrl);
  }

  async uploadPostImage(
    id: number,
    order: number,
    file: File,
    bucketName : "share" | "group-buy"
  ): Promise<string> {
    const fileExtension = extractFileExtension(file.name);
    const filePath = `${bucketName}_${id}_${order}.${fileExtension}`;

    const { error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file, { contentType: file.type, upsert: true });

    if (error) throw error;

    const { data } = supabase.storage.from(bucketName).getPublicUrl(filePath);

    return data.publicUrl;
  }
  
}

function extractFileExtension(fileName: string) {
  return fileName.includes(".") ? fileName.split(".").pop() : "jpg";
}
