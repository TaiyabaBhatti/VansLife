import { RouterProvider } from "react-router-dom";
import Layout from "./routing/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { makeServer } from "./config/server";
import VanDetailedPage from "./pages/VansPage/DetaliedPage/VanDetailedPage";
import VanPhotos from "./pages/VansPage/DetaliedPage/VanPhotos";
import VanPricing from "./pages/VansPage/DetaliedPage/VanPricing";
import VanDetails from "./pages/VansPage/DetaliedPage/VanDetails";
import Vans, { loaderLoad as vansLoader } from "./pages/VansPage/VansPage";
import BlankPage from "./pages/BlankPage";
import Error from "./components/ui/Error";

makeServer();
// import RoutePages from "./routing/RoutePages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route path="vans/:id" element={<VanDetailedPage />}>
        <Route path="pricing" element={<VanPricing />} />
        <Route path="photos" element={<VanPhotos />} />
        <Route index element={<VanDetails />} />
      </Route>
      <Route path="*" element={<BlankPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
