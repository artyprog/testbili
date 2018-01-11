(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.MyComponent = factory());
}(this, (function () { 'use strict';

var Component = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('h1', [_vm._v("hello bddddb")]);
  }, staticRenderFns: [], _scopeId: 'data-v-1754c3f3',
  name: 'my-component'
};

var index = (function (Vue) { return Vue.component(Component.name, Component); });

return index;

})));
