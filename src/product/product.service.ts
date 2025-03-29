import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Buscar todos os produtos
  async findAll(): Promise<Product[]> {
    return this.productRepository.find(); // Retorna todos os produtos
  }

  // Buscar um produto pelo ID
  async getProductById(id: number): Promise<Product> {
    try {
      // Tentamos encontrar o produto. Caso não seja encontrado, o erro será lançado
      return await this.productRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  // Criar um novo produto
  async create(product: Product): Promise<Product> {
    return this.productRepository.save(product); // Salva o produto no banco de dados
  }

  // Atualizar um produto existente
  async update(id: number, product: Partial<Product>): Promise<Product> {
    // Verifica se o produto existe
    const existingProduct = await this.getProductById(id);

    // Atualiza o produto no banco de dados
    await this.productRepository.update(id, product);

    // Retorna o produto atualizado
    return { ...existingProduct, ...product };
  }

  // Remover um produto
  async remove(id: number): Promise<void> {
    const product = await this.getProductById(id); // Verifica se o produto existe
    await this.productRepository.delete(product.id); // Deleta o produto
  }
}
