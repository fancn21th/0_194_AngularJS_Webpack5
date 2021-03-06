import template from "./hello.html";
import "./hello.css";

export default function (ngModule) {
  ngModule.directive("hello", function () {
    return {
      restrict: "E",
      scope: {},
      template,
      controllerAs: "vm",
      controller: function () {
        const vm = this;
        vm.foo = "Hello Angular 1.2";
      },
    };
  });
}
