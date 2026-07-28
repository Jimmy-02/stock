import { eventType, staticSchema } from "inngest";

type UserCreatedPayload = {
  email: string;
  name: string;
  country: string;
  investmentGoals: string;
  riskTolerance: string;
  preferredIndustry: string;
};

export const userCreated = eventType("app/user.created", {
  schema: staticSchema<UserCreatedPayload>(),
});