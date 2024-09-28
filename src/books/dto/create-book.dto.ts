import { IsDateString, IsEnum, IsString } from 'class-validator';
import { genres } from 'src/common/enums';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  autor: string;

  @IsDateString()
  publication_date: Date;

  @IsEnum(genres)
  genre: genres;
}
