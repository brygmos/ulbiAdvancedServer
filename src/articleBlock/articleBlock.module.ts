import { Module } from '@nestjs/common';
import { ArticleBlockService } from './articleBlock.service';
import { ArticleBlockController } from './articleBlock.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ArticleBlockService],
  controllers: [ArticleBlockController],
  imports: [PrismaModule],
})
export class ArticleBlockModule {}
