




import { Myhead } from "../../components/head";
import { WhiteSpace, Tag } from "antd-mobile"

import { connect } from "react-redux"

@connect(
    state => (
        {
            gameDetailInfo: state.async.gameDetailInfo
        }
    )
)


export class GameDetail extends Component {
    render() {
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
        console.log(this.props)
        return (
            <div>
                <Myhead title={title} show="true" />
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
                        <p style={{ fontSize: 18 }}>{title}</p>
                        <p style={{ fontSize: 12, color: "#14b7c8", marginTop: 10 }}>发行商:{shop}</p>
                    </div>
                    <div style={{ float: "right", fontSize: 20, width: 50, height: 50, backgroundColor: "#14b7c8", borderRadius: "50%", textAlign: "center", marginTop: 30, marginRight: 20 }}>
                        <div style={{ color: "#fff" }}>
                            <p style={{ fontSize: 8, marginTop: 8 }}>TapTap</p>
                            <p>{middlefooterrating}</p>
                        </div>
                    </div>
                </div>


                <ul style={{ overflow: "hidden", backgroundColor: "#fff", paddingBottom: 20 }}>
                    <li style={{ float: "left", width: "20%", textAlign: "center", marginLeft: "10%" }}>
                        <i className="iconfont icon-pingjia" style={{ display: "block", fontSize: 25 }}></i>
                        <p style={{ fontSize: 12 }}>写评价</p>
                    </li>
                    <li style={{ float: "left", width: "20%", textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
                        <i className="iconfont icon-aixin" style={{ display: "block", fontSize: 25 }}></i>
                        <p style={{ fontSize: 12 }}>关注</p>
                    </li>
                    <li style={{ float: "left", width: "20%", textAlign: "center", marginRight: "10%" }}>
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
            </div >
        )
    }
}