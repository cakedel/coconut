import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, useParams } from "react-router-dom";
import store from "../store";

const Search = () => {
  const { params } = useParams();
  const { listSearch } = useSelector((state) => state);
  console.log("listsearch", listSearch);
  const RegExp = /(<([^>]+)>|\&nbsp;)/gi;
  return (
    <section className="Search">
      <div className="inner">
        <h2>{params} 검색결과</h2>
        {/* listSearch의 배열 길이가 1이상이면 == 데이터를 불러오는 것이 fullfilled 된 상태 */}
        {listSearch.length >= 1 ? (
          // listSearch의 0번째 index의 길이가 0일 때 (검색결과가 없을 때) 아래를 반환합니다.
          listSearch[0].length == 0 ? (
            <div className="inner">
              <div className="noSearch">
                <strong>검색결과가 없습니다.</strong>
                <p>검색값을 올바르게 입력했는지 오탈자는 없는지 확인해주세요.</p>
              </div>
            </div>
          ) : (
            // listSearch의 0번째 index의 길이가 0이 아니라면 (검색 결과가 있다면) 아래를 반환합니다.
            <div>
              {/* listSearch의 검색결과를 map 함수로 돌립니다. */}
              {listSearch[0].map((song, idx) => {
                return (
                  <ul key={idx} className="songList">
                    {/* 아티스트의 이미지 */}
                    <li className="images">
                      <figure>
                        {song.elements[5].elements[0].cdata ==
                        "http://i.maniadb.com" ? (
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/img/noimages.jpg"
                            }
                          />
                        ) : (
                          <img src={song.elements[5].elements[0].cdata} />
                        )}
                      </figure>
                    </li>
                    {/* 아티스트의 정보 */}
                    <li className="songResult">
                      <ul>
                        <li>
                          <h3>{song.elements[0].elements[0].cdata}</h3>
                          <strong>대표곡</strong>
                          {song.elements[13].elements?.map((song, idx) => {
                            return (
                              <ul key={idx}>
                                <li>
                                  {song.elements[1].elements[0].cdata.replace(
                                    RegExp,
                                    ""
                                  )}
                                </li>
                              </ul>
                            );
                          })}
                        </li>
                      </ul>
                    </li>
                  </ul>
                );
              })}
            </div>
          )
        ) : (
          <div className="inner">
            <h3>NOW LOADING</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Search;
