import { NextResponse } from 'next/server';
import { CreateJoinUsecase } from '@/application/usecases/join/CreateJoinUsecase';
import { CreateJoinDto } from '@/application/usecases/join/dto/CreateJoinDto';
import { PrismaShareChatRepository } from '@/infra/repositories/prisma/share/PrismaShareChatRepository';
import { PrismaShareChatParticipantRepository } from '@/infra/repositories/prisma/share/PrismaShareChatParticipantRepository';
import { PrismaGroupBuyParticipantRepository } from '@/infra/repositories/prisma/group-buy/PrismaGroupBuyParticipantRepository';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dto = new CreateJoinDto(
      body.userId,
      body.type,
      body.postId,
    );

    const usecase = new CreateJoinUsecase(
      new PrismaShareChatRepository(),
      new PrismaShareChatParticipantRepository(),
      new PrismaGroupBuyParticipantRepository()
    );

    await usecase.execute(dto);

    return NextResponse.json({ message: '참여 성공' }, { status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
    return NextResponse.json({ message: '서버 오류' }, { status: 500 });
  }
}
