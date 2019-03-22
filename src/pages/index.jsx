import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
${tw`flex flex-wrap justify-between mt-8`};
display: grid;
grid-gap: 4rem;
grid-template-columns: repeat(2, 1fr);
@media (max-width: 1200px) {
grid-gap: 3rem;
}
@media (max-width: 900px) {
grid-template-columns: 1fr;
grid-gap: 2rem;
}
`;

const AboutHero = styled.div`
${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Victor.
        </BigTitle>
        <Subtitle>Welcome to my online portfolio!</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Digital Marketing Executive | Funding Societies"
            link="https://fundingsocieties.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Funding Societies | Modalku is the largest Peer-to-Peer lending
            platform in Southeast Asia. It provides business financing to SMEs
            which is crowdfunded by retail and institutional investors.
          </ProjectCard>
          <ProjectCard
            title="Marketing Lead | CareerSocius"
            link="https://www.careersocius.com/"
          >
            CareerSocius is a social enterprise that helps job-seekers in
            Singapore maximize their career potential. With a diverse team of
            Branding Buddies spanning across various industries, we offer the
            relevant expertise and experience to guide job seekers in their job
            search.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Victor Tan" />
          <AboutSub>
            Victor Tan | Digital Marketer & Fintech Enthusiast
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Adaptable, motivated and self-driven Economics & Finance major with
          cross-disciplinary skills sets involving marketing, analytics,
          finance, design and strategy. I am passionate about the FinTech
          industry and the use of technology to improve and automate financial
          activities. Being a social geek, I love to keep up and discuss latest
          technologies & digital trends. In my free time, I enjoy playing the
          guitar, board/video gaming as well as hiking, kayaking & exploring the
          outdoors. I'm fascinated about personality assessments & quizzes.
          Here's a list of my personality profiles:
          Ideation-Strategic-Restorative-Communication-Command
          (StrengthsFinder2.0) ENTP (MBTI) Loyal-Skeptic (Enneagram) Mid-O
          High-C High-E Mid-A Low-N (Big5) Fire (TetraMap)
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Contact</Title>
          <ContactText>
            Say <a href="mailto:victor.tqw@live.com">Hi</a> or follow me on{" "}
            <a href="https://www.instagram.com/victorxmusic/">Instagram</a> &{" "}
            <a href="https://www.linkedin.com/in/victortqw/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>&copy; 2019 by Victor </Footer>
      </Contact>
    </Parallax>
  </>
);
export default Index;
