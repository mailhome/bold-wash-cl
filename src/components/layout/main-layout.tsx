import type { ReactNode } from "react";
import Footer from "./footer";
import HeaderNavbar from "./header-navbar";

interface MainLayoutProps {
    children: ReactNode;
}
export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col bg-[#F5F5F7] min-h-screen">
        <HeaderNavbar />
        <main className="flex-1">
            { children }
        </main>
        <Footer />
    </div>
  )
}
