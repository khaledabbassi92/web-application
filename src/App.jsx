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
    // Sharp, edgy formatting: "PAGE | BRAND"
    document.title = `${title} | Mira Rénov`;
  }, [title]);

  return null;
}

function Layout() {
  const location = useLocation();

  // Determine admin context based on path
  const isAdmin = location.pathname
    .toLowerCase()
    .startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen bg-white text-black selection:bg-black selection:text-white">
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
                {/* Professional, focused on location and core expertise */}
                <SEO title="Expert Ravalement & Isolation Thermique à Ivry-sur-Seine" />
                <Home />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                {/* Sharp, highlights high-end services */}
                <SEO title="Rénovation de Façade & ITE | Solutions Haute Performance" />
                <Services />
              </>
            }
          />

          <Route
            path="/realisations"
            element={
              <>
                {/* Edgy, showcases the 'proof' of their work */}
                <SEO title="Nos Chantiers Signés | Transformations et Preuves de Savoir-Faire" />
                <Realisations />
              </>
            }
          />

          <Route
            path="/informations"
            element={
              <>
                {/* Authoritative stance */}
                <SEO title="La Référence en Façade : Votre Expert à Ivry | Mira Rénov" />
                <Informations />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                {/* Direct and action-oriented */}
                <SEO title="Demander un Devis | Contactez Nos Experts en Rénovation" />
                <Contact />
              </>
            }
          />

          <Route
            path="/reviews"
            element={
              <>
                {/* Professional trust building */}
                <SEO title="Avis Clients Vérifiés | La Confiance par la Qualité" />
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