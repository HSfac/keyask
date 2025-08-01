import Link from 'next/link';

export default function ConvenienceSolutionPage() {
  const features = [
    {
      title: "빠른 셀프 계산",
      description: "바코드 스캔부터 결제까지 30초 이내 완료되는 초고속 셀프 계산 시스템",
      icon: "⚡",
      benefits: [
        "바코드 자동 인식",
        "무게 자동 측정",
        "중복 스캔 방지",
        "계산 오류 자동 검출",
        "영수증 즉시 출력",
        "포인트 자동 적립"
      ]
    },
    {
      title: "24시간 무인 운영",
      description: "심야 시간대 무인 운영으로 인건비 절약과 고객 편의성을 동시에 실현",
      icon: "🌙",
      benefits: [
        "완전 무인 결제 시스템",
        "도난 방지 보안 장치",
        "원격 모니터링",
        "비상 상황 대응",
        "자동 재고 관리",
        "에너지 절약 모드"
      ]
    },
    {
      title: "다양한 서비스 연동",
      description: "택배, 공과금 납부, 쿠폰 발행 등 편의점의 모든 서비스를 키오스크로 통합",
      icon: "🔗",
      benefits: [
        "택배 접수/조회",
        "공과금 납부",
        "교통카드 충전",
        "상품권 구매",
        "쿠폰 발행/사용",
        "이벤트 응모"
      ]
    },
    {
      title: "스마트 재고 관리",
      description: "실시간 재고 연동으로 매진 상품 관리와 자동 발주 시스템 구현",
      icon: "📦",
      benefits: [
        "실시간 재고 확인",
        "매진 상품 자동 제외",
        "유통기한 관리",
        "자동 발주 알림",
        "진열 위치 안내",
        "폐기 상품 관리"
      ]
    },
    {
      title: "연령 확인 시스템",
      description: "주류, 담배 등 연령 제한 상품의 안전한 판매를 위한 자동 확인 시스템",
      icon: "🔞",
      benefits: [
        "신분증 자동 인식",
        "연령 자동 계산",
        "제한 상품 차단",
        "관리자 승인 요청",
        "판매 기록 보관",
        "법적 요구사항 준수"
      ]
    },
    {
      title: "멀티 결제 지원",
      description: "현금부터 모바일 결제까지 모든 결제 수단을 지원하는 통합 결제 시스템",
      icon: "💳",
      benefits: [
        "현금 자동 계산",
        "카드 결제 (IC/MS)",
        "모바일 결제",
        "교통카드 결제",
        "포인트 결제",
        "상품권 결제"
      ]
    }
  ];

  const serviceCategories = [
    {
      title: "일반 상품 결제",
      description: "식품, 생활용품, 문구류 등",
      process: ["바코드 스캔", "수량 확인", "결제 수단 선택", "결제 완료"],
      icon: "🛒"
    },
    {
      title: "연령 제한 상품",
      description: "주류, 담배, 성인용품 등",
      process: ["상품 스캔", "신분증 확인", "연령 인증", "관리자 승인", "결제"],
      icon: "🔞"
    },
    {
      title: "택배 서비스",
      description: "택배 접수, 조회, 픽업 등",
      process: ["서비스 선택", "정보 입력", "요금 계산", "결제", "접수증 출력"],
      icon: "📦"
    },
    {
      title: "공과금 납부",
      description: "전기, 가스, 통신료 등",
      process: ["청구서 스캔", "금액 확인", "결제 선택", "납부 완료", "영수증 출력"],
      icon: "💰"
    }
  ];

  const securityFeatures = [
    {
      title: "상품 도난 방지",
      description: "무게 센서와 카메라를 활용한 실시간 모니터링",
      features: ["무게 센서 검증", "CCTV 연동", "이상 행동 감지", "알림 시스템"]
    },
    {
      title: "결제 보안",
      description: "안전한 결제 환경을 위한 다중 보안 시스템",
      features: ["암호화 통신", "PCI-DSS 준수", "이중 인증", "거래 기록 보관"]
    },
    {
      title: "시스템 보안",
      description: "해킹과 불법 접근을 차단하는 보안 체계",
      features: ["방화벽 보호", "정기 보안 업데이트", "접근 권한 관리", "로그 모니터링"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🏪 편의점 키오스크 솔루션
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            24시간 무인 운영이 가능한 스마트 편의점을 만들어보세요.
            빠른 셀프 계산부터 다양한 생활 서비스까지, 모든 것을 하나의 키오스크로 해결합니다.
          </p>
        </div>

        {/* 주요 기능 섹션 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            핵심 기능
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="grid grid-cols-2 gap-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 서비스별 프로세스 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            서비스별 이용 프로세스
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="opacity-90">{service.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">처리 과정:</h4>
                  <div className="space-y-3">
                    {service.process.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <div className="w-6 h-6 bg-secondary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {stepIndex + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 보안 시스템 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            강화된 보안 시스템
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-foreground mb-4">{security.title}</h3>
                <p className="text-gray-600 mb-4">{security.description}</p>
                
                <div className="space-y-2">
                  {security.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 운영 시간대별 분석 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            시간대별 운영 효율성
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-xl font-bold text-foreground mb-2">주간 운영</h3>
              <div className="text-sm text-gray-600 mb-4">06:00 - 22:00</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>직원 배치</span>
                  <span className="font-semibold">2-3명</span>
                </div>
                <div className="flex justify-between">
                  <span>키오스크 활용률</span>
                  <span className="font-semibold">70%</span>
                </div>
                <div className="flex justify-between">
                  <span>대기시간</span>
                  <span className="font-semibold">30초</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-foreground mb-2">심야 운영</h3>
              <div className="text-sm text-gray-600 mb-4">22:00 - 06:00</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>직원 배치</span>
                  <span className="font-semibold">0명 (무인)</span>
                </div>
                <div className="flex justify-between">
                  <span>키오스크 활용률</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>인건비 절감</span>
                  <span className="font-semibold">100%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-foreground mb-2">전체 효과</h3>
              <div className="text-sm text-gray-600 mb-4">월간 평균</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>인건비 절감</span>
                  <span className="font-semibold text-secondary">35%</span>
                </div>
                <div className="flex justify-between">
                  <span>매출 손실</span>
                  <span className="font-semibold text-secondary">0%</span>
                </div>
                <div className="flex justify-between">
                  <span>고객 만족도</span>
                  <span className="font-semibold text-secondary">95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 성공 사례 미리보기 */}
        <div className="bg-gradient-to-r from-secondary to-green-600 text-white rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">실제 도입 성과</h2>
            <p className="text-lg opacity-90">GS25 신촌점 사례</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">무인 운영 달성</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">35%</div>
              <div className="opacity-90">인건비 절감</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70%</div>
              <div className="opacity-90">대기시간 단축</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="opacity-90">편의성 향상</div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-foreground text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            스마트 편의점 운영을 시작하세요
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            24시간 무인 운영으로 인건비를 절약하고, 고객 편의성을 극대화하세요.
            검증된 편의점 키오스크 솔루션으로 매장 운영의 새로운 패러다임을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              무료 상담 신청
            </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-foreground transition-colors"
            >
              성공 사례 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}