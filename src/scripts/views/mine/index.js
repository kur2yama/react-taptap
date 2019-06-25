import { Myhead } from "../../components/head";
import "./index.scss"
import { ImagePicker, WhiteSpace, Tag, Tabs, Modal } from "antd-mobile"

const tabs = [
    { title: "评价" },
    { title: "帖子" },
    { title: "玩过" },
];


const alert = Modal.alert



var loginMobile = localStorage.loginMobile

export class Mine extends Component {
    state = {
        loginMobile: loginMobile,
        uid: "00004",
        loginImg: require("@/assets/images/mylogin.png")
    }


    componentWillMount() {
        if (this.state.loginMobile) {


        } else {
            alert('您还没有登录', '是否立即登录?', [
                { text: '取消', onPress: () => this.props.history.go(-1) },
                { text: '确定', onPress: () => this.props.history.push("/register") },
            ])
        }
    }



    gotoEdit = () => {
        this.props.history.push("/editinfo")
    }




    render() {
        const { loginMobile, uid, loginImg } = this.state
        return (
            <div className="move-in">
                <div style={{ height: 45, width: "100%" }}></div>
                <Myhead title="我" />
                <WhiteSpace />
                <div style={{ width: "100%", height: 180, backgroundColor: "#fff" }} className="mineTop">
                    <div className="myImgBox" style={{ width: 100, height: 100, borderRadius: "50%", backgroundColor: "#ada", marginLeft: 20, marginTop: 20, float: "left", overflow: "hidden" }}>
                        <img src={loginImg} alt="" style={{ width: "100%" }} />
                    </div>
                    <div className="loginDetail" style={{ float: "left", fontSize: 20, marginLeft: 20, marginTop: 20 }}>
                        <h3 className="loginName">
                            {"用户"+loginMobile}
                            <Tag small selected>礼仪</Tag>
                        </h3>
                        <p style={{ fontSize: 12, marginTop: 20 }}>ID:{uid}</p>
                        <ul className="myCollection" style={{ marginTop: 50, textAlign: "center", overflow: "hidden" }}>
                            <li style={{ paddingRight: 30, borderRight: "1px solid #aaa" }}>
                                <p style={{ fontSize: 12 }}>0</p>
                                <p style={{ fontSize: 14 }}>关注</p>
                            </li>
                            <li style={{ paddingRight: 30, paddingLeft: 30, borderRight: "1px solid #aaa" }}>
                                <p style={{ fontSize: 12 }}>0</p>
                                <p style={{ fontSize: 14 }}>关注</p>
                            </li>
                            <li style={{ paddingLeft: 30 }}>
                                <p style={{ fontSize: 12 }}>0</p>
                                <p style={{ fontSize: 14 }}>关注</p>
                            </li>
                        </ul>
                    </div>

                </div>
                <WhiteSpace />
                <div style={{ backgroundColor: "#fff", overflow: "hidden" }}>
                    <p style={{ float: "left", margin: 10 }} >
                        <i className="iconfont icon-dianzan" style={{ float: "left", fontSize: 40, height: 40, lineHeight: "40px" }}></i>
                        <span style={{ float: "left", fontSize: 16, height: 40, lineHeight: "40px" }}>0</span>
                    </p>

                    <p style={{ fontSize: 12, width: 80, height: 40, borderRadius: "30px", lineHeight: "40px", backgroundColor: "#14b9c8", textAlign: "center", float: "right", margin: 10, color: "#fff" }} onClick={this.gotoEdit}>编辑资料</p>
                </div>

                <WhiteSpace />

                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        暂无内容
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        暂无内容
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        暂无内容
                    </div>
                </Tabs>
            </div>
        )
    }
}