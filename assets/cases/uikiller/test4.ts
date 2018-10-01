import Thor from '../../uikiller/Thor';
const { ccclass } = cc._decorator;

@ccclass
export default class Test4 extends Thor {

    getOptions() {
        return {
            filter: (node) => {
                return node.$ % 2;
            }     
        }
    }
    
    onLoad () {
       
        for (let i = 1; i <= 8; i++) {
            let imageNode = this[`_image${i}`];
            if (imageNode.num) {
                imageNode.num.getComponent(cc.Label).string = i;        
            }
        }
    },
});
