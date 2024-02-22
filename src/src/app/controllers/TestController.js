const Invoice = require("../models/Invoice");
const Staff = require("../models/Staff");
const AdminService = require("../service/AdminService");
const ProductService = require("../service/ProductService");

class TestController {
  async index(req, res) {
    const productIdToCheck = "655920ba7c1367e43f57c513"; 
    try {
      const invoiceWithProduct = await Invoice.find(
        { 'products.product': productIdToCheck },
        { _id: 1, purchaseDate: 1 }
      );

      if (invoiceWithProduct) {
        res.json(invoiceWithProduct);
      } else {
        console.log('Product not found in any invoice.');
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}



module.exports = new TestController();
