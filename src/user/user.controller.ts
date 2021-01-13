import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')

export class UserCotroller {
    private userService = new UserService();

    @Post()
    public create(@Body() user){
        const userCreate = this.userService.create(user);

        return userCreate;
    }
}