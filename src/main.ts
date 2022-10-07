import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductsModule } from './products/products.module';

async function bootstrap() {
  const products = await NestFactory.create(ProductsModule);

  const config = new DocumentBuilder()
    .setTitle('Product Api')
    .setDescription('The Product API description')
    .setVersion('1.0')
    .addTag('products')
    .build();

  const document = SwaggerModule.createDocument(products, config);
  SwaggerModule.setup('api', products, document);

  await products.listen(3003);
}
bootstrap();
