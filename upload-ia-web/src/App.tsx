import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Textarea } from "./components/ui/textarea";
import { Separator } from "@radix-ui/react-separator";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

import { Slider } from "./components/ui/slider";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex  items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ia</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido por Mão no Código
          </span>
          <Button variant={"outline"}>
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Inclua o prompt para IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Resutado gera pela IA..."
              readOnly
            />
          </div>
          <p className=" text-sm text-muted-foreground">
            lembre-se: você pode utiliza a variável
            <code className="text-violet-400">{"{transcription}"}</code> no seu
            prompt para adicionar o conteudo da transcrição do video
            selecionado.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-point border-dashed text-sm flex-col gep-2  items-center justify-center text-muted-foreground houver:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Selecione um vídeo
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />
            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transciption-prompt">Prompt de transição</Label>

              <Textarea
                id="transciption-prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionada no vído separadas por vírgula (,)"
              />
            </div>

            <Button className="w-full">
              Carregar vídeo
              <Upload className="m-4-h-4 ml-2" />
            </Button>
          </form>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title ">Título do Youtube</SelectItem>
                  <SelectItem value="description">
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />
            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider min={0} max={1} step={0.1} />

              <span className="block text-xs text-muted-foreground italic">
                Valores mais altos podem deixar o resultado mais criativos e com
                possíveis erros
              </span>
            </div>
            <Separator />
            <Button className="w-full" type="submit">
              Executar
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
