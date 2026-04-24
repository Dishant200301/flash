import { createFileRoute } from "@tanstack/react-router";
import { BlogDetailPage } from "@/modules/blog-details/blog-details";

export const Route = createFileRoute("/blogDetails/$slug")({
  component: BlogDetailPageWrapper,
});

function BlogDetailPageWrapper() {
  const { slug } = Route.useParams();
  return <BlogDetailPage slug={slug} />;
}
