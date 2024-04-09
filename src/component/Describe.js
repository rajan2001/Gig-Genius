import React from "react";
import AvatarWithText from "./AvatarWithText";
import Avatar, { genConfig } from "react-nice-avatar";

const datas = [
  {
    heading: "Student",
    subheading: "or soon to be enrolled",
    config:genConfig({ sex: "man", hairStyle: "mohawk" })
  },
  {
    heading: "Professional",
    subheading: "Pursuing a career",
  },
  {
    heading: "Parent",
    subheading: "of a school-age child",
  },
  {
    heading: "Lifelonglearner",
    subheading: "",
  },
  {
    heading: "Teacher",
    subheading: "",
  },
  {
    heading: "Others",
    subheading: "",
  },
];

function Describe() {
  return (
    <div className="mt-16 flex flex-col gap-8 items-start w-[40%] mb-16 ">
      {datas.map((data, index) => (
        <div className="flex items-center gap-8 cursor-pointer border-[1px] border-transparent transition-all  hover:border-yellow-300 w-full rounded-full" key={index}>
          <Avatar className="w-16 h-16" {...data.config} />
          <AvatarWithText heading={data.heading} subheading={data.subheading} />
        </div>
      ))}
    </div>
  );
}

export default Describe;
