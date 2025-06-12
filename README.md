# api_node_farm


This project is a simple Node.js HTTP server built without any external frameworks, to demonstrate how routing, file handling, and templating work at a low level.

I used the built-in http, url, and fs modules. When a request is received, I parse the URL to get the pathname and query parameters. Based on the pathname, the server responds with either an overview page that dynamically loads product cards, or a detailed product page if an ID is provided.

The HTML templates are read from the file system, and I use a custom replaceTemplate function to inject product data into placeholders. If the route doesn’t match any known path, a 404 message is returned. This project helped me deeply understand routing logic and template rendering from scratch, without Express or other abstractions.

http://127.0.0.1:4000/overview

