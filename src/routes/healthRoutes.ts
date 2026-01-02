import type {ContentfulStatusCode} from "hono/utils/http-status";
import {CloudflareBindings} from "@/types";
import {Hono} from "hono";
import {logError} from "@/utils/logger";
import {OK} from "zod/v3";

const healthRoutes = new Hono<{ Bindings: CloudflareBindings }>();

// --- Routes ---
// GET /health
healthRoutes.get("/health", async (c) => {
    let d1Status = "disconnected";
    let overallStatus: ContentfulStatusCode = 200;

    try {
        await c.env.DB.prepare("SELECT 1").run();
        d1Status = "connected";
    } catch (error) {
        logError("Health check D1 failed", error as Error);
        overallStatus = 503;
    }

    return c.json(
        OK({
            worker: "connected",
            database: d1Status,
        }),
        overallStatus,
    );
});

export default healthRoutes;