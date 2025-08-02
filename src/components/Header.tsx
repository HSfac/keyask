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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled 
            ? 'apple-glass shadow-sm border-b border-gray-200/50' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* 로고 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center">
                <div className="text-2xl font-bold text-gray-900">
                  KeyAsk
                </div>
                <div className="ml-2 text-xs text-gray-500 font-medium uppercase tracking-wide">
                  Solutions
                </div>
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
                    className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium transition-all duration-150 text-sm"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* 우측 버튼 그룹 */}
            <div className="flex items-center space-x-3">
              {/* 전화번호 (데스크톱) */}
              <div className="hidden lg:flex items-center text-sm text-gray-500">
                <span className="font-medium">1588-0000</span>
              </div>

              {/* 문의 버튼 */}
              <motion.div
                className="hidden md:block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="btn-apple-primary px-4 py-2 text-sm"
                >
                  견적 문의
                </Link>
              </motion.div>

              {/* 모바일 메뉴 버튼 */}
              <motion.button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.95 }}
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
              className="lg:hidden absolute top-full left-0 right-0 apple-glass border-t border-gray-200/50 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
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
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  className="pt-3 border-t border-gray-200 mt-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-150"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    견적 문의
                  </Link>
                </motion.div>
                
                {/* 모바일 연락처 정보 */}
                <motion.div 
                  className="pt-3 text-center text-sm text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  <span className="font-medium">1588-0000</span>
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