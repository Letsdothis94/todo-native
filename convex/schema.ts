import { defineSchema, defineTable } from "convex/server";

import { v } from "convex/values";
// npx convex dev

export default defineSchema({
    todos: defineTable({
        text: v.string(),
        isCompleted: v.boolean(),
    })
})