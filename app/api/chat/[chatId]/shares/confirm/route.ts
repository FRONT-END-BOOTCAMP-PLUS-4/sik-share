import { type NextRequest, NextResponse } from "next/server";
import { PrismaUpdateMeetingDateRepository } from "@/infra/repositories/prisma/PrismaUpdateMeetingDateRepository";
import { UpdateMeetingDateUseCase } from "@/application/usecases/chat/UpdateMeetingDateUseCase";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;

  try {
    const { meetingDate } = await req.json();

    if (!meetingDate) {
      return NextResponse.json(
        { message: "meetingDate가 필요합니다." },
        { status: 400 },
      );
    }

    const repository = new PrismaUpdateMeetingDateRepository();
    const useCase = new UpdateMeetingDateUseCase(repository);

    await useCase.execute({
      chatId: Number(chatId),
      meetingDate: new Date(meetingDate),
      status: 1,
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: (e as Error).message },
      { status: 500 },
    );
  }
}
