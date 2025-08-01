import Link from 'next/link';

export default function CafeSolutionPage() {
  const features = [
    {
      title: "음료 커스터마이징 시스템",
      description: "다양한 커스터마이징 옵션으로 고객 개인의 취향에 맞는 음료 주문",
      icon: "☕",
      benefits: [
        "샷 추가/제거 옵션",
        "시럽 종류 및 양 조절",
        "우유 종류 선택",
        "온도 조절 (HOT/ICE)",
        "휘핑크림 추가/제거",
        "디카페인 선택"
      ]
    },
    {
      title: "멤버십 & 포인트 연동",
      description: "고객 로열티 프로그램과 완벽하게 연동되는 포인트 시스템",
      icon: "🎯",
      benefits: [
        "바코드/QR 스캔 적립",
        "자동 포인트 계산",
        "등급별 할인 적용",
        "생일 쿠폰 자동 발급",
        "방문 횟수별 혜택",
        "추천인 포인트 지급"
      ]
    },
    {
      title: "계절별 메뉴 관리",
      description: "시즌별 신메뉴와 프로모션을 자동으로 관리하는 스마트 시스템",
      icon: "🗓️",
      benefits: [
        "계절별 자동 메뉴 전환",
        "한정 메뉴 타이머 설정",
        "매진 상품 자동 비활성화",
        "신메뉴 하이라이트 표시",
        "프로모션 배너 관리",
        "이벤트 팝업 설정"
      ]
    },
    {
      title: "빠른 주문 프리셋",
      description: "단골 고객을 위한 원터치 주문 시스템으로 대기시간 최소화",
      icon: "⚡",
      benefits: [
        "인기 메뉴 원터치 주문",
        "개인 즐겨찾기 저장",
        "최근 주문 이력 표시",
        "빠른 재주문 기능",
        "그룹 주문 옵션",
        "테이크아웃/매장 구분"
      ]
    },
    {
      title: "실시간 매장 정보",
      description: "현재 매장 상황과 대기시간을 실시간으로 안내하는 정보 시스템",
      icon: "📊",
      benefits: [
        "실시간 대기시간 안내",
        "좌석 현황 표시",
        "조리 진행 상황 알림",
        "픽업 완료 알림",
        "매장 이벤트 안내",
        "Wi-Fi 정보 제공"
      ]
    },
    {
      title: "다국어 지원",
      description: "외국인 고객을 위한 다국어 인터페이스로 글로벌 서비스 제공",
      icon: "🌍",
      benefits: [
        "한국어/영어/중국어/일본어",
        "자동 언어 감지",
        "메뉴명 번역 제공",
        "알레르기 정보 다국어",
        "결제 안내 번역",
        "영수증 다국어 출력"
      ]
    }
  ];

  const menuCategories = [
    {
      category: "에스프레소 베이스",
      items: ["아메리카노", "라떼", "카푸치노", "마끼아또"],
      customizations: ["샷 추가", "시럽 변경", "우유 선택", "디카페인"]
    },
    {
      category: "프라푸치노/블렌디드",
      items: ["자바칩", "카라멜", "딸기", "망고"],
      customizations: ["휘핑 추가", "시럽 조절", "얼음 양", "토핑 선택"]
    },
    {
      category: "차/논커피",
      items: ["그린티 라떼", "차이 라떼", "핫초콜릿", "유자차"],
      customizations: ["온도 선택", "달기 조절", "우유 변경", "토핑 추가"]
    },
    {
      category: "디저트/베이커리",
      items: ["스콘", "머핀", "케이크", "쿠키"],
      customizations: ["개별 포장", "캔들 추가", "메시지 카드", "데우기"]
    }
  ];

  const workflowSteps = [
    {
      step: "주문 접수",
      description: "키오스크에서 접수된 주문이 바로 주방 시스템으로 전송",
      time: "즉시",
      icon: "📱"
    },
    {
      step: "주문 확인",
      description: "바리스타가 주문 내역을 확인하고 조리 시작",
      time: "30초",
      icon: "👨‍🍳"
    },
    {
      step: "음료 제조",
      description: "커스터마이징 옵션에 따라 정확한 음료 제조",
      time: "3-5분",
      icon: "☕"
    },
    {
      step: "완료 알림",
      description: "제조 완료 시 고객에게 자동 알림 발송",
      time: "즉시",
      icon: "🔔"
    },
    {
      step: "픽업 완료",
      description: "고객 픽업 확인 및 주문 완료 처리",
      time: "즉시",
      icon: "✅"
    }
  ];

  const peakTimeStats = {
    morning: { time: "07:00-10:00", orders: "45%", drinks: "아메리카노, 라떼" },
    lunch: { time: "12:00-14:00", orders: "25%", drinks: "아이스 음료, 샐러드" },
    afternoon: { time: "15:00-17:00", orders: "30%", drinks: "프라푸치노, 디저트" }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            ☕ 카페 키오스크 솔루션
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            바리스타의 전문성과 디지털 기술이 만나 완벽한 카페 경험을 제공합니다.
            고객 맞춤형 주문부터 포인트 적립까지, 카페 운영의 모든 것을 스마트하게 관리하세요.
          </p>
        </div>

        {/* 주요 기능 섹션 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            카페 특화 기능
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

        {/* 메뉴 카테고리별 커스터마이징 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            메뉴별 커스터마이징 옵션
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {menuCategories.map((menu, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-secondary to-green-600 text-white p-6">
                  <h3 className="text-2xl font-bold mb-3">{menu.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {menu.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">커스터마이징 옵션:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {menu.customizations.map((custom, customIndex) => (
                      <div key={customIndex} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {custom}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 주문 워크플로우 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            스마트 주문 워크플로우
          </h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {workflowSteps.map((step, index) => (
                <div key={index} className="relative bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  <div className="text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                    {step.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 시간대별 분석 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            시간대별 운영 분석
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(peakTimeStats).map(([period, stats], index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {period === 'morning' ? '모닝 타임' : period === 'lunch' ? '런치 타임' : '오후 타임'}
                  </h3>
                  <div className="text-3xl font-bold text-primary">{stats.orders}</div>
                  <div className="text-gray-600">{stats.time}</div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-2">인기 메뉴</h4>
                  <p className="text-gray-700">{stats.drinks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 성공 사례 미리보기 */}
        <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8 mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">실제 도입 성과</h2>
            <p className="text-lg opacity-90">스타벅스 강남점 사례</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60%</div>
              <div className="opacity-90">대기시간 단축</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25%</div>
              <div className="opacity-90">고객 만족도 향상</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15%</div>
              <div className="opacity-90">매출 증가</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="opacity-90">주문 정확도</div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link 
              href="/case-studies"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              전체 사례 보기 →
            </Link>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-foreground text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            카페 운영을 한 단계 업그레이드하세요
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            고객 개인의 취향을 반영한 맞춤형 주문 경험과 효율적인 매장 운영을 동시에 실현하세요.
            카페 전용 키오스크 솔루션으로 매출 증대와 고객 만족도 향상을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              무료 상담 신청
            </Link>
            <Link 
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-foreground transition-colors"
            >
              제품 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}