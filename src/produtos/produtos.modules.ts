import { Module } from '@nestjs/common';
import { produtosController } from './produtos.controller';
import { produtosRepository } from './produtos.repository';
@Module({
  controllers: [produtosController],
  providers: [produtosRepository],
})
export class produtosModule {}
