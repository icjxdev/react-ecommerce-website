import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
            <p>
              Founded in 2015, GameWave has been providing top-quality products
              to customers around the world. We specialize in all sorts of
              gaming peripherals and are proud to offer a wide range of options
              to suit every need and budget. Our team is made up of experienced
              professionals who are passionate about what they do. From our
              designers and engineers to our customer service representatives,
              everyone at GameWave is committed to delivering the best possible
              experience to our customers. We believe that quality and
              affordability should go hand in hand. That's why we work hard to
              keep our prices competitive without ever compromising on the
              quality of our products. Whether you're a professional gamer or
              just starting out, we have something for everyone. Thank you for
              choosing GameWave. We look forward to serving you!
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
