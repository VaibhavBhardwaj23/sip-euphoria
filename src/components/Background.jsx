import desktop from "../assets/Desktop.mp4";
import mobile from "../assets/mobile.mp4";
import tablet from "../assets/tablet.mp4";
const Background = () => {
  return (
    <>
      <div className="video">
        <video id="background-video" className="desktop" muted loop autoPlay>
          <source src={desktop} type="video/mp4" />
        </video>
        <video id="background-video " className="tablet" muted loop autoPlay>
          <source src={tablet} type="video/mp4" />
        </video>
        <video id="background-video " className="mobile" muted loop autoPlay>
          <source src={mobile} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Background;
