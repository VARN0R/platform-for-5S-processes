import video from "../../assets/video";
import Container from "../Container";
import { Line } from "../Line/index";
import Title from "../Title/Title";
import {
  PresentationText,
  PresentationWrapper,
  VideoWrapper,
} from "./Presentation.styles";

const Presentation = () => {
  return (
    <>
      <Container>
        <PresentationWrapper>
          <div>
            <Title />
            <PresentationText>
              I was in St. Petersburg recently, and the bus happened to arrive
              early in the morning. The first thing I wanted to do was go to the
              Lakhta Center to watch the dawn there. However, due to the bad
              weather, beautiful views of the Gulf of Finland weren’t expected.
            </PresentationText>

            <PresentationText>
              The embankment was still empty, and the only sounds that could be
              heard were the waves. Then, I saw a pillar with CCTV cameras set
              against the backdrop of the clouded top of the skyscraper. The
              thought immediately crossed my mind: "Damn, this looks like
              Half-Life." The skyscraper, resembling a citadel from a game, rose
              against the backdrop of ordinary apartment blocks, fog, and
              complete silence—it all created such an atmospheric scene:
            </PresentationText>
          </div>

          <VideoWrapper>
            <video width="100%" height="100%" controls>
              <source src={video.halfLifeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </VideoWrapper>
        </PresentationWrapper>
      </Container>

      <Line />
    </>
  );
};

export default Presentation;
