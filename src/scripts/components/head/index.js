
import { NavBar, Icon } from 'antd-mobile';




export class Myhead extends Component {
    render() {
        const { show, title } = this.props
        return (
            <NavBar
                mode="light"
                icon={show && <Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                style={{
                    backgroundColor: '#00caca', color: '#fff', position: "fixed", right: 0, left: 0, top: 0, zIndex: 99
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