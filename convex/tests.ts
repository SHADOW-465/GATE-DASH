import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getTests = query({
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
      .query("tests")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();
  },
});

export const getPerformanceTrends = query({
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

    const tests = await ctx.db
      .query("tests")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    // Mock data for trends, to be replaced with actual logic
    return {
      scores: tests.map((t) => t.score),
      accuracy: tests.map((t) => t.accuracy),
    };
  },
});

export const logTestResult = mutation({
  args: {
    name: v.string(),
    type: v.union(
      v.literal("Full Length"),
      v.literal("Subject Test"),
      v.literal("PYQ")
    ),
    status: v.union(v.literal("attempted"), v.literal("not_attempted")),
    score: v.optional(v.number()),
    accuracy: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
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

    await ctx.db.insert("tests", {
      userId: user._id,
      ...args,
    });
  },
});
