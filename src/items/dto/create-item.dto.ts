

export class CreateItemDto implements ProductInterface {

    id: number;
    name: string;
    productDescrip?: string;
    stock: number

    constructor(data: Partial<CreateItemDto>) {
        console.log('constructor');
        this.id = data.id;
        this.name = data.name;
        this.stock = data.stock;
    }

}
