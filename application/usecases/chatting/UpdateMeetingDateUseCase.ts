import type { UpdateMeetingDateRepository } from "@/domain/repositories/chatting/UpdateMeetingDateRepository";
import type { UpdateMeetingDateDto } from "@/application/usecases/chatting/dto/UpdateMeetingDateDto";

export class UpdateMeetingDateUseCase {
  constructor(private readonly shareChatRepository: UpdateMeetingDateRepository) {}

  async execute(dto: UpdateMeetingDateDto): Promise<void> {
    await this.shareChatRepository.updateMeetingDate(
      dto.chatId,
      dto.meetingDate,
      dto.status,
    );
  }
}
