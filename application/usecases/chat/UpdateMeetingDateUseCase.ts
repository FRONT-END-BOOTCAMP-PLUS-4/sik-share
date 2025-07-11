import type { UpdateMeetingDateRepository } from "@/domain/repositories/chat/UpdateMeetingDateRepository";
import type { UpdateMeetingDateDto } from "@/application/usecases/chat/dto/UpdateMeetingDateDto";

export class UpdateMeetingDateUseCase {
  constructor(private readonly shareChatRepository: UpdateMeetingDateRepository) {}

  async execute(dto: UpdateMeetingDateDto): Promise<void> {
    await this.shareChatRepository.updateMeetingDate(
      dto.chatId,
      dto.meetingDate,
      dto.myUserId,
    );
  }
}