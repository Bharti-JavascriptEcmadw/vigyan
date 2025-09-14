


import React from "react";
import { useParams } from "react-router-dom";

import MERNDetail from "./MERNDetail";
import AiRobotics from "./AiRobotics";
import DigitalMarketing from "./DigitalMarketing";
import WebsiteDevDetail from "./WebsiteDevDetail ";

const CourseDetail = () => {
  const { slug } = useParams();

  switch (slug) {
    case "mernstack":
      return <MERNDetail />;
    case "html-css-basics":
      return <WebsiteDevDetail />;
    case "ai-robotics-bots":
      return <AiRobotics />;
    case "digital-marketing":
      return <DigitalMarketing />;
    default:
      return <h2 className="text-center text-red-600 py-20">Course not found!</h2>;
  }
};

export default CourseDetail;
