export const dynamic = 'force-dynamic';

import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { PrismaChatMessageRepository } from "@/infra/repositories/prisma/PrismaChatMessageListRepository";
import { GetShareChatListUsecase } from "@/application/usecases/chatting/GetShareChatListUsecase";

export async function GET(
  req: NextRequest,
  context: { params: { chatId: string } }
) {
  const params = await context.params;
  const chatId = Number(params.chatId);
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (Number.isNaN(chatId)) {
    return NextResponse.json({ error: "Invalid chatId" }, { status: 400 });
  }

  const repo = new PrismaChatMessageRepository();
  const usecase = new GetShareChatListUsecase(repo);

  try {
    const chatDetail = await usecase.execute(chatId, session.user.id);
    return NextResponse.json(chatDetail);
  } catch (err) {
    console.error("메시지 불러오기 실패:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
