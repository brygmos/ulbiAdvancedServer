import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

// export class UpdateArticleDto extends PartialType(
//   OmitType(CreateArticleDto, ['userId']),
//   // OmitType(CreateArticleDto, ['userId', 'types']),
// ) {}

export class UpdateArticleDto {
  readonly title: string;
  readonly subtitle: string;
  readonly img: string;
  readonly views: 0;
  // readonly userId: number | null;
  // readonly types?: Type[] = [];
  // readonly types: Type[];
  // readonly blocks: ArticleBlock[];
  // readonly comments: Comment[];
}

type Type = {
  id: number;
  name: string;
};
