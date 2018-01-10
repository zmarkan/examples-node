var { Wait, Workflow } = require("zenaton");
var SendActivateEmail1 = require("./SendActivateEmail1");
var SendActivateEmail2 = require("./SendActivateEmail2");
var LogActivateUser = require("./LogActivateUser");

module.exports = Workflow("ActivationWorkflow", {
  handle: function() {
    var event;

    new SendActivateEmail1(this.email).dispatch();

    event = new Wait("UserActivatedEvent").seconds(4).execute();
    
    if (event) {
      return new LogActivateUser(1).execute();
    }

    new SendActivateEmail2(this.email).dispatch();

    event = new Wait("UserActivatedEvent").seconds(4).execute();
    if (event) {
      return new LogActivateUser(2).execute();
    }

    new LogActivateUser(3).execute();
  },
  id: function() {
    return this.email;
  }
});
