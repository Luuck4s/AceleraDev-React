const promotions = ["SINGLE LOOK", "DOUBLE LOOK", "TRIPLE LOOK", "FULL LOOK"];

const getProducts = (ids, productsList) => {
  return productsList.filter((product) => ids.includes(product.id));
};

const getPromotion = (products) => {
  const category = products
    .map((product) => product.category)
    .filter((category, index, array) => array.indexOf(category) === index)
    .length;

  return promotions[category - 1];
};

const getPricePromotion = (promotions, promotion) =>
  promotions.filter((product) => product.looks.includes(promotion));

const getCart = (products, promotion) =>
  products.reduce(
    (cart, product) => {
      const { name, category, regularPrice, promotions } = product;

      const [promotionPrice] = getPricePromotion(promotions, promotion);

      cart.products.push({ name, category });
      cart.regularPrice += regularPrice;
      cart.price += promotionPrice ? promotionPrice.price : regularPrice;

      return cart;
    },
    {
      products: [],
      price: 0,
      regularPrice: 0,
    }
  );

function getShoppingCart(ids, productsList) {
  const products = getProducts(ids, productsList);
  const promotion = getPromotion(products);
  const cart = getCart(products, promotion);

  const discountValue = (cart.regularPrice - cart.price).toFixed(2);

  const discountPercent = `${(
    (discountValue / cart.regularPrice) *
    100
  ).toFixed(2)}%`;

  return {
    products: cart.products,
    promotion,
    totalPrice: cart.price.toFixed(2),
    discountValue: discountValue,
    discount: discountPercent,
  };
}

module.exports = { getShoppingCart };
