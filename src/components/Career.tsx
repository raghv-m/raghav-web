import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Web & Software Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2021 - Present</h3>
            </div>
            <p>
              As a freelance web and software developer, I designed and developed websites for various clients, including restaurants with integrated payment portals and user-friendly interfaces. I also built a custom mobile application for a client, delivering high-quality, tailored solutions that met their business needs. This experience allowed me to refine my skills in front-end and back-end development, project management, and client collaboration while solving real-world problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Chef</h4>
                <h5>Boston Pizza</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Working as a chef at Boston Pizza was a deeply fulfilling experience. I honed my teamwork, time management, and leadership skills while ensuring top-quality food preparation. Collaborating with a dedicated team, I learned the value of precision, multitasking, and creating memorable customer experiences. This role also nurtured my passion for delivering exceptional results under pressure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tactical Security Guard</h4>
                <h5>Impact Security Edmonton</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              As a tactical security guard, I collaborated with property managers to resolve technical and operational challenges. This role enhanced my problem-solving abilities, adaptability, and communication skills while ensuring safety and security at various sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
