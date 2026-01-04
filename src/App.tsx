import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import "./index.css";

import { ArrowUpRight, Github } from "lucide-react";

export function App() {
  const bubbleUrl = "https://escyezi.github.io/bubble";
  const githubUrl = "https://github.com/escyezi/bubble";

  return (
    <main className="relative z-10 mx-auto w-full max-w-2xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">escyezi</h1>
        <p className="text-muted-foreground mt-2">Projects & demos</p>
      </header>

      <Card
        role="link"
        tabIndex={0}
        aria-label="Open escyezi.github.io/bubble"
        onClick={() => window.location.assign(bubbleUrl)}
        onKeyDown={e => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          window.location.assign(bubbleUrl);
        }}
        className="group cursor-pointer rounded-xl transition-colors hover:border-ring/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background focus-visible:ring-offset-background"
      >
          <CardHeader className="gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-xl border bg-muted/30">
                  <span className="select-none whitespace-nowrap text-[14px] leading-none font-mono text-foreground/80">
                    ^_^
                  </span>
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-xl">bubble</CardTitle>
                  <CardDescription className="font-mono">escyezi/bubble</CardDescription>
                </div>
              </div>

              <ArrowUpRight className="mt-1 size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              纯前端的聊天小助手原型：一个颜文字 Bubble + 输入框，通过 OpenAI 兼容接口进行流式对话；支持情绪标签驱动表情切换，并把对话与设置持久化到浏览器{" "}
              <span className="font-mono">localStorage</span>。
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Github className="size-4" />
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono underline-offset-4 hover:underline"
                onClick={e => e.stopPropagation()}
              >
                github.com/escyezi/bubble
              </a>
            </div>
          </CardContent>
      </Card>
    </main>
  );
}

export default App;
