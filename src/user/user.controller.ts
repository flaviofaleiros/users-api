import { Controller, Post, Body, Get, Param  } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get(':userName')
    public searchUserName(@Param('userName') userName: string) {
       const userFound = this.userService.searchUserName(userName);

       return userFound;
    }

    @Post()
    public create(@Body() user: User): User {
        const userCreate = this.userService.create(user);

        return userCreate;
    }
}
