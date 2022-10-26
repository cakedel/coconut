const TodayPick = () => {
    return (
        <section className="TodayPick">
            <div className="inner">
                <h2>TODAY'S PICK</h2>
                <div className="cover">
                    <figure className="billeCover"></figure>
                    <figure className="desc">
                        <h3>NEXTREND : <br />
                            {`Billlie(빌리)`}</h3>
                        <p> 장르의 한계를 뛰어넘는 중독성과 함께 더 확장된<br />
                            세계관으로  돌아온 독보적 스토리텔링 아이돌,<br />
                            {`Billlie(빌리) 입니다.`}</p>
                        <a href=""><i className="xi-play"></i>Play now</a>
                    </figure>
                    <figure className="desc">
                        <h3>이주의 디깅 #142 <br />
                            DJ 칼리드 </h3>
                        <p> ‘블록버스터’ 힙합 앨범을 제작하는<br />
                            {`디제이 칼리드의 13번째 정규 앨범 <GOD DID>.`}<br />
                            이번 앨범에는 힙합계의 거물들이  전부 모였다.</p>
                        <a href=""><i className="xi-play"></i>Play now</a>
                    </figure>
                    <figure className="DJCover"></figure>
                </div>
            </div>
        </section>
    );
};

export default TodayPick;

