'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Home() {
  const solutions = [
    {
      title: "음식점 키오스크",
      description: "매장 운영 효율성을 높이고 고객 대기시간을 단축시키는 스마트 주문 시스템",
      features: ["빠른 터치 주문", "실시간 결제", "재고 자동 관리", "매출 분석"],
      icon: "🍽️",
      href: "/solutions/restaurant"
    },
    {
      title: "카페 키오스크", 
      description: "커스터마이징과 빠른 결제로 고객 만족도를 극대화하는 카페 전용 솔루션",
      features: ["음료 커스터마이징", "멤버십 연동", "영수증 출력", "원격 관리"],
      icon: "☕",
      href: "/solutions/cafe"
    },
    {
      title: "편의점 키오스크",
      description: "셀프 계산대와 상품 정보 제공으로 운영 효율성을 극대화하는 시스템",
      features: ["바코드 스캔", "다중 결제", "상품 정보", "재고 연동"],
      icon: "🏪",
      href: "/solutions/convenience"
    },
    {
      title: "병원 키오스크",
      description: "접수 자동화와 대기 관리로 환자 경험을 개선하는 의료 전용 솔루션",
      features: ["자동 접수", "대기 번호", "진료 안내", "보험 연동"],
      icon: "🏥",
      href: "/solutions/hospital"
    }
  ];

  const stats = [
    { number: "500+", label: "설치 완료", color: "text-[#3182F6]" },
    { number: "99.9%", label: "시스템 안정성", color: "text-[#10B981]" },
    { number: "24/7", label: "기술 지원", color: "text-[#8B5CF6]" },
    { number: "30%", label: "매출 증가", color: "text-[#F59E0B]" }
  ];

  const features = [
    {
      title: "간편한 설치",
      description: "전문 기술팀이 현장에서 직접 설치하고 설정까지 완료합니다",
      icon: "⚡"
    },
    {
      title: "24시간 지원",
      description: "언제든 발생할 수 있는 문제를 실시간으로 해결해드립니다",
      icon: "🛡️"
    },
    {
      title: "데이터 분석",
      description: "매출 패턴과 고객 선호도를 분석해 비즈니스 인사이트를 제공합니다",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-[#6366F1] via-[#8B5CF6] to-[#EC4899] text-white py-32 overflow-hidden animate-gradient">
        {/* 고급 배경 애니메이션 */}
        <div className="absolute inset-0">
          {/* 플로팅 원형 요소들 */}
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-purple-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-56 h-56 bg-pink-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          
          {/* 그리드 패턴 */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* 글래스 패널들 */}
          <div className="absolute top-10 right-10 w-32 h-32 glass rounded-3xl rotate-12 animate-pulse-glow"></div>
          <div className="absolute bottom-20 left-16 w-24 h-24 glass rounded-2xl -rotate-12 animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="glass px-6 py-3 rounded-full text-sm font-medium text-white/90 backdrop-blur-sm">
                ✨ 업계 1위 키오스크 솔루션 | 500+ 고객사 신뢰
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                스마트 키오스크로
              </motion.span>
              <motion.span 
                className="block gradient-text mt-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                비즈니스 혁신
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-3xl mb-12 text-white/90 max-w-5xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              음식점, 카페, 편의점, 병원을 위한 <span className="font-bold text-yellow-300">차세대 AI 키오스크</span>로 
              <br className="hidden md:block" />
              <span className="text-white font-semibold bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
                매출 30% 증가, 운영비 40% 절감
              </span>을 경험하세요
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link href="/contact" className="btn-premium relative z-10 inline-flex items-center gap-3 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl overflow-hidden">
                  <span className="relative z-20">💎 무료 견적 받기</span>
                  <motion.div 
                    className="relative z-20"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="/solutions" className="glass relative inline-flex items-center gap-3 px-12 py-6 rounded-2xl text-xl font-bold text-white border-2 border-white/30 hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                  <span>🚀 솔루션 보기</span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* 추가 시각적 요소 */}
            <motion.div
              className="flex justify-center items-center gap-8 mt-16 text-white/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">24/7 실시간 지원</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">99.9% 가동률 보장</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm">즉시 설치 가능</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <motion.section 
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* 배경 패턴 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%236366F1" fill-opacity="0.1"%3E%3Cpath d="M50 0a50 50 0 1 1 0 100 50 50 0 0 1 0-100z"/%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white rounded-full text-sm font-bold mb-6">
              🏆 업계 최고 성과
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              검증된 <span className="gradient-text">성과와 신뢰</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              수많은 고객사와 함께 만들어낸 놀라운 결과들을 확인하세요
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const statNumber = parseInt(stat.number.replace(/[^0-9]/g, ''));
              return (
                <motion.div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-gray-100/50 neomorphism hover:scale-105 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100 
                  }}
                >
                  {/* 백그라운드 글로우 효과 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color === 'text-[#3182F6]' ? 'from-blue-500/5 to-purple-500/5' : stat.color === 'text-[#10B981]' ? 'from-green-500/5 to-teal-500/5' : stat.color === 'text-[#8B5CF6]' ? 'from-purple-500/5 to-pink-500/5' : 'from-yellow-500/5 to-orange-500/5'} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* 아이콘 */}
                  <div className="text-4xl mb-4">
                    {index === 0 ? '🚀' : index === 1 ? '⭐' : index === 2 ? '🎯' : '💰'}
                  </div>
                  
                  <div className={`text-6xl md:text-7xl font-black ${stat.color} mb-4 relative z-10`}>
                    {isNaN(statNumber) ? stat.number : <><AnimatedCounter end={statNumber} />{stat.number.replace(/[0-9]/g, '')}</>}
                  </div>
                  <div className="text-gray-700 font-bold text-lg md:text-xl relative z-10">{stat.label}</div>
                  
                  {/* 호버 시 나타나는 추가 정보 */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-gray-500">
                    {index === 0 ? '지속 증가 중' : index === 1 ? '평균 점수' : index === 2 ? '24시간 지원' : '평균 증가율'}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* 추가 신뢰도 표시 */}
          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-400">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">K</div>
                <span className="font-semibold">한국표준협회 인증</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">I</div>
                <span className="font-semibold">ISO 9001 인증</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-xl">S</div>
                <span className="font-semibold">보안 1등급</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 솔루션 소개 섹션 */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50/50 to-purple-50/20 relative overflow-hidden">
        {/* 배경 장식 요소 */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#6366F1] to-[#EC4899] text-white rounded-full text-sm font-bold mb-8">
              🎯 맞춤형 솔루션
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              업종별 <span className="gradient-text">전문 솔루션</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              각 업종의 고유한 특성과 운영 환경을 깊이 분석하여<br className="hidden md:block" />
              <span className="font-bold text-gray-800">최고의 성과를 보장하는 맞춤형 키오스크 시스템</span>을 제공합니다
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="group"
              >
                <Link href={solution.href} className="block">
                  <div className="relative bg-white/70 backdrop-blur-sm p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100/50 hover:shadow-3xl transition-all duration-500 overflow-hidden neomorphism group-hover:border-[#6366F1]/20">
                    {/* 호버 시 그라디언트 백그라운드 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-[#8B5CF6]/5 to-[#EC4899]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    {/* 플로팅 아이콘 */}
                    <div className="relative z-10">
                      <div className="text-7xl mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 animate-float">
                        {solution.icon}
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 group-hover:gradient-text transition-all duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                      
                      {/* 특징 리스트 */}
                      <div className="space-y-4 mb-10">
                        {solution.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex} 
                            className="flex items-start group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${featureIndex * 50}ms` }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full mr-4 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                            <span className="text-gray-700 font-medium text-lg">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* CTA 버튼 */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-[#6366F1] font-bold text-xl group-hover:text-[#4F46E5] transition-colors">
                          <span>자세히 보기</span>
                          <motion.span 
                            className="ml-3 text-2xl"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </div>
                        
                        <div className="glass px-4 py-2 rounded-full text-sm font-bold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          클릭하여 상세보기
                        </div>
                      </div>
                    </div>
                    
                    {/* 장식적 요소 */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-[#EC4899]/10 to-[#F59E0B]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* 하단 CTA */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="glass-dark p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                어떤 솔루션이 내 비즈니스에 적합할까요?
              </h3>
              <p className="text-gray-600 mb-6">
                전문 컨설턴트가 현장 방문을 통해 최적의 솔루션을 무료로 제안해드립니다
              </p>
              <Link href="/contact" className="btn-premium inline-flex items-center gap-2 px-8 py-4 text-lg">
                <span>💬 무료 상담 신청</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 특징 섹션 */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              왜 KeyAsk를 선택해야 할까요?
            </h2>
            <p className="text-xl text-gray-600">
              단순한 키오스크가 아닌, 비즈니스 성장을 위한 파트너입니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 기술 스펙 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              최첨단 기술 스펙
            </h2>
            <p className="text-xl text-gray-600">
              안정적이고 신뢰할 수 있는 하드웨어와 소프트웨어로 구성되었습니다
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 하드웨어 */}
            <div className="bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold mb-8 flex items-center">
                💻 하드웨어 스펙
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold text-lg">디스플레이</span>
                  <span className="text-white/90 text-lg">21.5&rdquo; 4K 터치스크린</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold text-lg">프로세서</span>
                  <span className="text-white/90 text-lg">Intel Core i5 12세대</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold text-lg">메모리</span>
                  <span className="text-white/90 text-lg">16GB DDR4 RAM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold text-lg">저장용량</span>
                  <span className="text-white/90 text-lg">512GB NVMe SSD</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-lg">결제 모듈</span>
                  <span className="text-white/90 text-lg">카드/현금/QR/NFC</span>
                </div>
              </div>
            </div>

            {/* 소프트웨어 */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                ⚙️ 소프트웨어 기능
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-lg text-gray-900">운영체제</span>
                  <span className="text-gray-600 text-lg">Windows 11 IoT Enterprise</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-lg text-gray-900">관리 시스템</span>
                  <span className="text-gray-600 text-lg">실시간 원격 모니터링</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-lg text-gray-900">데이터 연동</span>
                  <span className="text-gray-600 text-lg">POS/ERP/CRM 통합</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-semibold text-lg text-gray-900">업데이트</span>
                  <span className="text-gray-600 text-lg">자동 OTA 업데이트</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold text-lg text-gray-900">보안</span>
                  <span className="text-gray-600 text-lg">SSL/TLS 암호화</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-24 bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            전문 컨설턴트가 귀하의 비즈니스에 최적화된 
            <br />키오스크 솔루션을 무료로 제안해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="bg-white text-[#3182F6] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              무료 상담 신청
            </Link>
            <Link href="/products" className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#3182F6] transition-all duration-300 hover:scale-105">
              제품 카탈로그 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

