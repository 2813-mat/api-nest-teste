import { Body, Controller, Get, Post } from '@nestjs/common';
import { produtosRepository } from './produtos.repository';

@Controller('/produtos')
export class produtosController {
  constructor(private ProdutosRepository: produtosRepository) {}

  @Post()
  async criaProduto(@Body() dadosProduto) {
    this.ProdutosRepository.salvar(dadosProduto);
    return dadosProduto;
  }

  @Get()
  async listaUsuarios() {
    return this.ProdutosRepository.listar();
  }
}
