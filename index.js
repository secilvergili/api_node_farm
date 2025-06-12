

const http = require("http");
const url = require("url");
const fs = require("fs");
const replaceTemplate = require("./modules/replaceTemplate");

// önce şablonları okuyalım ki yazı verisi olarak kullanıcıya gönderebilelim.
let overviewHTML = fs.readFileSync("./templates/overview.html", "utf-8");
let detailTemplate = fs.readFileSync("./templates/product.html", "utf-8");
let cardTemplate = fs.readFileSync("./templates/card.html", "utf-8");
let jsonData = fs.readFileSync("./dev-data/data.json", "utf-8");
const data = JSON.parse(jsonData);

const server = http.createServer((request, response) => {
  // url = product?id=0,1,2,...
  // pathname= "/product"
  // const query = { id: "0" };
  const {pathname, query} = url.parse(request.url, true)
  console.log("Request received.", pathname);

  switch (pathname) {

    case "/overview":
     const cards = data.map(item => replaceTemplate(cardTemplate, item));
      finalOverview = overviewHTML.replace(/{%PRODUCT_CARDS%}/g, cards.join(""));
      return response.end(finalOverview);
      
    case "/product":
    const item = data.find(item => item.id == query.id);
    const output = replaceTemplate(detailTemplate, item);
      return response.end(output);

      case "/favicon.ico":
        return response.end();

    default:
      return response.end("<h1>404 <h2> Undefined Path</h2> Not Found</h1>");
  }

 
});
// oluşturulan server değişkeni ile sunucuyu başlatalım.
server.listen(4000, "127.0.0.1", () => {
  console.log("Server is listening on port 4000");
});