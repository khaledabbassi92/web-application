"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
<<<<<<< HEAD
=======
  ChevronRight,
>>>>>>> 552a0ac (Update web application)
} from "lucide-react";

export default function Footer() {
  const [textData, setTextData] = useState({
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    const fetchTextData = async () => {
      try {
        const response = await fetch("/api/text");

        if (!response.ok) {
          throw new Error("Failed to fetch text data");
        }

        const result = await response.json();

        if (result.success && result.data) {
          setTextData({
            phone: result.data.phone || "",
            email: result.data.email || "",
            address: result.data.address || "",
          });
        }
      } catch (error) {
        console.error("Failed to fetch company information:", error);
      }
    };

    fetchTextData();
  }, []);

<<<<<<< HEAD
  /* Prestations & Services with #id anchors */
=======
>>>>>>> 552a0ac (Update web application)
  const services = [
    { label: "Ravalement de façade", href: "/services#ravalement-facade" },
    { label: "Isolation thermique (ITE)", href: "/services#isolation-thermique" },
    { label: "Enduits & finitions", href: "/services#enduits-finitions" },
    { label: "Réparation & traitement", href: "/services#reparation-supports" },
    { label: "Notre méthode & processus", href: "/services#methode" },
  ];

<<<<<<< HEAD
  /* Informations sections with #id anchors */
=======
>>>>>>> 552a0ac (Update web application)
  const informations = [
    { label: "À propos de notre équipe", href: "/informations#a-propos" },
    { label: "Garanties & assurance décennale", href: "/informations#garanties" },
    { label: "Informations réglementaires", href: "/informations#reglementaire" },
    { label: "Demander un devis gratuit", href: "/contact" },
  ];

  return (
<<<<<<< HEAD
    <footer className="relative bg-white text-zinc-600 border-t border-zinc-200">
      
      {/* Top Accent Line */}
      <div className="w-full h-[3px] bg-red-600" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">

        {/* TOP CTA STRIP */}
        <div className="py-10 border-b border-zinc-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-red-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-zinc-900">Travaux sous Garantie Décennale</p>
              <p className="text-xs text-zinc-400">Entreprise certifiée & conformité aux normes BTP</p>
=======
    <footer className="relative border-t border-zinc-200 bg-white text-zinc-600">

      {/* =========================================================
          TOP ACCENT
      ========================================================= */}
      <div className="h-[3px] w-full bg-red-700" />

      <div className="mx-auto max-w-[1580px] px-5 sm:px-8 lg:px-10 xl:px-12">

        {/* =========================================================
            CTA / TRUST STRIP
        ========================================================= */}
        <div className="flex flex-col justify-between gap-7 border-b border-zinc-100 py-9 md:flex-row md:items-center lg:py-10">

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-red-100 bg-red-50 text-red-700">
              <ShieldCheck size={19} strokeWidth={1.9} />
            </div>

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.05em] text-zinc-900">
                Travaux sous garantie décennale
              </p>

              <p className="mt-1 text-[11px] text-zinc-400">
                Un engagement professionnel pour vos travaux de rénovation
              </p>
>>>>>>> 552a0ac (Update web application)
            </div>
          </div>

          <a
            href="/contact"
<<<<<<< HEAD
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            Obtenir un devis gratuit
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* MAIN FOOTER CONTENT */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* 1. BRAND BLOCK: AAA centered on top of MIRA with identical font size */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="/" className="inline-block group">
                <div className="inline-flex flex-col items-center select-none">
                  {/* TOP: AAA (Same size, centered) */}
                  <span className="text-[32px] font-black text-center text-red-600 tracking-tight leading-none">
                    AAA
                  </span>
                  {/* BOTTOM: MIRA (Same size, centered) */}
                  <span className="text-[32px] font-black text-center text-zinc-950 tracking-tight leading-none group-hover:text-red-600 transition-colors">
                    MIRA
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <span className="w-5 h-[2px] bg-red-600" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-zinc-400">
                    Bâtiment & Rénovation
                  </span>
                </div>
              </a>

              <p className="mt-6 text-sm leading-relaxed text-zinc-500 max-w-sm">
                Spécialistes en ravalement de façades, isolation thermique extérieure (ITE), 
                enduits décoratifs et rénovation générale du bâti.
              </p>
            </div>

            {/* Address */}
            {textData.address && (
              <div className="mt-8 pt-6 border-t border-zinc-100 flex items-start gap-3">
                <MapPin size={16} className="text-red-600 shrink-0 mt-1" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-0.5">
                    Siège social
                  </span>
                  <p className="text-xs leading-relaxed text-zinc-600 whitespace-pre-line">
=======
            className="group inline-flex w-fit items-center gap-4 bg-red-700 px-6 py-3.5 text-white transition-all duration-300 hover:bg-red-800"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.12em]">
              Obtenir un devis gratuit
            </span>

            <span className="flex h-6 w-6 items-center justify-center border border-white/25 bg-white/10">
              <ArrowUpRight
                size={14}
                strokeWidth={2.3}
                className="transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
              />
            </span>
          </a>
        </div>

        {/* =========================================================
            MAIN FOOTER
        ========================================================= */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">

          {/* =======================================================
              BRAND
          ======================================================= */}
          <div className="lg:col-span-4">

            <a
              href="/"
              className="group inline-block"
            >
              <div className="relative flex flex-col select-none">

                {/* WORDMARK */}
                <div className="flex items-center">
                  <span className="text-[38px] font-black leading-none tracking-[-0.085em] text-zinc-950 transition-colors duration-300 group-hover:text-red-700 sm:text-[42px]">
                    MIRA
                  </span>

                  <span className="ml-3 h-[39px] w-[4px] bg-red-700 transition-all duration-300 group-hover:h-[46px]" />
                </div>

                {/* FIELD */}
                <div className="mt-2.5 flex items-center">
                  <span className="mr-3 h-[2px] w-[33px] bg-red-700" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.32em] text-zinc-400">
                    RAVALEMENT & ITE
                  </span>
                </div>

                <span className="absolute -bottom-[10px] right-0 text-[6px] font-bold uppercase tracking-[0.28em] text-zinc-300">
                  BÂTIMENT
                </span>
              </div>
            </a>

            <p className="mt-8 max-w-sm text-[13px] leading-[1.8] text-zinc-500">
              Spécialistes en ravalement de façades, isolation thermique
              extérieure (ITE), enduits décoratifs et rénovation générale
              du bâti.
            </p>

            {/* ADDRESS */}
            {textData.address && (
              <div className="mt-8 flex items-start gap-3 border-t border-zinc-100 pt-6">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-zinc-50 text-red-700">
                  <MapPin size={14} strokeWidth={1.9} />
                </div>

                <div>
                  <span className="block text-[8px] font-bold uppercase tracking-[0.17em] text-zinc-400">
                    Siège social
                  </span>

                  <p className="mt-1.5 whitespace-pre-line text-[11px] leading-relaxed text-zinc-600">
>>>>>>> 552a0ac (Update web application)
                    {textData.address}
                  </p>
                </div>
              </div>
            )}
          </div>

<<<<<<< HEAD
          {/* 2. SERVICES SECTION */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-900">
                Nos Prestations
              </h3>
            </div>

            <ul className="space-y-3">
=======
          {/* =======================================================
              SERVICES
          ======================================================= */}
          <div className="lg:col-span-3">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-red-700" />

              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-900">
                Nos prestations
              </h3>
            </div>

            <ul className="space-y-3.5">
>>>>>>> 552a0ac (Update web application)
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
<<<<<<< HEAD
                    className="group inline-flex items-center text-sm text-zinc-500 hover:text-red-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-red-600 transition-colors mr-2.5 shrink-0" />
                    <span>{service.label}</span>
=======
                    className="group flex items-center text-[12px] text-zinc-500 transition-colors duration-200 hover:text-red-700"
                  >
                    <span className="mr-3 h-[4px] w-[4px] shrink-0 bg-zinc-300 transition-colors duration-200 group-hover:bg-red-700" />

                    <span>{service.label}</span>

                    <ChevronRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
>>>>>>> 552a0ac (Update web application)
                  </a>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* 3. INFORMATIONS SECTION */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-900">
=======
          {/* =======================================================
              INFORMATION
          ======================================================= */}
          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-red-700" />

              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-900">
>>>>>>> 552a0ac (Update web application)
                Informations
              </h3>
            </div>

<<<<<<< HEAD
            <ul className="space-y-3">
=======
            <ul className="space-y-3.5">
>>>>>>> 552a0ac (Update web application)
              {informations.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
<<<<<<< HEAD
                    className="group inline-flex items-center text-sm text-zinc-500 hover:text-red-600 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 group-hover:bg-red-600 transition-colors mr-2.5 shrink-0" />
                    <span>{item.label}</span>
=======
                    className="group flex items-center text-[12px] text-zinc-500 transition-colors duration-200 hover:text-red-700"
                  >
                    <span className="mr-3 h-[4px] w-[4px] shrink-0 bg-zinc-300 transition-colors duration-200 group-hover:bg-red-700" />

                    <span>{item.label}</span>

                    <ChevronRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
>>>>>>> 552a0ac (Update web application)
                  </a>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* 4. CONTACT & REACH US */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-600" />
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-900">
                Contact Direct
              </h3>
            </div>

            <div className="space-y-3">
              {/* Phone Card */}
              {textData.phone && (
                <a
                  href={`tel:${textData.phone.replace(/\s+/g, "")}`}
                  className="group flex items-center gap-3.5 p-3.5 bg-zinc-50 hover:bg-red-50/50 border border-zinc-200/80 hover:border-red-600/30 transition-all"
                >
                  <div className="w-8 h-8 bg-white border border-zinc-200 flex items-center justify-center text-red-600 shrink-0 shadow-2xs">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider font-semibold text-zinc-400">
                      Appelez-nous
                    </span>
                    <span className="block text-xs font-bold text-zinc-900 group-hover:text-red-600 transition-colors">
=======
          {/* =======================================================
              CONTACT
          ======================================================= */}
          <div className="lg:col-span-3">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-red-700" />

              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-900">
                Contact direct
              </h3>
            </div>

            <div className="space-y-2.5">

              {/* PHONE */}
              {textData.phone && (
                <a
                  href={`tel:${textData.phone.replace(/[^0-9+]/g, "")}`}
                  className="group flex items-center gap-3.5 border border-zinc-200 bg-zinc-50 p-3.5 transition-all duration-200 hover:border-red-200 hover:bg-red-50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-200 bg-white text-red-700 transition-colors group-hover:border-red-200">
                    <Phone size={14} strokeWidth={1.9} />
                  </div>

                  <div>
                    <span className="block text-[8px] font-bold uppercase tracking-[0.17em] text-zinc-400">
                      Téléphone
                    </span>

                    <span className="mt-1 block text-[12px] font-bold text-zinc-900 transition-colors group-hover:text-red-700">
>>>>>>> 552a0ac (Update web application)
                      {textData.phone}
                    </span>
                  </div>
                </a>
              )}

<<<<<<< HEAD
              {/* Email Card */}
              {textData.email && (
                <a
                  href={`mailto:${textData.email}`}
                  className="group flex items-center gap-3.5 p-3.5 bg-zinc-50 hover:bg-red-50/50 border border-zinc-200/80 hover:border-red-600/30 transition-all"
                >
                  <div className="w-8 h-8 bg-white border border-zinc-200 flex items-center justify-center text-red-600 shrink-0 shadow-2xs">
                    <Mail size={14} />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] uppercase tracking-wider font-semibold text-zinc-400">
                      Email
                    </span>
                    <span className="block text-xs font-bold text-zinc-900 group-hover:text-red-600 transition-colors truncate">
=======
              {/* EMAIL */}
              {textData.email && (
                <a
                  href={`mailto:${textData.email}`}
                  className="group flex items-center gap-3.5 border border-zinc-200 bg-zinc-50 p-3.5 transition-all duration-200 hover:border-red-200 hover:bg-red-50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-zinc-200 bg-white text-red-700 transition-colors group-hover:border-red-200">
                    <Mail size={14} strokeWidth={1.9} />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-[8px] font-bold uppercase tracking-[0.17em] text-zinc-400">
                      Email
                    </span>

                    <span className="mt-1 block truncate text-[12px] font-bold text-zinc-900 transition-colors group-hover:text-red-700">
>>>>>>> 552a0ac (Update web application)
                      {textData.email}
                    </span>
                  </div>
                </a>
              )}
<<<<<<< HEAD
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="py-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© 2026 AAA MIRA. Tous droits réservés.</span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span>RCS Créteil 928 791 672</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/mentions-legales" className="hover:text-red-600 transition-colors">
              Mentions légales
            </a>
            <a href="/confidentialite" className="hover:text-red-600 transition-colors">
=======

            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
        <div className="flex flex-col gap-4 border-t border-zinc-100 py-6 text-[9px] text-zinc-400 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span>
              © 2026 MIRA. Tous droits réservés.
            </span>

            <span className="hidden text-zinc-300 sm:inline">
              /
            </span>

            <span>
              RCS Créteil 928 791 672
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/mentions-legales"
              className="transition-colors hover:text-red-700"
            >
              Mentions légales
            </a>

            <a
              href="/confidentialite"
              className="transition-colors hover:text-red-700"
            >
>>>>>>> 552a0ac (Update web application)
              Confidentialité
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}