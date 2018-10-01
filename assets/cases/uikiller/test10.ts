
import Thor from '../../uikiller/Thor';
const { ccclass } = cc._decorator;

@ccclass
export default class Test10 extends Thor {

    //启用控制器脚本
    useController = true;

    _onButtonTouchEnd() {
        this._item1.y -= 10;
        this._item2.y -= 10;
        this._item3.y -= 10;
    }
});
