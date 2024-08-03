import { ReactNode } from "react";

type Challenge = {
  name: string;
  description: string | ReactNode;
  link?: string;
  tags: string[];
  deps?: string[]; // will change
  // deps: is the challenges we recommend to do first
  steps: (string | ReactNode)[];
  type: "fire" | "storm" | "water";
  // fire: Diff: Hard
  // storm: Diff: Medium
  // water: Diff: Easy
  hints: (string | ReactNode)[];
  solution: ReactNode;
};

export default Challenge;
