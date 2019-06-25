import "./index.scss"
export const foots = [
    { txt: "首页", path: "/home/index", name: "index", icon: "icon-wenjian" },
    { txt: "游戏库", path: "/home/games", name: "games", icon: "icon-airudiantubiaohuizhi-zhuanqu_youxi" },
    { txt: "安利墙", path: "/home/anli", name: "anli", icon: "icon-faxian" },
    { txt: "我", path: "/home/mine", name: "mine", icon: "icon-wode" }
]


import { Link, NavLink } from "react-router-dom"

export class Myfoot extends Component {
    render() {
        return (
            <footer>
                {
                    foots.map((item, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={item.path} activeClassName="nav-active" >
                                    <i className={"iconfont icon " + item.icon} ></i>
                                    <span> {item.txt}</span>
                                    {/* {i == 2 && <Badge className="hot" text={8} style={{ marginLeft: 12 }}></Badge>} */}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </footer>
        )
    }
}