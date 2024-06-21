import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';

export class atualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailUnico({ message: 'O e-mail informado já está em uso' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha deve ter pelo menos 6 caracteres' })
  @IsOptional()
  senha: string;
}
