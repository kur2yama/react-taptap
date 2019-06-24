import { Carousel, Radio } from 'antd';
import "./index.scss"
import Swipe from "@/scripts/components/swipe"
const Item = Swipe.item;
export class Guide extends Component {
    state = {
        imgs: [
            require("@/assets/images/index1.jpg"),
            require("@/assets/images/index2.jpg"),
            require("@/assets/images/index3.jpg"),
            require("@/assets/images/index4.png"),
        ]
    };



    gohome(i) {
        const { history } = this.props;
        if (i == 3) {
            history.push("/home/index")
        }
    }
    render() {
        const { imgs } = this.state;




        return (


            <Swipe id="guide" options={{ loop: false }}>
                {
                    imgs.map((item, i) => {
                        return (
                            <Item key={i}>
                                <img src={item} alt="" className="g-img" onClick={() => this.gohome(i)} />
                            </Item>
                        )

                    })
                }
            </Swipe>

        );
    }
}