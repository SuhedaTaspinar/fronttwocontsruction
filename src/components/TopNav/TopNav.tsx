"use client";

import React, { useState, useEffect } from 'react'

interface Contact {
  _id: string;
  phone: string;
  mail: string;
  instagram: string;
  twitter: string;
  youtube: string;
  address: string;
}

type Props = {}

const TopNav = (props: Props) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts/get-contact`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (response.ok) {
          setContacts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {contacts.map((contact, index) => (
        <div className="top_menu row m0" key={index}>
          <div className="container">
            <div className="float-left">
              <a className="dn_btn" href={`tel:${contact.phone}`}>
                <i className="ti-mobile"></i>{contact.phone}
              </a>
              <span className="dn_btn">
                <i className="ti-location-pin"></i> {contact.address}
              </span>
            </div>
            <div className="float-right">
              <span className="follow_us">Follow us: </span>
              <ul className="list header_social">
                <li>
                  <a href={contact.twitter}>
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={contact.instagram}>
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={contact.youtube}>
                    <i className="ti-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TopNav;
