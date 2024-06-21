import { Injectable } from '@nestjs/common';
import { usuarioEnTity } from './usuario.entity';

@Injectable()
export class usuarioRepository {
  private usuarios: usuarioEnTity[] = [];

  async salvar(usuario: usuarioEnTity) {
    this.usuarios.push(usuario);
  }

  async listar() {
    return this.usuarios;
  }

  async existeEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario !== undefined;
  }

  private buscaPorId(id: string) {
    const possivelUsuario = this.usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuário não encontrado');
    }

    return possivelUsuario;
  }

  async atualiza(id: string, dados: Partial<usuarioEnTity>) {
    const usuario = this.buscaPorId(id);

    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      }

      usuario[chave] = valor;
    });
  }

  async remove(id: string) {
    const usuario = this.buscaPorId(id);
    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );

    return usuario;
  }
}
