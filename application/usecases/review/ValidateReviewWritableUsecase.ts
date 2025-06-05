import type { ReviewRepository } from "@/domain/repositories/review/ReviewRepository";
import type { ShareRepository } from "@/domain/repositories/share/ShareRepository";
import type { UserRepository } from "@/domain/repositories/UserRepository";
import { ReviewWritableFailDto } from './dto/ReviewWritableFailDto';
import { ReviewWritableSuccessDto } from './dto/ReviewWritableSuccessDto';

export class ValidateReviewWritableUsecase  {
  constructor(
    private shareRepo: ShareRepository,
    private reviewRepo: ReviewRepository,
    private userRepo: UserRepository,
  ) {}

  async execute(shareId: number, writerId: string) 
  : Promise<ReviewWritableSuccessDto | ReviewWritableFailDto>{
    const share = await this.shareRepo.findById(shareId);

    if(!share){
      return new ReviewWritableFailDto("NOT_FOUND");
    }

    if(!share.recipientId){
      return new ReviewWritableFailDto("NOT_MATCHED");
    }

    if(share.status !== 2){
      return new ReviewWritableFailDto("NOT_MATCHED");
    }

    const review = await this.reviewRepo.findByShareIdAndWriteId(shareId, writerId);

    if(review){
      return new ReviewWritableFailDto("ALREADY_WRITTEN");
    }

    const recipientId = share.recipientId === writerId ? share.ownerId : share.recipientId;
    const user = await this.userRepo.findById(recipientId);

    if (!user) {
      throw new Error("후기를 받는 회원이 존재하지 않습니다.");
    }
    console.log(user.id, user.nickname)
    return new ReviewWritableSuccessDto(user.id, user.nickname);

  }
}
