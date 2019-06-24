import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Guide } from "./guide";
import { Home } from "./home"
import { Login } from "./login"

export class IndexView extends Component {
    render() {
        return (

            <Router>
                <div id="main">
                    <Route path="" exact component={Layout} />
                </div>
            </Router>

        )
    }
}



export class Layout extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={() => (<Redirect to="/guide" />)} />
                    <Route path="/guide" component={Guide} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route render={() => (<Redirect to="/home/index" />)} />
                </Switch>
            </div>
        )
    }
}