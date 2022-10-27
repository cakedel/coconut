import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import store, { SetInput, searchSong } from "../store";
import { Link, useNavigate } from "react-router-dom";

const CHARTLIST = [
  { id: 1, tit: "After LIKE", singer: "IVE(아이브)" },
  { id: 2, tit: "Attention", singer: "NewJeans" },
  { id: 3, tit: "Pink Venom", singer: "BLACKPINK" },
  { id: 4, tit: "Hype boy", singer: "NewJeans" },
  { id: 5, tit: "LOVE DIVE", singer: "IVE(아이브)" },
  { id: 6, tit: "FOREVER 1", singer: "소녀시대(GIRLS' GENERATION" },
  { id: 7, tit: "그때 그 순간 그대로 (그그그)", singer: "WSG위너비(가야G)" },
  { id: 8, tit: "Cookie", singer: "NewJeans" },
  { id: 9, tit: "SNEAKERS", singer: "ITZY(있지)" },
  { id: 10, tit: "나의 X에게", singer: "경서" },
];

const Header = () => {
  const LINK = useNavigate();
  const dispatch = useDispatch();
  const handlerInput = (e) => {
    dispatch(SetInput(e.target.value));
  };

  const searchInput = (e) => {
    e.preventDefault();
    dispatch(searchSong());
    LINK("/search/" + store.getState().inputWord);
  };

  return (
    <header className="Header">
      <div className="inner">
        {/* 상단 메뉴바 */}
        <nav className="Gnb">
          <ul className="menu">
            <Link to="/">
              <li>코코넛 티켓</li>
            </Link>
            <Link to="/">
              <li>이용권 구매</li>
            </Link>
            <Link to="/">
              <li>
                <i className="xi-user"></i> 로그인
              </li>
            </Link>
          </ul>
          <h1>
            <Link to="/">COCONUT</Link>
          </h1>
          <ul className="menu second">
            <Link to="/">
              <li>코코넛 라운지</li>
            </Link>
            <Link to="/">
              <li>이벤트</li>
            </Link>
            <Link to="/">
              <li>공지사항</li>
            </Link>
          </ul>
        </nav>
      </div>
      {/* 노란색 검색창 태그 */}
      <div className="search">
        <div className="container">
          {/* slick slider를 이용해 차트 슬라이더 구현 */}
          <Slider
            className="chart"
            arrows={false}
            autoplay={true}
            autoplaySpeed={3000}
            verticalSwiping={true}
            vertical={true}
          >
            {CHARTLIST.map((list, idx) => {
              return (
                <figure key={idx}>
                  {`${list.id}. ${list.tit} - ${list.singer}`}
                </figure>
              );
            })}
          </Slider>
          {/* 검색창 을 만드는 태그 */}
          <form action="">
            <input
              type="text"
              placeholder={`몽환적인 레트로 팝, 이창섭 "SUDDENLY"`}
              onChange={handlerInput}
              // input의 value가 change될때 inputSong 함수 실행
            ></input>
            <button onClick={(e) => searchInput(e)}>
              {/* 버튼을 누를 때 searchInput 실행 */}
              <i className="xi-search"></i>
            </button>
          </form>
          <div className="event"></div>
        </div>
      </div>
    </header>
  );
};
export default Header;
