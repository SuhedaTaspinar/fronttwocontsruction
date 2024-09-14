import Head from 'next/head';
import Header from '@/components/Header/Header';
import Services from '@/components/Services/Services';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import ServiceDetail from '@/components/Services/ServiceDetail';

export default function ServicesPage() {
  return <>
  <Head>
        <title>FSN İNŞAAT</title>
        <meta name="description" content="OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="HİZMETLERİMİZ" navTitle="Hizmetlerimiz" />
      <ServiceDetail/>
      <Services />
      <Footer />
  </>
}
