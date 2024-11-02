"use client";

import React from "react";
import Link from "next/link";
import Head from 'next/head';

import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <>
        <Head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4595836161756268"
          crossOrigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-4595836161756268",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </Head>
    <header className="h-fit w-full">
      <nav
        className={cn(
          "z-50",
          "flex h-[3.5rem] px-4",
          "w-full items-center border-b bg-accent/20"
        )}
      >
        <div className="hidden select-none text-xl font-extrabold uppercase md:block">
          insta video Downloader
        </div>
{/*         <MobileNav className="md:hidden" /> */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden items-center gap-4 text-lg sm:gap-8 sm:pr-8 md:flex">
{/*             <Link href="/" className="hover:underline">
              Home
            </Link> */}
{/*             <Link
              target="_blank"
              href=""
              className="hover:underline"
            >
              Github
            </Link>{" "} */}
{/*             <Link
              target="_blank"
              href="https://github.com/riad-azz"
              className="hover:underline"
            >
              Creator
            </Link> */}
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="h-8 w-full bg-background/50 text-center text-secondary-foreground">
      <div className="flex items-center justify-between border-t border-input px-4 py-2">
        <div aria-label="Disclaimer" className="text-sm font-semibold">
          We are not affiliated with Instagram or Meta
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <span aria-hidden="true" className="mx-2 select-none">
            |
          </span>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
