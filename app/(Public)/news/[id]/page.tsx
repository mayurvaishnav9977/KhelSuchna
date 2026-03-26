import { mockdetail } from "@/lib/mockNews";
import NewsDetail from "@/Components/News/NewsDetail";
import NotFoundUI from "@/Components/NotFoundUI";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ FIX

  const numericId = Number(id);

  const article = mockdetail.find((n) => n.id === numericId);

  if (!article) {
    return (
      <NotFoundUI
        title="News Article Not Found"
        message="The article you’re looking for doesn’t exist or may have been removed."
      />
    );
  }

  return <NewsDetail news={article} />;
}