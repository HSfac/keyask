export default function ContactPage() {
  const contactMethods = [
    {
      icon: '📞',
      title: '전화 상담',
      subtitle: '즉시 연결',
      content: '1588-0000',
      description: '전문 상담사가 즉시 응답',
      available: '평일 09:00-19:00',
      color: 'from-[#3182F6] to-[#1E40AF]'
    },
    {
      icon: '💬',
      title: '카카오톡 상담',
      subtitle: '빠른 응답',
      content: '@KeyAsk',
      description: '평균 응답시간 3분',
      available: '평일 09:00-18:00',
      color: 'from-[#FBBF24] to-[#F59E0B]'
    },
    {
      icon: '📧',
      title: '이메일 문의',
      subtitle: '상세 상담',
      content: 'contact@keyask.co.kr',
      description: '24시간 접수 가능',
      available: '평균 응답시간 2시간',
      color: 'from-[#10B981] to-[#059669]'
    }
  ];

  const quickStats = [
    { label: '평균 응답시간', value: '5분 이내', icon: '⚡' },
    { label: '상담 만족도', value: '98.5%', icon: '⭐' },
    { label: '견적 제공', value: '당일 제공', icon: '📋' },
    { label: '현장 방문', value: '무료', icon: '🚗' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            무료 상담 신청
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            키오스크 도입에 대한 모든 궁금증을 해결해드립니다.
            <br className="hidden sm:block" />전문 컨설턴트가 맞춤형 솔루션을 무료로 제안해드립니다.
          </p>
        </div>

        {/* 빠른 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#3182F6] mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 상담 방법 선택 */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            원하시는 상담 방법을 선택해주세요
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`bg-gradient-to-r ${method.color} p-8 text-white text-center`}>
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                  <p className="text-lg opacity-90">{method.subtitle}</p>
                </div>
                <div className="p-8 text-center">
                  <div className="text-xl font-bold text-gray-900 mb-2">{method.content}</div>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-sm text-gray-500 mb-6">{method.available}</p>
                  <button className="w-full bg-[#3182F6] text-white py-3 px-6 rounded-xl font-bold hover:bg-[#1E40AF] transition-all duration-300 hover:scale-105">
                    지금 상담하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 견적 문의 폼 */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-10">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">견적 문의서</h2>
              <p className="text-gray-600 text-lg">정확한 견적을 위해 아래 정보를 입력해주세요.</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    담당자명 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg"
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    회사명 *
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg"
                    placeholder="(주)스마트카페"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg"
                    placeholder="010-1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg"
                    placeholder="contact@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    업종 *
                  </label>
                  <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg">
                    <option value="">업종을 선택해주세요</option>
                    <option value="restaurant">음식점 🍽️</option>
                    <option value="cafe">카페 ☕</option>
                    <option value="convenience">편의점 🏪</option>
                    <option value="hospital">병원 🏥</option>
                    <option value="retail">소매업 🛍️</option>
                    <option value="etc">기타</option>
                  </select>
                </div>
                <div>
                  <label className="block text-lg font-bold text-gray-900 mb-3">
                    예상 설치 대수
                  </label>
                  <select className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg">
                    <option value="">선택해주세요</option>
                    <option value="1">1대</option>
                    <option value="2-5">2-5대</option>
                    <option value="6-10">6-10대</option>
                    <option value="10+">10대 이상</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  관심 제품 (복수 선택 가능)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'KeyAsk Basic 15.6"',
                    'KeyAsk Pro 21.5"',
                    'KeyAsk Max 27"',
                    '맞춤형 솔루션'
                  ].map((product) => (
                    <label key={product} className="flex items-center p-4 border-2 border-gray-200 rounded-xl hover:border-[#3182F6] transition-all duration-300 cursor-pointer">
                      <input type="checkbox" className="mr-3 w-5 h-5 text-[#3182F6] rounded" />
                      <span className="text-gray-700 font-medium">{product}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  상세 문의사항
                </label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#3182F6] focus:border-[#3182F6] transition-all duration-300 text-lg"
                  placeholder="키오스크 도입과 관련된 구체적인 요구사항이나 문의사항을 입력해주세요. 예) 매장 크기, 예산, 희망 도입 시기 등"
                ></textarea>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                <input type="checkbox" className="mr-3 w-5 h-5 text-[#3182F6] rounded" />
                <span className="text-gray-700">
                  개인정보 수집 및 이용에 동의합니다. <a href="#" className="text-[#3182F6] underline">내용보기</a>
                </span>
              </div>

              <button className="w-full bg-[#3182F6] text-white py-5 rounded-2xl text-xl font-bold hover:bg-[#1E40AF] transition-all duration-300 hover:scale-105 shadow-lg">
                무료 견적 받기 📋
              </button>
            </form>
          </div>

          {/* 사이드 정보 */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🏢 회사 정보</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">본사 주소</h4>
                  <p className="text-gray-600">서울시 강남구 테헤란로 123</p>
                  <p className="text-gray-600">KeyAsk 빌딩 10층</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">영업시간</h4>
                  <p className="text-gray-600">평일: 09:00 - 19:00</p>
                  <p className="text-gray-600">토요일: 09:00 - 15:00</p>
                  <p className="text-gray-600">일요일 및 공휴일 휴무</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-2">대표 전화</h4>
                  <p className="text-[#3182F6] font-bold text-xl">1588-0000</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">🚀 빠른 상담</h3>
              <p className="mb-6 opacity-90 leading-relaxed">
                급하게 상담이 필요하시다면 
                전화로 연락주세요. 전문가가 
                즉시 상담해드립니다.
              </p>
              <button className="w-full bg-white text-[#3182F6] py-4 px-6 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                📞 지금 전화하기
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">🏢 쇼룸 방문</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                실제 키오스크를 체험해보고 
                싶으시다면 쇼룸 방문을 
                예약해주세요.
              </p>
              <button className="w-full border-2 border-[#3182F6] text-[#3182F6] py-4 px-6 rounded-xl font-bold hover:bg-[#3182F6] hover:text-white transition-all duration-300">
                쇼룸 방문 예약
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}