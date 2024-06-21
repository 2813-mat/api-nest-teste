import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { caracteristicaProdutoDto } from './caracteristicaProduto.dto';
import { imagemProdutoDto } from './imagemProduto.dto';
import { Type } from 'class-transformer';

export class criaProdutoDto {
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsPositive()
  valor: number;

  @IsNumber()
  @IsPositive()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(10000)
  descricao: string;

  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => caracteristicaProdutoDto)
  caracteristicas: caracteristicaProdutoDto[];

  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => imagemProdutoDto)
  imagens: imagemProdutoDto[];

  @IsNotEmpty()
  categoria: string;
}
