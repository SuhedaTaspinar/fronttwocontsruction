import React from "react";
import { Parallax } from "react-parallax";
import Link from 'next/link';

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">

        <Parallax
          blur={0}
          bgImage="/images/home-banner.jpg"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex"
          contentClassName="container-fluid d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content text-center">
              <span>FSN İNŞAAT</span>
              <h3>
                DÜNDE, BUGÜNDE VE YARINLARDA
              </h3>
              <Link className="main_btn" href="/contact" >
                İLETİŞİM
              </Link>
            </div>
          </div>
        </Parallax>
     
    </section>
  );
};

export default HomeBanner;
