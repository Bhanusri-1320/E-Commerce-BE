import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/createUser.dto';
import { UsersService } from './users.service';
import { ApiResponseDto } from 'src/dtos/response.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post("createUser")
    async createUser(@Body() createUserDto: CreateUserDto): Promise<ApiResponseDto<CreateUserDto>> {
        const response = this.usersService.createUser(createUserDto);
        return response;
    }

    @Get("getAllUsers")
    async getAllUsers(): Promise<ApiResponseDto<CreateUserDto[]>> {
        const users = await this.usersService.getAllUsers();
        return {
            statusCode: 200,
            message: 'Users retrieved successfully',
            data: users
        };
    }

   @Post("logInUser")
   async logInUser(@Body() createUserDto: CreateUserDto): Promise<ApiResponseDto<CreateUserDto>> {
    
    return;
   } 
}
