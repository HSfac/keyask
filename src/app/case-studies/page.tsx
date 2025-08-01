export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "스타벅스 강남점",
      company: "스타벅스 코리아",
      industry: "카페",
      location: "서울 강남구",
      period: "2023.03 - 현재",
      description: "피크타임 주문 대기시간 단축과 고객 편의성 향상을 위한 키오스크 도입",
      challenge: "점심시간과 오후 시간대에 주문 대기줄이 길어져 고객 불만이 증가하고, 직원들의 업무 부담도 과중되는 상황",
      solution: [
        "SmartKiosk Pro 21.5인치 3대 설치",
        "멀티 터치 방식의 직관적인 주문 인터페이스",
        "기존 POS 시스템과 실시간 연동",
        "커스터마이징 옵션 및 사이즈 선택 기능",
        "다국어 지원 (한국어, 영어, 중국어, 일본어)"
      ],
      results: [
        "주문 대기시간 60% 단축 (평균 8분 → 3분)",
        "고객 만족도 25% 향상",
        "직원 업무 효율성 40% 개선",
        "매출 15% 증가 (빠른 회전율)",
        "주문 정확도 95% → 99% 향상"
      ],
      testimonial: "키오스크 도입 후 피크타임 운영이 훨씬 수월해졌습니다. 고객들도 자신의 속도에 맞춰 주문할 수 있어 만족해하시고, 직원들은 고객 서비스에 더 집중할 수 있게 되었습니다.",
      author: "김○○ 점장",
      metrics: [
        { label: "대기시간 단축", value: "60%", icon: "⏱️" },
        { label: "매출 증가", value: "15%", icon: "📈" },
        { label: "만족도 향상", value: "25%", icon: "😊" },
        { label: "정확도 향상", value: "4%", icon: "✅" }
      ],
      image: "☕"
    },
    {
      id: 2,
      title: "맥도날드 홍대점",
      company: "맥도날드 코리아",
      industry: "패스트푸드",
      location: "서울 마포구",
      period: "2023.01 - 현재",
      description: "셀프 주문 시스템 도입으로 운영 효율성 극대화 및 고객 경험 개선",
      challenge: "젊은 고객층이 많은 홍대점에서 빠른 서비스와 정확한 주문 처리가 필요했으나, 복잡한 메뉴와 커스터마이징으로 인한 주문 오류가 빈발",
      solution: [
        "SmartKiosk Max 27인치 4대 설치",
        "시각적 메뉴 디스플레이 및 커스터마이징 UI",
        "다중 결제 시스템 (카드, 모바일, 현금)",
        "주방 디스플레이 시스템 연동",
        "쿠폰 및 할인 혜택 자동 적용"
      ],
      results: [
        "주문 처리 속도 45% 향상",
        "주문 정확도 98% 달성",
        "인건비 20% 절감",
        "고객 회전율 30% 증가",
        "모바일 주문 연동으로 옴니채널 구축"
      ],
      testimonial: "고객들이 키오스크를 통해 더 편리하게 주문하고, 다양한 커스터마이징을 즐기고 있습니다. 운영진도 주문 관리가 체계화되어 매우 만족스럽습니다.",
      author: "이○○ 매니저",
      metrics: [
        { label: "처리 속도", value: "45%", icon: "🚀" },
        { label: "인건비 절감", value: "20%", icon: "💰" },
        { label: "회전율 증가", value: "30%", icon: "🔄" },
        { label: "주문 정확도", value: "98%", icon: "🎯" }
      ],
      image: "🍔"
    },
    {
      id: 3,
      title: "GS25 신촌점",
      company: "GS리테일",
      industry: "편의점",
      location: "서울 서대문구",
      period: "2023.06 - 현재",
      description: "무인 결제 시스템 도입으로 24시간 무인 운영 체계 구축",
      challenge: "심야 시간대 인건비 부담과 고객 편의성을 동시에 해결해야 하는 과제에 직면",
      solution: [
        "SmartKiosk Basic 15.6인치 2대 설치",
        "바코드 스캐너 및 무게 센서 연동",
        "다양한 결제 수단 지원",
        "도난 방지 보안 시스템",
        "원격 모니터링 및 관리 시스템"
      ],
      results: [
        "심야 무인 운영 100% 달성",
        "인건비 35% 절감",
        "계산 대기시간 70% 단축",
        "고객 편의성 크게 향상",
        "매출 손실 없이 운영비 절감"
      ],
      testimonial: "24시간 무인 운영이 가능해져서 인건비 부담이 크게 줄었습니다. 고객들도 빠른 셀프 계산에 만족하고 있어요.",
      author: "박○○ 점주",
      metrics: [
        { label: "무인 운영", value: "100%", icon: "🏪" },
        { label: "인건비 절감", value: "35%", icon: "💸" },
        { label: "대기시간 단축", value: "70%", icon: "⚡" },
        { label: "편의성 향상", value: "90%", icon: "👍" }
      ],
      image: "🏪"
    },
    {
      id: 4,
      title: "서울대병원 외래진료센터",
      company: "서울대학교병원",
      industry: "의료기관",
      location: "서울 종로구",
      period: "2023.09 - 현재",
      description: "환자 접수 및 대기 관리 시스템의 디지털 전환으로 병원 운영 효율성 극대화",
      challenge: "복잡한 진료 접수 과정과 긴 대기시간으로 인한 환자 불편과 접수 데스크 업무 과부하",
      solution: [
        "SmartKiosk Pro 21.5인치 6대 설치",
        "병원 정보 시스템(HIS) 연동",
        "건강보험 카드 리더기 연동",
        "대기번호 발급 및 안내 시스템",
        "다국어 지원 및 접근성 기능"
      ],
      results: [
        "접수 대기시간 50% 단축",
        "접수 데스크 업무량 40% 감소",
        "환자 만족도 30% 향상",
        "접수 오류율 90% 감소",
        "의료진 및 직원 업무 효율성 개선"
      ],
      testimonial: "환자분들이 대기시간 없이 빠르게 접수할 수 있게 되어 병원 전체 분위기가 많이 개선되었습니다. 특히 고령 환자분들도 쉽게 사용하실 수 있도록 설계되어 있어 만족스럽습니다.",
      author: "정○○ 간호팀장",
      metrics: [
        { label: "대기시간 단축", value: "50%", icon: "⏰" },
        { label: "업무량 감소", value: "40%", icon: "📋" },
        { label: "만족도 향상", value: "30%", icon: "🏥" },
        { label: "오류율 감소", value: "90%", icon: "✨" }
      ],
      image: "🏥"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            고객 성공 사례
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            다양한 업종에서 SmartKiosk Solutions가 어떻게 비즈니스 성과를 개선했는지 확인해보세요.
            실제 고객의 경험과 구체적인 성과를 통해 검증된 솔루션의 가치를 보여드립니다.
          </p>
        </div>

        {/* 전체 성과 요약 */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">누적 성과</h2>
            <p className="text-lg opacity-90">전체 고객사의 평균 개선 지표</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">55%</div>
              <div className="opacity-90">평균 대기시간 단축</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">27%</div>
              <div className="opacity-90">평균 매출 증가</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">32%</div>
              <div className="opacity-90">평균 운영비 절감</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">고객 만족도</div>
            </div>
          </div>
        </div>

        {/* 사례 목록 */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* 헤더 */}
              <div className="bg-gray-50 p-8 border-b border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="text-6xl mr-6">{study.image}</div>
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{study.title}</h2>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span>🏢 {study.company}</span>
                        <span>🏷️ {study.industry}</span>
                        <span>📍 {study.location}</span>
                        <span>📅 {study.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mt-4">{study.description}</p>
              </div>

              {/* 메인 콘텐츠 */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* 과제 및 솔루션 */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      🎯 해결 과제
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{study.challenge}</p>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      💡 적용 솔루션
                    </h3>
                    <ul className="space-y-2">
                      {study.solution.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 성과 지표 */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      📊 핵심 성과
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-gray-50 p-4 rounded-lg text-center">
                          <div className="text-2xl mb-2">{metric.icon}</div>
                          <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                      🏆 세부 성과
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 고객 추천사 */}
                <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-xl p-6">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4">💬</div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                        "{study.testimonial}"
                      </blockquote>
                      <cite className="text-primary font-semibold">- {study.author}</cite>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA 섹션 */}
        <div className="mt-20 text-center bg-foreground text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            당신의 비즈니스도 성공 사례가 될 수 있습니다
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            검증된 키오스크 솔루션으로 운영 효율성을 높이고 고객 만족도를 향상시켜보세요.
            무료 상담을 통해 맞춤형 솔루션을 제안해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              무료 상담 신청
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-foreground transition-colors">
              견적 문의하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}