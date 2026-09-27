"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  ChevronRight,
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

  const services = [
    { label: "Ravalement de façade", href: "/services#ravalement-facade" },
    { label: "Isolation thermique (ITE)", href: "/services#isolation-thermique" },
    { label: "Enduits & finitions", href: "/services#enduits-finitions" },
    { label: "Réparation & traitement", href: "/services#reparation-supports" },
    { label: "Notre méthode & processus", href: "/services#methode" },
  ];

  const informations = [
    { label: "À propos de notre équipe", href: "/informations#a-propos" },
    { label: "Garanties & assurance décennale", href: "/informations#garanties" },
    { label: "Informations réglementaires", href: "/informations#reglementaire" },
    { label: "Demander un devis gratuit", href: "/contact" },
  ];

  return (
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
            </div>
          </div>

          <a
            href="/contact"
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
                    {textData.address}
                  </p>
                </div>
              </div>
            )}
          </div>

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
              {services.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="group flex items-center text-[12px] text-zinc-500 transition-colors duration-200 hover:text-red-700"
                  >
                    <span className="mr-3 h-[4px] w-[4px] shrink-0 bg-zinc-300 transition-colors duration-200 group-hover:bg-red-700" />

                    <span>{service.label}</span>

                    <ChevronRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =======================================================
              INFORMATION
          ======================================================= */}
          <div className="lg:col-span-2">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-red-700" />

              <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-900">
                Informations
              </h3>
            </div>

            <ul className="space-y-3.5">
              {informations.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center text-[12px] text-zinc-500 transition-colors duration-200 hover:text-red-700"
                  >
                    <span className="mr-3 h-[4px] w-[4px] shrink-0 bg-zinc-300 transition-colors duration-200 group-hover:bg-red-700" />

                    <span>{item.label}</span>

                    <ChevronRight
                      size={12}
                      className="ml-1 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
                      {textData.phone}
                    </span>
                  </div>
                </a>
              )}

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
                      {textData.email}
                    </span>
                  </div>
                </a>
              )}

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
              Confidentialité
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
