'use strict';

var attrName = "data-scroll-position";
var index = {
  install: function install (Vue) {
    Vue.directive("keep-scroll", {
      bind: function bind (el, binding, vnode) {
        el.addEventListener("scroll", function (e) {
          e = e.target;
          e.setAttribute(attrName, e.scrollLeft + "-" + e.scrollTop);
        }, false);
        var restore = function (el, attr) {
          attr = attr.split("-");
          el.scrollLeft = attr[0];
          el.scrollTop = attr[1];
        };
        // https://github.com/mark-hahn/vue-keep-scroll/pull/4
        vnode.context.$on("hook:activated", function () {
          var refs = el.parentElement.querySelectorAll(("[" + attrName + "]"));
          [].forEach.call(refs, function (ref) {
            var attr = ref.getAttribute(attrName);
            attr && restore(ref, attr);
          });
        });
      }
    });
  }
};

module.exports = index;
