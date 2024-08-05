import { Copyright } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-6 mt-12 bg-gray-900/50">
      <div className="container flex flex-col">
        <h4>Challenges</h4>
        <Link href="/challenges">All challenges</Link>
        <Link href="/#recent-challenges">Recent challenges</Link>
        <Link href="/#weakly-challenges">Weakly challenges</Link>
        <p className="pt-6">
          Made by{" "}
          <Link
            className="font-bold"
            href="https://os-mhmd.vercel.app"
            target="_blank"
          >
            Osama Mohammed
          </Link>{" "}
          <Copyright className="inline mb-1" /> 2024
        </p>
      </div>
    </footer>
  );
}
