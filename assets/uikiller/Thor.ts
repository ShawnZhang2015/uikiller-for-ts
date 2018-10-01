const { ccclass, executeInEditMode } = cc._decorator;
@ccclass
@executeInEditMode
export default class Thor extends cc.Component {
    
    protected useController: Boolean = false;
    protected controllerName: String = '';

    _bindHammer: Boolean = false;
    $controller: Object = null;

    __preload() {
        this.bindHammer();
    }

    getOptions() {
        return {
            debug: false
        }
    }

    bindHammer() {
        if (this._bindHammer) {
            return;
        }
        this._bindHammer = true;

        let start = Date.now();
        let options = this.getOptions();
        uikiller.bindComponent(this, options);
       
        //关联逻辑控制器
        this.bindController();

        if (CC_DEBUG) {
            let duration = Date.now() - start;
            cc.log(`bindComponent ${this.node.name} duration ${duration}`);
        }
    }

    protected bindController() {
        //关联逻辑控制器
        if (this.useController) {
            let controllerName = this.controllerName || `${this.__classname__}Controller`;

            // //require同步方式：require会有红线
            let object = require(controllerName);
            this.$controller = new object.default();
            uikiller.bindNode(this.node, this.$controller);
        }
    }

    getChildNode(name): cc.Node {
        return this[name];
    }
}

window.Thor = Thor;