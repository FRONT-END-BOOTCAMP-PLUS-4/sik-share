import type { UpdateShareStatusRepository } from "@/domain/repositories/chat/UpdateShareStatusRepository";
import type { UpdateShareStatusDto } from "@/application/usecases/chat/dto/UpdateShareStatusDto";

export class UpdateShareStatusUseCase {
  constructor(private readonly shareChatRepository: UpdateShareStatusRepository) {}

  async execute(dto: UpdateShareStatusDto): Promise<void> {
    await this.shareChatRepository.updateShareStatus(
      dto.chatId
      ,dto.myUserId,
    );
  }
}
