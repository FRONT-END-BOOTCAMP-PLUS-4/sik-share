import type { NextRequest } from "next/server";
import { PrismaUserRepository } from "@/infra/repositories/prisma/share-box/PrismaUserRepository";
import { GetUserInfoUsecase } from "@/application/usecases/share-box/GetUserInfoUsecase";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{publicId : string}> }
) {
  const { publicId } = await params;
  const parsedPublicId = Number(publicId);

  if (Number.isNaN(parsedPublicId) || parsedPublicId <= 0) {
    return new Response(JSON.stringify({ error: "잘못된 publicId입니다." }), {
      status: 400,
    });
  }

  const userRepository = new PrismaUserRepository();
  const userInfoUsecase = new GetUserInfoUsecase(userRepository);

  try {
    const userInfo = await userInfoUsecase.execute(parsedPublicId);
    return new Response(JSON.stringify(userInfo), { status: 200 });
  } catch (e) {
    return new Response(
      JSON.stringify({ error: (e as Error).message || String(e) }),
      { status: 500 }
    );
  }
}
