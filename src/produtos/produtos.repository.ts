import { Injectable } from '@nestjs/common';

@Injectable()
export class produtosRepository {
  private produtos = [];

  async salvar(produtos) {
    this.produtos.push(produtos);
  }

  async listar() {
    return this.produtos;
  }
}
