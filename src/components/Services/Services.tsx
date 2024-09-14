import Image from 'next/image'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Neler Sağlıyoruz</h3>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={92} height={92} src="/images/i1.png.webp" alt="" />
                  
                </div>
                <div className="service-content">
                  <h5>Mimari Dizayn</h5>
                  <p>
                    Yapıların estetik ve işlevsellik açısından mükemmel bir uyum içinde tasarlandığı süreçtir.
                    Amacımız, hem kullanıcıların ihtiyaçlarını karşılayan hem de uzun vadede
                    kalıcı değer sunan projeler üretmektir.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={83} height={83} src="/images/i2.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Bina İnşaatı</h5>
                  <p>
                    Yeni yapıların temelden çatıya kadar titizlikle inşa edildiği süreçtir.
                    Güvenlik, kalite ve dayanıklılığı ön planda tutarak,
                    projelerimizi zamanında ve eksiksiz teslim ediyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={53} height={92} src="/images/i3.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Bina Yenileme</h5>
                  <p>
                    Mevcut yapıları modern ihtiyaçlara uygun hale getirmek için gerçekleştirdiğimiz yenileme çalışmalarımızla
                    binalara yeni bir soluk getiriyoruz. Eski yapıları günümüz standartlarına uygun,
                    estetik ve fonksiyonel bir hale dönüştürmeyi amaçlıyoruz.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={82} height={82} src="/images/i4.png.webp" alt="" />
                </div>
                <div className="service-content">
                  <h5>Bina Bakımı</h5>
                  <p>
                    Yapıların uzun ömürlü ve güvenli bir şekilde kullanılabilmesi için
                    düzenli bakım hizmetleri sunuyoruz. Bu sayede
                    binalarınız her zaman en iyi durumda kalır ve değerini korur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services