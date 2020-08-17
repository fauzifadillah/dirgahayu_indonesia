import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, paragraphSix, paragraphSeven, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="INDONESIA-Ku" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Bermimpilah setinggi langit, jika engkau jatuh, engkau akan jatuh diantara bintang-bintang -Ir. Soekarno'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Kita perlu berani mengatakan yang benar itu benar dan yang salah itu salah -Soeharto'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Tanpa cinta, kecerdasan itu berbahaya, dan tanpa kecerdasan, cinta itu tidak cukup -B.J Habibie'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'Sabar itu tidak ada batasnya, kalau ada batasnya berarti tidak sabar -K.H Abdurrahman Wahid'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFive || 'Kepada anak-anakku di seluruh Tanah Air, saya minta untuk bekerja kembali dengan tulus. Jangan melakukan hal-hal yang bersifat emosional, karena di dalam mimbar ini, kamu melihat ibumu berdiri di sini. -Megawati Soekarnoputri'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphSix || 'Kalau kita keras terhadap diri kita, dunia akan lunak kepada kita, tapi bila kita lemah terhadap diri kita, dunia akan keras kepada kita. -Susilo Bambang Yudhoyono'}
                </p>
                 <p className="about-wrapper__info-text">
                  {paragraphSeven || 'Membacalah dan bangsa ini akan terhindar dari buta karena ketidaktahuan. -Joko Widodo '}
                </p>
                
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      BUKAN MAIN
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
