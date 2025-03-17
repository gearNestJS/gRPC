import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      // package: 'items',
      package: 'user',
      protoPath: join(__dirname, 'user/user.proto'),
      url: '0.0.0.0:9091',
    },
  });
  await app.startAllMicroservices();
}

void bootstrap();
