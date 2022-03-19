import React, { useEffect } from "react";
import Header from "../../components/Header";

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = "The Best Cinema | About Us";
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default AboutPage;
