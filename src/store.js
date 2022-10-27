// Header 컴포넌트에서 state를 사용하기에 props를 전달하는데에 어려움이 있을것이라 판단.
// Redux-Toolkit을 사용해서 state를 관리.
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

// 검색창에 명령어를 입력할때 바뀌는 state를 감지하는 createSlice 생성
const inputWord = createSlice({
  name: "searchWord",
  initialState: null,
  reducers: {
    SetInput: (state, action) => {
      return action.payload;
    },
  },
});

export const { SetInput } = inputWord.actions;

// 비동기적인 데이터 호출이 있기 때문에 createAsyncThunk를 사용
// async, await 메소드와 axios.get으로 처리
const searchSong = createAsyncThunk("search", async () => {
  console.log(store.getState().inputWord);
  const searchResult = await axios
    .get("/search", {
      params: {
        keyword: store.getState().inputWord,
        sr: "artist",
        v: "0.5",
        display: "10",
        key: "cakedel86@gmail.com",
      },
    })
    .then((res) => {
      return res;
    });
  return searchResult.data.elements[0].elements[0].elements.slice(8);
});

export { searchSong };

const listSearch = createSlice({
  name: "song",
  initialState: [],
  reducers: {},
  extraReducers: {
    [searchSong.pending]: (state, action) => {
      state.splice(0);
      // 새로운 검색어를 불러올 때 searchSong의 비동기적 처리가 완료되기 전 state 배열을 비워준다.
    },
    [searchSong.fulfilled]: (state, action) => {
      state.push(action.payload);
      // searchSong의 비동기적 처리가 완료되면 action.payload된 결과를 배열에 집어넣어준다.
    },
  },
});

const store = configureStore({
  reducer: {
    inputWord: inputWord.reducer,
    listSearch: listSearch.reducer,
  },
});
// state를 모아두는 store를 configureStore로 생성
export { listSearch };

export default store;
