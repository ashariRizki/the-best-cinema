import React, { useEffect } from "react";
import Header from "../../components/Header";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "The Best Cinema | Home";
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
