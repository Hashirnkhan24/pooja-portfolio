"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Dancing from "@/components/Dancing";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const [danceMode, setDanceMode] = useState(false);

	// Sync theme with local storage and system media query on mount
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		const systemPrefersDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		const shouldBeDark =
			storedTheme === "dark" || (!storedTheme && systemPrefersDark);

		// Defer state update to avoid synchronous cascading renders inside mount effect
		setTimeout(() => {
			setDarkMode(shouldBeDark);
			if (shouldBeDark) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}, 0);
	}, []);

	const toggleDarkMode = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setDarkMode(true);
		}
	};

	const toggleDanceMode = () => {
		if (danceMode) {
			document.documentElement.classList.remove("dance-mode");
			setDanceMode(false);
		} else {
			document.documentElement.classList.add("dance-mode");
			setDanceMode(true);
		}
	};

	return (
		<main className="flex-1 flex flex-col w-full relative">
			{/* Floating Navbar */}
			<Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

			{/* Hero Intro */}
			<Hero />

			{/* Biography & Traits */}
			<About />

			{/* Timeline Experience */}
			<Experience />

			{/* Academic Qualifications & Verified Credentials */}
			<Education />

			{/* Skills Bento Grid & Draggable Bubbles */}
			<Skills />

			{/* Academic/Professional Projects */}
			<Projects />

			{/* Creative Hobby & Live Canvas Wave Toggler */}
			{/* <Dancing
        danceMode={danceMode}
        toggleDanceMode={toggleDanceMode}
      /> */}

			{/* Form Submission Channels */}
			<Contact />

			{/* Generative Chat Assist Bubble */}
			<ChatBot />

			{/* Footer Branding & Quick Contacts */}
			<Footer />
		</main>
	);
}
