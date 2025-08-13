'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 border-t border-gradient-to-r from-blue-200/30 to-purple-200/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-8">
              <motion.div 
                className="text-3xl font-bold startup-text-gradient mb-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                KeyAsk
              </motion.div>
              <motion.div 
                className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-full"
                animate={{ 
                  boxShadow: [
                    "0 0 10px rgba(59, 130, 246, 0.3)",
                    "0 0 20px rgba(59, 130, 246, 0.5)",
                    "0 0 10px rgba(59, 130, 246, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>✨</span>
                Smart Kiosk Solutions
              </motion.div>
            </div>
            <motion.p 
              className="text-gray-600 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              음식점, 카페, 편의점, 병원을 위한 전문 키오스크 솔루션으로 
              <span className="font-semibold text-blue-600"> 비즈니스 효율성</span>과 
              <span className="font-semibold text-purple-600"> 고객 만족도</span>를 향상시킵니다.
            </motion.p>
            
            {/* 연락처 정보 */}
            <div className="space-y-4">
              {[
                { icon: '📞', text: '1588-0000', gradient: 'from-green-500 to-emerald-500' },
                { icon: '📧', text: 'info@keyask.co.kr', gradient: 'from-blue-500 to-cyan-500' },
                { icon: '📍', text: '서울시 강남구 테헤란로 123', gradient: 'from-purple-500 to-pink-500' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className={`w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center text-sm`}>
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 솔루션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="startup-card p-6 h-fit"
          >
            <h3 className="text-lg font-bold mb-6 startup-text-gradient uppercase tracking-wide flex items-center gap-2">
              🎯 솔루션
            </h3>
            <ul className="space-y-3">
              {[
                { name: '음식점 키오스크', href: '/solutions/restaurant', icon: '🍽️', color: 'hover:text-orange-600' },
                { name: '카페 키오스크', href: '/solutions/cafe', icon: '☕', color: 'hover:text-amber-600' },
                { name: '편의점 키오스크', href: '/solutions/convenience', icon: '🏪', color: 'hover:text-green-600' },
                { name: '병원 키오스크', href: '/solutions/hospital', icon: '🏥', color: 'hover:text-blue-600' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={item.href} 
                    className={`flex items-center gap-2 text-gray-600 ${item.color} transition-all duration-300 text-sm font-medium group`}
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span>{item.name}</span>
                    <motion.span 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 고객 지원 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="startup-card p-6 h-fit"
          >
            <h3 className="text-lg font-bold mb-6 startup-text-gradient uppercase tracking-wide flex items-center gap-2">
              🛠️ 지원
            </h3>
            <ul className="space-y-3">
              {[
                { name: '설치 가이드', href: '/support/installation', icon: '⚡', color: 'hover:text-blue-600' },
                { name: '사용자 매뉴얼', href: '/support/manual', icon: '📖', color: 'hover:text-purple-600' },
                { name: '자주 묻는 질문', href: '/support/faq', icon: '❓', color: 'hover:text-green-600' },
                { name: '기술 지원', href: '/support/contact', icon: '🎧', color: 'hover:text-pink-600' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={item.href} 
                    className={`flex items-center gap-2 text-gray-600 ${item.color} transition-all duration-300 text-sm font-medium group`}
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span>{item.name}</span>
                    <motion.span 
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -5 }}
                      whileHover={{ x: 0 }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 하단 정보 */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Gradient line on top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div 
              className="text-gray-600 text-sm font-medium"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} <span className="font-bold startup-text-gradient">KeyAsk Solutions</span>. 
              <span className="ml-1">All rights reserved with ❤️</span>
            </motion.div>
            
            <div className="flex items-center gap-6 text-sm">
              {[
                { name: '개인정보처리방침', href: '/privacy', icon: '🔒' },
                { name: '서비스 이용약관', href: '/terms', icon: '📜' }
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ y: -2 }}>
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-all duration-300 font-medium group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Social proof badges */}
          <motion.div 
            className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { icon: '🚀', text: '스타트업 친화적' },
              { icon: '🌟', text: '5성급 서비스' },
              { icon: '⚡', text: '빠른 응답' },
              { icon: '🔥', text: '핫한 기술' }
            ].map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-gray-600 font-medium"
                whileHover={{ scale: 1.05, y: -1 }}
                animate={{ 
                  boxShadow: [
                    "0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 10px rgba(59, 130, 246, 0.1)",
                    "0 0 0 rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}