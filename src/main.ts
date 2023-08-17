/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http.exception.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalInterceptors(new TimeOutInterceptor());

  // Configuración de Swagger para la documentación de la API
  const options = new DocumentBuilder()
    .setTitle('SuperFlight API')
    .setDescription('Scheduled Flights App')
    .setVersion('2.0.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document, {
    swaggerOptions: {
      filter: true,
    },
  });

  // Iniciar la aplicación en el puerto especificado o en el puerto 3000 por defecto
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
