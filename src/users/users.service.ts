import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dtos/createUser.dto';
import { ApiResponseDto } from 'src/dtos/response.dto';
const bcrypt = require('bcrypt');


@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async createUser(createUserDto: CreateUserDto): Promise<ApiResponseDto<User>> {
        const existingUser = await this.userModel.findOne({ email: createUserDto.email });
        if (existingUser) {
            return {
                statusCode: 400,
                message: 'User already exists',
                data: null
            };
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const newUser = new this.userModel(createUserDto);
        await newUser.save();
        return {
            statusCode: 201,
            message: 'User created successfully',
            data: newUser
        }
    }

    async getAllUsers() {
        return this.userModel.find();
    }


    async logInUser(createUserDto: CreateUserDto): Promise<ApiResponseDto<User>> {
        const user = await this.userModel.findOne({ email: createUserDto.email, password: createUserDto.password });
        if (!user) {
            return {
                statusCode: 401,
                message: 'Invalid email or password',
                data: null
            };
        }
        return {
            statusCode: 200,
            message: 'User logged in successfully',
            data: user
        };
    }
}

