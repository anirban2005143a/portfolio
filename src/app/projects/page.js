import AllProjects from "@/components/AllProjects";
import { FloatingNav } from "@/components/floating-nav";
import Progressbar from "@/components/Progressbar";
import React from "react";

const page = () => {
  return (
    <>
      <Progressbar />
      <FloatingNav />
      <AllProjects />
    </>
  );
};

export default page;
