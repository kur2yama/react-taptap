import { Myhead } from "../../components/head";

import { Progress, WingBlank, Toast } from "antd-mobile"
import { connect } from "react-redux"

var timer = null
var timer1 = null








@connect(
    state => (
        {
            gameDetailInfo: state.async.gameDetailInfo
        }
    )
)




export class Download extends Component {
    state = {
        count: 0,
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


    componentDidMount() {
        clearInterval(timer)
        timer = setInterval(() => {
            this.setState({
                count: ++this.state.count
            })
            if (this.state.count >= 100) {
                clearInterval(timer)
                Toast.info("下载完成", 500)
                timer1 = setTimeout(() => {
                    this.props.history.push("/gameDetail")
                }, 1000);

            }
        }, 50);

        
        // var myChart = echarts.init(document.getElementById('echart'));
        // myChart.setOption(this.state.option);


    }






    render() {

        return (
            <div>
                <Myhead title="下载" show="true" />
                <div style={{ paddingTop: 50, overflow: "hidden", paddingLeft: 20 }}>
                    <p style={{ width: 100, height: 100, float: "left" }}>
                        <img src={this.props.gameDetailInfo.smallimg} alt="" style={{ width: "100%" }} />
                    </p>
                    <p style={{ float: "left", paddingLeft: 20, paddingTop: 30 }}>
                        <span style={{ fontSize: 20 }}>{this.props.gameDetailInfo.title}</span>
                    </p>
                </div>

                <div style={{ paddingTop: 20 }}>
                    {/* <Progress percent={this.state.count} position="normal" unfilled={false} appearTransition /> */}
                    <WingBlank>
                        <div className="show-info">
                            <div className="progress"><Progress percent={this.state.count} position="normal" /></div>
                            <div aria-hidden="true" style={{ fontSize: 14 }}>{this.state.count}%</div>
                        </div>
                    </WingBlank>
                </div>



                {/* <div id="echart" style={{ width: "100%", height: 200, backgroundColor: "#aaa" }}></div> */}
                

            </div>
        )
    }
}