import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Guide } from "./guide";
import { Home } from "./home"
import { Login } from "./login"
import { Register } from "./register"
import { Addanli } from "./addanli"
import { AnliGameList } from "./anliGameList";
import { EditInfo } from "./editinfo"
import { GameDetail } from "./gamedetail"

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
                    <Route path="/register" component={Register} />
                    <Route path="/addanli" component={Addanli} />
                    <Route path="/anligamelist" component={AnliGameList} />
                    <Route path="/editinfo" component={EditInfo} />
                    <Route path="/gamedetail" component={GameDetail} />

                    <Route render={() => (<Redirect to="/home/index" />)} />
                </Switch>
            </div>
        )
    }
}