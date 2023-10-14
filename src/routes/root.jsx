import App from "../App";
import Home from "../Pages/home";
import About from "../Pages/about";
import Contact from "../Pages/contact";
// import ErrorPage from "../Pages/error";
import Header from "../Pages/header";
import Footer from "../Pages/footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// const customRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes path="/" element={<App />}>
//       <Route path="Home" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//     </Routes>
//   )
// );

// export const wrapper = (
//   <>
//     <div>
//       <div>
//         <Header />
//         <hr />
//         <Routes path="/" element={<App />}>
//           <Route path="Home" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </div>
//   </>
// );
