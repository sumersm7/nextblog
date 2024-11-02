import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mb-8 text-muted-foreground">Page not found</p>
      <Button asChild>
        <Link href="/">
          <HomeIcon className="mr-2 h-4 w-4" />
          Return Home
        </Link>
      </Button>
    </div>
  );
}