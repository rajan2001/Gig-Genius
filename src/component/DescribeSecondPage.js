import React from "react";

import AvatarWithText from "./AvatarWithText";
import {
  ExpandIcon,
  Eye,
  GitGraphIcon,
  StrikethroughIcon,
  TargetIcon,
} from "lucide-react";

const datas = [
  {
    heading: "Learning specific skills to advance my career ",
    subheading: "",
    icon: <GitGraphIcon className="w-10 h-10" />,
  },
  {
    heading: "Exploring new topics i'm intrested in",
    subheading: "",
    icon: <ExpandIcon className="w-10 h-10" />,
  },
  {
    heading: "Refreshing my maths foundation",
    subheading: "",
    icon: <StrikethroughIcon className="w-10 h-10" />,
  },
  {
    heading: "Execersing my brain to stay sharp",
    subheading: "",
    icon: <TargetIcon className="w-10 h-10" />,
  },
  {
    heading: "Something else",
    subheading: "",
    icon: <Eye className="w-10 h-10" />,
  },
];

function DescribeSecondPage() {
 

  return (
    <div className="mt-16 flex flex-col gap-8 items-start w-[40%] mb-16 ">
      {datas.map((data, index) => (
        <div
          className="flex items-center gap-8 cursor-pointer border-[1px] border-transparent transition-all  hover:border-yellow-300 py-4 w-full pl-8 rounded-lg"
          key={index}>
          {data.icon}
          <AvatarWithText heading={data.heading} subheading={data.subheading} />
        </div>
      ))}
    </div>
  );
}

export default DescribeSecondPage;
