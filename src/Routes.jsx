import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Group368 from "pages/Group368";
import FAQs from "pages/FAQs";
import BlogPost from "pages/BlogPost";
import BackgroundInformationPage from "pages/BackgroundInformationPage";
import HomepageA from "pages/HomepageA";
import AboutusPage from "pages/Aboutus"; // Adjusted import statement

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "group368",
      element: <Group368 />,
    },
    {
      path: "faqs",
      element: <FAQs />,
    },
    {
      path: "blogpost",
      element: <BlogPost />,
    },
    {
      path: "aboutus", // Route for About Us
      element: <AboutusPage />, // Use the correct component
    },
    {
      path: "backgroundinformationpage",
      element: <BackgroundInformationPage />,
    },
    {
      path: "/",
      element: <HomepageA />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
