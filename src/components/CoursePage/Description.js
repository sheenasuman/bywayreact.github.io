const Description = () => {
    return (
      <>
        <style>
          {`
            .description-container {
              padding: 1rem 0;
              border-top: 1px solid #e5e7eb;
              border-bottom: 1px solid #e5e7eb;
              line-height: 1.6;
            }
              .description-text {
               color: #4b5563;
               font-size: 24px;
               }
  
            .description-title {
              font-size: 1.125rem;
              font-weight: bold;
              margin-bottom: 0.5rem;
              color: #1e3a8a;
            }
  
            .description-text {
              color: #4b5563;
            }
            .description-title {
              font-size: 2.125rem;
              font-weight: bold;
              margin-bottom: 0.5rem;
              color: #111112;
            }
  
            .description-text strong {
              font-weight: bold;
            }
          `}
        </style>
  
        <div className="description-container">
          <h4 className="description-title">Course Description</h4>
          <p className="description-text">
            This interactive e-learning course will introduce you to User Experience (UX) design.
            the art of creating<br/> products and services that are intuitive, enjoyable, and user-friendly. 
            Gain a solid foundation in UX principles<br/> and learn to apply them in real-world scenarios through 
            engaging modules and interactive exercises.
          </p>
  
          <h4 className="description-title">Certification</h4>
          <p className="description-text">
            At Byway, we understand the significance of formal recognition for 
            your hard work and dedication to<br/> continuous learning. Upon successful completion 
            of our courses, you will earn a prestigious certification that<br/> not only validates
            your expertise but also opens doors to new opportunities in your chosen field.
          </p>
        </div>
      </>
    );
  };
  
  export default Description;
  