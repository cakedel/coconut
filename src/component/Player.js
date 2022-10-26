import React, { useEffect, useRef, useState } from "react";
import { BiPlay } from "react-icons/bi";
import { BiPause } from "react-icons/bi";
import { BiVolumeFull } from "react-icons/bi";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";

const PlayList = [
  {
    id: 1,
    tit: "Cookie",
    singer: "NewJeans",
    link: process.env.PUBLIC_URL + "/assets/music/cookie.mp3",
  },
  {
    id: 2,
    tit: "반(Half Moon)",
    singer: "Dean",
    link: process.env.PUBLIC_URL + "/assets/music/half_moon.mp3",
  },
  {
    id: 3,
    tit: "뜨거운 여름밤은 가고 남은 건 볼품없지만",
    singer: "잔나비",
    link: process.env.PUBLIC_URL + "/assets/music/summer.mp3",
  },
  {
    id: 4,
    tit: "I've never been in love before",
    singer: "Chet Baker",
    link: process.env.PUBLIC_URL + "/assets/music/lovebefore.mp3",
  },
  {
    id: 5,
    tit: "South of the River",
    singer: "Tom Misch",
    link: process.env.PUBLIC_URL + "/assets/music/river.mp3",
  },
  {
    id: 6,
    tit: "Square",
    singer: "백예린",
    link: process.env.PUBLIC_URL + "/assets/music/square.mp3",
  },
  {
    id: 7,
    tit: "6분의 1",
    singer: "선미",
    link: process.env.PUBLIC_URL + "/assets/music/sunmi61.mp3",
  },
  {
    id: 8,
    tit: "Warp Drive",
    singer: "소울라이크",
    link: process.env.PUBLIC_URL + "/assets/music/warpdrive.mp3",
  },
  {
    id: 9,
    tit: "Water Baby",
    singer: "Tom Misch",
    link: process.env.PUBLIC_URL + "/assets/music/waterbaby.mp3",
  },
];

const Player = () => {
  const [toggle, setToggle] = useState(true);
  // 재생 버튼을 컨트롤하기 위한 state 생성
  const [num, setNum] = useState(0);
  // 트랙 정보를 컨트롤하기 위한 state 생성
  let [index, setIndex] = useState(0);
  // 트랙 넘버를 컨트롤하기 위한 state 생성
  const AUDIO = useRef();
  // 오디오 태그를 컨트롤 하기 위한 state 생성
  useEffect(() => {
    if (!toggle) {
      AUDIO.current.play();
      AUDIO.current.volume = 0.5;
    } else if (toggle) {
      AUDIO.current.pause();
    }
  }, [toggle]);
  // toggle이라는 state가 변경될 때마다 toggle의 boolean 값에 따라 오디오를 컨트롤 해준다.

  return (
    <section className="Player">
      <div className="playBox container">
        {/* 오디오 태그 */}
        {/*  */}
        <audio src={PlayList[index].link} ref={AUDIO} volume={0.5} />
        {/* 플레이 리스트의 정보와 앨범 자켓의 데이터를 map 함수로 돌려놓기 */}
        {PlayList.map((playlist, idx) => {
          return (
            <div key={idx} className={`albumInfo ${num === idx ? "on" : ""}`}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/img/album0" +
                  playlist.id +
                  ".jpg"
                }
                className="albumImg"
              />
              <div className="musicInfo">
                <div className="tit">{PlayList[idx]?.tit}</div>
                <div className="artist">{PlayList[idx]?.singer}</div>
              </div>
            </div>
          );
        })}
        {/* 플레이 컨트롤러 생성 */}
        <div className="playMenu">
          <div className="prev">
            <BiSkipPrevious
              onClick={() => {
                setNum(1);
                setNum(0 < num ? num - 1 : PlayList.length - 1);
                setIndex(index - 1 < 0 ? PlayList.length - 1 : index - 1);
                setToggle(true);
                // 트랙이 바뀔 시 재생하던 곡을 일시 정지하고 트랙 정보와 오디오 트랙을 컨트롤해준다.
              }}
            />
          </div>
          {/* toggle의 boolean 값에 따라 오디오 컨트롤 */}
          {/* toggle의 boolean 값에 따라 on 클래스를 붙였다 떼서 css에서 display 여부를 결정해준다. */}
          <div className="PlayPause">
            <BiPlay
              className={`play ${toggle ? "on" : ""}`}
              onClick={function () {
                setToggle(!toggle);
              }}
            />
            <BiPause
              className={`pause ${!toggle ? "on" : ""}`}
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
          <div className="next">
            <BiSkipNext
              onClick={() => {
                {
                  setNum(num < PlayList.length - 1 ? num + 1 : 0);
                  setToggle(true);
                  setIndex(index < PlayList.length - 1 ? index + 1 : 0);
                }
              }}
            />
          </div>
        </div>
        <div className="volume">
          <div className="volumeIcon">
            <BiVolumeFull />
          </div>
          <div className="volumeBar">
            <span className="volumeHandler"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Player;
