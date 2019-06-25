import { Route, Switch } from "react-router-dom"
import { Games } from "../games";
import { Anli } from "../anli";
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
                    <Route path="/home/games" component={Games} />
                    <Route path="/home/anli" component={Anli} />
                    <Route path="/home/index" component={Index} />
                </Switch>

                <Myfoot />
            </div>
        )
    }
}