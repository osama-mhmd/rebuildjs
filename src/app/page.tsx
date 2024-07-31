import ChallengeCard from "@/components/challenge-card";

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
        <div className="container">
          <h2 className="pb-5">Fire Challenges 🔥</h2>
          <ChallengeCard
            name={<>Make like swup</>}
            description="An animation library that prefetchs the pages and makes animations between them"
            type="fire"
            hints={[<>Test</>]}
            solution=""
            tags={["animation", "dom"]}
          />
        </div>
      </section>
    </main>
  );
}
