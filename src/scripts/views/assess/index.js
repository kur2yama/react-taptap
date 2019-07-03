



import { DetailHead } from "../../components/detailhead";
import { StarMarking } from "../../components/setStar"
import { connect } from "react-redux"
import { TextareaItem } from "antd-mobile"
import axios from "@/utils/axios"
@connect(
    state => (
        {
            gameDetailInfo: state.async.gameDetailInfo
        }
    )
)





export class Assess extends Component {



    state = {
        assessStarNum: null
    }



    changeMarkingScores = (item) => {
        console.log(item.score)
        this.setState({
            assessStarNum: item.score
        })

    }



    sendAssess = () => {
        console.log(this.state.assessStarNum)
        console.log(this.props.gameDetailInfo._id)
        console.log(this.autoFocusInst.state.value)
        console.log(localStorage.loginMobile)
        console.log(new Date().toLocaleDateString())
        axios.post("/vue/sendassess", {
            gameId: this.props.gameDetailInfo._id,
            assessStarNum: this.state.assessStarNum,
            assesssText: this.autoFocusInst.state.value,
            assessMobile: localStorage.loginMobile,
            assessTime: new Date().toLocaleDateString()

        }).then(res => {
            this.props.history.push("/gameDetail")
        })


    }


    render() {
        const { title, smallimg } = this.props.gameDetailInfo
        return (
            <div>
                <DetailHead show="true" title="添加评论" sendAssess={this.sendAssess} backUrl="/gameDetail"/>
                <div style={{ width: "100%", height: 50, paddingTop: 45, backgroundColor: "#ddd" }}>
                    <div style={{ float: "left", width: 30, height: 30, marginTop: 10, marginLeft: 20 }}>
                        <img src={smallimg} alt="" style={{ width: "100%" }} />
                    </div>

                    <span style={{ float: "left", fontSize: 16, marginTop: 10, height: 30, lineHeight: "30px", marginLeft: 20 }}>{title}</span>
                </div>

                <div style={{ marginLeft: 20, fontSize: 14, color: "#aaa", marginTop: 20 }}>
                    点击评分<StarMarking changeMarkingScores={(item) => { this.changeMarkingScores(item) }} />
                </div>
                <div style={{ marginTop: 50 }}>
                    <TextareaItem
                        title="评论"
                        placeholder="请写下你宝贵的意见"
                        data-seed="logId"
                        ref={el => this.autoFocusInst = el}
                        autoHeight
                    />
                </div>

            </div>
        )
    }
}