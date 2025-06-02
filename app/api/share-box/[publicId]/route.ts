import type { NextRequest } from "next/server";
import { GetShareListUsecase } from "@/application/usecases/share-box/GetShareListUsecase";
import { PrismaUserRepository } from "@/infra/repositories/prisma/share-box/PrismaUserRepository";
import { PrismaShareListRepository } from "@/infra/repositories/prisma/share-box/PrismaShareListRepository";

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
  const shareListRepository = new PrismaShareListRepository();
  const usecase = new GetShareListUsecase(userRepository, shareListRepository);

  try {
    const list = await usecase.execute(parsedPublicId);
    return new Response(JSON.stringify(list), { status: 200 });
  } catch (e) {
      return new Response(
        JSON.stringify({ error: (e as Error).message || String(e) }),
        { status: 500 }
      );
    }
}

