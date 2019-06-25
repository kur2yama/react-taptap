import axios from "@/utils/axios"





//异步请求

const GETTYPES = "getTypes"
export const getTypes = () => {

  return axios.get("/vue/getGoodTypes").then(res => {
    return {
      type: GETTYPES,
      types: res.data.result
    }
  })
}

//获取hotgame
export const GETHOTGAME = "getHotGame"
export const getHotGame = () => (
  axios.get("/vue/gethotgame").then(res => {

    return {
      type: GETHOTGAME,
      hotgame: res.data.result
    }
  })
)


export const GETNEWSGAME = "getNewsGame"
export const getNewsGame = () => (
  axios.get("/vue/getnewsgame").then(res => {

    return {
      type: GETNEWSGAME,
      newsgame: res.data.result
    }
  })
)


export const GETSALEGAME = "getSaleGame"
export const getSaleGame = () => (
  axios.get("/vue/getsalegame").then(res => {

    return {
      type: GETSALEGAME,
      salegame: res.data.result
    }
  })
)


export const GETHOTPLAYGAME = "getHotPlayGame"
export const getHotPlayGame = () => (
  axios.get("/vue/gethotplaygame").then(res => {

    return {
      type: GETHOTPLAYGAME,
      hotplaygame: res.data.result
    }
  })
)




export const GETANLIWALL = "getAnliWall"
export const getAnliWall = () => {
  return axios.get("/vue/getanliwall").then(res => {
    return {
      type: GETANLIWALL,
      anliwall: res.data.result
    }
  })
}


export const GETALLGAMES = "getAllGames"
export const getAllGames = () => {
  return axios.get("/vue/getallgames").then(res => {
    return {
      type: GETALLGAMES,
      allgames: res.data.result
    }
  })
}



//获取安利的游戏信息
export const CHANGEANLIIMG = "changeAnliImg"
export const changeAnliImg = (item) => {
  return {
    type: CHANGEANLIIMG,
    selectedImg: item.smallimg,
    selectedTitle: item.title,
    selectedCardtags: item.cardtags,
    selectedCardtags1: item.cardtags1,
    selectedCardtags2: item.cardtags2,
  }
}




