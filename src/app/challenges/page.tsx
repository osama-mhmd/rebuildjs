"use client";

import challenges from "@/app/challenges";
import Challenge from "@/challenge";
import ChallengeCard from "@/components/challenge-card";
import DetailedChallenge from "@/components/detailed-challenge";
import { useState } from "react";

const emptyChallenge: Challenge = {
  name: "",
  description: "",
  tags: [],
  deps: [],
  steps: [],
  type: "fire",
  hints: [],
  solution: "",
};

export default function ChallengesPage() {
  const [challenge, setChallenge] = useState<Challenge>(emptyChallenge);
  const [isOpeningCard, setIsOpeningCard] = useState(false);

  function openCard(challenge: Challenge) {
    setIsOpeningCard(true);
    setChallenge(challenge);
  }

  return (
    <main className="flex flex-col gap-14">
      <section>
        <div className="container text-center pt-24">
          <h1>Challenges</h1>
        </div>
      </section>
      <section>
        <div className="container flex flex-col gap-3">
          <span className="text-center font-semibold text-muted-foreground">
            Click to show the challenge in details
          </span>
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
                onClick={() => openCard(challenge)}
                key={`challenge-${index}`}
              />
            );
          })}
        </div>
        {isOpeningCard && (
          <DetailedChallenge
            challenge={challenge}
            closePanel={() => setIsOpeningCard(false)}
          />
        )}
      </section>
    </main>
  );
}
