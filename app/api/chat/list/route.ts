import { type NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/prisma/generated";
import { PrismaChatListRepository } from "@/infra/repositories/prisma/PrismaChatListRepository";
import { GetChatListUsecase } from "@/application/usecases/Chat/GetChatListUsecase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const repo = new PrismaChatListRepository();
  const usecase = new GetChatListUsecase(repo);

  try {
    const chatList = await usecase.execute(user.id);
    return NextResponse.json(chatList);
  } catch (err) {
    console.error("❌ 채팅 리스트 불러오기 실패:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
