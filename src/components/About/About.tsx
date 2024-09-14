import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <Image width={555} height={485} src="/images/about1.png.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h4>
                  Hayalinizdeki yaşam, bizimle mümkün. <br />
                </h4>
                <p>
                Kaliteyi ve estetiği bir araya getiriyoruz.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About