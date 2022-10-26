import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const LISTTITLE = [
    { id: 1, tit: "Today TOP 100" },
    { id: 2, tit: "Global TOP 100" },
    { id: 3, tit: "Billboard HOT 100" },
]

const CHARTLIST = [
    { id: 1, tit: 'After LIKE', singer: "IVE(아이브)" },
    { id: 2, tit: 'Attention', singer: "NewJeans" },
    { id: 3, tit: 'Pink Venom', singer: "BLACKPINK" },
    { id: 4, tit: 'Hype boy', singer: "NewJeans" },
    { id: 5, tit: 'LOVE DIVE', singer: "IVE(아이브)" },
    { id: 6, tit: 'FOREVER 1', singer: "소녀시대(GIRLS' GENERATION" },
    { id: 7, tit: '그때 그 순간 그대로 (그그그)', singer: "WSG위너비(가야G)" },
    { id: 8, tit: 'Cookie', singer: "NewJeans" },
    { id: 9, tit: 'SNEAKERS', singer: "ITZY(있지)" },
    { id: 10, tit: '나의 X에게', singer: "경서" },
    { id: 11, tit: '새삥(Prod.ZICO)(Feat.호미들)', singer: "지코(ZICO)" },
    { id: 12, tit: 'TOMBOY', singer: "(여자)아이들" },
    { id: 13, tit: '보고싶었어', singer: "WSG워너비(4FIRE)" },
    { id: 14, tit: 'POPI', singer: "나연(TWICE)" },
    { id: 15, tit: '도깨비불(Illusion)', singer: "aespa" },
]
const GLOBALLIST = [
    { id: 1, tit: 'Heaven', singer: "Bazzi" },
    { id: 2, tit: 'Beautiful Love(Free Fire)', singer: "Justin Bieber" },
    { id: 3, tit: 'As It Was', singer: "Harry Styles" },
    { id: 4, tit: 'Bad Habbit', singer: "Steve Lacy" },
    { id: 5, tit: 'Late Night Talking', singer: "Harry Styles" },
    { id: 6, tit: 'About Damn Time', singer: "Lizzo" },
    { id: 7, tit: 'I Like You(A Happier Song)', singer: "Post Malone" },
    { id: 8, tit: 'Super Freaky Girl', singer: "Nicki Minaj" },
    { id: 9, tit: "I Ain't Worried", singer: "OneRepublic" },
    { id: 10, tit: 'You Proof', singer: "Morgan Wallen" },
    { id: 11, tit: 'WAIT FOR U', singer: "Future" },
    { id: 12, tit: 'Me Porto Bonito', singer: "Bad Bunny, Chencho Corleone" },
    { id: 13, tit: 'Titi Me Pregunto', singer: "Bad Bunny" },
    { id: 14, tit: 'The Kind of Love We Make', singer: "Luke Combs" },
    { id: 15, tit: 'BREAK MY SOUL', singer: "Beyonce" },
]
const BILLBOARDLIST = [
    { id: 1, tit: 'Heaven', singer: "Bazzi" },
    { id: 2, tit: 'Beautiful Love(Free Fire)', singer: "Justin Bieber" },
    { id: 3, tit: 'As It Was', singer: "Harry Styles" },
    { id: 4, tit: 'Bad Habbit', singer: "Steve Lacy" },
    { id: 5, tit: 'Late Night Talking', singer: "Harry Styles" },
    { id: 6, tit: 'About Damn Time', singer: "Lizzo" },
    { id: 7, tit: 'I Like You(A Happier Song)', singer: "Post Malone" },
    { id: 8, tit: 'Super Freaky Girl', singer: "Nicki Minaj" },
    { id: 9, tit: "I Ain't Worried", singer: "OneRepublic" },
    { id: 10, tit: 'You Proof', singer: "Morgan Wallen" },
    { id: 11, tit: 'WAIT FOR U', singer: "Future" },
    { id: 12, tit: 'Me Porto Bonito', singer: "Bad Bunny, Chencho Corleone" },
    { id: 13, tit: 'Titi Me Pregunto', singer: "Bad Bunny" },
    { id: 14, tit: 'The Kind of Love We Make', singer: "Luke Combs" },
    { id: 15, tit: 'BREAK MY SOUL', singer: "Beyonce" },
]


const Chart = () => {
    const [listState, setListState] = useState(1);
    return (
        <section className="Chart">
            <div className="inner">
                <h2>COCONUT CHART</h2>
                <ul className="TabMenu">
                    {LISTTITLE.map((tit, idx) => {
                        return (
                            <li key={tit.id}
                                onClick={() =>
                                    setListState(tit.id)
                                }
                                className={listState === tit.id ? 'on' : ''}>{tit.tit}</li>
                        )
                    })}
                </ul>
                <div className="inbox">
                    <ul className={`SingList TodayList ${listState === 1 ? 'on' : undefined}`}>
                        {CHARTLIST.map((list, idx) => {
                            return (
                                <li className="listBox" key={list.id}>
                                    <figure className="album">
                                        <img src={
                                            process.env.PUBLIC_URL + "/assets/img/album" + (idx > 8
                                                ? list.id + ".jpg"
                                                : "0" + list.id + ".jpg")
                                        }
                                        />
                                    </figure>
                                    <a href=""><figure className="des">
                                        <strong>{list.id}</strong>
                                        <div className="tit">
                                            <h3>{list.tit}</h3>
                                            <span>{list.singer}</span>
                                        </div>
                                    </figure>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul key={GLOBALLIST.id} className={`SingList GlobalList ${listState === 2 ? 'on' : undefined}`}>
                        {GLOBALLIST.map((list, idx) => {
                            return (
                                <li className="listBox" key={list.id}>
                                    <figure className="album">
                                        <img src={
                                            process.env.PUBLIC_URL + "/assets/img/galbum" + (idx > 8
                                                ? list.id + ".jpg"
                                                : "0" + list.id + ".jpg")
                                        }
                                        />
                                    </figure>
                                    <a href=""><figure className="des">
                                        <strong>{list.id}</strong>
                                        <div className="tit">
                                            <h3>{list.tit}</h3>
                                            <span>{list.singer}</span>
                                        </div>

                                    </figure>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                    <ul key={BILLBOARDLIST.id} className={`SingList Billboard ${listState === 3 ? 'on' : undefined}`}>
                        {BILLBOARDLIST.map((list, idx) => {
                            return (
                                <li className="listBox" key={list.id}>
                                    <figure className="album">
                                        <img src={
                                            process.env.PUBLIC_URL + "/assets/img/billboard" + (idx > 8
                                                ? list.id + ".jpg"
                                                : "0" + list.id + ".jpg")
                                        }
                                        />
                                    </figure>
                                    <a href=""><figure className="des">
                                        <strong>{list.id}</strong>
                                        <div className="tit">
                                            <h3>{list.tit}</h3>
                                            <span>{list.singer}</span>
                                        </div>

                                    </figure>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Chart;