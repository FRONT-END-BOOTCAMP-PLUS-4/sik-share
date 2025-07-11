import { type NextRequest, NextResponse } from "next/server";
import { PrismaUpdateTogetherStatusRepository } from "@/infra/repositories/prisma/PrismaUpdateTogetherStatusRepository";
import { UpdateTogetherStatusUseCase } from "@/application/usecases/chat/UpdateTogetherStatusUseCase";

export async function PATCH(
  req: NextRequest,
   {params }: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;

  try {
    const repository = new PrismaUpdateTogetherStatusRepository();
    const useCase = new UpdateTogetherStatusUseCase(repository);

    await useCase.execute({
      chatId: Number(chatId),
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
