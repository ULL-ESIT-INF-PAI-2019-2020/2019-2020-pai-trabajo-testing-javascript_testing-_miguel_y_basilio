// Node Version

module.exports = {
  addClass: function(el, newClass) {
    if (el.className.indexOf(newClass) !== -1) {
      return;
    }

    if (el.className !== "") {
      // Ensure class names are separated by a space
      newClass = " " + newClass;
    }

    el.className += newClass;
  }
};