"use client";
import React, { useState, useEffect } from "react";

interface Contact {
  _id: string;
  phone: string;
  mail: string;
  instagram: string;
  twitter: string;
  youtube: string;
  address: string;
}

const ContactsDetail = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts/get-contact`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("İletişim bilgileri yüklenirken hata oluştu");
        }

        const data = await response.json();
        setContacts(data);
        setError("");
      } catch (error) {
        setError((error as Error).message || "Bir hata oluştu");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section style={{ padding: '3rem 0', backgroundColor: '#f3f4f6' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '1rem', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div
              key={contact._id}
              style={{
                marginBottom: '3rem',
                padding: '2.5rem',
                backgroundColor: '#f9fafb',
                borderRadius: '1rem',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                lineHeight: '1.75',
              }}
            >
              <h2 style={{ fontSize: '2rem', fontWeight: '600', color: '#1f2937', marginBottom: '1.5rem', textAlign: 'center' }}>İletişim Bilgileri</h2>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '1.25rem' }}>
                <a
                  href={`tel:${contact.phone}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem' }}>📞</span>
                  {contact.phone}
                </a>
              </p>

              <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '1.25rem' }}>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  Instagram
                </a>
              </p>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '1.25rem' }}>
                <a
                  href={contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  Twitter
                </a>
              </p>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '1.25rem' }}>
                <a
                  href={contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  YouTube
                </a>
              </p>
              <p style={{ fontSize: '1.25rem', color: '#4b5563', marginBottom: '1.25rem' }}>
                <a
                  href={`mailto:${contact.mail}`}
                  style={{
                    display: 'block',
                    padding: '1rem',
                    fontSize: '1rem',
                    color: '#ffffff',
                    backgroundColor: '#1f2937',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  Mail
                </a>
              </p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', fontSize: '1.5rem', color: '#6b7280', padding: '2.5rem' }}>İletişim bilgileri bulunamadı.</p>
        )}
      </div>
    </section>
  );
};

export default ContactsDetail;
