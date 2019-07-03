import { Myotherhead } from "../../components/otherhead";
import { getSearch, saveGameDetail } from "../../redux/actions"
import { SearchBar, Carousel, WhiteSpace, Card } from "antd-mobile"
import { connect } from "react-redux"

@connect(
    state => (
        {
            searchResult: state.async.searchResult
        }
    )
)



export class Search extends Component {



    search = (keyword) => {
        this.props.dispatch(getSearch(keyword))
    }

    componentDidMount() {
        this.autoFocusInst.focus();
    }




    render() {
        return (
            <div>
                <Myotherhead title="搜索" show="true" />

                <div>
                    <SearchBar
                        placeholder="搜索"
                        ref={ref => this.autoFocusInst = ref}
                        onChange={this.search}
                        style={{ position: "fixed", right: 0, left: 0, top: 45, Zindex: 9999 }}
                    />
                </div>
                <div style={{ paddingTop: 80, Zindex: "-999" }}>
                    {
                        this.props.searchResult.map((item, i) => {
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
            </div>
        )
    }
}