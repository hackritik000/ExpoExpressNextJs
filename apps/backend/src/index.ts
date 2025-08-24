import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "./route";
import { createContext } from "./utils/trpc";

const app = express();
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);
app.listen(4000);

export type AppRouter = typeof appRouter;
