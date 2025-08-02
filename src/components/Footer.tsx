'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-900 mb-1">
                KeyAsk
              </div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                Smart Kiosk Solutions
              </div>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              음식점, 카페, 편의점, 병원을 위한 전문 키오스크 솔루션으로 
              비즈니스 효율성과 고객 만족도를 향상시킵니다.
            </p>
            
            {/* 연락처 정보 */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-600">
                <span>📞</span>
                <span className="font-medium">1588-0000</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span>📧</span>
                <span>info@keyask.co.kr</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <span>📍</span>
                <span>서울시 강남구 테헤란로 123</span>
              </div>
            </div>
          </motion.div>

          {/* 솔루션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">
              솔루션
            </h3>
            <ul className="space-y-2">
              {[
                { name: '음식점 키오스크', href: '/solutions/restaurant' },
                { name: '카페 키오스크', href: '/solutions/cafe' },
                { name: '편의점 키오스크', href: '/solutions/convenience' },
                { name: '병원 키오스크', href: '/solutions/hospital' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 고객 지원 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold mb-4 text-gray-900 uppercase tracking-wide">
              지원
            </h3>
            <ul className="space-y-2">
              {[
                { name: '설치 가이드', href: '/support/installation' },
                { name: '사용자 매뉴얼', href: '/support/manual' },
                { name: '자주 묻는 질문', href: '/support/faq' },
                { name: '기술 지원', href: '/support/contact' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 하단 정보 */}
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} KeyAsk Solutions. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">
                서비스 이용약관
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}