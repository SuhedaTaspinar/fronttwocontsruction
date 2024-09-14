import Head from 'next/head';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Portfolio from '@/components/Portfolio/Portfolio';
import Footer from '@/components/Footer/Footer';
import Portfoliotwo from "@/components/Portfolio/Portfoliotwo";

export default function HomePage() {
  return <>
  <Head>
        <title>FSN İnşaat</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeBanner />
      <About />
      <Services />
      <Portfolio />
      <Portfoliotwo />
      <Footer />
  </>
}
