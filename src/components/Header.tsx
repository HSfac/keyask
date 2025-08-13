'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: '홈', href: '/', icon: '🏠' },
    { name: '솔루션', href: '/solutions', icon: '🎯' },
    { name: '제품', href: '/products', icon: '💻' },
    { name: '고객지원', href: '/support', icon: '🛠️' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'startup-glass-gradient shadow-lg border-b border-white/20' 
            : 'startup-glass shadow-md'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link href="/" className="flex items-center">
                <motion.div 
                  className="text-3xl font-bold startup-text-gradient"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 20px rgba(59, 130, 246, 0.5)",
                      "0 0 10px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  KeyAsk
                </motion.div>
                <motion.div 
                  className="ml-3 px-2 py-1 text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold uppercase tracking-wider rounded-full"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Solutions
                </motion.div>
              </Link>
            </motion.div>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-semibold transition-all duration-300 text-sm relative group"
                  >
                    <span className="relative z-10">{item.name}</span>
                    {/* Hover effect background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                      layoutId={`nav-${item.name}`}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 우측 버튼 그룹 */}
            <div className="flex items-center space-x-3">
              {/* 전화번호 (데스크톱) */}
              <motion.div 
                className="hidden lg:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm text-gray-600"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-green-500">📞</span>
                <span className="font-semibold">1588-0000</span>
              </motion.div>

              {/* 문의 버튼 */}
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="btn-startup-primary px-6 py-2 text-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">견적 문의</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              {/* 모바일 메뉴 버튼 */}
              <motion.button
                className="lg:hidden p-2 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 startup-glass-gradient border-t border-white/20 shadow-2xl backdrop-blur-xl"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 font-semibold rounded-xl transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.icon}</span>
                        <span>{item.name}</span>
                      </span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-4 border-t border-white/20 mt-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center btn-startup-gradient px-4 py-3 rounded-xl font-bold hover:scale-105 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    견적 문의 ✨
                  </Link>
                </motion.div>
                
                {/* 모바일 연락처 정보 */}
                <motion.div 
                  className="pt-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-green-50 to-blue-50 rounded-full text-sm">
                    <span className="text-green-500">📞</span>
                    <span className="font-bold text-gray-700">1588-0000</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* 헤더 공간 확보 */}
      <div className="h-16"></div>
    </>
  );
}