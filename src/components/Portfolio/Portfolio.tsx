"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from 'next/link';

interface Service {
  _id: string;
  image: string;
  type: string;
  description: string;
}

type Props = {
  showHeading?: boolean;
}

const Portfolio = ({ showHeading = true }: Props) => {
  const [services, setServices] = useState<Service[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/services/get-service`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Hizmet verileri yüklenirken hata oluştu");
        }

        const data = await response.json();
        setServices(data);
        setError("");
      } catch (error) {
        setError((error as Error).message || "Bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Slice the last 4 services
  const displayedServices = services.slice(-4);

  return (
      <section className="portfolio_area area-padding" id="portfolio">
        <div className="container">
          {showHeading && (
              <div className="area-heading">
                <h3 className="line">Son Hizmetlerimiz</h3>
              </div>
          )}

          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">
                <Link className="navbar-brand logo_h" href="/services">
                  Tümü
                </Link>
              </li>
            </ul>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid">
              {displayedServices.length > 0 ? (
                  displayedServices.map((service) => (
                      <div key={service._id} className="col-lg-6 col-md-6 all following">
                        <div className="single_portfolio">
                          <Image width={555} height={419}
                                 className="img-fluid w-100"
                                 src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/uploads/${service.image}`}
                                 alt={service.description}
                          />
                          <div className="short_info">
                            <p>{service.type}</p>
                            <h4>
                              {service.description}
                            </h4>
                          </div>
                        </div>
                      </div>
                  ))
              ) : (
                  <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#6b7280' }}>
                    Hizmet bulunamadı.
                  </p>
              )}
            </div>
          </div>
        </div>
      </section>
  );
}

export default Portfolio;
