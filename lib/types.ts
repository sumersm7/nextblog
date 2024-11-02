export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  img?: string;
}

export interface PostsResponse {
  posts: Post[];
  totalPages: number;
}