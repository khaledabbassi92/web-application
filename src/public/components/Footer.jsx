"use client";

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Phone,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const API_URL = "";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;

    const loadCompanyInfo = async () => {
      try {
        const response = await fetch(`${API_URL}/api/text`, {
          cache: "no-store",
        });

        if (!response.ok) return;

        const result = await response.json();
        const data = result?.data || result;

        if (
          !cancelled &&
          typeof data?.phone === "string" &&
          data.phone.trim()
        ) {
          setPhone(data.phone.trim());
        }
      } catch (error) {
        console.error("Impossible de charger le téléphone:", error);
      }
    };

    loadCompanyInfo();

    return () => {
      cancelled = true;
    };
  }, []);

  const phoneHref = phone
    ? `tel:${phone.replace(/[^0-9+]/g, "")}`
    : null;

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Réalisations", href: "/realisations" },
    { label: "À propos", href: "/informations" },
    { label: "Avis clients", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuoteClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* =========================================================
          DESKTOP / MAIN NAVBAR
      ========================================================= */}
      <div className="hidden lg:block">

        <div className="grid h-[104px] grid-cols-[280px_1fr_280px]">

          {/* =====================================================
              BRAND PANEL
          ===================================================== */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="group relative flex items-center overflow-hidden bg-zinc-950 px-10"
          >
            {/* Architectural red block */}
            <div className="absolute left-0 top-0 h-full w-[7px] bg-red-700" />

            {/* Background detail */}
            <div className="absolute -right-8 -top-16 h-40 w-40 rounded-full border border-white/[0.06]" />
            <div className="absolute -bottom-20 right-5 h-44 w-44 rounded-full border border-white/[0.04]" />

            <div className="relative">

              <div className="flex items-center">
                <span className="text-[43px] font-black leading-none tracking-[-0.1em] text-white transition-colors duration-300 group-hover:text-red-500">
                  MIRA
                </span>

                <span className="ml-3 h-[45px] w-[4px] bg-red-600 transition-all duration-300 group-hover:h-[52px]" />
              </div>

              <div className="mt-2.5 flex items-center">
                <span className="mr-3 h-[2px] w-7 bg-red-600" />

                <span className="text-[7px] font-bold uppercase tracking-[0.34em] text-zinc-500">
                  RAVALEMENT & ITE
                </span>
              </div>

            </div>
          </Link>

          {/* =====================================================
              CENTER NAVIGATION
          ===================================================== */}
          <div className="flex items-center justify-center bg-white px-6">

            <nav className="flex items-center gap-1">

              {links.map((link, index) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleLinkClick}
                    className={`group relative flex items-center gap-2 px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? "bg-zinc-100"
                        : "hover:bg-zinc-50"
                    }`}
                  >

                    <span
                      className={`text-[8px] font-bold tracking-[0.15em] ${
                        isActive
                          ? "text-red-700"
                          : "text-zinc-300 group-hover:text-red-700"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`text-[11px] font-bold uppercase tracking-[0.06em] transition-colors ${
                        isActive
                          ? "text-zinc-950"
                          : "text-zinc-500 group-hover:text-zinc-950"
                      }`}
                    >
                      {link.label}
                    </span>

                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-red-700" />
                    )}

                  </Link>
                );
              })}

            </nav>
          </div>

          {/* =====================================================
              CONTACT PANEL
          ===================================================== */}
          <div className="flex items-center bg-red-700 px-7">

            {phone && phoneHref ? (
              <a
                href={phoneHref}
                className="group flex min-w-0 flex-1 items-center gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/25 bg-white/10">
                  <Phone
                    size={15}
                    className="text-white"
                    strokeWidth={2}
                  />
                </div>

                <div className="min-w-0">
                  <span className="block text-[7px] font-bold uppercase tracking-[0.18em] text-red-200">
                    Appelez-nous
                  </span>

                  <span className="mt-1 block truncate text-[12px] font-bold text-white">
                    {phone}
                  </span>
                </div>
              </a>
            ) : (
              <div className="flex-1">
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-red-200">
                  MIRA
                </span>
              </div>
            )}

            <Link
              to="/contact"
              onClick={handleQuoteClick}
              className="group ml-4 flex h-10 w-10 shrink-0 items-center justify-center bg-white text-zinc-950 transition-all duration-300 hover:bg-zinc-950 hover:text-white"
              aria-label="Demander un devis"
            >
              <ArrowUpRight
                size={17}
                strokeWidth={2.2}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </div>
        </div>

        {/* =========================================================
            SECONDARY ARCHITECTURAL STRIP
        ========================================================= */}
        <div className="flex h-[32px] items-center justify-between border-b border-zinc-200 bg-zinc-50 px-10">

          <div className="flex items-center gap-3">
            <span className="h-[5px] w-[5px] bg-red-700" />

            <span className="text-[7px] font-bold uppercase tracking-[0.22em] text-zinc-400">
              Ravalement · Isolation · Rénovation
            </span>
          </div>

          <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-zinc-300">
            Bâtiment & rénovation
          </span>

        </div>
      </div>

      {/* =========================================================
          MOBILE NAVBAR
      ========================================================= */}
      <div className="lg:hidden">

        <div className="flex h-[76px] items-stretch bg-zinc-950">

          {/* MOBILE BRAND */}
          <Link
            to="/"
            onClick={handleLinkClick}
            className="relative flex flex-1 items-center px-5"
          >
            <div className="absolute left-0 top-0 h-full w-[5px] bg-red-700" />

            <div>
              <div className="flex items-center">
                <span className="text-[31px] font-black leading-none tracking-[-0.09em] text-white">
                  MIRA
                </span>

                <span className="ml-2 h-[33px] w-[3px] bg-red-600" />
              </div>

              <div className="mt-1.5 flex items-center">
                <span className="mr-2 h-[2px] w-5 bg-red-600" />

                <span className="text-[6px] font-bold uppercase tracking-[0.28em] text-zinc-500">
                  RAVALEMENT & ITE
                </span>
              </div>
            </div>
          </Link>

          {/* MOBILE PHONE */}
          {phone && phoneHref && (
            <a
              href={phoneHref}
              className="flex w-[52px] items-center justify-center border-l border-white/10 bg-zinc-900 text-white"
              aria-label={`Appeler au ${phone}`}
            >
              <Phone size={17} strokeWidth={1.9} />
            </a>
          )}

          {/* MOBILE MENU */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={
              isOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={isOpen}
            className="flex w-[58px] items-center justify-center bg-red-700 text-white transition-colors hover:bg-red-800"
          >
            {isOpen ? (
              <X size={20} strokeWidth={1.9} />
            ) : (
              <Menu size={20} strokeWidth={1.9} />
            )}
          </button>

        </div>

        {/* =======================================================
            MOBILE DRAWER
        ======================================================= */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen
              ? "max-h-[700px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
        >
          <div className="bg-zinc-950">

            <div className="border-t border-white/10">

              {links.map((link, index) => {
                const isActive =
                  location.pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={handleLinkClick}
                    className={`group flex items-center justify-between border-b border-white/[0.07] px-6 py-[17px] ${
                      isActive
                        ? "bg-white/[0.06]"
                        : ""
                    }`}
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className={`text-[8px] font-bold tracking-[0.2em] ${
                          isActive
                            ? "text-red-500"
                            : "text-zinc-600"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`text-[12px] font-bold uppercase tracking-[0.08em] ${
                          isActive
                            ? "text-white"
                            : "text-zinc-400 group-hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>

                    </div>

                    <ArrowUpRight
                      size={14}
                      className={`${
                        isActive
                          ? "text-red-500"
                          : "text-zinc-700 group-hover:text-red-500"
                      }`}
                    />

                  </Link>
                );
              })}

            </div>

            {/* MOBILE CTA */}
            <div className="p-5">

              <Link
                to="/contact"
                onClick={handleQuoteClick}
                className="group flex h-[52px] items-center justify-between bg-red-700 px-5 text-white transition-colors hover:bg-red-800"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.15em]">
                  Demander un devis gratuit
                </span>

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                  MIRA · BÂTIMENT
                </span>

                <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                  01 — 06
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </header>
  );
}