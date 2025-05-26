import { PrismaClient } from "../prisma/generated";

const prisma = new PrismaClient();

async function main() {
  // 서울 관악구 동네 생성
  const neighborhood = await prisma.neighborhood.create({
    data: {
      name: "봉천동",
      district: "관악구",
      lat: 37.47796, 
      lng: 126.9534,
    },
  });


  // 사용자 생성
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      nickname: "유저1",
      address: "서울시 관악구 봉천동",
      neighborhoodId: neighborhood.id,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      nickname: "유저2",
      address: "서울시 관악구 봉천동",
      neighborhoodId: neighborhood.id,
    },
  });

  // 그룹 구매 생성
  const groupBuy = await prisma.groupBuy.create({
    data: {
      organizerId: user1.id,
      neighborhoodId: neighborhood.id,
      title: "그룹 장보기",
      capacity: 10,
      desiredItem: "식료품",
      meetingDate: new Date(),
      locationAddress: "서울시 관악구 봉천동 123",
      locationNote: "근처 마트",
      description: "관악구 주민들을 위한 공동 장보기 모임입니다.",
      status: "진행 중",
    },
  });

  // 그룹 구매 참여자 추가
  await prisma.groupBuyParticipant.create({
    data: {
      userId: user2.id,
      groupBuyId: groupBuy.id,
    },
  });

  // 나눔 항목 생성
  const shareItem = await prisma.shareItem.create({
    data: {
      name: "남는 채소",
    },
  });

  // 나눔 생성
  const share = await prisma.share.create({
    data: {
      shareItemId: shareItem.id,
      neighborhoodId: neighborhood.id,
      ownerId: user1.id,
      recipientId: user2.id,
      title: "채소 나눔",
      meetingDate: new Date(),
      lat: 37.4783,
      lng: 126.9517,
      locationAddress: "서울시 관악구 봉천동 123",
      locationNote: "채소 나눔 장소",
      description: "남는 채소를 나누는 행사입니다.",
      status: "완료",
    },
  });

  // 그룹 구매 채팅 생성
  const groupBuyChat = await prisma.groupBuyChat.create({
    data: {
      groupBuyId: groupBuy.id,
    },
  });

  // 그룹 구매 채팅 참여자 추가
  await prisma.groupBuyChatParticipant.create({
    data: {
      userId: user1.id,
      groupBuyChatId: groupBuyChat.id,
    },
  });

  // 나눔 채팅 생성
  const shareChat = await prisma.shareChat.create({
    data: {
      shareId: share.id,
    },
  });

  // 나눔 채팅 참여자 추가
  await prisma.shareChatParticipant.create({
    data: {
      userId: user2.id,
      shareChatId: shareChat.id,
    },
  });

  // 리뷰 생성
  const review = await prisma.review.create({
    data: {
      writerId: user1.id,
      recipientId: user2.id,
      shareId: share.id,
      grade: 2,
      content: "채소 나눔에 감사드립니다!",
    },
  });

  // 알림 생성
  await prisma.notification.create({
    data: {
      userId: user2.id,
      content: "새로운 나눔 채팅 메시지가 있습니다.",
    },
  });

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
