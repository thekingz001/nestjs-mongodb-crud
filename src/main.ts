import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService)

  // const config = new DocumentBuilder()
  //   .setTitle('Cats example')
  //   .setDescription('The cats API description')
  //   .setVersion('1.0')
  //   .addTag('cats')
  //   .build();
  // const document = SwaggerModule.createDocument(app, config);
  // SwaggerModule.setup('api', app, document);
  // await app.listen(process.env.PORT);

  // Your code
const options = new DocumentBuilder()
.setTitle('App ByKanSaz')
// .setSchemes('https')
.setDescription('My App API documentation ByKanSaz')
.setVersion('Alpha')
.addBearerAuth(undefined, 'defaultBearerAuth')
.build()

const document = SwaggerModule.createDocument(app, options)
SwaggerModule.setup('api', app, document, {
customSiteTitle: 'My App API documentation ByKanSaz',
})
  
  const port = configService.get('port')
  const test = await app.listen(port);
  console.log('\x1b[42m%s\x1b[0m',"http://localhost:" + port + "/api");
  
}
bootstrap();
