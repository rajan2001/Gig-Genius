import React, { useEffect } from 'react'
import Heading from '../component/Heading'
import SubHeading from '../component/SubHeading'
import Button from '../component/Button'
import DescribeSecondPage from '../component/DescribeSecondPage'
import { useLocation, useNavigate } from 'react-router-dom'

function SecondPage({setProgress}) {

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/secondpage") {
          setProgress(2);
        }
      }, [location, setProgress]);

    const handleClick = () =>{
  navigate("/thirdpage")
  setProgress(3)
    }
  return (
    <div className=" flex flex-col justify-top items-center mt-12 w-full">
      <Heading label={"Which are you most instrested in?"} />
      <SubHeading label={"Choose just one. This will help us to get you started(but won't limit your experirnce)."} />
      <DescribeSecondPage />
      <Button onClick={handleClick}>Continue</Button>
    </div>
  )
}

export default SecondPage
