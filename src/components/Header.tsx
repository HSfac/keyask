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
            ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-100/50' 
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* 로고 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center group">
                <div className="relative">
                  <div className="text-3xl font-black bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                    KeyAsk
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full group-hover:w-full transition-all duration-300"></div>
                </div>
                <div className="ml-2 text-xs text-gray-500 font-medium">
                  SOLUTIONS
                </div>
              </Link>
            </motion.div>

            {/* 데스크톱 네비게이션 */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="relative group px-4 py-3 rounded-xl text-gray-700 hover:text-[#6366F1] font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-[#6366F1]/5 hover:to-[#8B5CF6]/5 flex items-center gap-2"
                  >
                    <span className="text-sm opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    <span>{item.name}</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full group-hover:w-full transition-all duration-300"></div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 우측 버튼 그룹 */}
            <div className="flex items-center space-x-4">
              {/* 추가 정보 (데스크톱) */}
              <div className="hidden xl:flex items-center space-x-6 text-sm text-gray-500 mr-4">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>24/7 지원</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📞</span>
                  <span className="font-medium">1588-0000</span>
                </div>
              </div>

              {/* 문의 버튼 */}
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="btn-premium relative px-6 py-3 text-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    💎 <span>견적 문의</span>
                  </span>
                </Link>
              </motion.div>

              {/* 모바일 메뉴 버튼 */}
              <motion.button
                className="lg:hidden relative p-3 rounded-xl bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 hover:from-[#6366F1]/20 hover:to-[#8B5CF6]/20 transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-[#6366F1]"
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
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-100/50 shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#6366F1] font-medium rounded-xl hover:bg-gradient-to-r hover:from-[#6366F1]/5 hover:to-[#8B5CF6]/5 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-4 py-4 rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>💎</span>
                    <span>견적 문의</span>
                  </Link>
                </motion.div>
                
                {/* 모바일 연락처 정보 */}
                <motion.div 
                  className="pt-6 border-t border-gray-100 text-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>24/7 지원</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>📞</span>
                      <span className="font-medium">1588-0000</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* 헤더 공간 확보 */}
      <div className="h-20"></div>
    </>
  );
}