var { Task } = require("zenaton");

module.exports = Task("GetPriceFromProviderA", {
  construct(item) {
    this.item = item;
    this.provider = "A";
  },
  handle(done) {
    var provider = this.provider;
    console.log("Contacting provider " + provider + " to get the price...");
    setTimeout( function() {
      var price = 84;
      console.log("Price from Provider " + provider + " is: " + price);

      done(null, price);
    }, 1500);
  }
});
