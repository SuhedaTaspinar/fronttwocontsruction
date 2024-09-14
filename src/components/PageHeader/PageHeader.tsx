import React from "react";
import Link from "next/link";

type Props = {
    title?: string;
    navTitle?: string;
};

const PageHeader = ({ title = "Hakkımızda", navTitle = "Hakkımızda" }: Props) => {
  return (
    <section className="hero-banner hero-banner-sm">
      <div className="container text-center">
        <h2>{title}</h2>
        <nav aria-label="breadcrumb" className="banner-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">Ana Sayfa</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {navTitle}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;
