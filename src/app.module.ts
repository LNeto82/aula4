import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo do banco de dados (pode ser 'postgres' ou outro)
      host: 'localhost', // Endereço do banco de dados
      port: 3307, // A porta padrão do MySQL é 3306, mas se for personalizada, altere para 3307 ou outra.
      username: 'root', // Usuário do banco de dados
      password: 'root', // Senha do banco de dados
      database: 'nestjs_db', // Nome do banco de dados
      entities: [Product], // Entidade que será usada
      synchronize: true, // SINCRONIZE SOMENTE EM DESENVOLVIMENTO, CUIDADO EM PRODUÇÃO
    }),
    ProductModule, // Certifique-se de que ProductModule está importado aqui
  ],
})
export class AppModule {}
