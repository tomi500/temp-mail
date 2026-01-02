import {Hono} from "hono";
import emailRoutes from "@/routes/emailRoutes";
import {corsMiddleware} from "./middlewares/cors";
import type {CloudflareBindings} from "./types";
import healthRoutes from "@/routes/healthRoutes";

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Middlewares
app.use(corsMiddleware);

// --- Routes ---
// Email Routes
app.route("/", emailRoutes);
// Attachment Routes
// app.route("/", attachmentRoutes);
// Health Check
app.route("/", healthRoutes);

export default app;
