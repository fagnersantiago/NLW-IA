import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisama";
import { openai } from "../lib/openai";

type IRequest = {
  id: string;
  template: string;
  temperature: number;
};

export async function generateCompletion(app: FastifyInstance) {
  app.post("/ai/complete", async (request, reply) => {
    const { id, template, temperature } = (await request.body) as IRequest;

    const video = await prisma.video.findFirstOrThrow({
      where: {
        id,
      },
    });

    if (!video.transcription) {
      return reply
        .status(400)
        .send({ error: "transcription was not generete yet" });
    }

    const promptMessage = template.replace(
      "{transcription}",
      video.transcription
    );

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: Math.min(0) | Math.max(1) | 0.5,
      messages: [{ role: "user", content: promptMessage }],
    });

    return response;
  });
}
