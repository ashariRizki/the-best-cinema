import React, { useEffect } from "react";
import Header from "../../components/Header";

const ContactUsPage: React.FC = () => {
  useEffect(() => {
    document.title = "The Best Cinema | Contact Us";
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default ContactUsPage;
