import Image from "next/image";

export default function ListCard() {
	return (
		<div className="w-full hover:bg-zinc-200">
			<div className="flex gap-2">
				<Image
					src="/assets/images/example/thumbnail.png"
					width={78}
					height={78}
					alt="썸네일"
				/>
				<div className="flex flex-col gap-1">
					<p className="body-md">양파 나눔해요요...</p>

					<div className="">
						<div className="flex text-zinc-500">
							<p className="label">21시간 남음</p>
						</div>
						<div className="flex text-zinc-500">
							<p className="label">롯데시네마</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
