
import Thor from '../../uikiller/Thor';
const { ccclass } = cc._decorator;

@ccclass
export default class Test10 extends Thor {

    _onButtonTouchEnd() {
        this._item1.y -= 10;
        this._item2.y -= 10;
        this._item3.y -= 10;
    }
});
