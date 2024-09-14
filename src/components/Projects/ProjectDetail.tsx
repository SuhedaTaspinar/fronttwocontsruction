"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  _id: string;
  image: string;
  name: string;
  address: string;
  features: string;
  price: number;
  description: string;
}

const ProjectDetail = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects/get-project", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Hizmet verileri yüklenirken hata oluştu");
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

    fetchServices();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#f3f4f6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project._id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2rem',
                marginBottom: '2.5rem',
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '1rem',
                boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                alignItems: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 25px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ flex: '1', maxWidth: '50%' }}>
                <Image
                  src={`http://localhost:5000/uploads/${project.image}`}
                  alt={project.name}
                  width={600}
                  height={400}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '1rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>

              <div style={{ flex: '1', maxWidth: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937' }}>{project.name}</h2>
                <p style={{ fontSize: '1.25rem', fontWeight: '500', color: '#6b7280', marginBottom: '1rem' }}>{project.address}</p>
                <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1rem' }}>{project.features}</p>
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>Fiyat: {project.price} TL</p>
                <p style={{ fontSize: '1rem', color: '#6b7280' }}>{project.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#6b7280' }}>Proje bulunamadı.</p>
        )}
      </div>
    </section>

  );
};

export default ProjectDetail;
