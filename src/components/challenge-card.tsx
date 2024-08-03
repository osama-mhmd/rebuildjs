import Challenge from "@/challenge";
import Link from "next/link";
import { AnchorHTMLAttributes, HTMLAttributes } from "react";

export default function ChallengeCard({
  name,
  description,
  tags,
  ...props
}: Challenge & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      className="nota rounded-md border border-muted p-4 transition hover:bg-muted/20 cursor-pointer"
      href={`/challenges/${name.replace(" ", "-")}`}
      {...props}
    >
      <h3>
        <span className="text-gray-600">rebuild</span> {name}
      </h3>
      <span className="text-muted-foreground">{description}</span>
      <span className="pt-4 flex gap-1 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="tag">
              {tag}
            </span>
          );
        })}
      </span>
    </Link>
  );
}
