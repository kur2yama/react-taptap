import { Myhead } from "../../components/head";
import { InputItem, TextareaItem, Button, Tag } from "antd-mobile"
import { AnliImg } from "@/scripts/components/AnliImg"
import axios from "@/utils/axios"


import { connect } from "react-redux"

@connect(
    state => (
        {
            selectedImg: state.async.selectedImg,
            selectedTitle: state.async.selectedTitle,
            selectedCardtags: state.async.selectedCardtags,
            selectedCardtags1: state.async.selectedCardtags1,
            selectedCardtags2: state.async.selectedCardtags2
        }
    )
)

export class Addanli extends Component {

    addAnliInfo = () => {
        var anliInfo = {}
        anliInfo.anliTitle = this.props.selectedTitle
        anliInfo.userImg = this.props.selectedImg
        anliInfo.blockcontentstext = this.refs.anliText.state.value
        anliInfo.taptapusername = localStorage.loginName
        console.log(anliInfo)
        axios.post("/vue/addAnliInfo", { anliInfo }).then(res => {
            this.props.history.push("/home/anli")
        })
    }



    render() {
        return (
            <div className="slide-left">
                <Myhead title="安利一下" show="true" backUrl="/home/anli"/>
                <div style={{ height: 50 }}></div>
                <div>
                    <p style={{ fontSize: 16, textAlign: "center", backgroundColor: "#fff" }}>请选择安利的游戏</p>

                    <AnliImg selectedImg={this.props.selectedImg} />
                    <p style={{ backgroundColor: "#fff", fontSize: 16, padding: 15 }}>
                        {this.props.selectedTitle}
                    </p>



                    <div style={{ backgroundColor: "#fff", marginBottom: 20, paddingBottom: 20, display: this.props.selectedTitle ? "block" : "none" }}>
                        &nbsp;&nbsp;
                        <Tag selected>{this.props.selectedCardtags}</Tag>&nbsp;&nbsp;
                        <Tag selected>{this.props.selectedCardtags1}</Tag>&nbsp;&nbsp;
                        <Tag selected>{this.props.selectedCardtags2}</Tag>
                    </div>

                    <TextareaItem
                        title="内容"
                        placeholder="请输入描述"
                        data-seed="logId"
                        autoHeight
                        ref="anliText"
                    />
                    <Button icon="check-circle-o" style={{ backgroundColor: "#14b9c8", color: "#fff" }} onClick={this.addAnliInfo}>提交安利</Button>
                </div>
            </div>
        )

    }
}