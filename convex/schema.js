import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    username: v.string(),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    clerkId: v.string(),
  }).index("by_clerk_id", ["clerkId"]),
  
  additionalInfo: defineTable({
    clerkId: v.string(),
    displayName: v.string(),
    githubUsername: v.optional(v.string()),
    leetcodeUsername: v.optional(v.string()),
    isOnboardingComplete: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),
});
