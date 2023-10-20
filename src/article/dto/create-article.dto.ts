export class CreateArticleDto {
  readonly title: string;
  readonly subtitle: string;
  readonly img: string;
  readonly views: 0;
  readonly userId: number;
  readonly types?: {
    type: string;
  };
  // readonly types: Type[];
  // readonly blocks: ArticleBlock[];
  // readonly comments: Comment[];
}

type Type = {
  id: number;
  name: string;
  type: object;
};
