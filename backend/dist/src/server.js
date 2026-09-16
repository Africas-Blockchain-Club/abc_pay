import { createApp } from "./app.js";
import { env } from "./config/env.js";
import { PrismaStore } from "./stores/prisma.store.js";
const app = createApp(new PrismaStore());
app.listen(env.port, () => {
    console.log(`ABC Pay API listening on http://localhost:${env.port}`);
});
