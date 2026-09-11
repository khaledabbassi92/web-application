import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// Public
import Navbar from "./public/components/Navbar";
import Footer from "./public/components/Footer";
import Home from "./public/pages/Home";
import Services from "./public/pages/Services";
import Realisations from "./public/pages/Realisations";
import Informations from "./public/pages/Informations";
import Contact from "./public/pages/Contact";
import Reviews from "./public/pages/Reviews";

// Admin
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import DynamicEditor from "./admin/pages/DynamicEditor";
import StaticEditor from "./admin/pages/StaticEditor";
import ReviewsManager from "./admin/pages/ReviewsManager";
import ReviewsDemands from "./admin/pages/ReviewsDemands";

// SEO component
function SEO({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

function Layout() {
  const location = useLocation();

  const isAdmin = location.pathname
    .toLowerCase()
    .startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {!isAdmin && <Navbar />}

      <main className="flex-grow">
        <Routes>

          {/* =========================
              PUBLIC
          ========================= */}

          <Route
            path="/"
            element={
              <>
                <SEO title="Ravalement de façade & ITE à Ivry-sur-Seine | Amira Rénov" />
                <Home />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <SEO title="Ravalement, ITE & rénovation de façade | Amira Rénov" />
                <Services />
              </>
            }
          />

          <Route
            path="/realisations"
            element={
              <>
                <SEO title="Réalisations de ravalement & ITE à Ivry-sur-Seine | Amira Rénov" />
                <Realisations />
              </>
            }
          />

          <Route
            path="/informations"
            element={
              <>
                <SEO title="Entreprise de rénovation de façade à Ivry-sur-Seine | Amira Rénov" />
                <Informations />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <SEO title="Contact – Ravalement & ITE à Ivry-sur-Seine | Amira Rénov" />
                <Contact />
              </>
            }
          />

          <Route
            path="/reviews"
            element={
              <>
                <SEO title="Avis clients – Amira Rénov à Ivry-sur-Seine" />
                <Reviews />
              </>
            }
          />


          {/* =========================
              ADMIN LOGIN
          ========================= */}

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />


          {/* =========================
              ADMIN APPLICATION
          ========================= */}

          <Route
            path="/admin"
            element={<AdminLayout />}
          >

            <Route
              index
              element={
                <Navigate
                  to="/admin/dashboard"
                  replace
                />
              }
            />

            <Route
              path="dashboard"
              element={<Dashboard />}
            />

            <Route
              path="editeur-dynamique"
              element={<DynamicEditor />}
            />

            <Route
              path="editeur-statique"
              element={<StaticEditor />}
            />

            <Route
              path="avis"
              element={<ReviewsManager />}
            />

            <Route
              path="demandes-avis"
              element={<ReviewsDemands />}
            />

          </Route>


          {/* =========================
              FALLBACK
          ========================= */}

          <Route
            path="*"
            element={
              <Navigate
                to="/"
                replace
              />
            }
          />

        </Routes>
      </main>

      {!isAdmin && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
