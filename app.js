class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class Interface {
    addProduct(Product) {
        const productList = document.getElementById("product_list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <b>Product: </b> ${Product.name}
                    <b>Price: </b> ${Product.price}
                    <b>Price: </b> ${Product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div> 
            </div>        
        `;
        productList.appendChild(element);
    }
    resetForm() {
        document.getElementById('product-form').reset();
    }
    deleteProduct(element) {
        if(element.name === "delete") {
            element.parentElement.parentElement.parentElement.remove();
            this.showMenssage('Deleted','danger')
        }
    }
    showMenssage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

document.getElementById('product-form').addEventListener('submit', function(e) { 
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const producto = new Product(name, price, year);

    const ui = new Interface();

    if (name === '' || price === '' || year === '') {
        return ui.showMenssage('Please complete fields', 'danger');
    }

    ui.addProduct(producto);
    ui.resetForm();
    ui.showMenssage('Product added successfully', 'success');


    e.preventDefault(e);
});

document.getElementById('product_list').addEventListener('click', function(e) {
    const ui = new Interface();
    ui.deleteProduct(e.target);

    e.preventDefault(e);
});