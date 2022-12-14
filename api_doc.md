
 - list of products
http://localhost:8400/products

 - list of concerns 
http://localhost:8400/concerns_list

 - list of ingridients
http://localhost:8400/ingredients_list

- list of categories
http://localhost:8400/categories_list

 - list of product types
http://localhost:8400/product_type_list

 - list of products wrt category id
http://localhost:8400/categories/1

 - list of products wrt product id
http://localhost:8400/products/2

 - list of products wrt concern id
http://localhost:8400/concern/2

 - list of products wrt ingredient id
http://localhost:8400/ingredients/2

 - list of products wrt category and cost(filter)
http://localhost:8400/categories/1?min_price=500&max_price=1000

 - list of products wrt ingredient and cost(filter)
http://localhost:8400/ingredients/2?min_price=200&max_price=300

 - list of products wrt concern and cost(filter)
http://localhost:8400/concern/2?min_price=200&max_price=300

 - list of products wrt category and product type id(filter)
http://localhost:8400/categories/1?product_type_id=2

 - list of products wrt ingredient and product type id(filter)
http://localhost:8400/ingredients/2?product_type_id=4

 - list of products wrt concern and product type id(filter)
http://localhost:8400/concern/2?product_type_id=3

 - list of products wrt max price and min price(filter)
http://localhost:8400/price?min_price=100&max_price=300

 - list of products wrt category and cost and product type id(filter)
http://localhost:8400/categories/1?min_price=500&max_price=1000&product_type_id=2

 - list of products wrt ingredient and cost and product type id(filter)
http://localhost:8400/ingredients/2?min_price=100&max_price=500&product_type_id=1

 - list of products wrt concern and cost and product type id(filter)
http://localhost:8400/concern/2?min_price=200&max_price=300&product_type_id=1
