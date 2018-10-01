import { controller } from './prefab/ItemController';

export default class Controller {

    _onButtonTouchEnd(sender, touchEvent) {
        controller.setData({value: Date.now()});
    }
}