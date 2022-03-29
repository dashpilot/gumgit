const fs = require('fs');
var AdmZip = require("adm-zip");
var zip = new AdmZip();
const Gumnode = require("gumnode");

const dir = "./dist/";

export default async function handler(request, response) {
  
const api = new Gumnode({
  access_token: process.env.GR_TOKEN
});
  
  /*
  
  api
  .getUserSales({ request.query.sale_id })
  .then((res) => {
  
    console.log('sale verified');
    console.log(res);

    var filenames = fs.readdirSync(dir);
    filenames.forEach(file => {
      console.log(file);
      zip.addLocalFile(dir+file);
    });

    var buffer = zip.toBuffer();

    response.setHeader("Content-Type", "application/octet-stream");
    response.setHeader("Content-Disposition", "inline;filename=myfile.zip");
    response.end(buffer);
  
})
  .catch((res) => console.log("Error:", res.message));
  */
  
res.end('ok')
  
 
  
}
