import { Route, Switch } from "react-router-dom"
import { Classify } from "../classify";
import { Cart } from "../cart";
import { Mine } from "../mine";
import { Index } from "../index/index.js";


import { Myfoot } from "@/scripts/components/foot"

export class Home extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/home/mine" component={Mine} />
                    <Route path="/home/classify" component={Classify} />
                    <Route path="/home/cart" component={Cart} />
                    <Route path="/home/index" component={Index} />
                </Switch>

                <Myfoot />
            </div>
        )
    }
}