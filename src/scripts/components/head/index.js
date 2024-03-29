
import { NavBar, Icon } from 'antd-mobile';
import history from "@/utils/history"



export class Myhead extends Component {
    gotoSearch() {
        history.push("/search")
    }
    render() {
        const { show, title, backUrl } = this.props
        return (
            <NavBar
                mode="light"
                icon={show && <Icon type="left" />}
                onLeftClick={() => history.push(backUrl)}
                style={{
                    backgroundColor: '#14b9c8', color: '#fff', position: "fixed", right: 0, left: 0, top: 0, zIndex: 99
                }}
                rightContent={
                    [<div key="0" onClick={this.gotoSearch}>
                        <Icon type="search" style={{ marginRight: '16px' }} />
                    </div>
                        ,
                    <Icon key="1" type="ellipsis" />,
                    ]}
            >
                <p style={{ color: "#fff" }}>{title}</p>
            </NavBar >
        )
    }
}