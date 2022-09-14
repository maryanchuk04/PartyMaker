export class SupplierService {
    url = "https://localhost:7118/api/Supplier"

    async insertNewSupplier(data) {
        return await fetch(this.url + `/AddNewSupplier`, {
            method: "post",
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data)
        });
    }
}