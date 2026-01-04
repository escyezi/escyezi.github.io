import * as React from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitHubMark } from "@/components/GitHubMark";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  repo: string;
  description: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  githubHref?: string;
  githubLabel?: string;
  className?: string;
};

export function ProjectCard({
  title,
  repo,
  description,
  href,
  icon,
  githubHref,
  githubLabel,
  className,
}: ProjectCardProps) {
  const activate = React.useCallback(() => {
    window.location.assign(href);
  }, [href]);

  const onKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      activate();
    },
    [activate],
  );

  return (
    <Card
      role="link"
      tabIndex={0}
      aria-label={`Open ${href}`}
      onClick={activate}
      onKeyDown={onKeyDown}
      className={cn(
        "group cursor-pointer rounded-xl transition-colors hover:border-ring/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background",
        className,
      )}
    >
      <CardHeader className="gap-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl border bg-muted/30">{icon}</div>
            <div className="min-w-0">
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="font-mono">{repo}</CardDescription>
            </div>
          </div>

          <ArrowUpRight className="mt-1 size-5 text-muted-foreground transition-colors group-hover:text-foreground" />
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground">{description}</div>
        {githubHref ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <GitHubMark className="size-4" />
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="font-mono underline-offset-4 hover:underline"
              onClick={e => e.stopPropagation()}
            >
              {githubLabel ?? githubHref.replace(/^https?:\/\//, "")}
            </a>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
