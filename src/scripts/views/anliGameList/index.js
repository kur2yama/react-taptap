



import { getAllGames, changeAnliImg } from "../../redux/actions"
import { connect } from "react-redux"
import { Grid } from "antd-mobile"
import { Myhead } from "../../components/head";





@connect(
    state => (
        {
            allgames: state.async.allgames
        }
    )
)


export class AnliGameList extends Component {

    componentWillMount() {
        this.props.dispatch(getAllGames())



    }







    render() {

        return (
            <div>
                <Myhead title="点击选择游戏" show="true" backUrl="/addAnli"/>
                <div style={{ height: 50 }}></div>
                <ul style={{ overflow: "hidden" }}>
                    {
                        this.props.allgames.map((item, i) => {
                            return (
                                <li key={i} style={{ float: "left", width: "20%", height: 120, padding: "2.5%" }} onClick={() => { this.props.dispatch(changeAnliImg(item)) }} className="tada">
                                    <div onClick={() => { this.props.history.push("/addanli") }}>
                                        <p style={{ width: "100%", textAlign: "center" }}>
                                            <img src={item.smallimg} alt="" style={{ width: "100%" }} />
                                        </p>
                                        <p style={{ width: "100%", textAlign: "center", fontSize: 12, marginTop: 10 }}>{item.title}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}




















