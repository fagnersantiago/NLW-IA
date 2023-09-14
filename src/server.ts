import { fastify } from "fastify";
import { getAllPrompt } from "./routes/get-all-prompt.routes";
import { uploadVideo } from "./routes/upload-videos.routes";
import { createTranscriptionVideo } from "./routes/create-video.routes";
import { generateCompletion } from "./routes/generate-ia-completion.routes";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(getAllPrompt);
app.register(uploadVideo);
app.register(createTranscriptionVideo);
app.register(generateCompletion);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333!");
  });
