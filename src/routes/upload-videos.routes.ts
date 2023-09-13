import { FastifyInstance } from "fastify";
import { fastifyMultipart } from "@fastify/multipart";
import path from "node:path";
import { randomUUID } from "node:crypto";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import fs from "fs";
import { prisma } from "../lib/prisama";

const pump = promisify(pipeline);

export async function uploadVideo(app: FastifyInstance) {
  app.register(fastifyMultipart, {
    limits: {
      fieldSize: 1048576 * 25,
    },
  });

  app.post("/video", async (request, reply) => {
    const data = await request.file();

    if (!data) {
      return reply.status(400).send({ error: " Missing file input" });
    }

    const extension = path.extname(data.fieldname);

    if (extension !== "mp3") {
      return reply
        .status(400)
        .send({ error: "Invalid format, please upload a mp3" });
    }

    const filebaseName = path.basename(data.fieldname, extension);
    const fileUpload = `${filebaseName}-${randomUUID()}-${extension}}`;

    const uloadDestination = path.resolve(__dirname, "../../tmp", fileUpload);

    await pump(data.file, fs.createWriteStream(uloadDestination));

    const video = await prisma.video.create({
      data: {
        name: data.fieldname,
        path: uloadDestination,
        createdAt: new Date(),
      },
    });

    return { video };
  });
}
