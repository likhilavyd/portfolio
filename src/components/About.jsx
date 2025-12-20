import "../styles/About.css";
import image from "../assets/image.png";

function About() {

  return (
    <>
        <div className="about-container">
            {/* About Text */}
            <div className="about">
                {/* <h2 className="title-about">About Me</h2> */}
                    <p className="content-about">
                        Hi, I'm <span className="highlighted-name">Likhila Vydana</span>
                    </p>
                    <p className="content-about description">
                      A B.Tech student with a strong interest in software development and web technologies. 
                      I enjoy building responsive, user-friendly websites and refining projects beyond initial 
                      prototypes. With a solid foundation in programming, data structures, core electronics 
                      and data analysis, I value collaboration, continuous learning, and creating impactful, 
                      real-world digital solutions.
                    </p>
            </div>

            {/* Image */}
            <div className="image">
                <img src={image} alt="Likhila Vydana" />
                <p className="content">Likhila Vydana</p>
            </div>
        </div>
    </>
  );
}

export default About;