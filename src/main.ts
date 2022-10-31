import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';
import { useContainer } from 'class-validator';
const mongoose = require('mongoose');

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
useContainer(app.select(AppModule), { fallbackOnErrors: true });
const document = SwaggerModule.createDocument(app, options)
SwaggerModule.setup('api', app, document, {
customSiteTitle: 'My App API documentation ByKanSaz',
})

mongoose.connect('mongodb://localhost/nestJS', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true

})
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))


  const port = configService.get('port')
  const test = await app.listen(port);
  console.log('\x1b[42m%s\x1b[0m',"http://localhost:" + port + "/api");
  
}
bootstrap();
