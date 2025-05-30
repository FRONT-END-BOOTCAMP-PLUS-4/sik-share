import { type NextRequest, NextResponse } from "next/server";
import { PrismaUpdateShareStatusRepository } from "@/infra/repositories/prisma/PrismaUpdateShareStatusRepository";
import { UpdateShareStatusUseCase } from "@/application/usecases/chat/UpdateShareStatusUseCase";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ chatId: string }> }
) {
  const { chatId } = await params;

  try {
    const repository = new PrismaUpdateShareStatusRepository();
    const useCase = new UpdateShareStatusUseCase(repository);

    await useCase.execute({
      chatId: Number(chatId),
      status: 2,
    });

    await fetch("https://port-0-sik-share-server-m61t9knhb5c1f236.sel4.cloudtype.app/api/share-complete-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chatId }),
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
