export const dynamic = 'force-dynamic';

import { type NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { PrismaChatMessageRepository } from "@/infra/repositories/prisma/PrismaChatMessageListRepository";
import { GetShareChatListUsecase } from "@/application/usecases/chat/GetShareChatListUsecase";
import { PrismaUpdateMeetingDateRepository } from "@/infra/repositories/prisma/PrismaUpdateMeetingDateRepository";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;
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
    const chatDetail = await usecase.execute(Number(chatId), session.user.id);
    return NextResponse.json(chatDetail);
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;
  const { meetingDate, myUserId } = await req.json();

  try {
    const repository = new PrismaUpdateMeetingDateRepository();
    await repository.updateMeetingDate(Number(chatId), new Date(meetingDate), myUserId);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: (e as Error).message },
      { status: 500 },
    );
  }
}