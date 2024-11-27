import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://jrmulfeu:39IlJj9JR_WPenVWswegweTLF9B5bsMV@jackal.rmq.cloudamqp.com/jrmulfeu',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen();
  console.log('Microservice is listening');
}
bootstrap();
