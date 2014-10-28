/*  JQMini:  */ var $, __hasProp = {}.hasOwnProperty, __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };$ = function(id) {__extends($, HTMLElement);function $(el) {var key, val, _ref;_ref = el[0] === "#" ? document.getElementById(el.slice(1)) : document.querySelector(el);for (key in _ref) {if (!__hasProp.call(_ref, key)) continue;val = _ref[key];this[key] = val;this.el=el}}$.prototype.toggleClass = function(t) {if(this.classList){this.classList.toggle(t)}else{var n=this.className.split(" ");var r=n.indexOf(t);if(r>=0){n.splice(r,1)}else{n.push(t)}this.className=n.join(" ")};};$.prototype.click = function(f) {this.addEventListener.call(this.el.value,"click",f);}return new $(id);}



/* Example:

var nav = $("#nav-toggle");

nav.click(function(){
    nav.toggleClass("active");
    $("#menu").toggleClass("active");
});

*/