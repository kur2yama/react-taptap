




import { NavBar, Icon, Popover } from 'antd-mobile';
import history from "@/utils/history"

const Item = Popover.Item;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
export class Myotherhead extends Component {
    state = {
        visible: false,
        selected: '',
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };


    logout = () => {
        localStorage.removeItem("loginMobile")
        localStorage.removeItem("mobile")
        history.push("/home/index")
    }





    render() {
        const { show, title } = this.props
        return (
            <NavBar
                mode="light"
                icon={show && <Icon type="left" />}
                onLeftClick={() => history.go(-1)}
                style={{
                    backgroundColor: '#14b9c8', color: '#fff', position: "fixed", right: 0, left: 0, top: 0, zIndex: 99
                }}
                rightContent={

                    <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={this.state.visible}
                        overlay={
                            [
                                (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">扫一扫</Item>),
                                (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
                                (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                                    <span style={{ marginRight: 5 }} onClick={this.logout}>注销</span>
                                </Item>),
                            ]}
                        align={{
                            overflow: { adjustY: 0, adjustX: 0 },
                            offset: [-10, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    >
                        <div style={{
                            height: '100%',
                            padding: '0 15px',
                            marginRight: '-15px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        >
                            <Icon type="ellipsis" />
                        </div>
                    </Popover >

                }
            >
                <p style={{ color: "#fff" }}>{title}</p>
            </NavBar >
        )
    }
}


























