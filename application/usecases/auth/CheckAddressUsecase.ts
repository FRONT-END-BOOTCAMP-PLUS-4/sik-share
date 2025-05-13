import type { UserRepository } from "@/domain/repositories/UserRepository";

export class CheckAddressUsecase {
  constructor(private repository: UserRepository) {}

  async execute(email:string): Promise<"/map" | "/onboarding/address"> {
    const user = await this.repository.findByEmail(email);

    if(user?.address) return "/map";
    return "/onboarding/address";
  }
}
