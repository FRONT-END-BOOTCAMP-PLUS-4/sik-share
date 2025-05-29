import type { UpdateTogetherStatusRepository } from "@/domain/repositories/chat/UpdateTogetherStatusRepository";
import type { UpdateTogetherStatusDto } from "@/application/usecases/chatting/dto/UpdateTogetherStatusDto";

export class UpdateTogetherStatusUseCase {
  constructor(private readonly togetherChatRepository: UpdateTogetherStatusRepository) {}

  async execute(dto: UpdateTogetherStatusDto): Promise<void> {
    await this.togetherChatRepository.updateTogetherStatus(
      dto.chatId
    );
  }
}
