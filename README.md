
# 🍇🍓 NODEjs FARM 🍋🍒

A beginner-friendly Server Side Rendering project built with Node.js, demonstrating how to serve dynamic HTML content without using any framework like Express.js.

🛠️ Features
	•	🌱 Pure Node.js server (no Express, no external framework)
	•	🔁 Dynamic HTML rendering
	•	🧩 Custom template engine (replaceTemplate.js)
	•	🍏 Clean and colourful front-end design
	•	📦 JSON-based product catalog

 📌 How It Works
	•	Access /overview to see all available products.
	•	Click on any product’s FOR DETAILS button to navigate to /product?id=x.
	•	Backend reads the requested product based on ID and dynamically inserts the data into the product.html template.
 
 Visit http://127.0.0.1:4000/overview in your browser.
 
 Learnings

This project is great for understanding the fundamentals of:
	•	HTTP server creation
	•	URL routing and query parsing
	•	File system operations (fs.readFileSync)
	•	Template rendering without a library
	•	Separation of concerns via modules


🧠 Future Improvements
	•	Convert to Express-based version
	•	Add cart functionality
	•	Use EJS or another templating engine
	•	Add REST API endpoints
	•	Add frontend interactivity using JavaScript








![nodejsfarm](https://github.com/user-attachments/assets/38c19ee8-a67a-41fa-9718-2cbaff97d326)
# api_node_farm


This project is a simple Node.js HTTP server built without any external frameworks, to demonstrate how routing, file handling, and templating work at a low level.

I used the built-in http, url, and fs modules. When a request is received, I parse the URL to get the pathname and query parameters. Based on the pathname, the server responds with either an overview page that dynamically loads product cards, or a detailed product page if an ID is provided.

The HTML templates are read from the file system, and I use a custom replaceTemplate function to inject product data into placeholders. If the route doesn’t match any known path, a 404 message is returned. This project helped me deeply understand routing logic and template rendering from scratch, without Express or other abstractions.

http://127.0.0.1:4000/overview

