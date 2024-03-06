import React, { useState, useEffect } from "react";
import WatchlistSwitcher from "@/components/watchlist/watchlistSwitcher/WatchlistSwitcher";
import { Inter } from "next/font/google";
import type { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Watchlist",
  description: "Users watchlist",
};

function WatchlistLayout({ children }: { children: React.ReactNode }) {



  return (
    <section className="inner-page">
      <WatchlistSwitcher />
      {children}
    </section>
  );
}

export default WatchlistLayout;
