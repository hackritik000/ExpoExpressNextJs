import { os } from "@orpc/server";

export const listPlanet = os.handler(async ({ input }) => {
	return [{ id: 1, name: "name" }];
});

export const router = {
	planet: {
		list: listPlanet,
	},
};
