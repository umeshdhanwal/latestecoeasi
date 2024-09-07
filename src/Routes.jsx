import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import BlogPost from "pages/BlogPost";
import HomepageA from "pages/HomepageA";
import HomepageB from "pages/HomepageB";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "blogpost",
      element: <BlogPost />,
    },
    {
      path: "homepagea",
      element: <HomepageA />,
    },
    {
      path: "homepageb",
      element: <HomepageB />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
