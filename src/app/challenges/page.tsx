import challenges from "@/app/challenges";
import ChallengeCard from "@/components/challenge-card";

export default function ChallengesPage() {
  return (
    <main className="flex flex-col gap-14">
      <section>
        <div className="container text-center pt-24">
          <h1>Challenges</h1>
        </div>
      </section>
      <section>
        <div className="container flex flex-col gap-3">
          {challenges.map((challenge, index) => {
            return (
              <ChallengeCard
                name={challenge.name}
                description={challenge.description}
                type={challenge.type}
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
