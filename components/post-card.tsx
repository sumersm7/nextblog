import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Post } from '@/lib/types';

export function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <Card className="overflow-hidden transition-all hover:scale-[1.02]">
        <div className="relative aspect-video">
          <Image
            src={post.img || ''}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-3 text-muted-foreground">{post.body}</p>
        </CardContent>
      </Card>
    </Link>
  );
}