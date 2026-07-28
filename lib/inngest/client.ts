import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "stock",
  isDev: process.env.NODE_ENV === "development",
});