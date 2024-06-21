import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { usuarioRepository } from './usuario.repository';
import { CriaUsuarioDto } from './dto/criaUsuario.dto';
import { listaUsuarioDTO } from './dto/listaUsuario.dto';
import { v4 as uuid } from 'uuid';
import { usuarioEnTity } from './usuario.entity';
import { atualizaUsuarioDTO } from './dto/atualizaUsuario.dto';

@Controller('/usuarios')
export class usuarioController {
  constructor(private UsuarioRepository: usuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDto) {
    const UsuarioEnTity = new usuarioEnTity();

    UsuarioEnTity.email = dadosUsuario.email;
    UsuarioEnTity.nome = dadosUsuario.nome;
    UsuarioEnTity.password = dadosUsuario.senha;
    UsuarioEnTity.id = uuid();

    this.UsuarioRepository.salvar(UsuarioEnTity);

    return {
      usuario: new listaUsuarioDTO(UsuarioEnTity.id, UsuarioEnTity.nome),
      message: 'usuário criado com sucesso',
    };
  }

  @Get()
  async listaUsuarios() {
    const usuarioSalvos = await this.UsuarioRepository.listar();
    const usuariosLista = usuarioSalvos.map(
      (usuario) => new listaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosLista;
  }

  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: atualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.UsuarioRepository.atualiza(
      id,
      novosDados,
    );

    return {
      usuario: usuarioAtualizado,
      message: 'usuário atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.UsuarioRepository.remove(id);

    return {
      usuario: usuarioRemovido,
      message: 'Usuário removido com sucesso',
    };
  }
}
