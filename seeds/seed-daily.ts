import { PrismaClient } from "../prisma/generated";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL as string,
    },
  },
});

const TEST_USER_ID = "7a070f84-fc74-4a6a-82db-6ddd4b602263";

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
  const neighborhoods = await prisma.neighborhood.findMany();

  if (neighborhoods.length === 0) {
    throw new Error("❌ 생성된 동네가 없습니다. 먼저 Neighborhood 데이터를 추가하세요.");
  }

  const now = new Date();
  const formattedDate = now.toISOString().substring(0, 10).replace(/-/g, "");

  for (const item of shareItems) {
    const imageUrls = ITEM_IMAGE_MAP[item.name];
    const neighborhood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];

    const share = await prisma.share.create({
      data: {
        shareItemId: item.id,
        neighborhoodId: neighborhood.id,
        ownerId: TEST_USER_ID,
        title: `${item.name} 나눔합니다~!~!`,
        description: `부모님께서 ${item.name} 한 박스를 보내주셨는데\n너무 많아서 나눠요~\n 오늘~내일 저녁에 시간 가능합니다`,
        lat: neighborhood.lat,
        lng: neighborhood.lng,
        locationNote: `${neighborhood.name}동 oo공원 근처`,
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