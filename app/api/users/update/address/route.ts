import { UpdateUserAddressDto } from "@/application/usecases/user/dto/UpdateUserAddressDto";
import { UpdateUserAddressUsecase } from "@/application/usecases/user/UpdateUserAddressUsecase";
import { PrismaNeighborhoodRepository } from "@/infra/repositories/prisma/PrismaNeighborhoodRepository";
import { PrismaUserRepository } from "@/infra/repositories/prisma/PrismaUserRepository";
import { NextResponse } from "next/server";

export async function POST(req:Request) {
  try{
    const body = await req.json();
    const updateUserAddressDto = new UpdateUserAddressDto(
      body.userPublicId,
      body.address, 
      body.neighborhoodName,
    );

    const userRepo = new PrismaUserRepository();
    const neighborhoodRepo = new PrismaNeighborhoodRepository();
    const updateUserAddressUsecase = new UpdateUserAddressUsecase(userRepo, neighborhoodRepo);
    await updateUserAddressUsecase.execute(updateUserAddressDto);

    return NextResponse.json({ success: true, message: "주소 변경이 완료되었습니다." }, { status: 200 });
  } catch(error){
    console.error("주소 변경 실패", error);
    return NextResponse.json({ success: false, message: "주소 변경에 실패했습니다.", error: String(error) }, { status: 500 });
  }}