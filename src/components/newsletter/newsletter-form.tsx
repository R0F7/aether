"use client";

import { useActionState } from "react";
import { Button } from "../ui/button";
import { newsletterActions } from "@/lib/actions/newsletterActions";
import { CircleAlert, CircleCheck, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Input } from "../ui/input";

export default function NewsletterForm() {
  const initialState = {
    message: "",
    success: false,
    errors: {},
    inputs: null,
  };

  const [state, formAction, isPending] = useActionState(
    newsletterActions,
    initialState,
  );

  if (state.message) {
    const isSuccess = state.success;
    const Icon = isSuccess ? CircleCheck : CircleAlert;
    const textColor = isSuccess ? "text-green-600" : "text-red-600";

    toast(
      <div className={`flex items-center gap-2 ${textColor}`}>
        <Icon size={18} strokeWidth={2.5} />
        <span className="text-sm font-medium tracking-tight">
          {state.message}
        </span>
      </div>,
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <div>
        <Input
          type="email"
          name="email"
          defaultValue={state?.inputs?.toString()}
          placeholder="Enter your email"
          className="flex-1 h-12 px-4 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Email address for newsletter"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="h-12 px-8 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 tracking-widest text-xs"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "SUBSCRIBE"
        )}
      </Button>
    </form>
  );
}
