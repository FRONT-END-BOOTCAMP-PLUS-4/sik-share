import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const TEST_USER_ID = "7a070f84-fc74-4a6a-82db-6ddd4b602263";
const TEST_NEIGHBORHOOD_ID = 1;

const ITEM_IMAGE_MAP: Record<string, string[]> = {
  "바나나" :[
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/banana_01.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/banana_02.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/banana_03.png",
  ],
  "당근" : [
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/carrot_01.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/carrot_02.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/carrot_03.png",
  ],
  "계란" : [
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/egg_01.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/egg_02.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/egg_03.png",
  ],
  "양파" : [
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/onion_01.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/onion_02.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/onion_03.png",
  ],
  "토마토" : [
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/tomato_01.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/tomato_02.png",
    "https://jxehepesvdmpvgnpxoxn.supabase.co/storage/v1/object/public/share/sample/tomato_03.png"
  ]

}

const STATUS_ACTIVE = 0;

async function main() {
  const shareItems = await prisma.shareItem.findMany();

  const now = new Date();

  for (const item of shareItems) {
    const imageUrls = ITEM_IMAGE_MAP[item.name];
    const share = await prisma.share.create({
      data: {
        shareItemId: item.id,
        neighborhoodId: TEST_NEIGHBORHOOD_ID,
        ownerId: TEST_USER_ID,
        title: `[더미] ${item.name} 나눔`,
        description: `테스트용 ${item.name} 나눔입니다.`,
        lat: 37.4784,
        lng: 126.9516,
        locationNote: "봉천역 근처",
        status: STATUS_ACTIVE,
        createdAt: now,
        meetingDate: null,
        images: {
          createMany: {
            data: imageUrls.map((url, i) => ({
              url,
              order: i,
            })),
          },
        },
      },
    });

    console.log(`✔ 생성 완료: ${share.title}`);
  }
}

main()
  .catch((err) => {
    console.error("❌ 에러 발생:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());