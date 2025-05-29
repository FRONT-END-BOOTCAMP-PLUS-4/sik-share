import { type NextRequest, NextResponse } from "next/server";
import { PrismaUpdateTogetherStatusRepository } from "@/infra/repositories/prisma/PrismaUpdateTogetherStatusRepository";
import { UpdateTogetherStatusUseCase } from "@/application/usecases/chatting/UpdateTogetherStatusUseCase";

export async function PATCH(
  req: NextRequest,
  context: { params: { chatId: string } }
) {
  const { chatId } = await context.params;
  const numericChatId = Number(chatId);

  try {
    const repository = new PrismaUpdateTogetherStatusRepository();
    const useCase = new UpdateTogetherStatusUseCase(repository);

    await useCase.execute({
      chatId: numericChatId,
      status: 2,
    });

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (e) {
    console.error("Error updating meeting date:", e);
    return NextResponse.json(
      { message: (e as Error).message },
      { status: 500 },
    );
  }
}
