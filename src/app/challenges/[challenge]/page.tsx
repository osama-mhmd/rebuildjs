import challenges from "@/app/challenges";
import Solution from "@/components/solution";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Challenge({
  params,
}: {
  params: { challenge: string };
}) {
  const challenge = challenges.filter(
    (_challenge) => _challenge.name.replaceAll(" ", "-") == params.challenge
  )[0];

  if (challenge)
    return (
      <main>
        <section>
          <div className="container pt-24 flex flex-col gap-4">
            <h1 className="justify-center flex gap-1 items-center">
              {challenge.name}
              {challenge.link ? (
                <a href={challenge.link}>
                  <SquareArrowOutUpRight width={30} height={30} />
                </a>
              ) : (
                ""
              )}
            </h1>
            {challenge.deps && (
              <p className="text-green-500 text-center">
                We recommend to do these challenges at first:{" "}
                {challenge.deps.map((dep, index) => {
                  return (
                    <a href={`/challenges/${dep}`} key={index}>
                      {dep}
                    </a>
                  );
                })}
              </p>
            )}
            <p className="text-center">{challenge.description}</p>
            <p className="flex flex-wrap gap-1 justify-center">
              {challenge.tags.map((tag, index) => {
                return (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                );
              })}
            </p>
          </div>
        </section>
        <section>
          <div className="container py-4 my-6 bg-muted/30 sm:rounded-md">
            <h2>Constrains</h2>
            <ul className="list-none px-0 constrains">
              {challenge.steps.map((step, index) => {
                return (
                  <li key={index} className="">
                    {step}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section>
          <div className="container">
            {challenge.hints && (
              <>
                <h2>Hints</h2>
                <ul>
                  {challenge.hints.map((hint, index) => {
                    return <li key={index}>{hint}</li>;
                  })}
                </ul>
              </>
            )}
            {!challenge.hints && (
              <p className="tip">no hints for this challenge</p>
            )}
          </div>
        </section>
        <section>
          <div className="container sm:rounded-md bg-muted/30 my-6 py-4 solution">
            {!challenge.solution && (
              <p className="tip">no solution for this challenge</p>
            )}
            {challenge.solution && <Solution solution={challenge.solution} />}
          </div>
        </section>
      </main>
    );
  return <p className="pt-12 tip">Challenge not found</p>;
}
