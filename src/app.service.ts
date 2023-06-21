import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  getUsers(): string {
    return 'Hello World!';
  }
}
