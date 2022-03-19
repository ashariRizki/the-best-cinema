import React, { useEffect } from "react";
import Header from "../../components/Header";

const FAQPage: React.FC = () => {
  useEffect(() => {
    document.title = "The Best Cinema | FAQ";
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default FAQPage;
