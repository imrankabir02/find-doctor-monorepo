// apps/server/src/main.ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors({
        origin: process.env.CLIENT_URL || 'http://localhost:3000',
    });

    const config = new DocumentBuilder()
        .setTitle('healthcare-monorepo API')
        .setDescription('The healthcare-monorepo API description')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(4000);
}
bootstrap();