import { Module } from '@nestjs/common';
import { usuarioController } from './usuario.controller';
import { usuarioRepository } from './usuario.repository';
import { EmailUnicoValidator } from './validacao/email-unico.validator';

@Module({
  controllers: [usuarioController],
  providers: [usuarioRepository, EmailUnicoValidator],
})
export class usuarioModule {}
