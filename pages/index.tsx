import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Hello, world!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        maiores repellendus necessitatibus mollitia at, voluptates ut eos ex rem
        obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        maiores repellendus necessitatibus mollitia at, voluptates ut eos ex rem
        obcaecati.
      </p>
      <Link href={"/ninjas"}>See Ninja Listing</Link>
    </div>
  );
}
