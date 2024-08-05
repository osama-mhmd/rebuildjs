import Challenge from "@/challenge";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import { cn } from "@/utils";

type ChallengeCardProps = {
  challenge: {
    name: Challenge["name"];
    description: Challenge["description"];
    tags: Challenge["tags"];
    type: Challenge["type"];
    weaklyChallenge?: Challenge["weaklyChallenge"];
  };
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ChallengeCard({
  challenge: { name, description, tags, type, weaklyChallenge },
  ...props
}: ChallengeCardProps) {
  return (
    <Link
      className={cn(
        "nota rounded-md border border-muted p-4 transition cursor-pointer",
        type == "fire" ? "border-gold bg-low-gold" : "hover:bg-muted/20",
        weaklyChallenge
          ? "bg-blue-950/30 border-blue-900 hover:bg-blue-950/40"
          : ""
      )}
      href={`/challenges/${name.replaceAll(" ", "-")}`}
      {...props}
    >
      <div className="flex justify-between">
        <h3>
          <span className="text-gray-600">rebuild</span> {name}
        </h3>
        {type == "fire" && <span className="text-4xl">🔥</span>}
        {weaklyChallenge && (
          <span className="text-2xl">📅#{weaklyChallenge}</span>
        )}
      </div>
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
