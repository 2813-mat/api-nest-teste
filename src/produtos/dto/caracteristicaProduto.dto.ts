import { IsNotEmpty } from 'class-validator';

export class caracteristicaProdutoDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  descricao: string;
}
