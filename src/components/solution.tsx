"use client";

import { useState } from "react";
import Challenge from "@/challenge";

export default function Solution({
  solution,
}: {
  solution: Challenge["solution"];
}) {
  const [solutionVisibilty, setSolutionVisibilty] = useState(false);

  return (
    <>
      {!solutionVisibilty && (
        <div className="text-center">
          <button onClick={() => setSolutionVisibilty(true)}>
            Show solution
          </button>
        </div>
      )}
      {solutionVisibilty && solution}
    </>
  );
}
