import React, { useEffect } from "react";
import DescribeFourthPAge from "../component/DescribeFourthPAge";
import Heading from "../component/Heading";
import SubHeading from "../component/SubHeading";
import Button from "../component/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { Star } from "lucide-react";

function FourthPage({ setProgress }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/fourthpage") {
      setProgress(4);
    }
  }, [location, setProgress]);

  const handleClick = () => {};

  return (
    <div className=" flex flex-col justify-top items-center mt-12 w-3/4">
      <div className="flex items-center justify-center gap-44  ">
        <DescribeFourthPAge />
        <div className="flex flex-col">
          <Heading label={"You're on your way!"} />
          <div className="flex gap-2 mb-4 mt-4">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="w-3/4">
            <SubHeading
              label={
                `"Brillents gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science, and computer science.  "`
              }
            />
          </div>
        </div>
      </div>

      <Button onClick={handleClick}>Continue</Button>
    </div>
  );
}

export default FourthPage;
