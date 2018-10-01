import Thor from '../../uikiller/Thor';
const { ccclass } = cc._decorator;

@ccclass
export default class Test8 extends Thor {
    onLoad() {
        cc.log(this.name, ',onLoad');
        this._item1.$Item.string = '显示这个';
        this.scheduleOnce(() => {
            this._item1.active = true;
        }, 2);
    }
};
