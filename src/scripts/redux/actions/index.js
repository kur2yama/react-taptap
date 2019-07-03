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



export const SAVEGAMEDETAIL = "saveGameDetail"
export const saveGameDetail = (item) => {
  return {
    type: SAVEGAMEDETAIL,
    gameDetailInfo: item
  }
}



//获取评论
export const GETASSESS = "getAssess"
export const getAssess = (gameId) => {
  return axios.get("/vue/getassess", { params: { gameId } }).then(res => {
    return {
      type: GETASSESS,
      gamesAssess: res.data.result
    }
  })
}



//搜索
export const GETSEARCH = "getSearch"
export const getSearch = (keyword) => {
  return axios.post("/vue/getsearch", { keyword }).then(res => {
    return {
      type: GETSEARCH,
      searchResult: res.data.result
    }
  })
}



//厂家信息


export const GETPRODUCT = "getProduct"
export const getProduct = () => {
  return axios.get("/vue/getproduct").then(res => {
    return {
      type: GETPRODUCT,
      productList: res.data.result
    }
  })
}




//关注游戏

export const OBSERVEGAME = 'observeGame'
export const observeGame = (mobile, gameId, gameInfo)=>{
  return axios.post("/vue/observegame",{mobile, gameId, gameInfo}).then(res=>{
    return {
      type:OBSERVEGAME,
      isObserve: true
    }
  })
}
//取消关注

export const CANCELOBSERVE = "cancelObserve"
export const cancelObserve =(mobile, gameId)=>{
  return axios.post("/vue/cancelobserve",{mobile, gameId}).then(res=>{
    return {
      type:CANCELOBSERVE,
      isObserve: false
    }
  })
}



//判断是否关注
export const GETISOBSERVE = "getIsObserve"
export const getIsObserve = (mobile, gameId) => {
  return axios.post("/vue/getisobserve", { mobile, gameId }).then(res => {
    console.log(res.data.result)
    var flag = res.data.result == null ? false : true
    return {
      type: GETISOBSERVE,
      isObserve: flag
    }
  })
}