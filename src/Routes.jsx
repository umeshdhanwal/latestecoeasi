import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
<<<<<<< HEAD
import HomeSlider from "components/HomeSlider";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomeSlider />,
=======
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
>>>>>>> 149918b39c59d0d938156bf789d8820ff62cf335
    },
  ]);

  return element;
};

export default ProjectRoutes;
