import React, { useEffect } from "react";
import Heading from "../component/Heading";
import SubHeading from "../component/SubHeading";
import Describe from "../component/Describe";
import Button from "../component/Button";
import { useLocation, useNavigate } from "react-router-dom";

function FirstPage({ setProgress }) {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setProgress(1);
    }
  }, [location, setProgress]);

  const handleClick = () => {
    navigate("/secondpage");
    setProgress(2);
  };
  return (
    <div className=" flex flex-col justify-top items-center mt-12 w-full">
      <Heading label={"Which describes you best?"} />
      <SubHeading label={"This will help us personalize your experience"} />
      <Describe />
      <Button onClick={handleClick}>Continue</Button>
    </div>
  );
}

export default FirstPage;
