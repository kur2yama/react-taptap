

import { connect } from "react-redux"
import { Myhead } from "../../components/head";
import { getAnliWall } from "../../redux/actions";
import { WhiteSpace, Button, InputItem } from "antd-mobile"

@connect(
    state => {
        return {
            anliwall: state.async.anliwall.reverse()
        }
    }
)




export class Anli extends Component {

    componentWillMount() {
        this.props.dispatch(getAnliWall())
    }



    render() {
        return (
            <div>
                <Myhead title="安利墙" />
                <div style={{ height: 100 }}></div>
                <div>
                    <Button icon="check-circle-o" style={{ position: "fixed", right: 0, left: 0, top: 45, zIndex: "999" }} onClick={() => { this.props.history.push("/addAnli") }}>添加安利</Button>
                </div>
                <div>
                    {
                        this.props.anliwall.map((item, i) => {
                            return (
                                <div key={i} style={{ backgroundColor: "#fff", overflow: "hidden" }}>
                                    <div style={{ overflow: "hidden", margin: 20 }}>
                                        <div style={{ float: "left", width: 50, height: 50 }}>
                                            <img src={item.userImg} alt="" style={{ width: "100%" }} />
                                        </div>

                                        <div style={{ float: "left", height: 50, fontSize: 12, marginLeft: 10 }}>
                                            <p style={{ float: "left", height: 30, lineHeight: "30px", fontSize: 16 }}>{item.anliTitle}</p>
                                        </div>

                                    </div>
                                    <div style={{ padding: 20, fontSize: 14 }}>
                                        <p className="anliText">{item.blockcontentstext}</p>
                                    </div>
                                    <div style={{ overflow: "hidden", fontSize: 14, color: "#14b9c8" }}>
                                        <i style={{ float: "left", fontSize: 26,margin: 20 }} className="iconfont icon-xiaolian"></i>
                                        <p style={{ float: "right", margin: 20 }}>
                                            -----------{item.taptapusername}
                                            <span style={{ color: "#aaa" }}>
                                                {item.blockcontentsauthor}
                                            </span>
                                        </p>
                                    </div>
                                    <hr />
                                </div>

                            )
                        })

                    }
                </div>
            </div>

        )
    }
}