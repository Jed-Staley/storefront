import productsData from '../../products.json';

export const loadProducts = () => {
  return productsData.map(product => ({
    name: product.name,
    description: product.description,
    image: product.image,
    price: product.price,
    categories: product.categories,
  }));
};

export const loadCategories = () => {
  const categories = new Set();
  productsData.forEach(product => {
    product.categories.forEach(category => categories.add(category));
  });
  return Array.from(categories).map(category => ({
    name: category,
    displayName: category,
  }));
};
