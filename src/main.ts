import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductsModule } from './products/products.module';
import 'dotenv/config';

async function bootstrap() {
  const products = await NestFactory.create(ProductsModule);

  const config = new DocumentBuilder()
    .setTitle('Product Api')
    .setDescription(
      'This API was made to improve my knowledge in NestJS, TypeScript and NodeJS. It is based on dummy data in json format',
    )
    .setVersion('1.0')
    .addTag('Products')
    .build();

  const document = SwaggerModule.createDocument(products, config);
  SwaggerModule.setup('docs', products, document);

  await products.listen(3000);
}
bootstrap();
