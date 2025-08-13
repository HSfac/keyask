export default function SolutionsPage() {
  const solutions = [
    {
      id: 'restaurant',
      title: '음식점 키오스크',
      subtitle: '매장 운영을 스마트하게',
      description: '주문부터 결제까지, 매장 운영의 모든 과정을 자동화하여 효율성을 극대화하고 고객 만족도를 높이는 통합 솔루션',
      features: [
        '직관적인 메뉴 관리 시스템',
        '실시간 주문 및 결제 연동',
        '스마트 재고 관리',
        '고급 매출 분석 대시보드',
        '다국어 지원 (한/영/중/일)',
        'POS/ERP 시스템 완벽 연동'
      ],
      benefits: [
        '주문 대기시간 65% 단축',
        '월 인건비 300만원 절약',
        '주문 정확도 99.2% 달성',
        '매출 데이터 실시간 분석'
      ],
      stats: { customers: '1,200+', satisfaction: '97%', growth: '+35%' },
      icon: '🍽️',
      color: 'from-[#3182F6] to-[#1E40AF]'
    },
    {
      id: 'cafe',
      title: '카페 키오스크',
      subtitle: '커피 한 잔의 완벽한 경험',
      description: '개인 맞춤형 음료 주문부터 로열티 프로그램까지, 카페만의 특별한 경험을 제공하는 전용 키오스크 솔루션',
      features: [
        '상세한 음료 커스터마이징',
        '통합 멤버십 포인트 시스템',
        '고속 영수증 및 쿠폰 출력',
        '클라우드 기반 메뉴 관리',
        '매장 분위기 음악 연동',
        '프로모션 및 쿠폰 관리'
      ],
      benefits: [
        '피크타임 주문 처리 2배 향상',
        '고객 재방문율 42% 증가',
        '매장 운영 효율성 향상',
        '대기줄 없는 빠른 서비스'
      ],
      stats: { customers: '800+', satisfaction: '98%', growth: '+28%' },
      icon: '☕',
      color: 'from-[#10B981] to-[#059669]'
    },
    {
      id: 'convenience',
      title: '편의점 키오스크',
      subtitle: '24시간 무인 매장의 혁신',
      description: '셀프 계산대부터 택배 서비스까지, 편의점의 모든 서비스를 하나로 통합한 올인원 셀프 서비스 솔루션',
      features: [
        '고속 1D/2D 바코드 스캔',
        '다중 결제 시스템 지원',
        '실시간 상품 정보 조회',
        'ERP 재고 시스템 연동',
        '택배 및 생활 서비스',
        '멤버십 카드 연동'
      ],
      benefits: [
        '계산 대기시간 70% 단축',
        '24시간 완전 무인 운영',
        '운영비 연 4,000만원 절감',
        '고객 편의성 획기적 향상'
      ],
      stats: { customers: '2,000+', satisfaction: '94%', growth: '+45%' },
      icon: '🏪',
      color: 'from-[#8B5CF6] to-[#7C3AED]'
    },
    {
      id: 'hospital',
      title: '병원 키오스크',
      subtitle: '환자 중심의 디지털 접수',
      description: '병원 접수부터 수납까지, 환자의 편의성을 최우선으로 하는 의료기관 전용 디지털 접수 시스템',
      features: [
        '간편한 접수 및 예약 시스템',
        '실시간 대기 번호 관리',
        '상세한 진료 안내 서비스',
        '건강보험 자동 연동',
        '처방전 및 검사지 출력',
        '병원 정보 종합 안내'
      ],
      benefits: [
        '접수 업무 완전 자동화',
        '환자 대기시간 투명화',
        '환자 만족도 89% 증가',
        '직원 업무 효율성 3배 향상'
      ],
      stats: { customers: '500+', satisfaction: '96%', growth: '+52%' },
      icon: '🏥',
      color: 'from-[#F59E0B] to-[#D97706]'
    }
  ];

  const successMetrics = [
    { label: '설치 완료', value: '4,500+', color: 'text-[#3182F6]' },
    { label: '평균 만족도', value: '96.5%', color: 'text-[#10B981]' },
    { label: '매출 증가', value: '+38%', color: 'text-[#F59E0B]' },
    { label: '운영비 절감', value: '-45%', color: 'text-[#8B5CF6]' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            업종별 맞춤 솔루션
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            각 업종의 고유한 특성과 비즈니스 요구사항을 깊이 분석하여 
            <br className="hidden sm:block" />최적화된 키오스크 솔루션을 제공합니다.
          </p>
        </div>

        {/* 성과 지표 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {successMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${metric.color} mb-1 sm:mb-2`}>
                {metric.value}
              </div>
              <div className="text-gray-600 font-medium text-xs sm:text-sm">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* 솔루션 목록 */}
        <div className="space-y-20">
          {solutions.map((solution) => (
            <div key={solution.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className={`bg-gradient-to-r ${solution.color} p-12 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h2 className="text-4xl font-bold mb-2">{solution.title}</h2>
                    <p className="text-xl opacity-90">{solution.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <div className="text-2xl font-bold">{solution.stats.customers}</div>
                        <div className="text-sm opacity-90">설치완료</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{solution.stats.satisfaction}</div>
                        <div className="text-sm opacity-90">만족도</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{solution.stats.growth}</div>
                        <div className="text-sm opacity-90">매출증가</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-12">
                <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                  {solution.description}
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                  {/* 주요 기능 */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      ⚡ 핵심 기능
                    </h4>
                    <div className="space-y-4">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#3182F6] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 도입 효과 */}
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      📊 검증된 성과
                    </h4>
                    <div className="space-y-4">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-[#10B981] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <button className="bg-[#3182F6] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#1E40AF] transition-all duration-300 hover:scale-105 text-lg flex-1">
                    솔루션 상세보기
                  </button>
                  <button className="border-2 border-[#3182F6] text-[#3182F6] px-10 py-4 rounded-xl font-bold hover:bg-[#3182F6] hover:text-white transition-all duration-300 text-lg flex-1">
                    무료 견적 받기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 케이스 스터디 섹션 */}
        <div className="mt-24 bg-white rounded-2xl shadow-lg p-12">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            고객 성공 사례
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🍕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">피자 전문점 A사</h3>
              <p className="text-gray-600 mb-4">키오스크 도입 후 주문 처리 시간 60% 단축, 매출 40% 증가</p>
              <div className="text-sm text-[#3182F6] font-bold">매출 증가 +40%</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">커피 체인 B사</h3>
              <p className="text-gray-600 mb-4">멤버십 연동으로 고객 재방문율 55% 증가, 운영비 30% 절감</p>
              <div className="text-sm text-[#10B981] font-bold">재방문율 +55%</div>
            </div>
            
            <div className="text-center">
              <div className="text-5xl mb-4">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">종합병원 C사</h3>
              <p className="text-gray-600 mb-4">접수 대기시간 80% 단축, 환자 만족도 크게 향상</p>
              <div className="text-sm text-[#F59E0B] font-bold">대기시간 -80%</div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="mt-20 text-center bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white rounded-2xl p-16">
          <h2 className="text-4xl font-bold mb-6">
            여러분의 비즈니스에 딱 맞는 솔루션을 찾아드립니다
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            업종별 전문 컨설턴트가 현장 방문을 통해 비즈니스 환경을 분석하고
            <br />가장 효과적인 키오스크 솔루션을 무료로 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#3182F6] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              무료 현장 컨설팅 신청
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#3182F6] transition-all duration-300 hover:scale-105">
              성공 사례집 다운로드
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}