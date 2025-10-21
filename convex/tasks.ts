import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getTasks = query({
  args: {
    date: v.optional(v.string()),
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

    if (args.date) {
      return await ctx.db
        .query("tasks")
        .withIndex("by_user_due_date", (q) =>
          q.eq("userId", user._id).eq("dueDate", args.date)
        )
        .collect();
    } else {
      return await ctx.db
        .query("tasks")
        .withIndex("by_user", (q) => q.eq("userId", user._id))
        .collect();
    }
  },
});

export const createTask = mutation({
  args: {
    title: v.string(),
    subjectId: v.id("subjects"),
    type: v.union(
      v.literal("Theory"),
      v.literal("PYQs"),
      v.literal("Mock Test"),
      v.literal("Revision")
    ),
    status: v.union(
      v.literal("pending"),
      v.literal("completed"),
      v.literal("revise-again")
    ),
    priority: v.union(v.literal("high"), v.literal("medium"), v.literal("low")),
    dueDate: v.optional(v.string()),
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

    await ctx.db.insert("tasks", {
      userId: user._id,
      ...args,
    });
  },
});

export const updateTaskStatus = mutation({
  args: {
    taskId: v.id("tasks"),
    status: v.union(
      v.literal("pending"),
      v.literal("completed"),
      v.literal("revise-again")
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.taskId, {
      status: args.status,
    });
  },
});

export const deleteTask = mutation({
  args: {
    taskId: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.taskId);
  },
});
