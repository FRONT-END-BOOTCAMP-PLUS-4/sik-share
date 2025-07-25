import { type NextRequest, NextResponse } from "next/server";
import { PrismaChatListRepository } from "@/infra/repositories/prisma/PrismaChatListRepository";
import { GetChatListUsecase } from "@/application/usecases/chat/GetChatListUsecase";
import { GetGroupBuyChatListUsecase } from "@/application/usecases/chat/GetGroupBuyChatListUsecase";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const repo = new PrismaChatListRepository();

  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  try {
    if (type === "share") {
      const shareChats = await new GetChatListUsecase(repo).execute(session.user.id);
      return NextResponse.json(shareChats);
    }
    if (type === "together") {
      const groupBuyChats = await new GetGroupBuyChatListUsecase(repo).execute(session.user.id);
      return NextResponse.json(groupBuyChats);
    }
    const [shareChats, groupBuyChats] = await Promise.all([
      new GetChatListUsecase(repo).execute(session.user.id),
      new GetGroupBuyChatListUsecase(repo).execute(session.user.id),
    ]);
    return NextResponse.json({
      shareChats,
      groupBuyChats,
    });
  } catch (err) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
