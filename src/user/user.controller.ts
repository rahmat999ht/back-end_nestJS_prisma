import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpRedirectResponse,
  Param,
  Query,
  Redirect,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  @Header('Content_Type', 'application/json')
  @HttpCode(200)
  getAll(
    @Query('page') page: string,
    @Query('perpage') perpage: string,
  ): Record<string, string> {
    return {
      page: page || '1',
      perpage: perpage || '10',
      data: this.userService.getUserAll(),
    };
    // return this.userService.getUserAll();
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/user/all',
      statusCode: 301,
    };
  }

  @Get('/one/:id')
  getOne(@Param('id') id: string): string {
    return this.userService.getUserId(id);
  }

  @Get('/query')
  getName(@Query('name') name: string): string {
    return this.userService.getUserName(name);
  }
}
