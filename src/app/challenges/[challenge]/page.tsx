import challenges from "@/app/challenges";
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
              <p className="text-red-500 text-center">
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
            <hr />
          </div>
        </section>
        <section>
          <div className="container pt-2">
            <h2>Constrains</h2>
            <ul className="list-disc px-4">
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
      </main>
    );
  return "Challenge not found";
}
