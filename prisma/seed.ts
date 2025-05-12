import { PrismaClient } from "./generated";

// import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	// ... you will write your Prisma Client queries here
	// --- Member -------------------------
	const newMembers = await prisma.member.createMany({
		data: [
			{
				// id: "333",
				email: "hoon@gmail.com",
				username: "hoon12341",
				password: "111",
				phone: "119",
			},
			{
				// id: "444",
				email: "hoonzz@naver.com",
				username: "hoonhoonhoon",
				password: "222",
				phone: "119",
			},
		],
	});
	console.log({ newMembers });
	// const members = await prisma.member.findMany();
	// console.log({ members });

	// --- Role -------------------------
	// const newRoles = await prisma.role.createMany({
	// 	data: [
	// 		{
	// 			id: 1,
	// 			name: "ADMIN",
	// 			description: "관리자",
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "MEMBER",
	// 			description: "사용자",
	// 		},
	// 	],
	// });
	// console.log({ newRoles });

	// --- MemberRole -------------------------
	// const newMemberRoles = await prisma.memberRole.createMany({
	// 	data: [
	// 		{
	// 			memberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			roleId: 1,
	// 		},
	// 		{
	// 			memberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			roleId: 2,
	// 		},
	// 		{
	// 			memberId: "e755441d-1979-4617-acd5-531f2f898b22",
	// 			roleId: 2,
	// 		},
	// 	],
	// });
	// console.log({ newMemberRoles });

	// --- Category -------------------------
	// const newCategories = await prisma.category.createMany({
	// 	data: [
	// 		{
	// 			id: 1,
	// 			name: "커피",
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "수제청",
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 		},
	// 		{
	// 			id: 3,
	// 			name: "샌드위치",
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 		},
	// 		{
	// 			id: 4,
	// 			name: "쿠키",
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 		},
	// 	],
	// });
	// console.log({ newCategories });
	// const categries = await prisma.category.findMany();
	// console.log({ categries });

	// --- Menu -------------------------
	// const newMenus = await prisma.menu.createMany({
	// 	data: [
	// 		{
	// 			id: 1,
	// 			korName: "아메리카노",
	// 			engName: "Americano",
	// 			price: 4000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 1,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 원두로 만든 아메리카노",
	// 		},
	// 		{
	// 			id: 2,
	// 			korName: "카페라떼",
	// 			engName: "Caffe Latte",
	// 			price: 4500,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 1,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "부드러운 우유와 에스프레소의 조화",
	// 		},
	// 		{
	// 			id: 3,
	// 			korName: "딸기 수제청",
	// 			engName: "Strawberry Syrup",
	// 			price: 5000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 2,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 딸기로 만든 수제청",
	// 		},
	// 		{
	// 			id: 4,
	// 			korName: "블루베리 수제청",
	// 			engName: "Blueberry Syrup",
	// 			price: 5000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 2,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 블루베리로 만든 수제청",
	// 		},
	// 		{
	// 			id: 5,
	// 			korName: "햄 샌드위치",
	// 			engName: "Ham Sandwich",
	// 			price: 6000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 3,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 재료로 만든 햄 샌드위치",
	// 		},
	// 		{
	// 			id: 6,
	// 			korName: "치킨 샌드위치",
	// 			engName: "Chicken Sandwich",
	// 			price: 6000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 3,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 재료로 만든 치킨 샌드위치",
	// 		},
	// 		{
	// 			id: 7,
	// 			korName: "초코칩 쿠키",
	// 			engName: "Choco Chip Cookie",
	// 			price: 2000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 4,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "부드러운 초코칩 쿠키",
	// 		},
	// 		{
	// 			id: 8,
	// 			korName: "오레오 쿠키",
	// 			engName: "Oreo Cookie",
	// 			price: 2000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 4,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "부드러운 오레오 쿠키",
	// 		},
	// 		{
	// 			id: 9,
	// 			korName: "마카롱",
	// 			engName: "Macaron",
	// 			price: 3000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 4,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "부드러운 마카롱",
	// 		},
	// 		{
	// 			id: 10,
	// 			korName: "치즈쿠키",
	// 			engName: "Cheese Cookie",
	// 			price: 2000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 4,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "부드러운 치즈쿠키",
	// 		},
	// 		{
	// 			id: 11,
	// 			korName: "오렌지 수제청",
	// 			engName: "Orange Syrup",
	// 			price: 5000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 4,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 오렌지로 만든 수제청",
	// 		},
	// 		{
	// 			id: 12,
	// 			korName: "자몽 수제청",
	// 			engName: "Grapefruit Syrup",
	// 			price: 5000,
	// 			hasIce: true,
	// 			hasHot: true,
	// 			categoryId: 4,
	// 			regMemberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			description: "신선한 자몽으로 만든 수제청",
	// 		},
	// 	],
	// });
	// console.log({ newMenus });

	// const menus = await prisma.menu.findMany();
	// console.log({ menus });

	// --- Image -------------------------
	// const newImages = await prisma.menuImage.createMany({
	// 	data: [
	// 		{
	// 			id: 1,
	// 			name: "americano.png",
	// 			isDefault: true,
	// 			menuId: 1,
	// 		},
	// 		{
	// 			id: 2,
	// 			name: "caffe-latte.png",
	// 			isDefault: true,
	// 			menuId: 2,
	// 		},
	// 		{
	// 			id: 3,
	// 			name: "strawberry-syrup.png",
	// 			isDefault: true,
	// 			menuId: 3,
	// 		},
	// 		{
	// 			id: 4,
	// 			name: "blueberry-syrup.png",
	// 			isDefault: true,
	// 			menuId: 4,
	// 		},
	// 		{
	// 			id: 5,
	// 			name: "ham-sandwich.png",
	// 			isDefault: true,
	// 			menuId: 5,
	// 		},
	// 		{
	// 			id: 6,
	// 			name: "chicken-sandwich.png",
	// 			isDefault: true,
	// 			menuId: 6,
	// 		},
	// 		{
	// 			id: 7,
	// 			name: "choco-chip-cookie.png",
	// 			isDefault: true,
	// 			menuId: 7,
	// 		},
	// 		{
	// 			id: 8,
	// 			name: "oreo-cookie.png",
	// 			isDefault: true,
	// 			menuId: 8,
	// 		},
	// 		{
	// 			id: 9,
	// 			name: "macaron.png",
	// 			isDefault: true,
	// 			menuId: 9,
	// 		},
	// 		{
	// 			id: 10,
	// 			name: "cheese-cookie.png",
	// 			isDefault: true,
	// 			menuId: 10,
	// 		},
	// 		{
	// 			id: 11,
	// 			name: "orange-syrup.png",
	// 			isDefault: true,
	// 			menuId: 11,
	// 		},
	// 		{
	// 			id: 12,
	// 			name: "grapefruit-syrup.png",
	// 			isDefault: true,
	// 			menuId: 12,
	// 		},

	// 		{
	// 			id: 13,
	// 			name: "latte.png",
	// 			isDefault: false,
	// 			menuId: 2,
	// 		},
	// 	],
	// });
	// console.log({ newImages });

	// const images = await prisma.menuImage.findMany({
	//     include: {
	//         menu: true,
	//     },
	// });

	// console.log({ images });

	// const menuLikes = await prisma.menuLike.createMany({
	// 	data: [
	// 		{
	// 			memberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			menuId: 1,
	// 		},
	// 		{
	// 			memberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			menuId: 2,
	// 		},
	// 		{
	// 			memberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			menuId: 3,
	// 		},
	// 		{
	// 			memberId: "7ae5e5c9-0c28-426f-952f-85bdfdcfc522",
	// 			menuId: 4,
	// 		},
	// 		{
	// 			memberId: "e755441d-1979-4617-acd5-531f2f898b22",
	// 			menuId: 3,
	// 		},
	// 		{
	// 			memberId: "e755441d-1979-4617-acd5-531f2f898b22",
	// 			menuId: 4,
	// 		},
	// 		{
	// 			memberId: "e755441d-1979-4617-acd5-531f2f898b22",
	// 			menuId: 6,
	// 		},
	// 	],
	// });
	// console.log({ menuLikes });
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
