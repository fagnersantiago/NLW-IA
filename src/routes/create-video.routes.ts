import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisama";
import { createReadStream } from "node:fs";
import { openai } from "../lib/openai";

export async function createTranscriptionVideo(app: FastifyInstance) {
  app.post("/video/:id/transcription", async (request, reply) => {
    const id = await request.params;

    const prompt = (await request.body) as string;

    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: id as string,
      },
    });

    const videoPath = video.path;
    const audioReadStream = createReadStream(videoPath);

    const response = openai.audio.transcriptions.create({
      file: audioReadStream,
      model: "whisper-1",
      language: "pt",
      response_format: "json",
      temperature: 0,
      prompt,
    });

    const transcription = (await response).text;

    await prisma.video.update({
      where: {
        id: id as string,
      },
      data: {
        transcription,
      },
    });
    return { transcription };
  });
}
