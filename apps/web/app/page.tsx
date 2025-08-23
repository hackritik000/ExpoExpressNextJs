import { orpcClient } from "./orpc";
export default async function Home() {
  const res = await orpcClient();
  return <div>{res}</div>;
}
