import { RouterProvider, redirect } from "react-router-dom";
import Layout from "./routing/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { makeServer } from "./config/server";
import VanDetailedPage, {
  loaderLoad as vansDetailedLoader,
} from "./pages/VansPage/DetaliedPage/VanDetailedPage";
import VanPhotos from "./pages/VansPage/DetaliedPage/VanPhotos";
import VanPricing from "./pages/VansPage/DetaliedPage/VanPricing";
import VanDetails from "./pages/VansPage/DetaliedPage/VanDetails";
import Vans, { loaderLoad as vansLoader } from "./pages/VansPage/VansPage";
import BlankPage from "./pages/BlankPage";
import Error from "./components/ui/Error";
import AccountPage from "./pages/Account/AccountPage";
import HostPage, { loaderLoad as hostLoader } from "./pages/Host/HostPage";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Dashboard from "./pages/Host/Dashboard";

makeServer();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="account" element={<AccountPage />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      {/* Vans page */}
      <Route
        path="vans/:id"
        element={<VanDetailedPage />}
        loader={vansDetailedLoader}
      >
        <Route path="pricing" element={<VanPricing />} />
        <Route path="photos" element={<VanPhotos />} />
        <Route index element={<VanDetails />} />
      </Route>

      {/* Host Vans Page */}
      {/* have to implement the protected route here with redirect. (Pending) */}
      <Route
        path="host"
        element={<HostPage />}
        loader={hostLoader}
        // errorElement={<Error />}
      >
        <Route path="reviews" element={<Reviews />} />
        <Route path="income" element={<Income />} />
        <Route index element={<Dashboard />} />
      </Route>

      <Route path="*" element={<BlankPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
