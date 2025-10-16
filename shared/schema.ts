import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Keep existing user schema for compatibility
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Portfolio project schema
export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  image: z.string(),
  category: z.string(),
});

export type Project = z.infer<typeof projectSchema>;

// Mock portfolio projects data
export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Nebula Finance App",
    description: "Modern fintech dashboard with real-time analytics and seamless transaction flows",
    tags: ["UI/UX", "Mobile App", "Fintech"],
    image: "/project-placeholder-1.jpg",
    category: "App Design"
  },
  {
    id: "2",
    title: "Quantum Brand Identity",
    description: "Complete brand redesign for a cutting-edge AI startup, from logo to digital presence",
    tags: ["Branding", "Identity", "Visual Design"],
    image: "/project-placeholder-2.jpg",
    category: "Branding"
  },
  {
    id: "3",
    title: "Aurora E-Commerce",
    description: "Elegant shopping experience with focus on product discovery and minimalist aesthetics",
    tags: ["Web Design", "E-Commerce", "UI/UX"],
    image: "/project-placeholder-3.jpg",
    category: "Web Design"
  },
  {
    id: "4",
    title: "Pulse Health Platform",
    description: "Healthcare dashboard bridging patients and providers with intuitive data visualization",
    tags: ["Dashboard", "Healthcare", "Data Viz"],
    image: "/project-placeholder-4.jpg",
    category: "Dashboard"
  },
  {
    id: "5",
    title: "Stellar Design System",
    description: "Comprehensive component library and design tokens for scalable product development",
    tags: ["Design System", "Components", "Documentation"],
    image: "/project-placeholder-5.jpg",
    category: "Design System"
  },
  {
    id: "6",
    title: "Horizon Social App",
    description: "Next-gen social platform emphasizing authentic connections and creative expression",
    tags: ["Mobile App", "Social", "UI/UX"],
    image: "/project-placeholder-6.jpg",
    category: "App Design"
  }
];

// Skills data
export const skills = [
  "UI/UX Design",
  "Product Design",
  "Brand Identity",
  "Design Systems",
  "Prototyping",
  "User Research"
];

export const tools = [
  "Figma",
  "Adobe Creative Suite",
  "Framer",
  "Principle",
  "Webflow",
  "After Effects"
];

export const experience = [
  "8+ Years in Design",
  "50+ Projects Delivered",
  "Global Client Base",
  "Award-Winning Work"
];
