"use client";

import Challenge from "@/challenge";
import { X } from "lucide-react";
import { cn } from '@/utils'

export default function DetailedChallenge({
  challenge,
  closePanel,
}: {
  challenge: Challenge;
  closePanel: any;
}) {
  return (
    <>
      <div className="absolute top-0 w-full z-10">
        <div 
          className={cn(
            "container flex flex-col gap-3 py-6 border bg-background sm:mt-8 sm:rounded-md shadow-gray-600",
            challenge.type == "fire" ? "border-gold" : "border-muted"
          )}
        >
          <div>
            <X
              className="p-2 float-end hover:bg-muted/55 rounded-full transition cursor-pointer"
              width={40}
              height={40}
              onClick={closePanel}
            />
          </div>
          <h3>
            <span>rebuild</span> {challenge.name}
          </h3>
          {challenge.deps && (
            <p className="text-red-500 underline">
              We recommend to do these challenges at first: [
              {challenge.deps.join(", ")}]
            </p>
          )}
          <p>{challenge.description}</p>
          <p className="flex gap-1 flex-wrap">
            {challenge.tags.map((tag, index) => {
              return (
                <a key={index} className="tag">
                  {tag}
                </a>
              );
            })}
          </p>
          <hr />
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
      </div>
      <div
        className="fixed w-full h-screen top-0 left-0 bg-gray-900 opacity-45 z-[7]"
        onClick={closePanel}
      ></div>
    </>
  );
}
