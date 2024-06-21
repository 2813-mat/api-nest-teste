import { Module } from '@nestjs/common';
import { usuarioModule } from './users/usuario.module';
import { produtosModule } from './produtos/produtos.modules';

@Module({
  imports: [usuarioModule, produtosModule],
})
export class AppModule {}
