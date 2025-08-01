'use client';

import { useState } from 'react';

const faqCategories = {
    installation: {
      title: '설치 관련',
      icon: '🔧',
      faqs: [
        {
          question: '키오스크 설치에 필요한 최소 공간은 얼마나 되나요?',
          answer: '기본형(15.6인치): 가로 50cm x 세로 40cm, 표준형(21.5인치): 가로 60cm x 세로 45cm, 대형(27인치): 가로 70cm x 세로 50cm의 공간이 필요합니다. 또한 배선을 위한 추가 여유 공간을 고려해야 합니다.'
        },
        {
          question: '설치 시 필요한 전원 및 네트워크 조건은 무엇인가요?',
          answer: '220V 전원(소비전력 150W 이하)과 유선 인터넷 연결(최소 10Mbps)이 필요합니다. Wi-Fi 연결도 가능하지만 안정성을 위해 유선 연결을 권장합니다.'
        },
        {
          question: '설치 시간은 얼마나 걸리나요?',
          answer: '기본 설치는 2-3시간, POS 시스템 연동 포함 시 4-5시간 정도 소요됩니다. 복잡한 커스터마이징이 필요한 경우 추가 시간이 필요할 수 있습니다.'
        },
        {
          question: '기존 POS 시스템과 연동이 가능한가요?',
          answer: '네, 대부분의 POS 시스템과 연동이 가능합니다. 주요 POS 업체(포스뱅크, 키오스크뱅크, 포스코ICT 등)와의 연동 경험이 풍부합니다.'
        }
      ]
    },
    usage: {
      title: '사용법',
      icon: '📱',
      faqs: [
        {
          question: '메뉴 수정은 어떻게 하나요?',
          answer: '관리자 페이지에 로그인 후 "메뉴 관리" 섹션에서 메뉴 추가/수정/삭제가 가능합니다. 실시간으로 키오스크에 반영되며, 이미지와 가격 정보도 쉽게 업데이트할 수 있습니다.'
        },
        {
          question: '키오스크가 갑자기 멈춘 경우 어떻게 해야 하나요?',
          answer: '1) 전원 버튼을 5초간 눌러 재시작, 2) 네트워크 연결 확인, 3) 관리자 앱에서 원격 재시작 시도, 4) 문제가 지속되면 고객센터(1588-0000) 연락'
        },
        {
          question: '영업시간 외에도 키오스크가 작동하나요?',
          answer: '관리자 설정에 따라 영업시간을 지정할 수 있습니다. 영업시간 외에는 자동으로 "영업 종료" 화면이 표시되며, 긴급 상황 시 원격으로 켜고 끌 수 있습니다.'
        },
        {
          question: '고객이 주문을 취소하고 싶어할 때는 어떻게 하나요?',
          answer: '결제 전 취소는 키오스크에서 직접 가능하고, 결제 후 취소는 매장 직원이 관리자 권한으로 처리할 수 있습니다. 취소 내역은 모두 기록되어 관리됩니다.'
        }
      ]
    },
    payment: {
      title: '결제 관련',
      icon: '💳',
      faqs: [
        {
          question: '어떤 결제 수단을 지원하나요?',
          answer: '신용카드(IC/MS), 체크카드, 삼성페이/애플페이/LG페이, 카카오페이, 네이버페이, 제로페이, 현금(선택사항)을 지원합니다. QR코드 결제도 가능합니다.'
        },
        {
          question: '결제 수수료는 얼마인가요?',
          answer: '신용카드 2.2-2.8%, 체크카드 1.3%, 간편결제 2.9-3.3% 정도입니다. 정확한 수수료는 카드사 및 결제 대행사에 따라 달라질 수 있습니다.'
        },
        {
          question: '결제 오류가 발생했을 때는 어떻게 하나요?',
          answer: '자동으로 재시도되며, 계속 실패 시 다른 결제 수단을 안내합니다. 승인된 결제의 취소는 관리자 권한으로 처리하거나 카드사에 직접 연락할 수 있습니다.'
        },
        {
          question: '현금 결제 시 거스름돈은 어떻게 처리되나요?',
          answer: '현금 모듈이 설치된 경우 자동으로 거스름돈이 배출됩니다. 모듈 미설치 시에는 "현금은 정확히 준비해 주세요" 안내 메시지가 표시됩니다.'
        }
      ]
    },
    troubleshooting: {
      title: '문제 해결',
      icon: '🔧',
      faqs: [
        {
          question: '터치스크린이 반응하지 않아요.',
          answer: '1) 화면 청소(알코올 티슈 사용), 2) 키오스크 재시작, 3) 터치 보정 실행(설정 메뉴), 4) 문제 지속 시 하드웨어 점검 필요'
        },
        {
          question: '영수증이 나오지 않아요.',
          answer: '1) 용지 확인 및 교체, 2) 프린터 덮개 완전히 닫혔는지 확인, 3) 프린터 헤드 청소, 4) 시스템 재시작 후에도 문제 지속 시 A/S 요청'
        },
        {
          question: '네트워크 연결이 불안정해요.',
          answer: '1) 랜선 연결 확인, 2) 공유기 재시작, 3) IP 설정 확인, 4) Wi-Fi 사용 시 신호 강도 확인, 5) 통신사 회선 상태 점검'
        },
        {
          question: '키오스크 화면이 계속 꺼져요.',
          answer: '절전 모드 설정을 확인하고, 터치 시 바로 켜지는지 확인하세요. 전원 문제인 경우 전원 어댑터와 케이블을 점검해야 합니다.'
        }
      ]
    }
  };

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof faqCategories>('installation');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const tabs = Object.keys(faqCategories) as Array<keyof typeof faqCategories>;

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-gray-600">
            키오스크 사용 중 궁금한 점들을 빠르게 해결해보세요.
          </p>
        </div>

        {/* 검색 박스 */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="궁금한 내용을 검색해보세요..."
              className="w-full px-6 py-4 border border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
              🔍
            </button>
          </div>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center px-6 py-3 rounded-t-lg font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{faqCategories[tab].icon}</span>
              {faqCategories[tab].title}
            </button>
          ))}
        </div>

        {/* FAQ 목록 */}
        <div className="space-y-4">
          {faqCategories[activeTab].faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <span className={`text-primary transform transition-transform ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 추가 도움말 */}
        <div className="mt-12 bg-gradient-to-r from-primary to-blue-700 rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">원하는 답변을 찾지 못하셨나요?</h2>
          <p className="mb-6 opacity-90">
            24시간 고객 지원팀이 도움을 드리겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1588-0000"
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 1588-0000
            </a>
            <a 
              href="mailto:support@smartkiosk.co.kr"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              📧 이메일 문의
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}