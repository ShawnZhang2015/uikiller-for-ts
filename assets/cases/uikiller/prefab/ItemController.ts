
class ItemController {
    views: Array<any> = [];
    name: 'ItemController';

    onRegister(item) {
        this.views.push(item);
        item.string = '0';
    }

    setData(data) {
        this.views.forEach(item => {
            item.string = data.value;
        });
    }
}

let controller: ItemController = new ItemController();

export { controller };