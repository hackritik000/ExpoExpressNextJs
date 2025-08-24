import { authRouter } from "./feathers/auth/auth.router";
import { router } from "./utils/trpc";

export const appRouter = router({
  authRouter,
});

export type AppRouter = typeof appRouter;
