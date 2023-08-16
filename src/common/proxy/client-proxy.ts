/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import { ClientProxy, ClientProxyFactory,Transport } from '@nestjs/microservices';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientProxySuperFlighta {
  constructor(private readonly config: ConfigService) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: this.config.get('AMQP_URL'),
        queue: 'RabbitMQ.UserQueue',
      },
    });
  }
}
