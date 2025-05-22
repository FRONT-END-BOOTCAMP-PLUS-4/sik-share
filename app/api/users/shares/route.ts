import { GetUserSharesDto } from "@/application/usecases/user/dto/GetUserSharesDto";
import { GetUserSharesUsecase } from "@/application/usecases/user/GetUserSharesUsecase";
import { PrismaShareRepository } from "@/infra/repositories/prisma/PrismaShareRepository";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try{
        const body = await req.json();
        const getUserSharesDto = new GetUserSharesDto(
            body.ownerId,
            body.status,
            body.page,
            body.itemsPerPage,
        );

        const shareRepo = new PrismaShareRepository();
        const getUserSharesUsecase = new GetUserSharesUsecase(shareRepo);
        const shares = await getUserSharesUsecase.execute(getUserSharesDto);
        if(!shares){
            return NextResponse.json({ success: true, message: "나눔 내역이 없습니다." }, { status: 200 });
        }
        
        console.log("나눔 내역 조회 성공", shares);
        // return NextResponse.json({ success: true, shares }, { status: 200 });
    }
    catch(error){
        console.error("나눔 내역 조회 실패", error);
    }
}