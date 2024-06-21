import {
  Entity,
  Column
} from 'typeorm';


@Entity({ name: 'imagem_produto' })
export class ImagemProduto {

  @Column({ name: 'url', length: 100, nullable: false })
  url: string;

  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
}
