/*! (c) Andrea Giammarchi */
function withLevel0(type) {'use strict';
  var _type = '_' + type;
  Object.defineProperty(
    HTMLElement.prototype,
    'on' + type,
    {
      configurable: true,
      get: function() {
        return this[_type] || null;
      },
      set: function(value) {
        var self = this;
        if (self[_type])
          self.removeEventListener(type, self[_type], false);
        switch (typeof value) {
          case "function":
            self.addEventListener(type, value, false);
          case "object":
            self[_type] = value;
            break;
          default:
            self[_type] = null;
        }
      }
    }
  );
}
module.exports = withLevel0;
