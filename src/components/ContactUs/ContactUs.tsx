import React from "react";

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23833.85716245098!2d-73.95454906767618!3d41.69392397071829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd3e642be0bb3b%3A0x5ea85debfb20f349!2sPoughkeepsie%2C%20NY%2C%20USA!5e0!3m2!1sen!2sph!4v1681066121731!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
