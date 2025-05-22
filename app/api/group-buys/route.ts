import { NextResponse } from 'next/server'

export async function POST(req: Request){
  try{
    const formData = await req.formData();
  }
  catch(error){
    if(error instanceof Error){
      return NextResponse.json(
          {message: error.message || '같이 장보기 등록 실패'},
          {status : 400}
      )
    }
    
    return NextResponse.json(
      {message: '다시 시도해주세요'},
      {status : 500}
    )
  }
}