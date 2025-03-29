import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome_do_produto: string;

  @Column()
  fornecedor: string;

  @Column()
  endereco_fornecedor: string;

  @Column()
  quantidade: number;

  @Column()
  descricao: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_registro: Date;

  @Column({ type: 'timestamp', onUpdate: 'CURRENT_TIMESTAMP', default: () => 'CURRENT_TIMESTAMP' })
  data_update: Date;
}
