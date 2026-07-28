'use server'
import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";
import { userCreated } from "../inngest/events";

export const signUpWithEmail = async ({ email, password, fullName, country, investmentGoals, riskTolerance, preferredIndustry }: SignUpFormData) => {
    try {
        const response = await auth.api.signUpEmail({
            body:{email: email, password: password, name:fullName}
        });

        if(response){
            inngest.send( //no await becasue welcome email contain no important info
              userCreated.create({
                email,
                name: fullName,
                country,
                investmentGoals,
                riskTolerance,
                preferredIndustry,
              }),
            );
        }
        return { success: true, data: response };
    } catch (error) {
        console.error("Sign up error:", error);
        const message = error instanceof Error ? error.message : "Signup failed";
        return { success: false, error: message };
    }
}

export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const response = await auth.api.signInEmail({ body: { email, password } });

    return { success: true, data: response };
  } catch (error) {
    console.error("Sign in failed:", error);
    const message = error instanceof Error ? error.message : "Sign in failed";
    return { success: false, error: message };
  }
};

export const signOut = async()=>{
    try {
        await auth.api.signOut({headers: await headers()})
    } catch (error) {
        console.error("Sign out failed:", error);
        const message =
          error instanceof Error ? error.message : "Sign out failed";
        return { success: false, error: message };
    }
}