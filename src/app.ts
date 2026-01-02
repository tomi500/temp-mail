import {Hono} from "hono";
import emailRoutes from "@/routes/emailRoutes";
import {corsMiddleware} from "./middlewares/cors";
import type {CloudflareBindings} from "./types";

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Middlewares
app.use(corsMiddleware);

// Routes
app.route("/", emailRoutes);

export default app;
