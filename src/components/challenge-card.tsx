import Challenge from "@/challenge";
import { HTMLAttributes } from "react";

export default function ChallengeCard({
  name,
  description,
  tags,
  ...props
}: Challenge & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="rounded-md border border-muted p-4 transition hover:bg-muted/50 cursor-pointer"
      {...props}
    >
      <h3>{name}</h3>
      <p className="text-muted-foreground">{description}</p>
      <p className="pt-4 flex gap-1">
        {tags.map((tag, index) => {
          return (
            <a
              href="/test"
              key={index}
              className="px-4 py-1 rounded-2xl bg-muted"
            >
              {tag}
            </a>
          );
        })}
      </p>
    </div>
  );
}
