import { fastify } from "fastify";
import { getAllPrompt } from "./routes/get-all-prompt.routes";
import { uploadVideo } from "./routes/upload-videos.routes";

const app = fastify();

app.register(getAllPrompt);
app.register(uploadVideo);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333!");
  });
