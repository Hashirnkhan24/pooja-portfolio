"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";

interface NavbarProps {
	darkMode: boolean;
	toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ name: "About", href: "#about" },
		{ name: "Experience", href: "#experience" },
		{ name: "Education", href: "#education" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		// { name: "Dancing 💃", href: "#dancing" },
		{ name: "Contact", href: "#contact" },
	];

	return (
		<>
			<nav
				className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-full transition-all duration-300 ${
					scrolled
						? "glass shadow-lg py-3 px-6"
						: "bg-transparent py-5 px-6 border-b border-transparent"
				}`}
			>
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Link href="#" className="flex items-center gap-2 group">
						<span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
							PB
						</span>
						<span className="font-display font-bold text-lg tracking-tight hidden sm:block group-hover:text-accent transition-colors duration-300">
							Pooja Bhanushali
						</span>
					</Link>

					{/* Desktop Links */}
					<div className="hidden md:flex items-center gap-8 font-medium">
						{navItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm hover:text-accent transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
							>
								{item.name}
							</a>
						))}
					</div>

					{/* Actions (Dark Mode, Resume, Mobile Menu Toggle) */}
					<div className="flex items-center gap-3">
						{/* Dark Mode Toggle */}
						<button
							onClick={toggleDarkMode}
							className="p-2.5 rounded-full hover:bg-accent-soft text-text-base hover:text-accent transition-all duration-300 shadow-sm border border-black/5 dark:border-white/5 cursor-pointer"
							aria-label="Toggle Theme"
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>

						{/* Resume Page Link */}
						<Link
							href="/resume"
							className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
						>
							<FileText size={16} />
							<span>Resume</span>
						</Link>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 md:hidden text-text-base hover:text-accent transition-colors duration-300 cursor-pointer"
							aria-label="Toggle Menu"
						>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Links Panel */}
			{isOpen && (
				<div className="fixed inset-0 w-screen h-screen bg-bg-base z-[100] flex flex-col items-center justify-center gap-6 p-8 md:hidden animate-fade-in">
					{/* Close Button inside menu */}
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-6 right-6 p-2.5 rounded-full bg-black/5 dark:bg-white/5 text-text-base hover:text-accent transition-all duration-300 shadow-sm border border-black/5 dark:border-white/5 cursor-pointer"
						aria-label="Close Menu"
					>
						<X size={24} />
					</button>

					{/* Logo in mobile menu */}
					<span className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg mb-4">
						PB
					</span>

					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="text-2xl font-bold hover:text-accent transition-colors duration-300 py-2"
						>
							{item.name}
						</a>
					))}
					<Link
						href="/resume"
						onClick={() => setIsOpen(false)}
						className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md transition-colors duration-300 mt-4 w-full max-w-xs"
					>
						<FileText size={20} />
						<span>View Resume</span>
					</Link>
				</div>
			)}
		</>
	);
}
