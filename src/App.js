import { BrowserRouter, Route, Routes } from "react-router-dom";

import FirstPage from "./pages/FirstPage";
import ProgressBar from "./component/ProgressBar";
import SecondPage from "./pages/SecondPage";
import ThirdPAge from "./pages/ThirdPage";
import { useState } from "react";
import FourthPage from "./pages/FourthPage";



function App() {

  const [progress,setProgress] = useState(1);
  
  return (
    <BrowserRouter>
      <div className=" flex flex-col justify-center items-center">
        <ProgressBar progress={progress} />
        <Routes>
          <Route path="/" element={<FirstPage setProgress={setProgress} />} />
          <Route path="/secondpage" element={<SecondPage setProgress={setProgress} />} />
          <Route path="/thirdpage" element={<ThirdPAge setProgress={setProgress}/>} />
          <Route path="/fourthpage" element={<FourthPage setProgress={setProgress}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
