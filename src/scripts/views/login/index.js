
import { WingBlank, WhiteSpace, List, InputItem, Button } from "antd-mobile"

import { Myhead } from "@/scripts/components/head"
import "./index.scss"
import axios from "@/utils/axios"
var timer = null


const mobileReg = /^1(3|5|7|8|9)\d{9}$/
const codeReg = /^\d{4}$/

export class Login extends Component {

    state = {
        mobileDis: true,
        toggle: true,
        txt: '发送验证码',
        count: 5,
        show: false,
        flag: true

    }
    checkM = (mobile) => {
        if (this.state.flag) {
            console.log(mobile)
            this.setState({
                mobileDis: !mobileReg.test(mobile)
            })
        }
    }


    timeStart = () => {
        clearInterval(timer)
        timer = setInterval(() => {
            if (this.state.count > 1) {
                this.setState({
                    count: --this.state.count,
                    txt: "还有" + this.state.count + "秒发送"
                })
                console.log(this.state.count)
            } else {
                clearInterval(timer)
                timer = null
                this.setState({
                    txt: "发送验证码",
                    mobileDis: false
                })
            }

        }, 1000)
    }





    getCode = () => {
        axios.post("/vue/getCode", {
            mobile: this.refs.mobile.state.value
        }).then(res => {
            console.log(res)
            this.setState({
                show: true
            })
        })
        this.setState({
            mobileDis: true
        })
        this.timeStart()


    }

    cencel = () => {
        this.setState({
            show: false
        })
    }

    checkCode = (code) => {
        this.setState({
            toggle: !codeReg.test(code)
        })
    }



    saveMobile = () => {
        var mobile = this.refs.mobile.state.value;
        console.log("55555555555555555555")

    }







    autoLogin = () => {
        var mobile = this.refs.mobile.state.value;
        var code = this.refs.code.state.value;

        axios.post("/vue/testCode", {
            mobile,
            code
        }).then(res => {
            console.log(res);
            if (!!res.data.type) {
                this.props.history.push("/home/index");
                var userInfo = {
                    token: res.data.token
                }



                axios.post("/vue/saveMobile", {
                    mobile
                }).then(res => {

                })



                sessionStorage.userInfo = JSON.stringify(userInfo)
                localStorage.loginMobile = mobile
            } else {
                delete sessionStorage['userInfo']
            }
        })
    }

    render() {
        const { mobileDis, toggle, txt, show } = this.state
        return (
            <div style={{ backgroundColor: "#fff" }} className="loginPage slide-left">
                <Myhead title="TapTap-登录" show="true" />
                <div style={{ height: 50 }}></div>
                <div>
                    <h3 style={{ fontSize: 50, textAlign: "center", color: "#14b9c8", marginTop: 10 }}>TapTap</h3>
                    <p style={{ fontSize: 16, textAlign: "center", color: "#14b9c8", marginTop: 10, marginBottom: 10 }}>即刻加入游戏狂热者行列</p>

                </div>
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            type="tel"
                            placeholder="请输入手机号"
                            clear
                            onChange={this.checkM}
                            ref="mobile"
                        >CN+86</InputItem>
                        <WhiteSpace />

                        <WhiteSpace />
                        <Button ref="btn" type="warning" onClick={this.getCode} disabled={mobileDis} className="l-btn"> {txt}</Button>
                        <WhiteSpace />


                    </List>
                </WingBlank>



                <div className="codeInput move-in" style={{ display: show ? "block" : "none" }}>
                    <div style={{ height: 200 }}>
                    </div>
                    <div style={{ width: "100%", height: 250, backgroundColor: "#fff" }}>
                        <div style={{ height: 50 }} >
                            <p style={{ color: "#000", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>验证码登录</p>
                        </div>
                        <WingBlank>
                            <InputItem
                                type="tel"
                                placeholder="请输入验证码"
                                clear
                                ref="code"
                                onChange={this.checkCode}
                            >验证码</InputItem>
                            <WhiteSpace />
                            <Button type="primary" disabled={toggle} onClick={this.autoLogin}>马上登录</Button>
                            <WhiteSpace />
                            <Button type="warning" onClick={this.cencel}>取消</Button>
                        </WingBlank>
                    </div>
                </div>


                <div style={{ height: 200, marginTop: 150 }}>
                    <WhiteSpace />
                    <h3 style={{ fontSize: 12, textAlign: "center", color: "#aaa" }}>第三方登录</h3>
                    <hr />
                    <ul className="thirdLogin">
                        <li >
                            <i className="iconfont icon-icon-test1" style={{ fontSize: 40, color: "#13227a" }}></i>
                            <p>假QQ</p>
                        </li>
                        <li>
                            <i className="iconfont icon-icon-test2" style={{ fontSize: 40, color: "#62b900" }}></i>
                            <p>微信</p>
                        </li>
                        <li>
                            <i className="iconfont icon-icon-test" style={{ fontSize: 40, color: "#d81e06" }}></i>
                            <p>微博</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}