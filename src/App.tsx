import "./index.css";

import { ProjectCard } from "@/components/ProjectCard";

export function App() {
  const bubbleUrl = "https://escyezi.github.io/bubble";
  const githubUrl = "https://github.com/escyezi/bubble";

  return (
    <main className="relative z-10 mx-auto w-full max-w-2xl px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">escyezi</h1>
        <p className="text-muted-foreground mt-2">Projects & demos</p>
      </header>

      <ProjectCard
        title="bubble"
        repo="escyezi/bubble"
        href={bubbleUrl}
        githubHref={githubUrl}
        githubLabel="github.com/escyezi/bubble"
        icon={
          <span className="select-none whitespace-nowrap text-[14px] leading-none font-mono text-foreground/80">^_^</span>
        }
        description={
          <>
            纯前端的聊天小助手原型：一个颜文字 Bubble + 输入框，通过 OpenAI 兼容接口进行流式对话；支持情绪标签驱动表情切换，并把对话与设置持久化到浏览器{" "}
            <span className="font-mono">localStorage</span>。
          </>
        }
      />
    </main>
  );
}

export default App;
