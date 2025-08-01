export default function ManualPage() {
  const manualSections = [
    {
      title: "기본 사용법",
      icon: "📱",
      topics: [
        {
          title: "키오스크 켜기/끄기",
          content: "전원 버튼을 3초간 눌러 켜고, 관리자 메뉴에서 안전하게 종료할 수 있습니다. 갑작스런 전원 차단은 피해주세요.",
          steps: [
            "전원 버튼 3초간 누르기",
            "부팅 완료까지 대기 (약 30초)",
            "터치스크린 활성화 확인",
            "메인 화면 정상 표시 확인"
          ]
        },
        {
          title: "관리자 모드 접근",
          content: "화면 우상단을 5초간 터치하거나 숨겨진 버튼을 사용하여 관리자 모드에 접근할 수 있습니다.",
          steps: [
            "화면 우상단 모서리 5초간 터치",
            "관리자 비밀번호 입력",
            "관리자 메뉴 확인",
            "필요한 작업 수행 후 고객 모드로 복귀"
          ]
        }
      ]
    },
    {
      title: "메뉴 관리",
      icon: "🍽️",
      topics: [
        {
          title: "메뉴 추가/수정",
          content: "관리자 페이지에서 실시간으로 메뉴를 추가하거나 수정할 수 있습니다. 변경사항은 즉시 반영됩니다.",
          steps: [
            "관리자 페이지 로그인",
            "'메뉴 관리' 메뉴 선택",
            "새 메뉴 추가 또는 기존 메뉴 선택",
            "상품명, 가격, 설명, 이미지 입력",
            "카테고리 지정 및 노출 설정",
            "저장 후 키오스크에서 확인"
          ]
        },
        {
          title: "가격 변경",
          content: "가격 변경은 관리자 권한으로만 가능하며, 변경 이력이 모두 기록됩니다.",
          steps: [
            "메뉴 관리에서 해당 상품 선택",
            "가격 정보 수정",
            "변경 사유 입력 (선택사항)",
            "저장 및 적용",
            "고객 화면에서 변경 확인"
          ]
        }
      ]
    },
    {
      title: "주문 관리",
      icon: "📋",
      topics: [
        {
          title: "실시간 주문 현황",
          content: "관리자 화면에서 실시간으로 들어오는 주문을 확인하고 처리 상태를 관리할 수 있습니다.",
          steps: [
            "관리자 메뉴에서 '주문 현황' 선택",
            "신규 주문 알림 확인",
            "주문 상세 내역 검토",
            "조리 시작/완료 버튼 클릭",
            "고객 호출 또는 픽업 안내"
          ]
        },
        {
          title: "주문 취소/환불",
          content: "고객 요청 시 관리자 권한으로 주문을 취소하거나 환불 처리할 수 있습니다.",
          steps: [
            "해당 주문 선택",
            "'취소/환불' 버튼 클릭",
            "취소 사유 선택",
            "환불 방법 선택 (카드취소/현금환불)",
            "고객 확인 후 처리 완료"
          ]
        }
      ]
    },
    {
      title: "매출 관리",
      icon: "📊",
      topics: [
        {
          title: "일일 매출 확인",
          content: "하루 단위로 매출 현황을 확인하고 상세 분석 데이터를 볼 수 있습니다.",
          steps: [
            "관리자 메뉴에서 '매출 관리' 선택",
            "조회 날짜 설정",
            "매출 총액 및 건수 확인",
            "상품별 판매 현황 검토",
            "시간대별 매출 분석"
          ]
        },
        {
          title: "정산 및 마감",
          content: "영업 마감 시 일일 정산을 진행하고 매출 데이터를 확정합니다.",
          steps: [
            "모든 주문 처리 완료 확인",
            "'일일 정산' 메뉴 선택",
            "현금/카드 매출 확인",
            "정산 보고서 출력",
            "데이터 백업 및 마감 처리"
          ]
        }
      ]
    },
    {
      title: "유지보수",
      icon: "🔧",
      topics: [
        {
          title: "정기 청소",
          content: "키오스크의 안정적인 운영을 위해 정기적인 청소와 점검이 필요합니다.",
          steps: [
            "전원 종료 후 청소 시작",
            "화면 청소 (알코올 티슈 사용)",
            "카드 리더기 슬롯 청소",
            "프린터 용지함 확인",
            "통풍구 먼지 제거",
            "케이블 연결 상태 점검"
          ]
        },
        {
          title: "소프트웨어 업데이트",
          content: "보안과 성능 향상을 위해 정기적으로 소프트웨어를 업데이트해야 합니다.",
          steps: [
            "관리자 메뉴에서 '시스템 설정' 선택",
            "'업데이트 확인' 버튼 클릭",
            "사용 가능한 업데이트 확인",
            "자동 업데이트 실행",
            "재시작 후 정상 작동 확인"
          ]
        }
      ]
    }
  ];

  const quickGuide = [
    {
      title: "응급 상황 대처",
      icon: "🚨",
      actions: [
        "키오스크 멈춤 → 전원 버튼 5초간 누르기",
        "터치 반응 없음 → 화면 청소 후 재시작",
        "영수증 안나옴 → 용지 확인 후 프린터 덮개 닫기",
        "결제 오류 → 다른 결제 수단 안내",
        "네트워크 끊김 → 오프라인 모드 안내"
      ]
    },
    {
      title: "일일 체크리스트",
      icon: "✅",
      actions: [
        "키오스크 전원 및 화면 상태 확인",
        "네트워크 연결 상태 점검",
        "프린터 용지 및 토너 확인",
        "카드 리더기 작동 테스트",
        "메뉴 및 가격 정보 확인",
        "전날 매출 데이터 검토"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            사용자 매뉴얼
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            키오스크를 효율적으로 운영하기 위한 단계별 가이드입니다.
            처음 사용하시는 분도 쉽게 따라할 수 있습니다.
          </p>
        </div>

        {/* 빠른 가이드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {quickGuide.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">{guide.icon}</span>
                <h2 className="text-2xl font-bold text-foreground">{guide.title}</h2>
              </div>
              
              <div className="space-y-3">
                {guide.actions.map((action, actionIndex) => (
                  <div key={actionIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 상세 매뉴얼 섹션 */}
        <div className="space-y-12">
          {manualSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* 섹션 헤더 */}
              <div className="bg-gradient-to-r from-primary to-blue-700 text-white p-8">
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{section.icon}</span>
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                </div>
              </div>

              {/* 섹션 내용 */}
              <div className="p-8">
                <div className="space-y-8">
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="border-b border-gray-200 pb-8 last:border-b-0">
                      <h3 className="text-xl font-bold text-foreground mb-4">{topic.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{topic.content}</p>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-foreground mb-4">단계별 실행 방법:</h4>
                        <div className="space-y-3">
                          {topic.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start">
                              <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
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
            </div>
          ))}
        </div>

        {/* 추가 지원 */}
        <div className="mt-16 bg-gradient-to-r from-foreground to-gray-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">추가 도움이 필요하신가요?</h2>
          <p className="text-lg mb-8 opacity-90">
            매뉴얼로 해결되지 않는 문제가 있다면 언제든지 문의해주세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a 
              href="tel:1588-0000"
              className="bg-white text-foreground px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 전화 상담<br />
              <span className="text-sm">1588-0000</span>
            </a>
            <a 
              href="mailto:support@smartkiosk.co.kr"
              className="bg-accent text-white px-6 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              📧 이메일 문의<br />
              <span className="text-sm">support@smartkiosk.co.kr</span>
            </a>
            <button className="border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-foreground transition-colors">
              💻 원격 지원<br />
              <span className="text-sm">실시간 화면 공유</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}