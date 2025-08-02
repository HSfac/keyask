import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* 배경 패턴 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* 회사 정보 */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="text-4xl font-black bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent mb-2">
                KeyAsk
              </div>
              <div className="text-sm text-gray-400 font-medium">
                SMART KIOSK SOLUTIONS
              </div>
            </div>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              음식점, 카페, 편의점, 병원을 위한 차세대 AI 키오스크 솔루션. 
              전문적인 하드웨어와 직관적인 소프트웨어로 고객의 비즈니스 혁신을 이끕니다.
            </p>
            
            {/* 연락처 정보 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group hover:text-[#6366F1] transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                  📞
                </div>
                <div>
                  <div className="font-bold text-lg">1588-0000</div>
                  <div className="text-sm text-gray-400">24시간 상담 가능</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group hover:text-[#6366F1] transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] rounded-xl flex items-center justify-center">
                  📧
                </div>
                <div>
                  <div className="font-bold">info@keyask.co.kr</div>
                  <div className="text-sm text-gray-400">빠른 응답 보장</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group hover:text-[#6366F1] transition-colors cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-r from-[#EC4899] to-[#F59E0B] rounded-xl flex items-center justify-center">
                  📍
                </div>
                <div>
                  <div className="font-bold">서울시 강남구 테헤란로 123</div>
                  <div className="text-sm text-gray-400">KeyAsk 본사 빌딩</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 솔루션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              🎯 <span>솔루션</span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: '음식점 키오스크', href: '/solutions/restaurant', icon: '🍽️' },
                { name: '카페 키오스크', href: '/solutions/cafe', icon: '☕' },
                { name: '편의점 키오스크', href: '/solutions/convenience', icon: '🏪' },
                { name: '병원 키오스크', href: '/solutions/hospital', icon: '🏥' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 text-gray-300 hover:text-[#6366F1] transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 고객 지원 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              🛠️ <span>고객 지원</span>
            </h3>
            <ul className="space-y-4">
              {[
                { name: '설치 가이드', href: '/support/installation', icon: '📋' },
                { name: '사용자 매뉴얼', href: '/support/manual', icon: '📖' },
                { name: '자주 묻는 질문', href: '/support/faq', icon: '❓' },
                { name: '기술 지원', href: '/support/contact', icon: '💬' }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 text-gray-300 hover:text-[#6366F1] transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                    <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* 빠른 연락 */}
            <div className="mt-8 p-4 bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-xl border border-[#6366F1]/20">
              <div className="text-sm text-gray-300 mb-2">긴급 지원이 필요하신가요?</div>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-[#6366F1] font-bold hover:text-[#4F46E5] transition-colors"
              >
                <span>⚡</span>
                <span>즉시 연락하기</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 소셜 미디어 & 추가 정보 */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* 소셜 미디어 */}
            <div className="flex items-center gap-6">
              <span className="text-gray-300 font-medium">팔로우하세요:</span>
              <div className="flex gap-4">
                {[
                  { icon: '💬', name: 'KakaoTalk', color: 'from-yellow-400 to-yellow-500' },
                  { icon: '📘', name: 'Facebook', color: 'from-blue-600 to-blue-700' },
                  { icon: '📸', name: 'Instagram', color: 'from-pink-500 to-purple-600' },
                  { icon: '🐦', name: 'Twitter', color: 'from-blue-400 to-blue-500' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* 인증 배지 */}
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  K
                </div>
                <span>한국표준협회 인증</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  ISO
                </div>
                <span>ISO 9001 인증</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 하단 정보 */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              © {currentYear} KeyAsk Solutions. All rights reserved. 
              <span className="ml-2 text-xs">| 사업자등록번호: 123-45-67890</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#6366F1] transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#6366F1] transition-colors">
                서비스 이용약관
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-[#6366F1] transition-colors">
                사이트맵
              </Link>
            </div>
          </div>
          
          {/* 추가 법적 정보 */}
          <div className="mt-6 text-xs text-gray-500 text-center lg:text-left">
            본 웹사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다. 무단 전재 및 재배포를 금지합니다.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}