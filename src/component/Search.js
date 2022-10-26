import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, useParams } from "react-router-dom";
import store from "../store";

const Search = () => {
  const { params } = useParams();
  const { listSearch } = useSelector((state) => state);
  console.log("listsearch", listSearch);
  return (
    <section className="Search">
      <div className="inner">
        <h2>{params} 검색결과</h2>     
        {listSearch.length > 0 ? (
          <div>
            {listSearch[0].map((song, idx) => {
              return (
                <ul key={idx} className="songList">
                  <li className="images">
                    <figure>
                      {song.elements[5].elements[0].cdata ==
                      "http://i.maniadb.com" ? (
                        <img
                          src={
                            process.env.PUBLIC_URL + "/assets/img/noimages.jpg"
                          }
                        />
                      ) : (
                        <img src={song.elements[5].elements[0].cdata} />
                      )}
                    </figure>
                  </li>
                  <li className="songResult">
                    <ul>
                      <li>
                        <h3>{song.elements[0].elements[0].cdata}</h3>
                        <strong>대표곡</strong>
                        {song.elements[13].elements.map((song, idx) => {
                          return (
                            <ul key={idx}>
                              <li>{song.elements[1].elements[0].cdata}</li>
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
