
import { NavBar, Icon } from 'antd-mobile';
import history from "@/utils/history"



export class Myhead extends Component {
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
                    [
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
            >
                <p style={{ color: "#fff" }}>{title}</p>
            </NavBar >
        )
    }
}