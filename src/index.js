import "@babel/polyfill";
import angular from "angular";
import hello from "./components/hello";

const ngModule = angular.module("app", []);

console.log(ngModule);

hello(ngModule);
