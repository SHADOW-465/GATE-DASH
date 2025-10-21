import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getSubjects = query({
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
      .query("subjects")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();
  },
});

export const updateSubjectProgress = mutation({
  args: {
    subjectId: v.id("subjects"),
    progress: v.number(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.subjectId, {
      progress: args.progress,
    });
  },
});
