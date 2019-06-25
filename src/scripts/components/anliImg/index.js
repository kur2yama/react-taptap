

import history from "@/utils/history"



export class AnliImg extends Component {


    selectGame() {
        history.push("/anligamelist")
    }



    render() {
        const { selectedImg } = this.props
        return (
            <div style={{ height: 100, textAlign: "center", backgroundColor: "#fff", padding: 20, marginLeft: "auto", marginRight: "auto" }} onClick={this.selectGame}>
                <img src={selectedImg} alt="" style={{ width: "100px" }} />
            </div>
        )
    }
}