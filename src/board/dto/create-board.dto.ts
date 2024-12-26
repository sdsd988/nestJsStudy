import {IsNotEmpty, MaxLength, MinLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class CreateBoardDto {

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(20)
    @ApiProperty({
        description: '이름',
        required: true,
        example: '이름'
    })
    title: string;

    @IsNotEmpty()
    @ApiProperty({
        description: '내용',
        required: true,
        example: '내용'
    })
    content: string;
}