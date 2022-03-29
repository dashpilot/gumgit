const fs = require('fs');
var AdmZip = require("adm-zip");
var zip = new AdmZip();
const Gumnode = require("gumnode");

const dir = "./dist/";

export default async function handler(request, response) {
  
response.end('hi');
 
  
}
