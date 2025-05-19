import { NextResponse } from "next/server";
import { UpdateUserProfileUsecase } from "@/application/usecases/user/UpdateUserProfileUsecase";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { SupabaseImageStorageRepository } from "@/infra/repositories/supabase/SupabaseProfileImageRepository";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    console.log(formData);

    const userId = formData.get("userId") as string;
    const nickName = formData.get("nickName") as string;
    const currentImageUrl = formData.get("currentImageUrl") as string;
    const file = formData.get("newImageFile") as File | null;

    const userRepo = new PrismaUserRepository();
    const imageStorageRepo = new SupabaseImageStorageRepository();
    const updateUserProfileUsecase = new UpdateUserProfileUsecase(userRepo, imageStorageRepo);

    await updateUserProfileUsecase.execute({
      userId,
      nickName,
      currentImageUrl,
      newImageFile: file,
    });

    return NextResponse.json({ message: "프로필 수정 완료" }, { status: 200 });
  } catch (error) {
    console.error("프로필 수정 실패---:", error);
    return NextResponse.json({ message: "프로필 수정 실패", error: String(error) }, { status: 500 });
  }
}
