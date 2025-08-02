import { v } from "convex/values"
import { mutation, MutationCtx, query, QueryCtx } from "./_generated/server"

export const syncUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    username: v.optional(v.string()),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (existingUser) {
      return await ctx.db.patch(existingUser._id, {
        email: args.email,
        name: args.name,
        username: args.username,
        image: args.image,
      });
    }

    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      name: args.name,
      username: args.username,
      image: args.image,
    });
  },
});
