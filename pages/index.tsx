import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Hello, world!</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          maiores repellendus necessitatibus mollitia at, voluptates ut eos ex
          rem obcaecati.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          maiores repellendus necessitatibus mollitia at, voluptates ut eos ex
          rem obcaecati.
        </p>
        <Link href={"/ninjas"} className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
