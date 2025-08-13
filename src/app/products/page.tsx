'use client';

import { motion } from 'framer-motion';

export default function ProductsPage() {
  const products = [
    {
      category: '하드웨어',
      icon: '💻',
      description: '다양한 매장 환경에 맞춘 고성능 키오스크',
      items: [
        {
          name: 'KeyAsk Pro 21.5"',
          description: '표준 매장용 프리미엄 터치스크린 키오스크',
          price: '2,500,000원',
          monthlyPrice: '월 83,000원',
          specs: [
            '21.5인치 Full HD 터치스크린',
            'Intel Core i5 12세대 프로세서',
            '16GB RAM, 512GB NVMe SSD',
            '카드/현금/QR/NFC 결제',
            '고속 영수증 프린터 내장'
          ],
          image: '🖥️',
          badge: '인기',
          badgeColor: 'bg-[#3182F6]'
        },
        {
          name: 'KeyAsk Basic 15.6"',
          description: '소규모 매장용 경제적인 터치스크린 키오스크',
          price: '1,800,000원',
          monthlyPrice: '월 60,000원',
          specs: [
            '15.6인치 HD 터치스크린',
            'Intel Core i3 12세대 프로세서',
            '8GB RAM, 256GB SSD',
            '카드/QR 결제 모듈',
            '외장 프린터 연결 지원'
          ],
          image: '💻',
          badge: '가성비',
          badgeColor: 'bg-[#10B981]'
        },
        {
          name: 'KeyAsk Max 27"',
          description: '대형 매장용 최고급 4K 터치스크린 키오스크',
          price: '3,800,000원',
          monthlyPrice: '월 127,000원',
          specs: [
            '27인치 4K UHD 터치스크린',
            'Intel Core i7 12세대 프로세서',
            '32GB RAM, 1TB NVMe SSD',
            '프리미엄 멀티 결제 모듈',
            '고성능 프린터 및 스피커 내장'
          ],
          image: '🖥️',
          badge: '프리미엄',
          badgeColor: 'bg-[#8B5CF6]'
        }
      ]
    },
    {
      category: '소프트웨어',
      icon: '⚙️',
      description: '강력한 관리 시스템과 맞춤형 솔루션',
      items: [
        {
          name: 'KeyAsk OS Enterprise',
          description: '기업용 종합 키오스크 관리 시스템',
          price: '월 180,000원',
          monthlyPrice: null,
          specs: [
            '실시간 멀티 키오스크 모니터링',
            '고급 매출 분석 및 리포트',
            '원격 관리 및 자동 업데이트',
            'AI 기반 장애 예측',
            '24시간 전담 기술 지원'
          ],
          image: '💎',
          badge: '추천',
          badgeColor: 'bg-[#F59E0B]'
        },
        {
          name: 'KeyAsk OS Standard',
          description: '중소규모 매장용 표준 관리 시스템',
          price: '월 99,000원',
          monthlyPrice: null,
          specs: [
            '기본 관리 및 모니터링',
            '표준 매출 분석 리포트',
            '자동 소프트웨어 업데이트',
            '클라우드 데이터 백업',
            '영업시간 내 기술 지원'
          ],
          image: '🔧',
          badge: null,
          badgeColor: null
        },
        {
          name: 'Custom Development',
          description: '비즈니스 맞춤형 소프트웨어 개발',
          price: '별도 견적',
          monthlyPrice: null,
          specs: [
            '완전 맞춤형 UI/UX 디자인',
            '기존 시스템 완벽 연동',
            '전용 기능 및 모듈 개발',
            '브랜딩 및 테마 커스터마이징',
            '평생 무료 유지보수'
          ],
          image: '⚙️',
          badge: '맞춤형',
          badgeColor: 'bg-[#EC4899]'
        }
      ]
    },
    {
      category: '액세서리',
      icon: '🔌',
      description: '키오스크 성능을 극대화하는 전문 액세서리',
      items: [
        {
          name: '프리미엄 영수증 프린터',
          description: '초고속 열전사 프린터 (한국산)',
          price: '420,000원',
          monthlyPrice: null,
          specs: [
            '인쇄속도 최대 350mm/초',
            '자동 절단 및 용지 감지',
            'USB 3.0 / 이더넷 연결',
            '용지걸림 방지 기술',
            '3년 무상 A/S 보장'
          ],
          image: '🖨️',
          badge: null,
          badgeColor: null
        },
        {
          name: '고성능 바코드 스캐너',
          description: '2D QR/바코드 고속 인식 스캐너',
          price: '280,000원',
          monthlyPrice: null,
          specs: [
            '1D/2D/QR 코드 완벽 지원',
            '초당 60회 자동 스캔',
            '충격 방지 내구성 설계',
            'USB/무선 듀얼 연결',
            '2년 무상 A/S 보장'
          ],
          image: '📱',
          badge: null,
          badgeColor: null
        },
        {
          name: '프리미엄 카드 리더',
          description: '다기능 통합 결제 단말기',
          price: '650,000원',
          monthlyPrice: null,
          specs: [
            'IC/MS/NFC 카드 완벽 지원',
            'Samsung Pay/Apple Pay 호환',
            '금융보안원 EMV 인증',
            '끝단간 암호화 보안',
            '3년 무상 A/S + 보험'
          ],
          image: '💳',
          badge: null,
          badgeColor: null
        }
      ]
    }
  ];

  const comparisionData = [
    { spec: '화면 크기', basic: '15.6인치 HD', pro: '21.5인치 FHD', max: '27인치 4K UHD' },
    { spec: '프로세서', basic: 'Core i3 12세대', pro: 'Core i5 12세대', max: 'Core i7 12세대' },
    { spec: '메모리', basic: '8GB DDR4', pro: '16GB DDR4', max: '32GB DDR4' },
    { spec: '저장용량', basic: '256GB SSD', pro: '512GB NVMe', max: '1TB NVMe' },
    { spec: '결제 방식', basic: '카드/QR', pro: '카드/현금/QR/NFC', max: '멀티 결제 지원' },
    { spec: '가격', basic: '1,800,000원', pro: '2,500,000원', max: '3,800,000원' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* 정적 배경 데코레이션 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* 헤더 섹션 */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 rounded-full text-sm font-bold mb-6">
            <span>🚀</span>
            제품 라인업
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold startup-text-gradient mb-8">
            키오스크 제품 라인업 💎
          </h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            다양한 매장 규모와 요구사항에 맞는 
            <span className="font-bold text-blue-600"> 하드웨어</span>, 
            <span className="font-bold text-purple-600"> 소프트웨어</span>, 
            <span className="font-bold text-pink-600"> 액세서리</span>를 제공합니다.
            <br />
            모든 제품은 <span className="font-bold text-green-600">엄격한 품질 검증</span>과 
            <span className="font-bold text-orange-600"> 3년 품질보증</span>을 제공합니다 ⭐
          </motion.p>
          
          {/* Quick stats */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 mt-10 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { icon: '🏆', text: '업계 1위 품질', color: 'text-yellow-600' },
              { icon: '⚡', text: '48시간 배송', color: 'text-blue-600' },
              { icon: '🛡️', text: '3년 무상 A/S', color: 'text-green-600' },
              { icon: '💰', text: '합리적 가격', color: 'text-purple-600' }
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full ${item.color} font-semibold transition-transform duration-200 hover:scale-105`}
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* 제품 카테고리별 섹션 */}
        {products.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex} 
            className="mb-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          >
            <div className="text-center mb-20">
              <div className="text-8xl mb-6 inline-block">
                {category.icon}
              </div>
              <h2 className="text-5xl font-bold startup-text-gradient mb-6">
                {category.category} ✨
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {category.items.map((product, productIndex) => (
                <motion.div 
                  key={productIndex} 
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: productIndex * 0.1
                  }}
                >
                  {/* 배지 */}
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold z-20 shadow-lg`}>
                      {product.badge} ⭐
                    </div>
                  )}

                  {/* 제품 이미지/아이콘 */}
                  <div className="relative overflow-hidden">
                    <div 
                      className="p-10 text-center relative"
                      style={{
                        background: `linear-gradient(135deg, 
                          ${categoryIndex === 0 ? '#3182F6, #8B5CF6' :
                            categoryIndex === 1 ? '#10B981, #06B6D4' :
                            '#F59E0B, #EC4899'}
                        )`
                      }}
                    >
                      {/* 정적 배경 패턴 */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                          backgroundSize: '30px 30px'
                        }}
                      />
                      
                      <div className="text-7xl mb-6 relative z-10 transition-transform duration-200 group-hover:scale-110">
                        {product.image}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white relative z-10">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* 제품 정보 */}
                  <div className="p-8 relative">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {product.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-4xl font-bold startup-text-gradient mb-2">
                        {product.price} 💎
                      </div>
                      {product.monthlyPrice && (
                        <div className="text-gray-500 text-sm font-medium">
                          36개월 할부 시 {product.monthlyPrice} ⚡
                        </div>
                      )}
                    </div>

                    {/* 스펙 */}
                    <div className="mb-8">
                      <h4 className="font-bold startup-text-gradient mb-6 text-lg flex items-center gap-2">
                        <span>⚙️</span> 주요 사양
                      </h4>
                      <div className="space-y-4">
                        {product.specs.map((spec, specIndex) => (
                          <div 
                            key={specIndex} 
                            className="flex items-start group transition-all duration-200 hover:translate-x-2"
                          >
                            <div 
                              className={`w-3 h-3 rounded-full mr-3 mt-1.5 flex-shrink-0 ${
                                categoryIndex === 0 ? 'bg-blue-600' :
                                categoryIndex === 1 ? 'bg-green-600' :
                                'bg-orange-600'
                              }`}
                            />
                            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                              {spec}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 버튼 */}
                    <div className="space-y-4">
                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                        상세보기 🔍
                      </button>
                      
                      <button className="w-full border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 hover:border-blue-500 hover:text-blue-600">
                        견적 문의 💬
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* 제품 비교 섹션 */}
        <motion.div 
          className="bg-white rounded-2xl shadow-lg p-8 mb-24 border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            하드웨어 제품 비교 📊
          </motion.h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-100 bg-blue-50/50">
                  <th className="p-4 text-left text-base font-bold text-gray-800 rounded-tl-lg">사양</th>
                  <th className="p-4 text-center text-base font-bold text-gray-700">
                    <div className="flex flex-col items-center">
                      <span>KeyAsk Basic</span>
                      <span className="text-sm font-normal text-gray-500">15.6&quot;</span>
                    </div>
                  </th>
                  <th className="p-4 text-center text-base font-bold text-blue-600 bg-blue-100/70">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1">
                        KeyAsk Pro
                        <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">인기</span>
                      </span>
                      <span className="text-sm font-normal text-blue-500">21.5&quot;</span>
                    </div>
                  </th>
                  <th className="p-4 text-center text-base font-bold text-gray-700 rounded-tr-lg">
                    <div className="flex flex-col items-center">
                      <span>KeyAsk Max</span>
                      <span className="text-sm font-normal text-gray-500">27&quot;</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisionData.map((row, index) => (
                  <motion.tr 
                    key={index} 
                    className={`border-b border-gray-100 hover:bg-gray-50/70 transition-colors ${
                      index === comparisionData.length - 1 ? 'border-b-0' : ''
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <td className="p-4 font-semibold text-gray-800 bg-gray-50/50">{row.spec}</td>
                    <td className="p-4 text-center text-gray-600">{row.basic}</td>
                    <td className="p-4 text-center font-semibold text-blue-600 bg-blue-50/30">{row.pro}</td>
                    <td className="p-4 text-center text-gray-600">{row.max}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <motion.div 
            className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-blue-700 text-center">
              💡 <span className="font-semibold">Pro 모델</span>이 가격 대비 성능이 가장 우수하여 대부분의 매장에서 선택하고 있습니다.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA 섹션 */}
        <motion.div 
          className="text-center relative overflow-hidden rounded-3xl p-20"
          style={{
            background: 'linear-gradient(135deg, #3182F6 0%, #8B5CF6 25%, #EC4899 50%, #F59E0B 75%, #10B981 100%)'
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating elements */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 bg-white/10 rounded-full blur-xl"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, 15, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              완벽한 솔루션을 찾고 계신가요? 🎯
            </h2>
            
            <motion.p 
              className="text-xl mb-16 opacity-90 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-bold">전문 컨설턴트</span>가 귀하의 비즈니스 환경을 
              <span className="font-bold"> 완벽하게 분석</span>하여 
              <br className="hidden md:block" />
              가장 적합한 제품 조합을 <span className="text-yellow-300 font-bold">무료로 추천</span>해드립니다 ✨
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-300 hover:bg-gray-50 hover:shadow-3xl hover:-translate-y-1">
                <span>💎</span>
                무료 제품 상담
                <span>→</span>
              </button>
              
              <button className="inline-flex items-center gap-3 border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-blue-600">
                <span>📋</span>
                카탈로그 다운로드
                <span>✨</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}