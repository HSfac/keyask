import Link from 'next/link';

export default function HospitalSolutionPage() {
  const features = [
    {
      title: "간편한 접수 시스템",
      description: "복잡한 접수 과정을 단순화하여 환자의 대기시간을 최소화하는 스마트 접수 시스템",
      icon: "📋",
      benefits: [
        "진료과별 빠른 접수",
        "건강보험증 자동 인식",
        "진료비 사전 확인",
        "접수번호 자동 발급",
        "다음 진료 예약",
        "처방전 조회"
      ]
    },
    {
      title: "실시간 대기 관리",
      description: "현재 대기 상황과 예상 대기시간을 실시간으로 안내하는 지능형 대기 관리 시스템",
      icon: "⏰",
      benefits: [
        "실시간 대기번호 표시",
        "예상 대기시간 안내",
        "진료실별 현황",
        "대기자 수 표시",
        "호출 알림 서비스",
        "모바일 알림 연동"
      ]
    },
    {
      title: "건강검진 예약",
      description: "종합건강검진부터 특정 검사까지 온라인 예약과 동일한 편의성을 제공",
      icon: "🏥",
      benefits: [
        "검진 패키지 선택",
        "날짜/시간 예약",
        "검진 전 주의사항",
        "비용 안내",
        "검진 결과 조회",
        "재검진 알림"
      ]
    },
    {
      title: "보험 연동 시스템",
      description: "건강보험 및 실손보험 정보를 실시간으로 연동하여 정확한 본인부담금 계산",
      icon: "💳",
      benefits: [
        "건강보험 자격 확인",
        "실손보험 연동",
        "본인부담금 계산",
        "급여/비급여 구분",
        "보험금 청구 안내",
        "의료비 영수증 발급"
      ]
    },
    {
      title: "다국어 접근성",
      description: "외국인 환자와 고령자를 위한 다국어 지원 및 접근성 강화 기능",
      icon: "🌍",
      benefits: [
        "한/영/중/일 지원",
        "음성 안내 기능",
        "큰 글씨 모드",
        "단순 인터페이스",
        "휠체어 접근 가능",
        "시각/청각 보조"
      ]
    },
    {
      title: "병원 정보 안내",
      description: "병원 내 시설 안내부터 진료과 정보까지 종합적인 정보 제공 서비스",
      icon: "ℹ️",
      benefits: [
        "층별 시설 안내",
        "진료과별 위치",
        "의료진 소개",
        "병원 소식",
        "주차 정보",
        "교통편 안내"
      ]
    }
  ];

  const departments = [
    {
      name: "내과",
      services: ["일반진료", "건강검진", "만성질환 관리", "예방접종"],
      waitTime: "15분",
      icon: "🩺"
    },
    {
      name: "외과",
      services: ["수술 상담", "외상 치료", "정기 검진", "수술 예약"],
      waitTime: "25분",
      icon: "🏥"
    },
    {
      name: "소아과",
      services: ["아동 진료", "예방접종", "발달 검사", "응급처치"],
      waitTime: "10분",
      icon: "👶"
    },
    {
      name: "정형외과",
      services: ["골절 치료", "관절 검사", "물리치료", "수술 후 관리"],
      waitTime: "30분",
      icon: "🦴"
    }
  ];

  const patientJourney = [
    {
      step: "도착 및 접수",
      description: "병원 도착 후 키오스크에서 간편 접수",
      actions: ["건강보험증 스캔", "진료과 선택", "증상 입력", "접수번호 발급"],
      icon: "🚪"
    },
    {
      step: "대기 관리",
      description: "실시간 대기 현황 확인 및 알림 서비스",
      actions: ["대기번호 확인", "예상시간 안내", "모바일 알림", "대기공간 안내"],
      icon: "⏱️"
    },
    {
      step: "진료 준비",
      description: "진료 전 필요한 정보 확인 및 준비",
      actions: ["진료실 안내", "담당의 정보", "진료비 안내", "주의사항 확인"],
      icon: "📝"
    },
    {
      step: "진료 완료",
      description: "진료 후 수납 및 후속 조치 안내",
      actions: ["진료비 계산", "처방전 발급", "다음 예약", "수납 완료"],
      icon: "✅"
    }
  ];

  const accessibilityFeatures = [
    {
      feature: "시각 보조",
      description: "시각 장애인을 위한 음성 안내 및 점자 지원",
      details: ["음성 메뉴 읽기", "점자 키패드", "고대비 화면", "확대 기능"]
    },
    {
      feature: "청각 보조",
      description: "청각 장애인을 위한 시각적 안내 시스템",
      details: ["수화 동영상", "진동 알림", "플래시 신호", "문자 안내"]
    },
    {
      feature: "신체 보조",
      description: "거동 불편한 환자를 위한 접근성 기능",
      details: ["휠체어 접근", "낮은 화면 높이", "큰 버튼", "간편 조작"]
    },
    {
      feature: "고령자 배려",
      description: "고령 환자를 위한 사용자 친화적 인터페이스",
      details: ["큰 글씨", "단순 메뉴", "천천히 안내", "도움 버튼"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            🏥 병원 키오스크 솔루션
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            환자 중심의 스마트 병원을 만들어보세요.
            접수부터 수납까지 모든 과정을 디지털화하여 환자 만족도를 높이고 업무 효율성을 극대화합니다.
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

        {/* 진료과별 현황 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            진료과별 실시간 현황
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{dept.icon}</span>
                    <h3 className="text-lg font-bold text-foreground">{dept.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">예상 대기시간</div>
                    <div className="text-lg font-bold text-primary">{dept.waitTime}</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {dept.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      {service}
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-primary text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  접수하기
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 환자 여정 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            스마트 진료 여정
          </h2>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {patientJourney.map((journey, index) => (
                <div key={index} className="relative bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{journey.icon}</div>
                    <h3 className="text-lg font-bold text-foreground">{journey.step}</h3>
                    <p className="text-sm text-gray-600 mt-2">{journey.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {journey.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {action}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 접근성 기능 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            모든 환자를 위한 접근성
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accessibilityFeatures.map((accessibility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{accessibility.feature}</h3>
                  <p className="opacity-90">{accessibility.description}</p>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {accessibility.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 도입 효과 */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">실제 도입 성과</h2>
            <p className="text-lg opacity-90">서울대병원 외래진료센터 사례</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="opacity-90">접수 대기시간 단축</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="opacity-90">접수 업무량 감소</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="opacity-90">환자 만족도 향상</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">90%</div>
              <div className="opacity-90">접수 오류율 감소</div>
            </div>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-foreground text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            환자 중심의 스마트 병원을 만들어보세요
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            디지털 기술로 환자의 편의성을 높이고, 의료진의 업무 효율성을 개선하세요.
            검증된 병원 키오스크 솔루션으로 의료 서비스의 질을 한 단계 높여보세요.
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