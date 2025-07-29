import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post("signup")
    signUp(@Body() createUserDto: CreateUserDto) {
        const user = this.usersService.createUser(createUserDto);
        if (!user) {
            return {
                message: 'User creation failed',
                user: null
            }
        }
        return {
            message: 'User created successfully',
            user: createUserDto
        };
    }

}
