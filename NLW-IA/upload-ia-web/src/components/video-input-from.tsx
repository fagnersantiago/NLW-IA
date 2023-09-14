import { Label } from "@radix-ui/react-label";
import { Separator } from "@radix-ui/react-separator";
import { FileVideo, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export function VideoInputForm() {
  return (
    <form className="space-y-6">
      <label
        htmlFor="video"
        className="border flex rounded-md aspect-video cursor-point border-dashed text-sm flex-col gep-2  items-center justify-center text-muted-foreground houver:bg-primary/5"
      >
        <FileVideo className="w-4 h-4" />
        Selecione um vídeo
      </label>

      <input type="file" id="video" accept="video/mp4" className="sr-only" />
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
  );
}
