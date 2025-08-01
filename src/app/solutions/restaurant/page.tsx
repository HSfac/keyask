import Link from 'next/link';

export default function RestaurantSolutionPage() {
  const features = [
    {
      title: "직관적인 메뉴 인터페이스",
      description: "카테고리별 메뉴 구성과 고화질 이미지로 고객이 쉽게 선택할 수 있는 인터페이스",
      icon: "🍽️",
      benefits: [
        "시각적 메뉴 디스플레이",
        "카테고리별 체계적 분류",
        "계절 메뉴 자동 노출",
        "베스트 메뉴 하이라이트"
      ]
    },
    {
      title: "스마트 주문 관리",
      description: "실시간 주문 접수부터 조리 완료까지 전 과정을 디지털로 관리",
      icon: "📋",
      benefits: [
        "실시간 주문 현황 확인",
        "조리 시간 예측 시스템",
        "우선순위 주문 관리",
        "고객 호출 시스템 연동"
      ]
    },
    {
      title: "다양한 결제 옵션",
      description: "신용카드부터 모바일 결제까지 모든 결제 수단을 지원하는 통합 결제 시스템",
      icon: "💳",
      benefits: [
        "신용카드/체크카드 결제",
        "삼성페이/애플페이/LG페이",
        "카카오페이/네이버페이",
        "QR코드 결제 지원"
      ]
    },
    {
      title: "POS 시스템 연동",
      description: "기존 POS 시스템과 완벽하게 연동되어 매장 운영에 차질 없는 솔루션",
      icon: "🔗",
      benefits: [
        "실시간 재고 연동",
        "매출 데이터 통합 관리",
        "메뉴 정보 동기화",
        "고객 정보 연결"
      ]
    },
    {
      title: "고객 맞춤 서비스",
      description: "고객의 취향과 선호도를 반영한 개인화된 주문 경험 제공",
      icon: "👤",
      benefits: [
        "개인별 주문 히스토리",
        "선호 메뉴 추천",
        "알레르기 정보 관리",
        "맞춤형 프로모션"
      ]
    },
    {
      title: "실시간 분석 리포트",
      description: "매출, 인기 메뉴, 시간대별 통계 등 경영에 필요한 데이터를 실시간으로 제공",
      icon: "📊",
      benefits: [
        "시간대별 매출 분석",
        "메뉴별 판매 현황",
        "고객 행동 패턴 분석",
        "재고 회전율 관리"
      ]
    }
  ];

  const businessTypes = [
    {
      type: "한식당",
      description: "전통 한식부터 퓨전 한식까지",
      specialFeatures: [
        "반찬 선택 옵션",
        "매운맛 단계 설정",
        "상차림 안내",
        "계절 메뉴 자동 변경"
      ],
      icon: "🍚"
    },
    {
      type: "양식당",
      description: "파스타, 스테이크, 피자 전문점",
      specialFeatures: [
        "토핑 커스터마이징",
        "굽기 정도 선택",
        "소스 변경 옵션",
        "와인 페어링 추천"
      ],
      icon: "🍝"
    },
    {
      type: "일식당",
      description: "초밥, 라멘, 돈카츠 전문점",
      specialFeatures: [
        "생선 종류별 분류",
        "면 종류 선택",
        "와사비 양 조절",
        "사케 추천 시스템"
      ],
      icon: "🍜"
    },
    {
      type: "중식당",
      description: "중화요리 전문점",
      specialFeatures: [
        "코스 메뉴 구성",
        "인원수별 추천",
        "중국 차 선택",
        "국물 진한 정도 설정"
      ],
      icon: "🥟"
    }
  ];

  const caseStudy = {
    restaurant: "한우마을 본점",
    location: "서울 강남구",
    before: {
      waitTime: "15분",
      orderErrors: "12%",
      customerSatisfaction: "75%",
      laborCost: "100%"
    },
    after: {
      waitTime: "6분",
      orderErrors: "2%",
      customerSatisfaction: "92%",
      laborCost: "75%"
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🍽️ 음식점 키오스크 솔루션
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            주문 대기시간을 단축하고 운영 효율성을 높이는 음식점 전용 키오스크 솔루션입니다.
            고객 만족도 향상과 동시에 매장 운영의 체계화를 실현합니다.
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
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 업종별 특화 기능 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            업종별 특화 기능
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessTypes.map((business, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-6">
                  <div className="flex items-center">
                    <span className="text-4xl mr-4">{business.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{business.type}</h3>
                      <p className="opacity-90">{business.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">특화 기능:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {business.specialFeatures.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 성과 지표 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            실제 도입 성과
          </h2>
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-700">
              {caseStudy.restaurant} ({caseStudy.location})
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-600">주문 대기시간</div>
                <div className="text-2xl text-red-500 line-through">{caseStudy.before.waitTime}</div>
                <div className="text-3xl font-bold text-primary">{caseStudy.after.waitTime}</div>
                <div className="text-sm text-secondary font-semibold">60% 단축</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-600">주문 오류율</div>
                <div className="text-2xl text-red-500 line-through">{caseStudy.before.orderErrors}</div>
                <div className="text-3xl font-bold text-primary">{caseStudy.after.orderErrors}</div>
                <div className="text-sm text-secondary font-semibold">83% 감소</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-600">고객 만족도</div>
                <div className="text-2xl text-gray-400">{caseStudy.before.customerSatisfaction}</div>
                <div className="text-3xl font-bold text-primary">{caseStudy.after.customerSatisfaction}</div>
                <div className="text-sm text-secondary font-semibold">17% 향상</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-600">인건비</div>
                <div className="text-2xl text-red-500 line-through">{caseStudy.before.laborCost}</div>
                <div className="text-3xl font-bold text-primary">{caseStudy.after.laborCost}</div>
                <div className="text-sm text-secondary font-semibold">25% 절감</div>
              </div>
            </div>
          </div>
        </div>

        {/* 도입 프로세스 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            도입 프로세스
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {[
                { step: 1, title: "현장 조사", desc: "매장 규모, 메뉴 구성, 고객 동선 분석", time: "1일" },
                { step: 2, title: "솔루션 설계", desc: "매장 특성에 맞는 맞춤형 솔루션 설계", time: "3-5일" },
                { step: 3, title: "시스템 구축", desc: "하드웨어 설치 및 소프트웨어 설정", time: "1-2일" },
                { step: 4, title: "메뉴 등록", desc: "메뉴 정보, 이미지, 가격 등 데이터 입력", time: "1일" },
                { step: 5, title: "테스트 운영", desc: "실제 환경에서 테스트 및 직원 교육", time: "2-3일" },
                { step: 6, title: "정식 운영", desc: "서비스 시작 및 지속적인 모니터링", time: "진행중" }
              ].map((process, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-8">
                    {process.step}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{process.title}</h3>
                      <span className="text-sm bg-primary text-white px-3 py-1 rounded-full">{process.time}</span>
                    </div>
                    <p className="text-gray-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            음식점 운영을 더욱 스마트하게
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            검증된 음식점 키오스크 솔루션으로 고객 만족도를 높이고 운영 효율성을 개선해보세요.
            무료 상담을 통해 매장에 최적화된 솔루션을 제안해드립니다.
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
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              성공 사례 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}