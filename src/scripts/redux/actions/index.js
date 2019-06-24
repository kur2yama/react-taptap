import axios from "@/utils/axios"


// const CHANGEMSG = "msg"
// export const changeMsg = (msg) => {
//   return {
//     type: CHANGEMSG,
//     msg
//   }

// }

// const COUNTADD = "countAdd"
// export const countAdd = (num) => {
//   return {
//     type: COUNTADD,
//     num
//   }
// }



// const CHANGECITY = "changeCity"
// export const changeCity = (city) => {
//   return {
//     type: CHANGECITY,
//     city
//   }
// }


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