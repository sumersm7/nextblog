import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/navbar';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.body.slice(0, 160),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 160),
      images: [
        {
          url: post.img || '',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.body.slice(0, 160),
      images: [post.img || ''],
    },
  };
}

export default async function PostPage({ params }: Props) {
  let post;
  try {
    post = await getPost(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <article className="container max-w-4xl py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to posts
          </Link>
        </Button>
        <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
          <Image
            src={post.img || ''}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">{post.body}</p>
        </div>
      </article>
    </main>
  );
}