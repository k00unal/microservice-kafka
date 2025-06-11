import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private fibonacci(n: number): number {
    if (n < 1) return 0;
    if (n <= 2) return 1;

    let prev = 1,
      curr = 1;
    for (let i = 3; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }

    return curr;
  }

  @MessagePattern('fibo')
  getFibonacci(@Payload() message: { num: number }) {
    const { num } = message;
    return this.fibonacci(num);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
