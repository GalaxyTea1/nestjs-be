import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsNotEmpty()
    username: string;

    @ApiProperty({ example: 'test1@example.com', type: String })
    @IsNotEmpty()
    email: string | null;

    @ApiProperty()
    password?: string;
}