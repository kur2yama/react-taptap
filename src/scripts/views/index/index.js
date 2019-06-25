


import "./index.scss"
import { WhiteSpace, Button, Tabs, Card } from 'antd-mobile'
import { Myhead } from "@/scripts/components/head"
import axios from "@/utils/axios"
import store from "@/scripts/redux/store";
import { getHotGame, getNewsGame, getHotPlayGame, getSaleGame } from "../../redux/actions";
const tabs = [
    { title: "热游" },
    { title: "预约" },
    { title: "热卖" },
    { title: "热玩" }
]


import { connect } from "react-redux"

@connect(
    state => (
        {
            hotgame: state.async.hotgame,
            newsgame: state.async.newsgame,
            salegame: state.async.salegame,
            hotplaygame: state.async.hotplaygame
        }
    )
)

export class Index extends Component {

    componentWillMount() {

        this.props.dispatch(getHotGame())
        this.props.dispatch(getNewsGame())
        this.props.dispatch(getSaleGame())
        this.props.dispatch(getHotPlayGame())
        console.log(this.props)

    }


    render() {

        return (
            <div>
                <Myhead title="TapTap" />
                {/* <Button type="primary" inline size="small" onClick={this.gotoLogin}>登录</Button><WhiteSpace />

                <div>
                    <p>{msg}</p>
                    <Button inline onClick={() => store.dispatch(changeMsg("aaaaaaaaaaaaaa"))}>修改msg</Button>
                    <p>{count}</p>
                    <Button inline onClick={() => store.dispatch(countAdd(9))}>countAdd</Button>
                    <p>{city}</p>
                    <Button inline onClick={() => store.dispatch(changeCity("因斯布鲁克"))}>改变城市</Button>
                    <Button inline onClick={() => store.dispatch(getTypes())}>getTypes</Button>
                    {
                        async.types.map((item, i) => {
                            return (
                                <p key={i}>{item}</p>
                            )
                        })
                    }

                </div> */}

                <WhiteSpace />
                <div style={{ height: 45 }}>

                </div>

                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    tabBarUnderlineStyle={{ borderColor: "#14b9c8" }}
                    tabBarActiveTextColor="#14b9c8"
                >

                    <div style={{ backgroundColor: '#fff' }}>
                        {
                            this.props.hotgame.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <WhiteSpace size="lg" />
                                        <Card full>
                                            <Card.Header
                                                title={item.title}
                                                thumb={item.smallimg}
                                                extra={<span>{item.shop}</span>}
                                            />
                                            <Card.Body>
                                                <div>{item.cardmiddlecategory}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddledescription} extra={<div></div>} />
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        {
                            this.props.newsgame.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <WhiteSpace size="lg" />
                                        <Card full>
                                            <Card.Header
                                                title={item.title}
                                                thumb={item.smallimg}
                                                extra={<span>{item.shop}</span>}
                                            />
                                            <Card.Body>
                                                <div>{item.cardmiddlecategory}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddledescription} extra={<div></div>} />
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        {
                            this.props.salegame.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <WhiteSpace size="lg" />
                                        <Card full>
                                            <Card.Header
                                                title={item.title}
                                                thumb={item.smallimg}
                                                extra={<span>{item.shop}</span>}
                                            />
                                            <Card.Body>
                                                <div>{item.cardmiddlecategory}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddledescription} extra={<div></div>} />
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div style={{ backgroundColor: '#fff' }}>
                        {
                            this.props.hotplaygame.map((item, i) => {
                                return (
                                    <div key={i}>
                                        <WhiteSpace size="lg" />
                                        <Card full>
                                            <Card.Header
                                                title={item.title}
                                                thumb={item.smallimg}
                                                extra={<span>{item.shop}</span>}
                                            />
                                            <Card.Body>
                                                <div>{item.cardmiddlecategory}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddledescription} extra={<div></div>} />
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Tabs>


                <WhiteSpace />
                <Button style={{ width: 30, height: 30, borderRadius: "50%", position: "fixed", Zindex: "99999", right: 0, top: 0 }}>↑</Button>
                <div style={{ height: 45 }}>

                </div>

            </div>
        )
    }
}