import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from '../user.service';
import { UserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {

  constructor(private userService: UserService) {}

  @Post('/')
  async create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @Get('/')
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }
}
