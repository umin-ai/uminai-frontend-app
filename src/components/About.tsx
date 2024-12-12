'use client';
import Image from "next/image";
import styled from "styled-components"

const AboutWrapper = styled.div`
  // min-height: 500px;
  width: 100%;
  background-color: #FFFBD2;
  padding: 48px 48px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const AboutTextArea = styled.div`
  width: 600px;
  span {
    font-size: 48px;
    font-weight: 700;
    color: #73562C;
    // text-shadow: 0 2px 1px #000;
  }

  @media (max-width: 768px) {
    width: 300px;
    span {
      font-size: 22px;
    }
  }
`;

const DescriptionTextArea = styled.div`
  width: 800px;
  span {
    font-size: 24px;
    font-weight: 700;
    color: #73562C;
    // text-shadow: 0 2px 1px #000;
  }

  @media (max-width: 768px) {
    // width: 300px;
    width: 100%;
    
      text-align: justify;
    span {
      font-size: 16px;
    }
  }
`;

const FlexRowTextInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FlexColumnTextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StanleyTongueImg = styled(Image)`
  border-radius: 50%;
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;

export default function About() {
  return (
    <AboutWrapper id="about">
      <FlexRowTextInfo className="justify-evenly">
        <FlexColumnTextInfo>
          <AboutTextArea>
            <span>Dive into the Twerky Cat Universe of Stanley</span>
          </AboutTextArea>
          <DescriptionTextArea>
            <span>
              Stanley the Cat, TikTok’s most famous twerking feline, is here to bring the joy of dance, laughter, and pawsitive vibes to the crypto world! With $STANLEY, you can join a community as fun and dynamic as Stanley’s signature moves 
            </span>
          </DescriptionTextArea>
        </FlexColumnTextInfo>
        <StanleyTongueImg src={'/images/stanleytongue.gif'} width={500} height={500} alt='stanley-tongue' />
      </FlexRowTextInfo>
      {/* <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@stanleythestanman/video/7189677207130885418" data-video-id="7189677207130885418" style={{ maxWidth: '605px', minWidth: '325px'}} > <section> <a target="_blank" title="@stanleythestanman" href="https://www.tiktok.com/@stanleythestanman?refer=embed">@stanleythestanman</a> I’m stylish <a title="catsoftiktok" target="_blank" href="https://www.tiktok.com/tag/catsoftiktok?refer=embed">#catsoftiktok</a> <a target="_blank" title="♬ BILLIE EILISH. - Armani White" href="https://www.tiktok.com/music/BILLIE-EILISH-7096439256658233345?refer=embed">♬ BILLIE EILISH. - Armani White</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script> */}
      {/* <AboutTextArea>
        <span>Twerk with $STANLEY</span>
      </AboutTextArea>
      <DescriptionTextArea>
        <span>
          $STANLEY is more than just a token—it’s a celebration of community, creativity, and pure delight. Inspired by Stanley’s unstoppable energy, this token invites everyone to "twerk with Stanley" and be part of a movement that’s all about fun, connection, and good vibes.
        </span>
      </DescriptionTextArea> */}

    </AboutWrapper>
  )
}