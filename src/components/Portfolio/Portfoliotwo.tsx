"use client";
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Link from 'next/link';

interface Project {
    _id: string;
    image: string;
    name: string;
    address: string;
}

type Props = {
    showHeading?: boolean;
}

const Portfoliotwo = ({ showHeading = true }: Props) => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/projects/get-project`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Proje verileri yüklenirken hata oluştu");
                }

                const data = await response.json();
                setProjects(data);
                setError("");
            } catch (error) {
                setError((error as Error).message || "Bir hata oluştu");
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return <p>Yükleniyor...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    const displayedProjects = projects.slice(-4);

    return (
        <section className="portfolio_area area-padding" id="portfolio">
            <div className="container">
                {showHeading && (
                    <div className="area-heading">
                        <h3 className="line">Son Projeler</h3>
                    </div>
                )}

                <div className="filters portfolio-filter">
                    <ul>
                        <Link className="navbar-brand logo_h" href="/projects">
                            <li className="active" data-filter="*">
                                Tümü
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="filters-content">
                    <div className="row portfolio-grid">
                        {displayedProjects.length > 0 ? (
                            displayedProjects.map((project) => (
                                <div key={project._id} className="col-lg-6 col-md-6 all following">
                                    <div className="single_portfolio">
                                        <Image
                                            width={555}
                                            height={419}
                                            className="img-fluid w-100"
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/uploads/${project.image}`}
                                            alt={project.name}
                                        />
                                        <div className="short_info">
                                            <p>{project.name}</p>
                                            <h4>
                                                {project.address}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#6b7280' }}>
                                Proje bulunamadı.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfoliotwo;
