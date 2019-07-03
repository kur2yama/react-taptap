


import { NavBar, Icon } from 'antd-mobile';
import history from "@/utils/history"



export class DetailHead extends Component {
    addAssess = () => {
        this.props.sendAssess()
    }
    render() {
        const { show, title,backUrl } = this.props
        return (
            <NavBar
                mode="light"
                icon={show && <Icon type="left" />}
                onLeftClick={() => history.push(backUrl)}
                style={{
                    backgroundColor: '#14b9c8', color: '#fff', position: "fixed", right: 0, left: 0, top: 0, zIndex: 99
                }}
                rightContent={
                    <span onClick={ this.addAssess }>发表</span>
                }
            >
                <p style={{ color: "#fff" }}>{title}</p>
            </NavBar >
        )
    }
}