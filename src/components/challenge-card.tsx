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
      className="rounded-md border border-muted p-4 transition hover:bg-muted/20 cursor-pointer"
      {...props}
    >
      <h3>
        <span className="text-gray-600">rebuild</span> {name}
      </h3>
      <p className="text-muted-foreground">{description}</p>
      <p className="pt-4 flex gap-1 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <a key={index} className="tag">
              {tag}
            </a>
          );
        })}
      </p>
    </div>
  );
}
