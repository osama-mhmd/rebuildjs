import ChallengeCard from "@/components/challenge-card";
import challenges from "./challenges";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-14">
      <section>
        <div className="container flex flex-col gap-4 text-center items-center pt-24">
          <h1>
            rebuild<span className="underline text-gold">js</span>
          </h1>
          <p className="max-w-prose text-muted-foreground">
            Enhance your coding skills by deconstructing and reconstructing some
            powerful tools, and gain a deeper mastery of Javascript
          </p>
        </div>
      </section>
      <section>
        <div className="container flex flex-col gap-3">
          <h2>Fire Challenges 🔥</h2>
          {challenges.map((challenge, index) => {
            return (
              <ChallengeCard
                name={challenge.name}
                description={challenge.description}
                type={challenge.type}
                steps={challenge.steps}
                hints={challenge.hints}
                solution={challenge.solution}
                tags={challenge.tags}
                key={`challenge-${index}`}
              />
            );
          })}
          <Link href="/challenges" className="mx-auto flex gap-1 nota accent-b">
            Show more <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
