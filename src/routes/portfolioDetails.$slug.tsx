import { createFileRoute } from "@tanstack/react-router";
import { PortfolioDetailPage } from "@/modules/portfolio-details/portfolio-details";

export const Route = createFileRoute("/portfolioDetails/$slug")({
  component: PortfolioDetailPageWrapper,
});

function PortfolioDetailPageWrapper() {
  const { slug } = Route.useParams();
  return <PortfolioDetailPage slug={slug} />;
}