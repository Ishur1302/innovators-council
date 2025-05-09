// src/components/Navbar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { to: "/", label: "Dashboard" },
    { to: "/submit", label: "Submit Query" },
    { to: "/council", label: "Agent Council" },
    { to: "/yolov8", label: "YOLOv8 Demo" },
    { to: "/history", label: "Results History" },
];

const Navbar: React.FC = () => {
    const location = useLocation();
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-glass backdrop-blur-md shadow-3d rounded-b-5xl mx-auto max-w-6xl flex items-center justify-between px-8 py-4 mt-2 border border-white border-opacity-40">
      <span className="text-3xl font-extrabold font-display bg-gradient-to-r from-teal-500 to-grape-500 text-transparent bg-clip-text drop-shadow-neon tracking-wide flex items-center gap-2">
        <span className="inline-block animate-bounce">🧠</span> Innovators Hub
      </span>
            <div className="flex space-x-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`font-display px-4 py-2 rounded-3xl text-lg transition
              ${location.pathname === link.to
                            ? "bg-gradient-to-r from-teal-500 to-grape-500 text-white shadow-neon"
                            : "text-grape-700 hover:bg-teal-100 hover:text-teal-700"}
            `}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
