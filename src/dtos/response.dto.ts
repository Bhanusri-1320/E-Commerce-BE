import { ApiProperty } from '@nestjs/swagger';

export class ApiResponseDto<T> {
    @ApiProperty({ example: 201 })
    statusCode: number;

    @ApiProperty({ example: 'User created successfully' })
    message: string;

    @ApiProperty()
    data: T;
}
export class ErrorResponseDto {
    @ApiProperty({ example: 400 })
    statusCode: number;

    @ApiProperty({ example: 'Bad Request' })
    message: string;

    @ApiProperty({ example: 'Invalid input data' })
    error: string;
}