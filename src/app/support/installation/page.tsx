export default function InstallationPage() {
  const installationSteps = [
    {
      step: 1,
      title: "사전 준비",
      description: "설치 전 확인해야 할 사항들",
      details: [
        "설치 공간 확보 (최소 60cm x 45cm)",
        "220V 전원 콘센트 확인",
        "인터넷 연결 상태 확인 (유선 권장)",
        "기존 POS 시스템 정보 준비",
        "메뉴 데이터 및 이미지 준비"
      ],
      icon: "📋"
    },
    {
      step: 2,
      title: "하드웨어 설치",
      description: "키오스크 본체 및 주변 기기 설치",
      details: [
        "키오스크 본체 위치 선정 및 고정",
        "전원 케이블 연결",
        "네트워크 케이블 연결",
        "카드 리더기 연결",
        "프린터 연결 및 용지 장착",
        "케이블 정리 및 안전 확인"
      ],
      icon: "🔧"
    },
    {
      step: 3,
      title: "소프트웨어 설정",
      description: "운영 시스템 및 키오스크 앱 설정",
      details: [
        "운영체제 초기 설정",
        "키오스크 소프트웨어 설치",
        "네트워크 설정 구성",
        "터치스크린 캘리브레이션",
        "디스플레이 해상도 조정",
        "보안 업데이트 적용"
      ],
      icon: "💻"
    },
    {
      step: 4,
      title: "결제 시스템 연동",
      description: "결제 모듈 및 POS 시스템 연동",
      details: [
        "카드 결제 모듈 설정",
        "POS 시스템 연동 설정",
        "결제 테스트 진행",
        "영수증 출력 테스트",
        "취소/환불 기능 테스트",
        "매출 데이터 연동 확인"
      ],
      icon: "💳"
    },
    {
      step: 5,
      title: "메뉴 및 콘텐츠 설정",
      description: "매장 메뉴 및 UI 커스터마이징",
      details: [
        "메뉴 카테고리 생성",
        "상품 정보 및 이미지 등록",
        "가격 정보 설정",
        "매장 브랜딩 적용",
        "다국어 설정 (필요시)",
        "프로모션 배너 설정"
      ],
      icon: "🍽️"
    },
    {
      step: 6,
      title: "테스트 및 검수",
      description: "전체 시스템 동작 테스트",
      details: [
        "주문 프로세스 전체 테스트",
        "결제 시나리오별 테스트",
        "오류 상황 대응 테스트",
        "성능 및 속도 확인",
        "직원 교육 실시",
        "최종 검수 및 인수인계"
      ],
      icon: "✅"
    }
  ];

  const requirements = [
    {
      category: "공간 요구사항",
      items: [
        "기본형(15.6\"): 50cm(W) x 40cm(D) x 150cm(H)",
        "표준형(21.5\"): 60cm(W) x 45cm(D) x 160cm(H)",
        "대형(27\"): 70cm(W) x 50cm(D) x 170cm(H)",
        "배선을 위한 추가 여유 공간 10cm"
      ]
    },
    {
      category: "전원 요구사항",
      items: [
        "AC 220V, 60Hz 전원",
        "소비전력: 150W 이하",
        "UPS 연결 권장 (정전 대비)",
        "접지된 콘센트 사용 필수"
      ]
    },
    {
      category: "네트워크 요구사항",
      items: [
        "인터넷 속도: 최소 10Mbps",
        "유선 연결 권장 (안정성)",
        "Wi-Fi 5GHz 대역 지원",
        "방화벽 포트 설정 필요"
      ]
    },
    {
      category: "환경 요구사항",
      items: [
        "온도: 5°C ~ 35°C",
        "습도: 20% ~ 80% (비응축)",
        "직사광선 피해야 함",
        "먼지가 적은 환경"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            키오스크 설치 가이드
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            전문 설치 팀이 직접 설치하지만, 사전 준비사항과 설치 과정을 미리 알아보세요.
          </p>
        </div>

        {/* 설치 요구사항 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {requirements.map((req, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{req.category}</h3>
              <ul className="space-y-2">
                {req.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 설치 단계 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            설치 과정
          </h2>
          
          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* 연결선 (마지막 단계 제외) */}
                {index < installationSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-20 bg-gray-300"></div>
                )}
                
                <div className="flex items-start">
                  {/* 단계 번호 */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-6">
                    {step.step}
                  </div>
                  
                  {/* 내용 */}
                  <div className="flex-1 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{step.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></span>
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 설치 시간표 */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            예상 설치 시간
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-foreground mb-2">기본 설치</h3>
              <div className="text-2xl font-bold text-primary mb-2">2-3시간</div>
              <p className="text-gray-600">하드웨어 설치 + 기본 설정</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-foreground mb-2">표준 설치</h3>
              <div className="text-2xl font-bold text-primary mb-2">4-5시간</div>
              <p className="text-gray-600">POS 연동 + 메뉴 설정</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">커스텀 설치</h3>
              <div className="text-2xl font-bold text-primary mb-2">6-8시간</div>
              <p className="text-gray-600">맞춤 개발 + 복합 연동</p>
            </div>
          </div>
        </div>

        {/* 설치 후 지원 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">설치 후 지원</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">🎓</span>
                <div>
                  <h3 className="font-semibold">운영진 교육</h3>
                  <p className="text-gray-600">키오스크 사용법 및 관리 방법</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📚</span>
                <div>
                  <h3 className="font-semibold">매뉴얼 제공</h3>
                  <p className="text-gray-600">상세 사용 설명서 및 문제 해결 가이드</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">🔧</span>
                <div>
                  <h3 className="font-semibold">1개월 무상 A/S</h3>
                  <p className="text-gray-600">설치 후 1개월간 무상 기술 지원</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold">24시간 고객센터</h3>
                  <p className="text-gray-600">언제든지 문의 가능한 기술 지원</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-blue-700 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">설치 문의</h2>
            <p className="mb-6 opacity-90">
              전문 설치팀이 직접 방문하여 설치해드립니다.
              사전 현장 조사도 무료로 진행됩니다.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-3">📞</span>
                <span>설치 문의: 1588-0000</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <span>install@smartkiosk.co.kr</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">⏰</span>
                <span>평일 09:00-18:00</span>
              </div>
            </div>
            
            <button className="mt-6 w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              설치 예약하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}