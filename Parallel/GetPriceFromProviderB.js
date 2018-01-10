var { Task } = require("zenaton");

module.exports = Task("GetPriceFromProviderB", {
  construct(item) {
    this.item = item;
    this.provider = "B";
  },
  handle(done) {
    var provider = this.provider;
    console.log("Contacting provider " + provider + " to get the price...");
    setTimeout( function() {
      var price = 82;
      console.log("Price from Provider " + provider + " is: " + price);

      done(null, price);
    }, 2500);
  }
});
