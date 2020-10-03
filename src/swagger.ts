import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export class Swagger {
  static init(app: any) {
    const options = new DocumentBuilder()
    .setTitle('Dogs example')
    .setDescription('The dogs API description')
    .setVersion('1.0')
    .addTag('dogs')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }
}