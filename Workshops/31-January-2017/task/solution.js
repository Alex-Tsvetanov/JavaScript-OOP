function solve () 
{
	'use strict';
	function getProduct(productType, name, price) {
		return {
			productType: productType,
			name: name,
			price: Number (price)
		};
	}

	function getShoppingCart() {
		let products = [];

		return {
			products: products,
			add: function (product) { 
				products.push (product); 
				return this;
			},
			remove: function (product) { 
				for (let i = 0 ; i < products.length ; i += 1) {
					 if (
							 products [i].productType === product.productType &&
							 products [i].name === product.name &&
							 products [i].price === product.price
						)
					 {
						products.splice (i, 1);
						return this; 
					 }
				}
				throw new Error ("Element Not Found");
			},
			showCost: function () {
				let sum = 0;
				for (let i = 0 ; i < products.length ; i += 1) {
					sum += products [i].price;
				}
				return sum;
			},
			showProductTypes: function () {
				var u = {}, a = [];
				for(var i = 0, l = products.length ; i < l ; i += 1) {
					if(u.hasOwnProperty (products [i].productType)) {
						continue;
					}
					a.push (products [i].productType);
					u [products [i].productType] = 1;
				}
				a.sort ();
				return a;
			},
			getInfo: function () {
				return function (products) {
					const namesMap = {}, 
					      unique_names = [];

					for (const p of products) {
						if (!namesMap[p.name]) {
							namesMap[p.name] = { name: p.name, quantity: 0, totalPrice: 0 };
						}
					
						namesMap[p.name].quantity += 1;
						namesMap[p.name].totalPrice += p.price;
					}

					const sortedProducts = Object.keys(namesMap).sort().map(key => namesMap[key]),
					      totalPrice = sortedProducts.reduce((sum, next) => sum + next.totalPrice, 0);

					return {products: sortedProducts, totalPrice: totalPrice};

				} (products);
			}
		};
	}

	return {
		getProduct: getProduct,
		getShoppingCart: getShoppingCart
	};
}

module.exports = solve();
