import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import z from "zod";
// created for each request
const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;
const t = initTRPC.context<Context>().create();
const appRouter = t.router({
    getUser: t.procedure.input(z.string()).query((opts) => {
        opts.input; // string
        return { id: opts.input, name: "Bolbo" };
    }),
});
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
