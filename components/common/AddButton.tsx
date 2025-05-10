"use client";

import { useState } from "react";
import { Plus, MinusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AddButton() {
	const [showSpread, setShowSpread] = useState(false);

	const handleClick = () => {
		setShowSpread((prev) => !prev);
	};

	return (
		<>
			{!showSpread ? (
				<Button variant="add" onClick={handleClick}>
					<div className="flex justify-center items-center gap-0.5">
						<Plus />
						<p>등록하기</p>
					</div>
				</Button>
			) : (
				<div className="relative">
					<Image
						src="/assets/images/lucide/add-minus.svg"
						width={36}
						height={36}
						alt="취소하기 버튼"
						className="cursor-pointer"
						onClick={handleClick}
					/>
					<div className="absolute top-10 flex flex-col bg-white shadow-2xl">
						<Button className="text-primary bg-white hover:bg-[var(--primary-o2)] cursor-pointer shadow-none">
							같이 장보기
						</Button>
						<Button className="text-primary bg-white hover:bg-[var(--primary-o2)] cursor-pointer shadow-none">
							나눔
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
