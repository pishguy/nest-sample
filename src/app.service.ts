import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSalam(): String {
    return 'are in ham az in'
  }
  getHello(): string {
    return 'salam be hame';
  }
}
