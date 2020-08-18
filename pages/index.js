import Head from "next/head";
import styles from "../styles/Home.module.css";
import QRReader from "../components/QRReader.tsx";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our <a href="#">QR reader POC!</a>
        </h1>

        <QRReader />
        
        <p className={styles.description}>
          We used this library for the setup:{" "}
          <code className={styles.code}>react-qr-reader</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://www.npmjs.com/package/react-qr-code"
            className={styles.card}
          >
            <h3>React-qr-reader documentation &rarr;</h3>
            <p>
              A component for React. This library works with React and React
              Native (uses ART module).
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
