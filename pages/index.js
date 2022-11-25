import Head from "next/head";
import Header from "@components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mass Protokol Dokümantasyonu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="https://mass.onrender.com/img/masslogo.png"></img>
        <Header title="Mass Protokol Dokümantasyonu" />
        <p className="description">
          <a href="https://mass.onrender.com/">
            Yeni site yayına alınmıştır. Geliştirme aşamasında kullanılan bu
            site artık aktif olmayacaktır.
          </a>
        </p>
      </main>
    </div>
  );
}
