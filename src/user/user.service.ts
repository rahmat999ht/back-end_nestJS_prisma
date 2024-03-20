import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserName(name: string): string {
    return `Get Name : ${name}`;
  }
  getUserId(id: string): string {
    return `Get Id : ${id}`;
  }
  getUserAll(): string {
    return 'Get Yayat yayat!';
  }
}
