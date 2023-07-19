import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>a</div>
    </main>
  );
}

export async function getServerSideProps() {
  const req = await getData(`api/v1/events`);
  const res = req.data;

  return { props: { data: res } };
}
