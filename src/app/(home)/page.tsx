import { HydrateClient, trpc } from "@/trpc/server";

export const dynamic = "force-dynamic";

import { HomeView } from "@/modules/home/ui/views/home-view";

interface HomeViewProps {
  searchParams: Promise<{ categoryId?: string }>;
}

export default async function Home({ searchParams }: HomeViewProps) {
  const { categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>
      <HomeView categoryId={categoryId} />
    </HydrateClient>
  );
}
