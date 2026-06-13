"use client";

import React, { useState, FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Linkedin } from "./icons";
import confetti from "canvas-confetti";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSent, setIsSent] = useState(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) return;

		setIsSubmitting(true);

		// Simulate submission delay
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setIsSent(true);

		// Trigger premium confetti burst
		confetti({
			particleCount: 120,
			spread: 70,
			origin: { y: 0.6 },
			colors: ["#ff6b6b", "#ffd3b6", "#ffd93d", "#8b5cf6", "#ec4899"],
		});

		// Reset form
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section
			id="contact"
			className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto"
		>
			<div className="text-center md:text-left mb-16">
				<h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-2">
					{"Let's Create Something Together! 📬"}
				</h2>
				<div className="w-16 h-1 bg-accent mx-auto md:mx-0 rounded-full" />
				<p className="text-sm text-text-muted mt-3 max-w-md mx-auto md:mx-0 text-center md:text-left">
					{
						"Have an opportunity, a project, or just want to say hi? I'd love to hear from you."
					}
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
				{/* Left Column: Form */}
				<div className="lg:col-span-7">
					<div className="glass p-5 sm:p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/5 shadow-md">
						{isSent ? (
							<div className="text-center py-12 space-y-4 animate-fade-in">
								<div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-500 flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
									<Sparkles size={32} />
								</div>
								<h3 className="font-display font-extrabold text-2xl">
									Message Sent Successfully!
								</h3>
								<p className="text-sm text-text-muted max-w-sm mx-auto">
									Thank you so much for reaching out! 🌸 I will review your
									message and get back to you as soon as possible.
								</p>
								<button
									onClick={() => setIsSent(false)}
									className="mt-6 text-xs font-bold uppercase tracking-wider text-accent hover:text-accent-hover transition-colors cursor-pointer"
								>
									Send another message
								</button>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Name Field */}
								<div className="relative">
									<input
										type="text"
										id="name"
										required
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										placeholder=" "
										className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors peer"
									/>
									<label
										htmlFor="name"
										className="absolute left-5 top-4 text-xs font-semibold text-text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-bg-base peer-focus:px-2 -top-2.5 bg-bg-base px-2"
									>
										Your Name
									</label>
								</div>

								{/* Email Field */}
								<div className="relative">
									<input
										type="email"
										id="email"
										required
										value={formData.email}
										onChange={(e) =>
											setFormData({ ...formData, email: e.target.value })
										}
										placeholder=" "
										className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors peer"
									/>
									<label
										htmlFor="email"
										className="absolute left-5 top-4 text-xs font-semibold text-text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-bg-base peer-focus:px-2 -top-2.5 bg-bg-base px-2"
									>
										Your Email
									</label>
								</div>

								{/* Subject Field */}
								<div className="relative">
									<input
										type="text"
										id="subject"
										value={formData.subject}
										onChange={(e) =>
											setFormData({ ...formData, subject: e.target.value })
										}
										placeholder=" "
										className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors peer"
									/>
									<label
										htmlFor="subject"
										className="absolute left-5 top-4 text-xs font-semibold text-text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-bg-base peer-focus:px-2 -top-2.5 bg-bg-base px-2"
									>
										Subject
									</label>
								</div>

								{/* Message Field */}
								<div className="relative">
									<textarea
										id="message"
										required
										rows={4}
										value={formData.message}
										onChange={(e) =>
											setFormData({ ...formData, message: e.target.value })
										}
										placeholder=" "
										className="w-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-accent transition-colors peer resize-none"
									/>
									<label
										htmlFor="message"
										className="absolute left-5 top-4 text-xs font-semibold text-text-muted transition-all duration-300 pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent peer-focus:bg-bg-base peer-focus:px-2 -top-2.5 bg-bg-base px-2"
									>
										Your Message
									</label>
								</div>

								{/* Submit Button */}
								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:translate-y-0"
								>
									{isSubmitting ? (
										<span className="flex items-center gap-2">
											{/* Animated plane takeoff spacer */}
											<span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
											<span>Sending...</span>
										</span>
									) : (
										<>
											<Send size={16} />
											<span>Send Message</span>
										</>
									)}
								</button>
							</form>
						)}
					</div>
				</div>

				{/* Right Column: Contact Cards */}
				<div className="lg:col-span-5 space-y-6">
					{/* Card: Email */}
					<div className="glass p-5 rounded-3xl border border-black/5 dark:border-white/5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent shrink-0">
							<Mail size={22} />
						</div>
						<div>
							<p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
								Email Directly
							</p>
							<a
								href="mailto:poojabhanushali1401@gmail.com"
								className="font-display font-bold text-base hover:text-accent transition-colors block break-all mt-1"
							>
								poojabhanushali1401@gmail.com
							</a>
						</div>
					</div>

					{/* Card: Phone */}
					<div className="glass p-5 rounded-3xl border border-black/5 dark:border-white/5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent shrink-0">
							<Phone size={22} />
						</div>
						<div>
							<p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
								Call / WhatsApp
							</p>
							<a
								href="tel:+919372601570"
								className="font-display font-bold text-base hover:text-accent transition-colors block mt-1"
							>
								+91 9372 601 570
							</a>
						</div>
					</div>

					{/* Card: Location */}
					<div className="glass p-5 rounded-3xl border border-black/5 dark:border-white/5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent shrink-0">
							<MapPin size={22} />
						</div>
						<div>
							<p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
								Current Location
							</p>
							<p className="font-display font-bold text-base mt-1">
								Kalyan, Thane, Maharashtra
							</p>
						</div>
					</div>

					{/* Card: Social Link */}
					<div className="glass p-5 rounded-3xl border border-black/5 dark:border-white/5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
						<div className="w-12 h-12 rounded-2xl bg-accent-soft flex items-center justify-center text-accent shrink-0">
							<Linkedin size={22} />
						</div>
						<div>
							<p className="text-[10px] font-bold text-text-muted uppercase tracking-wider">
								LinkedIn Profile
							</p>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="font-display font-bold text-base hover:text-accent transition-colors block mt-1"
							>
								Pooja Bhanushali
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
