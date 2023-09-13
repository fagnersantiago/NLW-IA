import { fastify } from "fastify";
import { getAllPrompt } from "./routes/get-all-prompt.routes";
import { uploadVideo } from "./routes/upload-video.routes";

const app = fastify();

app.register(getAllPrompt);
app.register(uploadVideo);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("server running!");
  });
