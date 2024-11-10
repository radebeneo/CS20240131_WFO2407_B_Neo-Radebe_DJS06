// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. ForEach Basics
// Log each province and name to the console, then log each name with its matching province.
console.log("1. ForEach Basics:");
provinces.forEach((province, index) => console.log(province));
names.forEach((name, index) => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// 2. Uppercase Transformation
// Create a new array with all province names in uppercase.
console.log("\n2. Uppercase Transformation:");
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log(provincesUppercase);

// 3. Name Lengths
// Create an array containing the length of each name.
console.log("\n3. Name Lengths:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// 4. Sorting
// Sort the provinces alphabetically.
console.log("\n4. Sorting:");
const sortedProvinces = [...provinces].sort(); // Use spread to avoid mutating the original array
console.log(sortedProvinces);

// 5. Filtering Cape
// Filter out provinces containing the word "Cape" and count the remaining provinces.
console.log("\n5. Filtering Cape:");
const nonCapeProvinces = provinces.filter(province => !province.includes("Cape"));
console.log("Remaining provinces count:", nonCapeProvinces.length);
console.log(nonCapeProvinces);

// 6. Finding 'S'
// Create an array indicating whether each name contains the letter 'S'.
console.log("\n6. Finding 'S':");
const containsS = names.map(name => name.includes('S'));
console.log(containsS);

// 7. Creating Object Mapping
// Use reduce to create an object mapping each name to its respective province.
console.log("\n7. Creating Object Mapping:");
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// Advanced Exercises

// 1. Log Products
// Log each product name in the products array.
console.log("\nAdvanced 1. Log Products:");
products.forEach(product => console.log(product.product));

// 2. Filter by Name Length
// Filter products to only those with names of 5 or fewer characters.
console.log("\nAdvanced 2. Filter by Name Length:");
const shortNamedProducts = products.filter(product => product.product.length <= 5);
console.log(shortNamedProducts);

// 3. Price Manipulation
// Filter out products without valid prices, convert string prices to numbers, and calculate the total price.
console.log("\nAdvanced 3. Price Manipulation:");
const validPricedProducts = products
  .filter(product => product.price && !isNaN(product.price)) // Filter out invalid prices
  .map(product => ({ ...product, price: Number(product.price) })); // Convert string prices to numbers
const totalPrice = validPricedProducts.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price:", totalPrice);

// 4. Concatenate Product Names
// Concatenate all product names into a single string.
console.log("\nAdvanced 4. Concatenate Product Names:");
const concatenatedProductNames = products.reduce((acc, product) => acc + product.product, "");
console.log(concatenatedProductNames);

// 5. Find Extremes in Prices
// Identify the highest and lowest-priced products and log them in the format "Highest: X, Lowest: Y."
console.log("\nAdvanced 5. Find Extremes in Prices:");
const pricedProducts = validPricedProducts; // Using valid-priced products from above
const highestPriceProduct = pricedProducts.reduce((max, product) => product.price > max.price ? product : max);
const lowestPriceProduct = pricedProducts.reduce((min, product) => product.price < min.price ? product : min);
console.log(`Highest: ${highestPriceProduct.product}, Lowest: ${lowestPriceProduct.product}`);

// 6. Object Transformation
// Recreate the products array as an array of objects with keys 'name' and 'cost', maintaining original values.
console.log("\nAdvanced 6. Object Transformation:");
const transformedProducts = products.reduce((acc, { product, price }) => {
  acc.push({ name: product, cost: price });
  return acc;
}, []);
console.log(transformedProducts);
