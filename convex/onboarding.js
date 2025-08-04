import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const createOrUpdateProfile = mutation({
  args: {
    clerkId: v.string(),
    displayName: v.string(),
    githubUsername: v.optional(v.string()),
    leetcodeUsername: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingProfile = await ctx.db
      .query("additionalInfo")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first()

    const now = Date.now()

    if (existingProfile) {
      // Update existing profile
      await ctx.db.patch(existingProfile._id, {
        displayName: args.displayName,
        githubUsername: args.githubUsername,
        leetcodeUsername: args.leetcodeUsername,
        isOnboardingComplete: true,
        updatedAt: now,
      })
      return existingProfile._id
    } else {
      // Create new profile
      const profileId = await ctx.db.insert("additionalInfo", {
        clerkId: args.clerkId,
        displayName: args.displayName,
        githubUsername: args.githubUsername,
        leetcodeUsername: args.leetcodeUsername,
        isOnboardingComplete: true,
        createdAt: now,
        updatedAt: now,
      })
      return profileId
    }
  },
})

export const getProfileByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("additionalInfo")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first()
  },
})

export const checkOnboardingStatus = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const profile = await ctx.db
      .query("additionalInfo")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first()

    return {
      isComplete: profile?.isOnboardingComplete || false,
      profile: profile || null,
    }
  },
})
