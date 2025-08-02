import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

export const syncUser = mutation({
  args: {
    name: v.string(),
    username: v.string(),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (existing) {
      return existing._id;
    }

    const defaultImage = "https://api.dicebear.com/9.x/lorelei/svg?seed=Emery";

    return await ctx.db.insert("users", {
      name: args.name,
      username: args.username,
      email: args.email,
      image: args.image ?? defaultImage,
      clerkId: args.clerkId,
    });
  },
});


export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, { clerkId }) => {
    const user = await ctx.db
      .query('users')
      .withIndex('by_clerk_id', (q) => q.eq('clerkId', clerkId))
      .first();
    return user;
  },
});