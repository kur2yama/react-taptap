


import store from "./redux/store";

import ReactDOM, { render } from "react-dom"
const rootEle = document.getElementById("app")
import { IndexView } from "./views"
import { Provider } from "react-redux"

const hotRender = () => {
  render(
    <Provider store={store}>
      <IndexView />
    </Provider>,
    rootEle)
}
hotRender();

store.subscribe(hotRender)