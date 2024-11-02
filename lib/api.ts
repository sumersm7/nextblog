import { Post } from './types';

const POSTS_PER_PAGE = 9;
const UNSPLASH_IMAGES = [
  'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&q=80',
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80',
];

export async function getPosts(page: number = 1): Promise<{ posts: Post[], totalPages: number }> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  
  // Add images to posts
  const postsWithImages = posts.map((post, index) => ({
    ...post,
    img: UNSPLASH_IMAGES[index % UNSPLASH_IMAGES.length],
  }));

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = postsWithImages.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return {
    posts: paginatedPosts,
    totalPages,
  };
}

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post: Post = await res.json();
  
  return {
    ...post,
    img: UNSPLASH_IMAGES[Number(id) % UNSPLASH_IMAGES.length],
  };
}