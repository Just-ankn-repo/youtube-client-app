interface ResultCard {
  id: string;
  channelId: string;
  title: string;
  publishedAt: string;
  imageUrl: string;
  description: string;
  tags: Array<string>;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  };
}
