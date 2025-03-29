import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll(); // Correto: Buscar todos os produtos
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.getProductById(id); // Corrigido: Usar o método getProductById
  }

  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Partial<Product>): Promise<Product> {
    return this.productService.update(id, product); // Corrigido: Atualiza o produto e retorna o produto atualizado
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id); // Correto: Deleta o produto e retorna void
  }
}
