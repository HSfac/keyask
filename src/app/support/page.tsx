import Link from 'next/link';

export default function SupportPage() {
  const supportCategories = [
    {
      title: "설치 및 설정",
      description: "키오스크 설치부터 초기 설정까지 단계별 가이드",
      icon: "⚙️",
      links: [
        { name: "설치 가이드", href: "/support/installation" },
        { name: "네트워크 설정", href: "/support/network" },
        { name: "결제 모듈 연동", href: "/support/payment" },
        { name: "시스템 점검", href: "/support/system-check" }
      ]
    },
    {
      title: "사용자 매뉴얼",
      description: "키오스크 운영 및 관리를 위한 상세 매뉴얼",
      icon: "📚",
      links: [
        { name: "기본 사용법", href: "/support/manual" },
        { name: "메뉴 관리", href: "/support/menu-management" },
        { name: "매출 분석", href: "/support/sales-analytics" },
        { name: "유지보수", href: "/support/maintenance" }
      ]
    },
    {
      title: "기술 지원",
      description: "24시간 기술 지원 및 원격 진단 서비스",
      icon: "🔧",
      links: [
        { name: "원격 지원 요청", href: "/support/remote" },
        { name: "오류 진단", href: "/support/diagnostics" },
        { name: "소프트웨어 업데이트", href: "/support/updates" },
        { name: "하드웨어 교체", href: "/support/hardware" }
      ]
    },
    {
      title: "자주 묻는 질문",
      description: "고객들이 자주 묻는 질문과 답변 모음",
      icon: "💬",
      links: [
        { name: "설치 관련 FAQ", href: "/support/faq#installation" },
        { name: "사용법 FAQ", href: "/support/faq#usage" },
        { name: "결제 관련 FAQ", href: "/support/faq#payment" },
        { name: "문제 해결 FAQ", href: "/support/faq#troubleshooting" }
      ]
    }
  ];

  const quickActions = [
    { 
      title: "긴급 기술 지원", 
      description: "24시간 언제든지 연락하세요", 
      phone: "1588-0000", 
      icon: "🚨",
      bgColor: "bg-[#FF5B5B]"
    },
    { 
      title: "원격 지원 요청", 
      description: "실시간 원격 진단 및 해결", 
      action: "원격 지원 신청", 
      icon: "💻",
      bgColor: "bg-[#3182F6]"
    },
    { 
      title: "부품 교체 신청", 
      description: "하드웨어 교체 및 수리 신청", 
      action: "교체 신청", 
      icon: "🔧",
      bgColor: "bg-[#6C7EE1]"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            고객 지원 센터
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            언제든지 도움이 필요하시면 연락해 주세요. 
            <br />전문 엔지니어가 24시간 대기하고 있습니다.
          </p>
        </div>

        {/* 빠른 지원 액션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {quickActions.map((action, index) => (
            <div key={index} className={`${action.bgColor} text-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <div className="text-5xl mb-6">{action.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
              <p className="mb-6 opacity-90 text-lg">{action.description}</p>
              {action.phone ? (
                <a href={`tel:${action.phone}`} className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg">
                  {action.phone}
                </a>
              ) : (
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg">
                  {action.action}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* 지원 카테고리 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            지원 서비스
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:border-[#3182F6]/20">
                <div className="flex items-start mb-8">
                  <div className="text-4xl mr-6 mt-1">{category.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <Link 
                      key={linkIndex}
                      href={link.href}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-[#3182F6] hover:bg-[#3182F6]/5 transition-all duration-200 group"
                    >
                      <span className="text-gray-700 group-hover:text-[#3182F6] font-medium">{link.name}</span>
                      <span className="text-gray-400 group-hover:text-[#3182F6] text-xl">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 지원 통계 */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            실시간 지원 현황
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3182F6] mb-3">99.9%</div>
              <div className="text-gray-600 text-lg font-medium">시스템 안정성</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3182F6] mb-3">5분 이내</div>
              <div className="text-gray-600 text-lg font-medium">평균 응답시간</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3182F6] mb-3">24/7</div>
              <div className="text-gray-600 text-lg font-medium">기술 지원</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#3182F6] mb-3">98%</div>
              <div className="text-gray-600 text-lg font-medium">고객 만족도</div>
            </div>
          </div>
        </div>

        {/* 연락처 및 교육 정보 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">다양한 연락 방법</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="text-3xl mr-6 mt-1">📞</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">기술 지원 핫라인</h3>
                  <p className="text-gray-600 text-lg">1588-0000 (24시간 운영)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-3xl mr-6 mt-1">📧</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">이메일 지원</h3>
                  <p className="text-gray-600 text-lg">support@keyask.co.kr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-3xl mr-6 mt-1">💬</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">실시간 채팅</h3>
                  <p className="text-gray-600 text-lg">웹사이트 우하단 채팅 버튼</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-3xl mr-6 mt-1">🏢</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">기술 센터 방문</h3>
                  <p className="text-gray-600 text-lg">서울시 강남구 테헤란로 123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">무료 교육 프로그램</h2>
            <p className="mb-8 opacity-90 text-lg leading-relaxed">
              키오스크를 처음 사용하시나요? 전문가가 직접 알려드리는 
              무료 교육 프로그램에 참여하세요.
            </p>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span className="text-lg">기본 운영 교육 (2시간)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span className="text-lg">고급 관리 교육 (4시간)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span className="text-lg">문제 해결 교육 (3시간)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-white rounded-full mr-4"></div>
                <span className="text-lg">온라인 비디오 교육</span>
              </div>
            </div>
            
            <button className="bg-white text-[#3182F6] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors text-lg w-full">
              무료 교육 신청하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}