import Image from "next/image";
import { Clock, ClockFading, MapPin, CircleUserRound } from "lucide-react";
import {
	Badge,
	type VariantProps as BadgeVariantProps,
} from "@/components/ui/badge";

export interface ListCardProps {
	thumbnailSrc: string;
	thumbnailAlt?: string;
	title: string;
	badgeVariant?: BadgeVariantProps<typeof Badge>["variant"];
	badgeLabel?: string;
	timeLeft?: string;
	location: string;
	currentUser?: number;
	maxUser?: number;
}

export default function ListCard({
	thumbnailSrc,
	thumbnailAlt = "썸네일",
	title,
	badgeVariant,
	badgeLabel,
	timeLeft,
	location,
	currentUser,
	maxUser,
}: ListCardProps) {
	return (
		<div className="-mx-4">
			<div className="w-full flex gap-2 items-start px-4 py-3 cursor-pointer hover:bg-zinc-200">
				<div className="flex-shrink-0">
					<Image src={thumbnailSrc} width={78} height={78} alt={thumbnailAlt} />
				</div>
				<div className="flex flex-col flex-1 gap-1">
					<div className="flex justify-between items-center">
						<p className="body-md">{title}</p>
						{badgeVariant && badgeLabel && (
							<Badge variant={badgeVariant}>{badgeLabel}</Badge>
						)}
					</div>
					<div className="flex text-zinc-500">
						<div className="flex flex-col gap-[5px]">
							{timeLeft && (
								<div className="flex items-center gap-1">
									{badgeVariant === "share" ? (
										<ClockFading size={16} strokeWidth={1} />
									) : (
										<Clock size={16} strokeWidth={1} />
									)}
									<p className="label">{timeLeft}</p>
								</div>
							)}
							<div className="flex items-center gap-1">
								<MapPin size={16} strokeWidth={1} />
								<p className="label">{location}</p>
							</div>
						</div>
						{currentUser && maxUser && (
							<div className="flex">
								<CircleUserRound size={16} strokeWidth={1} />
								<p className="label">{`${currentUser}/${maxUser}명`}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
