import { notFound } from "next/navigation";
import { mockNews } from "@/lib/mockNews";
import NewsDetail from "@/Components/News/NewsDetail";
import NotFoundUI from "@/Components/NotFoundUI";

// Mark the component async so Next.js can resolve params properly
  export default async function NewsDetailPage({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    // Await the params before using
    const { id } = await params;

    const article = mockNews.find((n) => n.id === id);

    if (!article){ return (
      <NotFoundUI
       title="News Article Not Found"
        message="The article you’re looking for doesn’t exist or may have been removed."
      />
    );
  }
    return <NewsDetail news={article}/>;
  }
