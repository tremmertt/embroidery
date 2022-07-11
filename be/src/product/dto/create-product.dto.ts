import { IsInt, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly uid: string;
  @IsString()
  readonly name: string;
  @IsString()
  readonly imageUrl: string;
  @IsString()
  readonly color: string;
  @IsString()
  readonly category: string;
}
