import { supabase } from "@/lib/supabase";
import type { ImageStorageRepository } from "@/domain/repositories/ImageStorageRepository";
import { ProfileImage } from "@/domain/entities/ProfileImage";

export class SupabaseImageStorageRepository implements ImageStorageRepository {
  async uploadUserProfileImage(userId: string, file: File): Promise<ProfileImage> {
    const fileExtension = file.name.includes('.') ? file.name.split('.').pop() : 'jpg';
    const filePath = `profiles/${userId}_profile.${fileExtension}`;

    const { error } = await supabase.storage
      .from("user-profile")
      .upload(filePath, file, { contentType: file.type, upsert: true });

    if (error) throw error;

    const { data } = supabase.storage.from("user-profile").getPublicUrl(filePath);
    return new ProfileImage(data.publicUrl);
  }
}
