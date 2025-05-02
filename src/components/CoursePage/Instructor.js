import achive from "../../assets/achive.svg";
import cap from "../../assets/cap.svg";
import play from "../../assets/play.svg";
import instructor from "../../assets/span-8.svg";

const Instructor = () => {
  return (
    <>
      <style>
        {`
          .instructor-container {
            padding: 1.25rem 0;
            border-bottom: 1px solid #e5e7eb;
            width: 100%;
            max-width: 75%;
          }

          .instructor-title {
            font-size: 20px;
            font-weight: bold;
            
          }
            .instructor-name {
              font-size: 1.125rem;
              font-weight: bold;
              display: flex:
              justify-content: space-around;
          }

     

          .instructor-role {
            color: #6b7280;
            margin-bottom: 0.5rem;
            
          }

          .instructor-info {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .instructor-image {
            width: 15%;
            border-radius: 50%;
          }
          .roundimage {
            border-radius: 50%;
            width: 64px;
          }

          .instructor-stats {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            color: #4b5563;
          }

          .instructor-stat {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .instructor-description {
            font-family: Inter;
             font-weight: 400;
             font-size: 16px;
             line-height: 160%;
             letter-spacing: 0%;
              vertical-align: middle;

        `}
      </style>

      <div className="instructor-container">
        <h1 className="instructor-title">Instructor</h1>
        <h2 className="instructor-name">Ronald Richards</h2>
        <p className="instructor-role">UI/UX Designer</p>

        <div className="instructor-info">
          <img src={instructor} alt="instructor" className="instructor-image" />
          <div className="instructor-stats">
            <div className="instructor-stat">
              <img src={achive} alt="icon" />
              <span>40,445 Reviews</span>
            </div>
            <div className="instructor-stat">
              <img src={cap} alt="icon" />
              <span>500 Students</span>
            </div>
            <div className="instructor-stat">
              <img src={play} alt="icon" />
              <span>15 Courses</span>
            </div>
          </div>
        </div>

        <p className="instructor-description">
          With over a decade of industry experience, Ronald brings a wealth of
          practical knowledge to the classroom. He<br/> has played a pivotal role in
          designing user-centric interfaces for renowned tech companies,
          ensuring seamless<br/>and engaging user experiences.
        </p>
      </div>
    </>
  );
};

export default Instructor;
