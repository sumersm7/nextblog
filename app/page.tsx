import { Suspense } from 'react';
import { getPosts } from '@/lib/api';
import { PostCard } from '@/components/post-card';
import { Pagination } from '@/components/pagination';
import { Navbar } from '@/components/navbar';

export const revalidate = 3600; // Revalidate every hour

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const { posts, totalPages } = await getPosts(currentPage);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-8">
        <h1 className="mb-8 text-4xl font-bold">Latest Posts</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<div>Loading...</div>}>
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Suspense>
        </div>
        <div className="mt-8">
          <Pagination totalPages={totalPages} currentPage={currentPage} />
        </div>
      </div>
    </main>
  );
}