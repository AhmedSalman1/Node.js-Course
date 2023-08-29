class InvoiceItem {
	private id: string;
	private desc: string;
	private qty: number;
	private unitPrice: number;

	constructor(id: string, desc: string, qty: number, unitPrice: number) {
		this.id = id;
		this.desc = desc;
		this.qty = qty;
		this.unitPrice = unitPrice;
	}

	setId(id: string): void {
		this.id = id;
	}

	setDesc(desc: string): void {
		this.desc = desc;
	}

	setQty(qty: number): void {
		this.qty = qty;
	}

	setUnitPrice(unitPrice: number): void {
		this.unitPrice = unitPrice;
	}

	getId(): string {
		return this.id;
	}

	getDesc(): string {
		return this.desc;
	}

	getQty(): number {
		return this.qty;
	}

	getUnitPrice(): number {
		return this.unitPrice;
	}

	getTotal(): number {
		return this.qty * this.unitPrice;
	}

	toString(): string {
		return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${this.qty},unitPrice=${this.unitPrice}]`;
	}
}

const inv1 = new InvoiceItem("A101", "Pen Red", 888, 0.08);
console.log(inv1.toString());

inv1.setQty(999);
inv1.setUnitPrice(0.99);
console.log(inv1.toString());
console.log(`id is: ${inv1.getId()}`);
console.log(`desc is: ${inv1.getDesc()}`);
console.log(`qty is: ${inv1.getQty()}`);
console.log(`unitPrice is: ${inv1.getUnitPrice()}`);

console.log(`The total is: ${inv1.getTotal().toFixed(2)}`);
