"use client";

import { trpc } from "@/trpc/client";

export default function PageClient() {
  const [data] = trpc.hello.useSuspenseQuery({
    text: "Andy",
  });

  return <div className="text-blue-700">Page Client says: {data.greeting}</div>;
}
