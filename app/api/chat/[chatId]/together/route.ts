export const dynamic = 'force-dynamic';

import { type NextRequest, NextResponse } from "next/server";
import { PrismaGroupBuyChatMessageRepository } from "@/infra/repositories/prisma/PrismaGroupBuyChatMessageRepository";
import { GetGroupBuyChatMessagesUsecase } from "@/application/usecases/chat/GetGroupBuyChatMessagesUsecase";
import { GetGroupBuyChatInfoUsecase } from "@/application/usecases/chat/GetGroupBuyChatInfoUsecase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(
  req: NextRequest,
  {params}: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;

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
      messagesUsecase.execute(Number(chatId), session.user.id),
      infoUsecase.execute(Number(chatId)),
    ]);

    return NextResponse.json({
      messages,
      info,
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
