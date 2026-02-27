import { Injectable } from '@nestjs/common';

@Injectable()
export class RewardsService {
  // 📝 rewards.service.ts - Create grantTo method
  grantTo() {
    console.log('Hello from the lazy-loaded RewardsService 👋');
  }
}
