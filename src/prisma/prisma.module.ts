import { Module } from '@nestjs/common';
import prisma from './prisma.service';

@Module({
  providers: [
    {
      provide: 'PrismaService',
      useValue: prisma,
    },
  ],
  exports: ['PrismaService'],
})
export class PrismaModule {}
