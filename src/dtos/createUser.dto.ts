import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', })
    @Prop({ required: true })
    email: string;
    @ApiProperty({ example: 'password123', })
    @Prop({ required: true })
    password: string;
}
