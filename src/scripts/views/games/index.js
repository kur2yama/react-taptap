



import { Myotherhead } from "../../components/otherhead"
import { SearchBar, Carousel, WhiteSpace, Tag } from "antd-mobile"
import { Player, BigPlayButton } from 'video-react';
import { getProduct } from "../../redux/actions"
// import "@/styles/video-react.css"



import { connect } from "react-redux"


@connect(
    state => (
        {
            productList: state.async.productList
        }
    )
)
export class Games extends Component {
    state = {
        data: ['https://img.tapimg.com/market/images/7a36b782427bb56314d916c0a16ad08c.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/f06f225d74e00c0035635d36f619e3e6.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/7b598656b784fab6d373bb1103a8035e.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/04616154187a58bfcdd1c5cb3ae96ebe.png?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/456b7aa88aef50991af7cb928ad6f592.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1'],
        imgHeight: 200,
    }


    componentWillMount() {
        this.props.dispatch(getProduct())
        
    }




    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://img.tapimg.com/market/images/7a36b782427bb56314d916c0a16ad08c.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/f06f225d74e00c0035635d36f619e3e6.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/7b598656b784fab6d373bb1103a8035e.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/04616154187a58bfcdd1c5cb3ae96ebe.png?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1', 'https://img.tapimg.com/market/images/456b7aa88aef50991af7cb928ad6f592.jpg?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1'],
            });
        }, 100);
    }






    render() {

        return (
            <div>
                <Myotherhead title="资讯" />
                <div style={{ paddingTop: 45 }}>
                    <SearchBar
                        placeholder="搜索"
                        ref={ref => this.manualFocusInst = ref}
                        onFocus={() => { this.props.history.push("/search") }}
                    />
                </div>




                <div style={{ paddingTop: 10, width: "100%" }}>
                    <Carousel className="space-carousel"
                        frameOverflow="hidden"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index })}
                    >
                        {this.state.data.map((val, index) => (
                            <a
                                key={val}
                                href="#"
                                style={{
                                    display: 'block',
                                    position: 'relative',
                                    top: this.state.slideIndex === index ? -10 : 0,
                                    height: this.state.imgHeight,
                                    boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </div>


                <div style={{ marginTop: 20 }}>
                    <Player ref="player" style={{ width: "100%" }}>
                        <source src="https://vd3.bdstatic.com/mda-jemq3djrirkhyzvu/sc/mda-jemq3djrirkhyzvu.mp4?auth_key=1561803283-0-0-e88e30caa53b8bea7eb369e6c32904da&bcevod_channel=searchbox_feed&pd=unknown&abtest=all" />
                        <BigPlayButton position="center" />
                    </Player>
                </div>

                <div>
                    {
                        this.props.productList.map((item, i) => {
                            return (
                                <div key={i} >
                                    <div style={{ width: "100%", backgroundColor: "#fff" }}>
                                        <div style={{ overflow: "hidden", width: "100%" }}>
                                            <div style={{ float: "left", paddingLeft: 20, paddingTop: 20 }}>
                                                <p style={{ width: 80, height: 80, borderRadius: "50%", border: "1px solid #eee" }}>
                                                    <img src={item.shopImg} alt="" style={{ width: "100%", borderRadius: "50%" }} />
                                                </p>
                                            </div>

                                            <div style={{ float: "left" }}>
                                                <p style={{ fontSize: 20, paddingTop: 30, paddingLeft: 20 }}>
                                                    {item.title}
                                                </p>
                                                <p style={{ fontSize: 12, color: "#aaa", paddingTop: 10, paddingLeft: 20 }}>
                                                    <span>{item.developerinfocontent}</span>
                                                    {/* <span>{item.developerinfocontent2}</span>
                                                <span>{item.assessCount}</span> */}
                                                </p>
                                            </div>

                                            <div style={{ float: "right" }}>
                                                <div style={{ paddingRight: 30, paddingTop: 30 }}>
                                                    <Tag selected >关注</Tag>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: 14, padding: 20 }}>
                                                {item.developerinfocontent3}
                                            </p>
                                        </div>
                                        <div style={{ overflow: "hidden", paddingBottom: 20 }}>
                                            <div style={{ float: "right", fontSize: 12 }}>
                                                <span>{item.developerinfocontent2}</span>
                                                &nbsp;&nbsp;
                                            <span>{item.assessCount}</span>
                                                &nbsp;&nbsp;
                                            <span>粉丝数:{item.fans}</span>
                                                &nbsp;&nbsp;
                                        </div>
                                        </div>


                                    </div>
                                    <WhiteSpace />
                                </div>

                            )
                        })
                    }
                </div>

            </div>
        )
    }
}