import React from 'react'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className="inner">
        <div className="footerTop inner">
          <ul className="companyInfo top">
            <li>코코넛(주) 대표이사 <span>홍지원</span></li>
            <li>사업자등록번호 <span>220-86-0617</span></li>
            <li>통신판매업신고번호 <span>제2006-경기성남-0692호</span></li>
          </ul>
          <ul className="companyInfo bottom">
            <li>주소 <span>경기도 성남시 분당구 정자일로 95, COCONUT 1784, 13561</span></li>
            <li>대표전화 <span>1588-3820</span></li>
            <li>이메일 <span>coconutmusic@coconut.com</span></li>
            <li>호스팅 서비스 제공 <span>COCONUT Cloud</span></li>
          </ul>
        </div>
        <div className="footerBottom">
          <ul>
            <li><a href="">개인정보처리방침</a></li>
            <li><a href="">코코넛 이용약관</a></li>
            <li><a href="">고객센터</a></li>
            <li><a href="">결제/환불 안내</a></li>
            <li><a href="">톡톡상담봇</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;