


import "./index.scss"
import { WhiteSpace, Button, Tabs, Card } from 'antd-mobile'
import { Myhead } from "@/scripts/components/head"
import axios from "@/utils/axios"
import store from "@/scripts/redux/store";

import { getHotGame, getNewsGame, getHotPlayGame, getSaleGame, saveGameDetail } from "../../redux/actions";
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


                <WhiteSpace />
                <div style={{ height: 45 }}>

                </div>

                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    tabBarUnderlineStyle={{ borderColor: "#14b9c8" }}
                    tabBarActiveTextColor="#14b9c8"
                    className="indexTab"
                >

                    <div style={{ backgroundColor: '#fff' }} >
                        {
                            this.props.hotgame.map((item, i) => {
                                return (
                                    <div key={i} className="slide-up" onClick={() => {
                                        this.props.dispatch(saveGameDetail(item))
                                        this.props.history.push("/gamedetail")
                                    }}>
                                        <WhiteSpace size="lg" />
                                        <Card full>
                                            <Card.Header
                                                title={item.title}
                                                thumb={item.smallimg}
                                                extra={<span>{item.shop}</span>}
                                            />
                                            <Card.Body>
                                                <div className="description">{item.cardmiddledescription}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddlecategory} extra={<div style={{ color: "#00caca" }}>{item.cardtags}&nbsp;&nbsp;{item.cardtags1}&nbsp;&nbsp;{item.cardtags2}</div>} />
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
                                                <div className="description">{item.cardmiddledescription}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddlecategory} extra={<div style={{ color: "#00caca" }}>{item.cardtags}&nbsp;&nbsp;{item.cardtags1}&nbsp;&nbsp;{item.cardtags2}</div>} />
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
                                    <div key={i} onClick={() => { console.log(item) }}>
                                        <WhiteSpace size="lg" />
                                        <Card full>
                                            <Card.Header
                                                title={item.title}
                                                thumb={item.smallimg}
                                                extra={<span>{item.shop}</span>}
                                            />
                                            <Card.Body>
                                                <div className="description">{item.cardmiddledescription}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddlecategory} extra={<div style={{ color: "#00caca" }}>{item.cardtags}&nbsp;&nbsp;{item.cardtags1}&nbsp;&nbsp;{item.cardtags2}</div>} />
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
                                                <div className="description">{item.cardmiddledescription}</div>
                                            </Card.Body>
                                            <Card.Footer content={item.cardmiddlecategory} extra={<div style={{ color: "#00caca" }}>{item.cardtags}&nbsp;&nbsp;{item.cardtags1}&nbsp;&nbsp;{item.cardtags2}</div>} />
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Tabs>


                <WhiteSpace />
                <div className="backtop" onClick={() => { document.body.scrollTop = document.documentElement.scrollTop = 0 }}>
                    ↑
                </div>

                <div style={{ height: 45 }}>

                </div>

            </div >
        )
    }
}