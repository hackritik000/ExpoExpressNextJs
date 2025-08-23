import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../backend/src/index.ts";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

const user = await trpc.getUser.query("hi");

console.log(user);
