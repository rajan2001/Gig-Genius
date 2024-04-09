import React, { useEffect } from "react";
import Heading from "../component/Heading";
import SubHeading from "../component/SubHeading";
import DesctibeThirdPage from "../component/DesctibeThirdPage";
import Button from "../component/Button";
import { useLocation, useNavigate } from "react-router-dom";

function ThirdPAge({ setProgress }) {
   const location = useLocation();
   const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === "/thirdpage") {
      setProgress(3);
    }
  }, [location, setProgress]);

  const handleClick = () => {
    navigate("/fourthpage")
    setProgress(4);
  };
  return (
    <div className=" flex flex-col justify-top items-center mt-12 w-3/4">
      <div className="flex items-center justify-center gap-44  ">
        <DesctibeThirdPage />
        <div className="flex flex-col">
          <Heading label={"You're in the right place"} />
          <div className="w-3/4">
            <SubHeading
              label={
                "Brillents gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science, and computer science.  "
              }
            />
          </div>
        </div>
      </div>
      <Button onClick={handleClick}>Continue</Button>
    </div>
  );
}

export default ThirdPAge;
