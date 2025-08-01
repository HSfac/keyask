import Link from 'next/link';

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
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              스마트 키오스크로
              <br />
              <span className="text-[#60A5FA]">비즈니스 혁신</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed">
              음식점, 카페, 편의점을 위한 최고의 키오스크 솔루션으로 
              <br />운영 효율성을 높이고 고객 만족도를 극대화하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="bg-white text-[#3182F6] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                무료 견적 받기
              </Link>
              <Link href="/solutions" className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#3182F6] transition-all duration-300 hover:scale-105">
                솔루션 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              검증된 성과
            </h2>
            <p className="text-xl text-gray-600">
              수많은 고객사가 선택한 신뢰할 수 있는 파트너입니다
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-105">
                <div className={`text-5xl font-bold ${stat.color} mb-3`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 솔루션 소개 섹션 */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              업종별 맞춤 솔루션
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              각 업종의 특성과 니즈에 최적화된 전문적인 키오스크 솔루션을 제공합니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Link key={index} href={solution.href} className="group">
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:border-[#3182F6]/20">
                  <div className="text-6xl mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#3182F6] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#3182F6] rounded-full mr-4"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center text-[#3182F6] font-bold group-hover:text-[#1E40AF]">
                    자세히 보기 
                    <span className="ml-2 text-xl group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
                  <span className="text-white/90 text-lg">21.5" 4K 터치스크린</span>
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
