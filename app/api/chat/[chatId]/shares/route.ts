import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaChatMessageRepository } from "@/infra/repositories/prisma/PrismaChatMessageRepository";
import { GetChatMessagesUsecase } from "@/application/usecases/Chat/GetChatMessagesUsecase";

export async function GET(
  req: Request,
  { params }: { params: { chatId: string } }
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const chatId = Number(params.chatId);
  if (Number.isNaN(chatId)) {
    return NextResponse.json({ error: "Invalid chatId" }, { status: 400 });
  }

  const repo = new PrismaChatMessageRepository();
  const usecase = new GetChatMessagesUsecase(repo);

  try {
    const messages = await usecase.execute(session.user.id, chatId);
    return NextResponse.json(messages);
  } catch (err) {
    console.error("메시지 불러오기 실패:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
