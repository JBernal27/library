import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsString } from 'class-validator';
import { genres } from 'src/common/enums';

export class CreateBookDto {
  @ApiProperty({ example: 'The title of the book' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'The author of the book' })
  @IsString()
  autor: string;

  @ApiProperty({
    example: 'The publication date in ISO 8601 format (YYYY-MM-DD)',
  })
  @IsDateString()
  publication_date: string;

  @ApiProperty({ example: 'The genre of the book', enum: genres })
  @IsEnum(genres)
  genre: genres;
}
