import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              SmartKiosk Solutions
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              음식점, 카페, 편의점을 위한 최고의 키오스크 솔루션을 제공합니다. 
              전문적인 하드웨어와 직관적인 소프트웨어로 고객의 비즈니스 성장을 지원합니다.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-gray-300">
                <p>📞 1588-0000</p>
                <p>📧 info@smartkiosk.co.kr</p>
                <p>📍 서울시 강남구 테헤란로 123</p>
              </div>
            </div>
          </div>

          {/* 솔루션 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">솔루션</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/solutions/restaurant" className="hover:text-white transition-colors">
                  음식점 키오스크
                </Link>
              </li>
              <li>
                <Link href="/solutions/cafe" className="hover:text-white transition-colors">
                  카페 키오스크
                </Link>
              </li>
              <li>
                <Link href="/solutions/convenience" className="hover:text-white transition-colors">
                  편의점 키오스크
                </Link>
              </li>
              <li>
                <Link href="/solutions/hospital" className="hover:text-white transition-colors">
                  병원 키오스크
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">고객 지원</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/support/installation" className="hover:text-white transition-colors">
                  설치 가이드
                </Link>
              </li>
              <li>
                <Link href="/support/manual" className="hover:text-white transition-colors">
                  사용자 매뉴얼
                </Link>
              </li>
              <li>
                <Link href="/support/faq" className="hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="/support/contact" className="hover:text-white transition-colors">
                  기술 지원
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm">
            © {currentYear} SmartKiosk Solutions. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
              서비스 이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}