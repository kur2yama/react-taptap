


import { Myhead } from "../../components/head";
import { ImagePicker, InputItem, WingBlank, DatePicker, List, Picker, Button } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

var loginMobile = localStorage.loginMobile
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);


// const CustomChildren = props => (
//     <div
//         onClick={props.onClick}
//         style={{ backgroundColor: '#fff', paddingLeft: 15 }}
//     >
//         <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
//             <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
//             <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
//         </div>
//     </div>
// );




const sex = [
    [{
        label: "女",
        value: "女"
    },
    {
        label: "男",
        value: "男"
    }]
]




export class EditInfo extends Component {

    state = {
        loginMobile: loginMobile,
        uid: "00004",
        loginImg: require("@/assets/images/mylogin.png"),
        multiple: false,
        files: [{ url: require("@/assets/images/mylogin.png") }],
        date: now,
        sValue: ["女"]
    }



    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }


    render() {
        const { files, loginMobile } = this.state
        return (
            <div className="slide-left">
                <Myhead title="个人资料" show="true" />
                <div style={{ height: 50 }}>

                </div>
                <div style={{width:"100%"}}>
                    <WingBlank>
                        <ImagePicker
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            multiple={this.state.multiple}
                            onChange={this.onChange}
                            style={{ marginRight: "auto", marginLeft: "auto" }}
                        />

                        <InputItem
                            clear
                            value={"用户" + loginMobile}
                            style={{ textAlign: "right" }}
                        >昵称</InputItem>


                        <Picker
                            data={sex}
                            title="选择性别"
                            cascade={false}
                            extra="请选择"
                            value={this.state.sValue}
                            onChange={v => this.setState({ sValue: v })}
                            onOk={v => this.setState({ sValue: v })}
                        >
                            <List.Item arrow="horizontal">性别</List.Item>
                        </Picker>





                        <DatePicker
                            mode="date"
                            title="日期"
                            extra="选择"
                            value={this.state.date}
                            onChange={date => this.setState({ date })}
                        >
                            <List.Item arrow="horizontal">生日</List.Item>
                        </DatePicker>


                        <Picker
                            title="选择地区"
                            extra="请选择(可选)"
                            data={district}
                            value={this.state.pickerValue}
                            onChange={v => this.setState({ pickerValue: v })}
                            onOk={v => this.setState({ pickerValue: v })}
                        >
                            <List.Item arrow="horizontal">地区</List.Item>
                        </Picker>


                        <InputItem
                            clear
                            value={loginMobile}
                            style={{ textAlign: "right" }}
                        >手机号</InputItem>


                        <InputItem
                            clear
                        >个人简介</InputItem>
                        <Button style={{backgroundColor:"#14b9c8" ,color:"#fff"}}>保存</Button>
                    </WingBlank>
                </div>
            </div >
        )
    }
}