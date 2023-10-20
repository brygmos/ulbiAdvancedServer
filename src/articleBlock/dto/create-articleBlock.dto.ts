export class CreateArticleBlockDto {
  readonly articleId: number;
  readonly type: ArticleBlockType;
  readonly paragraphs: string[];
  readonly title: string;
  readonly code: string;
  readonly src: string;
}

enum ArticleBlockType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE',
}
