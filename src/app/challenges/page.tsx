"use client";

import challenges from "@/app/challenges";
import ChallengeCard from "@/components/challenge-card";
import { useRef, useState } from "react";

export default function ChallengesPage() {
  const inputRef = useRef(null);
  const [challengesToLoop, setChallenges] = useState(challenges);

  const search = () => {
    const inputValue = (
      inputRef.current! as HTMLInputElement
    ).value.toLowerCase();

    setChallenges(
      challenges.filter(
        (challenge) =>
          challenge.name.toLowerCase().includes(inputValue) ||
          challenge.description.toLowerCase().includes(inputValue)
      )
    );
  };

  return (
    <main className="flex flex-col gap-14">
      <section>
        <div className="container text-center pt-24">
          <h1>Challenges</h1>
        </div>
      </section>
      <section>
        <div className="container flex flex-col gap-3">
          <div>
            <input
              className="w-80"
              onKeyUp={search}
              ref={inputRef}
              placeholder="Search..."
            />
            {/* <button onClick={filter}>filter</button> */}
          </div>
          {challengesToLoop.map((challenge, index) => {
            return (
              <ChallengeCard
                // name={challenge.name}
                // description={challenge.description}
                // type={challenge.type}
                // tags={challenge.tags}
                challenge={challenge}
                key={`challenge-${index}`}
              />
            );
          })}
          {!challengesToLoop.length && (
            <p className="text-center text-muted-foreground font-bold">
              No challenges found
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
