import { query } from "./_generated/server";
import { v } from "convex/values";

export const getFlashcardDecks = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) =>
        q.eq("clerkId", identity.subject)
      )
      .unique();

    if (!user) {
      throw new Error("User not found");
    }

    return await ctx.db
      .query("flashcardDecks")
      .filter((q) => q.eq(q.field("userId"), user._id))
      .collect();
  },
});

export const getFlashcards = query({
  args: {
    deckId: v.id("flashcardDecks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("flashcards")
      .filter((q) => q.eq(q.field("deckId"), args.deckId))
      .collect();
  },
});

export const getWeakTopics = query({
  handler: async (ctx) => {
    // Mock data for weak topics, to be replaced with actual logic
    return [
      { topic: "Calculus", accuracy: 60 },
      { topic: "Linear Algebra", accuracy: 75 },
      { topic: "Probability", accuracy: 50 },
    ];
  },
});
