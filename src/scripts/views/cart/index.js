

import { connect } from "react-redux"
import { Myhead } from "../../components/head";


// @connect(
//     state => {
//         return {
//             count: state.other.count
//         }
//     }
// )




export class Cart extends Component {

    render() {
        return (
            <div>
                <Myhead title="安利墙" />
            </div>

        )
    }
}