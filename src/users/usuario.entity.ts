import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  // eslint-disable-next-line prettier/prettier
  DeleteDateColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class usuarioEnTity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @Column({ name: 'senha', length: 255, nullable: false })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}
