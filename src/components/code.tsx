import { ReactNode } from "react";

export default function Code({ children }: { children: string | ReactNode }) {
  return (
    <span className="font-mono rounded-lg bg-gray-900 py-1 px-2">
      {children}
    </span>
  );
}
