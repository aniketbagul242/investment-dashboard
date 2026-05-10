"use client";

import "./globals.css";

import { useSelector } from "react-redux";
import ReduxProvider from "../store/Provider";


function LayoutContent({ children }) {
  const darkMode = useSelector(
    (state) => state.ui.darkMode
  );

  return (
    <body
      className={
        darkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }
    >
      {children}
    </body>
  );
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <LayoutContent>
          {children}
        </LayoutContent>
      </ReduxProvider>
    </html>
  );
}