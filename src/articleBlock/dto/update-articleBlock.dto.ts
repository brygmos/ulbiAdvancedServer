import { CreateArticleBlockDto } from './create-articleBlock.dto';
import { PartialType } from '@nestjs/swagger';

export class UpdateArticleBlockDto extends PartialType(CreateArticleBlockDto) {}
