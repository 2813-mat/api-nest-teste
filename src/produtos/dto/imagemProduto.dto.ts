import { IsNotEmpty } from 'class-validator';

export class imagemProdutoDto {
  @IsNotEmpty()
  url: string;

  descricao: string;
}
