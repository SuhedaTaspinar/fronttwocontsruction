import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {};

const MainMenu = (props: Props) => {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path ? 'active' : '';

  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo_h" href="/">
            <Image src="/images/logo.jpg" alt="" width={165} height={80} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className={`nav-item ${isActive('/')}`}>
                <Link className="nav-link" href="/">
                  ANA MENÜ
                </Link>
              </li>
              <li className={`nav-item ${isActive('/services')}`}>
                <Link className="nav-link" href="/services">
                  HİZMETLERİMİZ
                </Link>
              </li>
              <li className={`nav-item ${isActive('/projects')}`}>
                <Link className="nav-link" href="/projects">
                  PROJELERİMİZ
                </Link>
              </li>
              <li className={`nav-item ${isActive('/contact')}`}>
                <Link className="nav-link" href="/contact">
                  İLETİŞİM
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
