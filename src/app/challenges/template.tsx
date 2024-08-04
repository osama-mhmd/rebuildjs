"use client";

import Template from "@/app/template";
import { ReactNode } from "react";

export default function ChallengesTemplate({
  children,
}: {
  children: ReactNode;
}) {
  return <Template>{children}</Template>;
}
