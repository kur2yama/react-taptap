import { Myhead } from "../../components/head";
import "./index.scss"
import { ImagePicker, WhiteSpace, Tag } from "antd-mobile"



export class Mine extends Component {
    state = {
        loginName: "看我手指这是几",
        uid: "19836678",
        loginImg: require("@/assets/images/mylogin.png")
    }
    render() {
        const { loginName, uid, loginImg } = this.state
        return (
            <div>
                <div style={{ height: 45, width: "100%" }}></div>
                <Myhead title="我" />
                <WhiteSpace />
                <div style={{ width: "100%", height: 180, backgroundColor: "#fff", overflow: "hidden" }}>
                    <div className="myImgBox" style={{ width: 100, height: 100, borderRadius: "50%", backgroundColor: "#ada", marginLeft: 20, marginTop: 20, float: "left", overflow: "hidden" }}>
                        <img src={loginImg} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="loginDetail" style={{ float: "left", fontSize: 20, marginLeft: 20, marginTop: 20 }}>
                        <h3 className="loginName">
                            {loginName}
                            <Tag small selected>礼仪</Tag>
                        </h3>
                        <p style={{ fontSize: 12, marginTop: 20 }}>ID:{uid}</p>
                        <ul className="myCollection" style={{ marginTop: 50, textAlign: "center", overflow: "hidden" }}>
                            <li style={{ paddingRight: 30, borderRight: "1px solid #aaa" }}>
                                <p style={{ fontSize: 12 }}>138</p>
                                <p style={{ fontSize: 14 }}>关注</p>
                            </li>
                            <li style={{ paddingRight: 30, paddingLeft: 30, borderRight: "1px solid #aaa" }}>
                                <p style={{ fontSize: 12 }}>138</p>
                                <p style={{ fontSize: 14 }}>关注</p>
                            </li>
                            <li style={{ paddingLeft: 30 }}>
                                <p style={{ fontSize: 12 }}>138</p>
                                <p style={{ fontSize: 14 }}>关注</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <WhiteSpace />
                <div style={{ backgroundColor: "#fff" }}>
                    <p style={{ fontSize: 12, width: 80, height: 30, borderRadius: "30px", lineHeight: "30px", backgroundColor: "#00caca", textAlign: "center" }}>编辑资料</p>
                </div>
            </div>
        )
    }
}