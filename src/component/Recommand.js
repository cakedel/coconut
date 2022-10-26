import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { BiPlay } from "react-icons/bi";

const LIST = [
    { id: 1, tit: '하우스파티' },
    { id: 2, tit: 'VIBE AND CHILL' },
    { id: 3, tit: '단전에서 차오르는 자신감' },
    { id: 4, tit: '실컷 울고 난 후에' },
    { id: 5, tit: '장래희망은 록스타' },
    { id: 6, tit: '들으면 내 심장 쿵쾅쿵쾅' },
    { id: 7, tit: 'Work/Study Lo-fi' },
    { id: 8, tit: '화보 촬영장에서' },
    { id: 9, tit: '아침밥은 먹어야 하잖아' },
]

const sliderSet = {
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '200px',
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    infinite: true,
    cssEase: 'linear'
}

function Recommand() {
    return (
        <section className="Recommand">
            <div className="inner">
                <h2>COCONUT 추천 플레이 리스트</h2>
            </div>
            <Slider {...sliderSet} className="Slider">
                {LIST.map((list, idx) => {
                    return (
                        <a href="" key={idx}>
                            <figure>
                                <div className="listImage">
                                    <img src={
                                        process.env.PUBLIC_URL + "/assets/img/recommand0" + list.id + ".jpg"
                                    } />
                                    <BiPlay />
                                </div>
                                <h3 className="tit">{list.tit}</h3>
                            </figure>
                        </a>
                    )
                })}

            </Slider>
        </section>
    )
}

export default Recommand;