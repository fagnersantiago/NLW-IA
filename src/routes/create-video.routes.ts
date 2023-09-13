import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisama";

export async function createTranscriptionVideo(app: FastifyInstance) {
  app.post("/video/:id/transcription", async (request, reply) => {
    const id = await request.params;

    const promp = request.body;
    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: id as string,
      },
    });
    return { id, promp, video };
  });
}
