export default function ProductsPage() {
  const products = [
    {
      category: '하드웨어',
      icon: '💻',
      description: '다양한 매장 환경에 맞춘 고성능 키오스크',
      items: [
        {
          name: 'KeyAsk Pro 21.5"',
          description: '표준 매장용 프리미엄 터치스크린 키오스크',
          price: '2,500,000원',
          monthlyPrice: '월 83,000원',
          specs: [
            '21.5인치 Full HD 터치스크린',
            'Intel Core i5 12세대 프로세서',
            '16GB RAM, 512GB NVMe SSD',
            '카드/현금/QR/NFC 결제',
            '고속 영수증 프린터 내장'
          ],
          image: '🖥️',
          badge: '인기',
          badgeColor: 'bg-[#3182F6]'
        },
        {
          name: 'KeyAsk Basic 15.6"',
          description: '소규모 매장용 경제적인 터치스크린 키오스크',
          price: '1,800,000원',
          monthlyPrice: '월 60,000원',
          specs: [
            '15.6인치 HD 터치스크린',
            'Intel Core i3 12세대 프로세서',
            '8GB RAM, 256GB SSD',
            '카드/QR 결제 모듈',
            '외장 프린터 연결 지원'
          ],
          image: '💻',
          badge: '가성비',
          badgeColor: 'bg-[#10B981]'
        },
        {
          name: 'KeyAsk Max 27"',
          description: '대형 매장용 최고급 4K 터치스크린 키오스크',
          price: '3,800,000원',
          monthlyPrice: '월 127,000원',
          specs: [
            '27인치 4K UHD 터치스크린',
            'Intel Core i7 12세대 프로세서',
            '32GB RAM, 1TB NVMe SSD',
            '프리미엄 멀티 결제 모듈',
            '고성능 프린터 및 스피커 내장'
          ],
          image: '🖥️',
          badge: '프리미엄',
          badgeColor: 'bg-[#8B5CF6]'
        }
      ]
    },
    {
      category: '소프트웨어',
      icon: '⚙️',
      description: '강력한 관리 시스템과 맞춤형 솔루션',
      items: [
        {
          name: 'KeyAsk OS Enterprise',
          description: '기업용 종합 키오스크 관리 시스템',
          price: '월 180,000원',
          monthlyPrice: null,
          specs: [
            '실시간 멀티 키오스크 모니터링',
            '고급 매출 분석 및 리포트',
            '원격 관리 및 자동 업데이트',
            'AI 기반 장애 예측',
            '24시간 전담 기술 지원'
          ],
          image: '💎',
          badge: '추천',
          badgeColor: 'bg-[#F59E0B]'
        },
        {
          name: 'KeyAsk OS Standard',
          description: '중소규모 매장용 표준 관리 시스템',
          price: '월 99,000원',
          monthlyPrice: null,
          specs: [
            '기본 관리 및 모니터링',
            '표준 매출 분석 리포트',
            '자동 소프트웨어 업데이트',
            '클라우드 데이터 백업',
            '영업시간 내 기술 지원'
          ],
          image: '🔧',
          badge: null,
          badgeColor: null
        },
        {
          name: 'Custom Development',
          description: '비즈니스 맞춤형 소프트웨어 개발',
          price: '별도 견적',
          monthlyPrice: null,
          specs: [
            '완전 맞춤형 UI/UX 디자인',
            '기존 시스템 완벽 연동',
            '전용 기능 및 모듈 개발',
            '브랜딩 및 테마 커스터마이징',
            '평생 무료 유지보수'
          ],
          image: '⚙️',
          badge: '맞춤형',
          badgeColor: 'bg-[#EC4899]'
        }
      ]
    },
    {
      category: '액세서리',
      icon: '🔌',
      description: '키오스크 성능을 극대화하는 전문 액세서리',
      items: [
        {
          name: '프리미엄 영수증 프린터',
          description: '초고속 열전사 프린터 (한국산)',
          price: '420,000원',
          monthlyPrice: null,
          specs: [
            '인쇄속도 최대 350mm/초',
            '자동 절단 및 용지 감지',
            'USB 3.0 / 이더넷 연결',
            '용지걸림 방지 기술',
            '3년 무상 A/S 보장'
          ],
          image: '🖨️',
          badge: null,
          badgeColor: null
        },
        {
          name: '고성능 바코드 스캐너',
          description: '2D QR/바코드 고속 인식 스캐너',
          price: '280,000원',
          monthlyPrice: null,
          specs: [
            '1D/2D/QR 코드 완벽 지원',
            '초당 60회 자동 스캔',
            '충격 방지 내구성 설계',
            'USB/무선 듀얼 연결',
            '2년 무상 A/S 보장'
          ],
          image: '📱',
          badge: null,
          badgeColor: null
        },
        {
          name: '프리미엄 카드 리더',
          description: '다기능 통합 결제 단말기',
          price: '650,000원',
          monthlyPrice: null,
          specs: [
            'IC/MS/NFC 카드 완벽 지원',
            'Samsung Pay/Apple Pay 호환',
            '금융보안원 EMV 인증',
            '끝단간 암호화 보안',
            '3년 무상 A/S + 보험'
          ],
          image: '💳',
          badge: null,
          badgeColor: null
        }
      ]
    }
  ];

  const comparisionData = [
    { spec: '화면 크기', basic: '15.6인치 HD', pro: '21.5인치 FHD', max: '27인치 4K UHD' },
    { spec: '프로세서', basic: 'Core i3 12세대', pro: 'Core i5 12세대', max: 'Core i7 12세대' },
    { spec: '메모리', basic: '8GB DDR4', pro: '16GB DDR4', max: '32GB DDR4' },
    { spec: '저장용량', basic: '256GB SSD', pro: '512GB NVMe', max: '1TB NVMe' },
    { spec: '결제 방식', basic: '카드/QR', pro: '카드/현금/QR/NFC', max: '멀티 결제 지원' },
    { spec: '가격', basic: '1,800,000원', pro: '2,500,000원', max: '3,800,000원' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 섹션 */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            키오스크 제품 라인업
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            다양한 매장 규모와 요구사항에 맞는 하드웨어, 소프트웨어, 액세서리를 제공합니다.
            <br />모든 제품은 엄격한 품질 검증과 3년 품질보증을 제공합니다.
          </p>
        </div>

        {/* 제품 카테고리별 섹션 */}
        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-24">
            <div className="text-center mb-16">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-600">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((product, productIndex) => (
                <div key={productIndex} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 relative">
                  {/* 배지 */}
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold z-10`}>
                      {product.badge}
                    </div>
                  )}

                  {/* 제품 이미지/아이콘 */}
                  <div className="bg-gradient-to-br from-[#3182F6] to-[#1E40AF] p-8 text-center relative">
                    <div className="text-6xl mb-4">{product.image}</div>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>

                  {/* 제품 정보 */}
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{product.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-[#3182F6] mb-1">
                        {product.price}
                      </div>
                      {product.monthlyPrice && (
                        <div className="text-gray-500 text-sm">
                          36개월 할부 시 {product.monthlyPrice}
                        </div>
                      )}
                    </div>

                    {/* 스펙 */}
                    <div className="mb-8">
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">주요 사양</h4>
                      <div className="space-y-3">
                        {product.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-[#3182F6] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 버튼 */}
                    <div className="space-y-3">
                      <button className="w-full bg-[#3182F6] text-white py-4 px-6 rounded-xl font-bold hover:bg-[#1E40AF] transition-all duration-300 hover:scale-105 text-lg">
                        상세보기
                      </button>
                      <button className="w-full border-2 border-[#3182F6] text-[#3182F6] py-4 px-6 rounded-xl font-bold hover:bg-[#3182F6] hover:text-white transition-all duration-300 text-lg">
                        견적 문의
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 제품 비교 섹션 */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            하드웨어 제품 비교
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="p-6 text-left text-lg font-bold text-gray-900">사양</th>
                  <th className="p-6 text-center text-lg font-bold text-gray-900">Basic 15.6&rdquo;</th>
                  <th className="p-6 text-center text-lg font-bold text-[#3182F6]">Pro 21.5&rdquo; ⭐</th>
                  <th className="p-6 text-center text-lg font-bold text-gray-900">Max 27&rdquo;</th>
                </tr>
              </thead>
              <tbody>
                {comparisionData.map((row, index) => (
                  <tr key={index} className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="p-6 font-semibold text-gray-900 text-lg">{row.spec}</td>
                    <td className="p-6 text-center text-gray-700">{row.basic}</td>
                    <td className="p-6 text-center font-bold text-[#3182F6]">{row.pro}</td>
                    <td className="p-6 text-center text-gray-700">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA 섹션 */}
        <div className="text-center bg-gradient-to-br from-[#3182F6] to-[#1E40AF] text-white rounded-2xl p-16">
          <h2 className="text-4xl font-bold mb-6">
            완벽한 솔루션을 찾고 계신가요?
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            전문 컨설턴트가 귀하의 비즈니스 환경을 분석하여 
            <br />가장 적합한 제품 조합을 무료로 추천해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-[#3182F6] px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              무료 제품 상담
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white hover:text-[#3182F6] transition-all duration-300 hover:scale-105">
              카탈로그 다운로드
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}