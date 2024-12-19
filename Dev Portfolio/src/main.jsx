import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/AboutMe",
        element: <AboutMe />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Contact",
        element: <Contact />
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
