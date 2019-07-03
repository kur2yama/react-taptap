



import { Star } from "../../components/star"
import { Myhead } from "../../components/head";
import { WhiteSpace, Tag, Card } from "antd-mobile"
import { getAssess, getIsObserve, observeGame, cancelObserve, saveGameDetail } from "@/scripts/redux/actions"
import { connect } from "react-redux"
import axios from "@/utils/axios"
const loginImg = require("@/assets/images/mylogin.png")






@connect(
    state => (
        {
            gameDetailInfo: state.async.gameDetailInfo,
            gamesAssess: state.async.gamesAssess,
            isObserve: state.async.isObserve
        }
    )
)


export class GameDetail extends Component {

    state={
        option: {
            backgroundColor: '#2c343c',

            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        }
    }


    observe = () => {

        var mobile = localStorage.mobile
        var gameId = this.props.gameDetailInfo._id
        var gameInfo = this.props.gameDetailInfo
        var isObserve = this.props.isObserve

        if (isObserve) {
            this.props.dispatch(cancelObserve(mobile, gameId))
        } else {

            this.props.dispatch(observeGame(mobile, gameId, gameInfo))

        }


    }


    componentWillMount() {

        var gameId = this.props.gameDetailInfo._id
        var mobile = localStorage.mobile
        this.props.dispatch(getAssess(gameId))
        this.props.dispatch(getIsObserve(mobile, gameId))



    }
    initPie(id) {
        //获取Chart的真实DOM,虽然react不推荐操作真实DOM,但是Echart对图表的渲染就是基于真实DOM的
        let myChart = echarts.getInstanceByDom(document.getElementById(id));
        if (myChart === undefined) {
            myChart = echarts.init(document.getElementById(id));
        }
        myChart.setOption(this.state.option)
    }

    componentDidMount() {

        // setTimeout(() => {
            
            
        // }, 1000)
        this.initPie("echart")
    }






    render() {
        console.log(this.props)
        const {
            title,
            cardrightimage,
            smallimg,
            shop,
            middlefooterrating,
            cardmiddledescription,
            cardtags,
            cardtags1,
            cardtags2,
            cardmiddlecategory

        } = this.props.gameDetailInfo
        return (
            <div>
                <Myhead title={title} show="true" backUrl="/home/index" />
                <div style={{ height: 50 }}></div>
                <div style={{ width: "100%" }}>
                    <img src={cardrightimage} alt="" style={{ width: "100%" }} />
                </div>
                <WhiteSpace />



                <div style={{ overflow: "hidden", backgroundColor: "#fff" }}>
                    <div style={{ width: 80, height: 80, margin: 20, float: "left" }}>
                        <img src={smallimg} alt="" style={{ width: "100%" }} />
                    </div>
                    <div style={{ float: "left", marginTop: 30 }}>
                        <p style={{ fontSize: 18, width: 150 }}>{title}</p>
                        <p style={{ fontSize: 12, color: "#14b7c8", marginTop: 10, marginBottom: 10 }}>发行商:{shop}</p>
                        <Star name={middlefooterrating} />
                    </div>
                    <div style={{ float: "right", fontSize: 20, width: 50, height: 50, backgroundColor: "#14b7c8", borderRadius: "50%", textAlign: "center", marginTop: 30, marginRight: 20 }}>
                        <div style={{ color: "#fff" }}>
                            <p style={{ fontSize: 8, marginTop: 8 }}>TapTap</p>
                            <p>{middlefooterrating}</p>
                        </div>
                    </div>
                </div>

                {/* 评价评价评价评价评价评价评价评价评价评价评价评价 */}
                <ul style={{ overflow: "hidden", backgroundColor: "#fff", paddingBottom: 20 }}>
                    <li style={{ float: "left", width: "20%", textAlign: "center", marginLeft: "10%" }} onClick={() => { this.props.history.push("/assess") }}>
                        <i className="iconfont icon-pingjia" style={{ display: "block", fontSize: 25 }}></i>
                        <p style={{ fontSize: 12 }}>写评价</p>
                    </li>

                    {/* 关注关注关注关注关注关注关注关注关注关注关注关注 */}

                    <li style={{ float: "left", width: "20%", textAlign: "center", marginLeft: "10%", marginRight: "10%" }} onClick={this.observe}>
                        <i className={this.props.isObserve ? "iconfont icon-aixin1" : "iconfont icon-aixin"} style={{ display: "block", fontSize: 25, color: this.props.isObserve ? "#14c7d8" : "" }}></i>
                        <p style={{ fontSize: 12, color: this.props.isObserve ? "#14c7d8" : "" }}>{this.props.isObserve ? "已关注" : "关注"}</p>
                    </li>


                    {/* 下载下载下载下载下载下载下载下载下载下载下载下载下载 */}
                    <li style={{ float: "left", width: "20%", textAlign: "center", marginRight: "10%" }} onClick={() => { this.props.history.push("/download"); }}>
                        <i className="iconfont icon-xiazai" style={{ display: "block", fontSize: 25 }}></i>
                        <p style={{ fontSize: 12 }}>下载</p>
                    </li>
                </ul>


                <WhiteSpace />

                <div style={{ backgroundColor: "#fff" }}>
                    <p style={{ fontSize: 16, padding: 20 }}>推荐语</p>
                    <p style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>{cardmiddledescription}</p>
                </div>
                <div style={{ backgroundColor: "#fff", padding: 20 }}>
                    &nbsp;&nbsp;
                    <Tag selected>{cardtags}</Tag>&nbsp;&nbsp;
                    <Tag selected>{cardtags1}</Tag>&nbsp;&nbsp;
                    <Tag selected>{cardtags2}</Tag>&nbsp;&nbsp;
                    <Tag selected>{cardmiddlecategory}</Tag>
                </div>
                <WhiteSpace />
                <div style={{ backgroundColor: "#fff" }}>
                    <p style={{ fontSize: 16, padding: 20 }}>简介</p>
                    <p style={{ fontSize: 14, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>{cardmiddledescription}</p>
                </div>
                <WhiteSpace />
                <div style={{ backgroundColor: "#fff" }}>
                    <p style={{ fontSize: 16, padding: 20 }}>评论</p>
                </div>
                <div>
                    {
                        this.props.gamesAssess.map((item, i) => {
                            return (
                                <div key={i}>
                                    <Card>
                                        <Card.Header
                                            title={item.assessMobile}
                                            thumb={loginImg}
                                            extra={<Star name={item.assessStarNum * 2} />}
                                            thumbStyle={{ width: 50, height: 50, borderRadius: "50%" }}
                                        />
                                        <Card.Body>
                                            <div>{item.assesssText}</div>
                                        </Card.Body>
                                        <Card.Footer content={<span></span>} extra={<div>{item.assessTime}</div>} />
                                    </Card>





                                    <WhiteSpace />
                                </div>

                            )
                        })
                    }
                </div>
                <div id="echart" style={{ width: "100%", height: 200, backgroundColor: "#aaa" }}></div>
            </div >
        )
    }
}