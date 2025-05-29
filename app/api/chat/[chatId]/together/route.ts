export const dynamic = 'force-dynamic';

import { type NextRequest, NextResponse } from "next/server";
import { PrismaGroupBuyChatMessageRepository } from "@/infra/repositories/prisma/PrismaGroupBuyChatMessageRepository";
import { GetGroupBuyChatMessagesUsecase } from "@/application/usecases/chat/GetGroupBuyChatMessagesUsecase";
import { GetGroupBuyChatInfoUsecase } from "@/application/usecases/chat/GetGroupBuyChatInfoUsecase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ chatId: string }> }
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

  const repo = new PrismaGroupBuyChatMessageRepository();
  const messagesUsecase = new GetGroupBuyChatMessagesUsecase(repo);
  const infoUsecase = new GetGroupBuyChatInfoUsecase(repo);

  try {
    const [messages, info] = await Promise.all([
      messagesUsecase.execute(chatId, session.user.id),
      infoUsecase.execute(chatId),
    ]);

    return NextResponse.json({
      messages,
      info,
    });
  } catch (err) {
    console.error("단체채팅 메시지 조회 실패:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
