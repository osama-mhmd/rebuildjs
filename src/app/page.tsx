import ChallengeCard from "@/components/challenge-card";
import Code from "@/components/code";
import challenges from "./challenges";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
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
        </div>
      </section>
    </main>
  );
}
