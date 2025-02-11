import { Suspense } from "react";
import { HydrateClient, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

import PageClient from "./client";

export default async function Home() {
  void trpc.hello.prefetch({
    text: "world",
  });

  return (
    <HydrateClient>
      <Suspense fallback="loading...">
        <ErrorBoundary fallback={<div className="text-red-600">Error...</div>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
