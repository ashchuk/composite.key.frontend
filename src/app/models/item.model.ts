export class ItemModel {
    name: string;
    value: number | string;
}

export function toItemModel(obj: any): ItemModel[] {
    let arr = new Array<ItemModel>();
    for (var key in obj)
        if (key != 'name')
            arr.push(<ItemModel>{ name: key, value: obj[key] });
    return arr;
}