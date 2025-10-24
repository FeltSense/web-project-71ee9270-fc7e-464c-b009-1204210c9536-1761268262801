'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg" id="main-nav">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between transition-all duration-300 ease-in-out h-20" id="nav-content">
      {/* Logo */}
      <div className="flex items-center space-x-3 group">
        <div className="relative w-10 h-10 transition-all duration-300 ease-in-out" id="logo-container">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-xl z-10">IS</span>
          </div>
        </div>
        <span className="text-white font-bold text-xl transition-all duration-300 ease-in-out" id="brand-name">
          Imaginary Space
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#home" className="relative px-4 py-2 text-white font-medium transition-all duration-300 ease-in-out hover:text-cyan-300 group">
          <span className="relative z-10">Home</span>
          <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </a>
        <a href="#services" className="relative px-4 py-2 text-white font-medium transition-all duration-300 ease-in-out hover:text-cyan-300 group">
          <span className="relative z-10">Services</span>
          <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </a>
        <a href="#about" className="relative px-4 py-2 text-white font-medium transition-all duration-300 ease-in-out hover:text-cyan-300 group">
          <span className="relative z-10">About</span>
          <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </a>
        <a href="#pricing" className="relative px-4 py-2 text-white font-medium transition-all duration-300 ease-in-out hover:text-cyan-300 group">
          <span className="relative z-10">Pricing</span>
          <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
        </a>
        <a href="#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300" id="mobile-menu-button">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-gradient-to-b from-indigo-900 to-purple-900 border-t border-white/10" id="mobile-menu">
    <div className="px-4 py-4 space-y-2">
      <a href="#home" className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-white font-medium hover:bg-white/10 rounded-lg transition-all duration-300 transform hover:translate-x-2">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 mt-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg text-center hover:shadow-lg transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const nav = document.getElementById('main-nav');
      const navContent = document.getElementById('nav-content');
      const brandName = document.getElementById('brand-name');
      const logoContainer = document.getElementById('logo-container');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.style.height = '4rem';
          brandName.style.fontSize = '1.125rem';
          logoContainer.style.width = '2rem';
          logoContainer.style.height = '2rem';
          nav.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
          navContent.style.height = '5rem';
          brandName.style.fontSize = '1.25rem';
          logoContainer.style.width = '2.5rem';
          logoContainer.style.height = '2.5rem';
          nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 opacity-40">
    <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
    <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
  </div>

  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float opacity-60"></div>
    <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full animate-float-delayed opacity-40"></div>
    <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float opacity-50"></div>
    <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-fuchsia-300 rounded-full animate-float-delayed opacity-60"></div>
    <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-40"></div>
  </div>

  {/* Content Container */}
  <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
    
    {/* Floating Badge */}
    <div className="mb-8 animate-fade-in-down">
      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-purple-200 text-sm font-medium shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
        </span>
        Marketing That Transcends Reality
      </span>
    </div>

    {/* Main Headline - Floating Text Elements */}
    <div className="text-center max-w-5xl mx-auto space-y-6 mb-8">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-fade-in-up">
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white animate-gradient-x">
          Imaginary Space
        </span>
      </h1>
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 animate-fade-in-up animation-delay-200 leading-tight">
        Where Brands Become
        <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 animate-gradient-x">
          Unforgettable Experiences
        </span>
      </h2>
    </div>

    {/* Description */}
    <p className="text-lg md:text-xl text-purple-100/80 text-center max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-400">
      We don't just create campaigns—we architect immersive brand universes that captivate audiences, 
      drive conversions, and transform your marketing from noise into <span className="text-cyan-300 font-semibold">legendary</span>.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-600">
      <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
        <span className="relative z-10 flex items-center gap-2">
          Launch Your Universe
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
      
      <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105">
        <span className="flex items-center gap-2">
          Explore Our Work
          <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </span>
      </button>
    </div>

    {/* Stats Bar */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
      <div className="text-center group cursor-default">
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">
          500+
        </div>
        <div className="text-sm text-purple-200/70 font-medium">Brands Transformed</div>
      </div>
      <div className="text-center group cursor-default">
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 to-purple-400 mb-2 group-hover:scale-110 transition-transform">
          2.5B+
        </div>
        <div className="text-sm text-purple-200/70 font-medium">Impressions Generated</div>
      </div>
      <div className="text-center group cursor-default">
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400 mb-2 group-hover:scale-110 transition-transform">
          340%
        </div>
        <div className="text-sm text-purple-200/70 font-medium">Avg ROI Increase</div>
      </div>
      <div className="text-center group cursor-default">
        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-fuchsia-400 mb-2 group-hover:scale-110 transition-transform">
          50+
        </div>
        <div className="text-sm text-purple-200/70 font-medium">Industry Awards</div>
      </div>
    </div>
  </div>

  {/* Bottom Gradient Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>

  <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    @keyframes fade-in-down {
      0% { opacity: 0; transform: translateY(-20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-blob { animation: blob 7s infinite; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-4000 { animation-delay: 4s; }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-float-delayed { animation: float 3s ease-in-out infinite 1.5s; }
    .animate-gradient-x { 
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    .animate-fade-in-down { animation: fade-in-down 0.8s ease-out; }
    .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
    .animation-delay-200 { animation-delay: 0.2s; animation-fill-mode: both; }
    .animation-delay-400 { animation-delay: 0.4s; animation-fill-mode: both; }
    .animation-delay-600 { animation-delay: 0.6s; animation-fill-mode: both; }
    .animation-delay-800 { animation-delay: 0.8s; animation-fill-mode: both; }
  `}</style>
</section>
      
      {/* Services Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-6 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Imaginary Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Award-winning creative portfolio with a proven track record of delivering measurable business results through collaborative innovation
      </p>
    </div>

    {/* Hover Reveal Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1 - Strategy */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-8 flex flex-col items-center justify-center shadow-2xl border border-purple-400/30">
            <div className="w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Creative Strategy</h3>
            <p className="text-purple-200 text-center mt-3 text-sm">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Creative Strategy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full-service creative capabilities from strategy to execution. Our experienced team of strategists develops data-driven campaigns that resonate.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Brand positioning & messaging</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Market research & insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Campaign architecture</span>
                </li>
              </ul>
            </div>
            <div className="text-purple-600 font-semibold text-sm">Fast turnaround guaranteed</div>
          </div>
        </div>
      </div>

      {/* Card 2 - Design */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-pink-600 to-pink-800 p-8 flex flex-col items-center justify-center shadow-2xl border border-pink-400/30">
            <div className="w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Brand Design</h3>
            <p className="text-pink-200 text-center mt-3 text-sm">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-pink-900 mb-4">Brand Design</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Award-winning creative portfolio across multiple industries. Our designers craft visually stunning experiences that drive engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Logo & identity systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Print & digital collateral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Packaging & environmental</span>
                </li>
              </ul>
            </div>
            <div className="text-pink-600 font-semibold text-sm">Client vision first approach</div>
          </div>
        </div>
      </div>

      {/* Card 3 - Digital */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col items-center justify-center shadow-2xl border border-blue-400/30">
            <div className="w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Digital Marketing</h3>
            <p className="text-blue-200 text-center mt-3 text-sm">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Measurable business results through integrated digital campaigns. Our team delivers ROI-focused solutions with fast turnaround times.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Social media management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>SEO & content marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>PPC & paid advertising</span>
                </li>
              </ul>
            </div>
            <div className="text-blue-600 font-semibold text-sm">Proven track record</div>
          </div>
        </div>
      </div>

      {/* Card 4 - Production */}
      <div className="group relative h-96 perspective-1000">
        <div className="relative h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
          {/* Front Face */}
          <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 flex flex-col items-center justify-center shadow-2xl border border-indigo-400/30">
            <div className="w-20 h-20 mb-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white text-center">Content Production</h3>
            <p className="text-indigo-200 text-center mt-3 text-sm">Hover to explore</p>
          </div>
          
          {/* Back Face */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-white p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Content Production</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Collaborative process with experienced creators. We produce high-quality content without compromising on speed or quality standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Video & photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Animation & motion graphics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Copywriting & storytelling</span>
                </li>
              </ul>
            </div>
            <div className="text-indigo-600 font-semibold text-sm">Quality without compromise</div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-gray-300 mb-6 text-lg">
        Ready to transform your brand with Imaginary Space?
      </p>
      <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
        Start Your Project Today
      </button>
    </div>
  </div>

  <style jsx>{`
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
    .group:hover .group-hover\:rotate-y-180 {
      transform: rotateY(180deg);
    }
  `}</style>
</section>
      
      {/* Testimonials Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4">
        Client Success Stories
      </h2>
      <p className="text-xl text-purple-200 max-w-2xl mx-auto">
        See how Imaginary Space transforms marketing campaigns with real results
      </p>
    </div>

    {/* Video Testimonials Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="group relative">
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50">
          {/* Video Thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=700&fit=crop" 
              alt="Sarah Chen"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-xl">
              <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" 
                  alt="Sarah Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Sarah Chen</h3>
                <p className="text-sm text-purple-200">CMO, TechFlow Inc.</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2">
              "Imaginary Space increased our conversion rates by 340% in just 3 months. Their data-driven approach is unmatched."
            </p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
            2:15
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="group relative">
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50">
          {/* Video Thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=700&fit=crop" 
              alt="Marcus Rodriguez"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-xl">
              <svg className="w-8 h-8 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
                  alt="Marcus Rodriguez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Marcus Rodriguez</h3>
                <p className="text-sm text-blue-200">Founder, GrowthLab</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2">
              "Working with Imaginary Space transformed our entire marketing strategy. ROI jumped 5x within the first quarter."
            </p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
            1:45
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative">
        <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-600 to-teal-600 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-emerald-500/50">
          {/* Video Thumbnail */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=700&fit=crop" 
              alt="Emily Thompson"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white shadow-xl">
              <svg className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden mr-3">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop" 
                  alt="Emily Thompson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Emily Thompson</h3>
                <p className="text-sm text-emerald-200">VP Marketing, Nexus Digital</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-2">
              "Imaginary Space doesn't just deliver campaigns—they deliver results. Our brand awareness doubled in 6 months."
            </p>
            <div className="flex items-center text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
            3:02
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-purple-200 mb-6 text-lg">
        Join 500+ marketing teams who trust Imaginary Space
      </p>
      <button className="bg-white text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
        Watch All Success Stories
      </button>
    </div>
  </div>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Imaginary Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Pricing</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your marketing strategy with our comprehensive platform
      </p>
    </div>

    {/* Feature Matrix Grid */}
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left: Pricing Card */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-12 text-white flex flex-col justify-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
              🚀 PROFESSIONAL PLAN
            </div>
            <div className="flex items-baseline mb-4">
              <span className="text-6xl font-bold">$79</span>
              <span className="text-2xl ml-2 opacity-90">/month</span>
            </div>
            <p className="text-lg opacity-90">Everything you need to dominate your market</p>
          </div>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="w-full bg-white text-purple-600 py-5 px-8 rounded-xl font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl mb-6"
          >
            Get Started Now →
          </button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-4 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium">Stripe Protected</span>
            </div>
          </div>
        </div>

        {/* Right: Feature Matrix */}
        <div className="p-12 bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Included:</h3>
          
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Advanced Analytics Dashboard</h4>
                <p className="text-sm text-gray-600">Real-time insights and performance metrics for all campaigns</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Unlimited Team Members</h4>
                <p className="text-sm text-gray-600">Collaborate seamlessly with your entire marketing team</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">AI-Powered Campaign Optimization</h4>
                <p className="text-sm text-gray-600">Automatically optimize your campaigns for maximum ROI</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">24/7 Priority Support</h4>
                <p className="text-sm text-gray-600">Dedicated support team ready to help you succeed</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Multi-Channel Integration</h4>
                <p className="text-sm text-gray-600">Connect all your marketing channels in one place</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Custom Branding & White Label</h4>
                <p className="text-sm text-gray-600">Full customization to match your brand identity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Trust Bar */}
    <div className="mt-12 text-center">
      <p className="text-gray-600 mb-4">Trusted by 10,000+ marketing professionals worldwide</p>
      <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
        <span>✓ Cancel anytime</span>
        <span>✓ No setup fees</span>
        <span>✓ 30-day money-back guarantee</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-4 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-5xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text text-sm font-semibold tracking-wider uppercase">
          Imaginary Space
        </span>
      </div>
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
        Let's Create Something
        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text">
          Extraordinary
        </span>
      </h2>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto">
        Transform your marketing vision into reality. Our team at Imaginary Space is ready to elevate your brand.
      </p>
    </div>

    {/* Multi-Step Wizard Container */}
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
      {(() => {
        const [currentStep, setCurrentStep] = React.useState<number>(1);
        const [formData, setFormData] = React.useState({
          name: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          services: [] as string[],
          projectDetails: '',
          timeline: ''
        });
        const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
        const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
        const [errorMessage, setErrorMessage] = React.useState<string>('');

        const totalSteps = 3;

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
          const { name, value } = e.target;
          setFormData(prev => ({ ...prev, [name]: value }));
        };

        const handleCheckboxChange = (service: string) => {
          setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
              ? prev.services.filter(s => s !== service)
              : [...prev.services, service]
          }));
        };

        const validateStep = (step: number): boolean => {
          if (step === 1) {
            return formData.name.trim() !== '' && 
                   formData.email.trim() !== '' && 
                   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                   formData.phone.trim() !== '';
          }
          if (step === 2) {
            return formData.company.trim() !== '' && 
                   formData.budget !== '' &&
                   formData.services.length > 0;
          }
          return true;
        };

        const nextStep = () => {
          if (validateStep(currentStep) && currentStep < totalSteps) {
            setCurrentStep(prev => prev + 1);
          }
        };

        const prevStep = () => {
          if (currentStep > 1) {
            setCurrentStep(prev => prev - 1);
          }
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          
          if (!validateStep(currentStep)) {
            setErrorMessage('Please fill in all required fields correctly.');
            return;
          }

          setIsSubmitting(true);
          setSubmitStatus('idle');
          setErrorMessage('');

          try {
            const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...formData,
                services: formData.services.join(', '),
                source: 'Imaginary Space Contact Form',
                submittedAt: new Date().toISOString()
              }),
            });

            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            setSubmitStatus('success');
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              budget: '',
              services: [],
              projectDetails: '',
              timeline: ''
            });
            setCurrentStep(1);
          } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
          } finally {
            setIsSubmitting(false);
          }
        };

        return (
          <>
            {/* Progress Bar */}
            <div className="px-8 pt-8 pb-6">
              <div className="flex items-center justify-between mb-4">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          currentStep >= step
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg scale-110'
                            : 'bg-white/20 text-gray-400'
                        }`}
                      >
                        {step}
                      </div>
                      <span className={`text-xs mt-2 font-medium ${currentStep >= step ? 'text-white' : 'text-gray-400'}`}>
                        {step === 1 ? 'Contact' : step === 2 ? 'Project' : 'Details'}
                      </span>
                    </div>
                    {step < 3 && (
                      <div className="flex-1 h-1 mx-4 rounded-full bg-white/20 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            currentStep > step ? 'bg-gradient-to-r from-purple-500 to-blue-500 w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-8 pb-8">
              {/* Step 1: Contact Information */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Tell us about yourself</h3>
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!validateStep(1)}
                    className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    Continue to Project Details
                  </button>
                </div>
              )}

              {/* Step 2: Project Information */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Project Information</h3>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Your Company Inc."
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-200 mb-2">
                      Project Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="" className="bg-gray-900">Select budget range</option>
                      <option value="5k-10k" className="bg-gray-900">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-gray-900">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-gray-900">$25,000 - $50,000</option>
                      <option value="50k-100k" className="bg-gray-900">$50,000 - $100,000</option>
                      <option value="100k+" className="bg-gray-900">$100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-3">
                      Services Needed *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Brand Strategy', 'Digital Marketing', 'Content Creation', 'SEO/SEM', 'Social Media', 'Web Design'].map((service) => (
                        <label
                          key={service}
                          className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                            formData.services.includes(service)
                              ? 'bg-purple-500/30 border-purple-400'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            className="w-4 h-4 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-500"
                          />
                          <span className="ml-2 text-sm text-white">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!validateStep(2)}
                      className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      Continue to Final Step
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Details */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Final Details</h3>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-200 mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      <option value="" className="bg-gray-900">Select timeline</option>
                      <option value="asap" className="bg-gray-900">ASAP</option>
                      <option value="1-3months" className="bg-gray-900">1-3 months</option>
                      <option value="3-6months" className="bg-gray-900">3-6 months</option>
                      <option value="6months+" className="bg-gray-900">6+ months</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-200 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                      placeholder="Share your vision, goals, and any specific requirements..."
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
                      <p className="text-red-200 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Launch Your Project'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-white/20 animate-fadeIn">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Success!</h3>
                  <p className="text-gray-200 mb-6">
                    Thank you for reaching out to Imaginary Space! We've received your information and will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-8 py-3 bg-white text-purple-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <div className="bg-gradient-to-br from-red-900 to-pink-900 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-white/20 animate-fadeIn">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Oops!</h3>
                  <p className="text-gray-200 mb-6">
                    {errorMessage || 'Something went wrong. Please try again or contact us directly.'}
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="px-8 py-3 bg-white text-red-900 font-semibold rounded-xl hover:bg-gray-100 transition-all"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </>
        );
      })()}
    </div>

    {/* Footer CTA */}
    <div className="text-center mt-12">
      <p className="text-gray-300 text-sm">
        Prefer to talk? Call us at{' '}
        <a href="tel:+15551234567" className="text-purple-400 hover:text-purple-300 font-semibold">
          +1 (555) 123-4567
        </a>
      </p>
      <p className="text-gray-400 text-xs mt-2">
        © 2024 Imaginary Space. Transforming brands through creative excellence.
      </p>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
      {/* Company Info */}
      <div className="lg:col-span-1">
        <h3 className="text-white text-xl font-bold mb-4">Imaginary Space</h3>
        <p className="text-sm mb-4">
          Transforming brands through innovative marketing strategies and creative excellence.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-white font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Content Creation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Social Media</a></li>
          <li><a href="#" className="hover:text-white transition-colors">SEO & Analytics</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Campaign Management</a></li>
        </ul>
      </div>

      {/* Industries */}
      <div>
        <h4 className="text-white font-semibold mb-4">Industries</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
          <li><a href="#" className="hover:text-white transition-colors">E-commerce</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Finance</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Retail</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Entertainment</a></li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="text-white font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="text-white font-semibold mb-4">Contact</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>123 Marketing Ave<br/>New York, NY 10001</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <a href="mailto:hello@imaginaryspace.com" className="hover:text-white transition-colors">hello@imaginaryspace.com</a>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>&copy; {new Date().getFullYear()} Imaginary Space. All rights reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}