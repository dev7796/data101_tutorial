﻿/*
 DataCamp Light
 Version 1.1.0
 */
! function() {
  "use strict";

  function e() {
    function e(e) {
      return null !== location.hostname.match(e)
    }

    function t(e) {
      for (var t = 0; t < i.length; t++) i[t].getElementsByTagName("a")[0].href = e
    }

    function a() {
      for (; i[0];) i[0].parentNode.removeChild(i[0])
    }
    var i = document.getElementsByClassName("powered-by-datacamp");
    e("r-bloggers.com") ? t("https://www.datacamp.com?tap_a=5644-dce66f&tap_s=10907-287229") : e("datacamp.com") && a()
  }

  function t(e) {
    e.className += " datacamp-exercise";
    if ("height" in e.dataset && "auto" !== e.dataset.height) {
      var t = Math.round(e.dataset.height);
      if (isNaN(t)) console.log("Invalid height attribute.");
      else if (t >= p) {
        e.style.height = t + "px";
        var a = "height:" + t + "px;";
        e.setAttribute("style", a)
      } else console.log("The height attribute should be >= " + p + ".")
    }
    "encoded" in e.dataset && (e.innerHTML = '<div class="encoded">' + e.innerHTML.trim() + "</div>"), e.innerHTML += '<!--[if lt IE 10]><p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]--><div ng-controller="NormalExerciseController"><div class="dcl-exercise-area" resize-layout=""><div class="dcl-left-pane" ng-class="{\'dcl-mini\': useMiniLayout}"><ul class="dcl-content--tab"><li><a href="" ng-click="activateLeftTab(\'usercode\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'usercode\')}">script.{{backendConfig.extension}}</a></li><li ng-show="solutionTabShown"><a class="dcl-animation--flash" href="" ng-click="activateLeftTab(\'solution\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'solution\')}">solution.{{backendConfig.extension}}</a></li><li><a href="" ng-show="useMiniLayout" ng-click="activateLeftTab(\'console\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'console\')}">{{backendConfig.console}}</a></li><li><a href="" ng-show="useMiniLayout && plotTabShown" ng-click="activateLeftTab(\'plots\')" ng-class="{\'dcl-active\': isActiveLeftTab(\'plots\')}">Plots</a></li></ul><div class="dcl-content--tab-body"><div code-editor="" control="editor" ng-show="isActiveLeftTab(\'usercode\') || isActiveLeftTab(\'solution\')" ng-model="userCode"></div><div ng-show="isActiveLeftTab(\'console\')" class="dcl-console-target dcl-console-mini-target"></div><div ng-show="isActiveLeftTab(\'plots\')" class="dcl-plots-mini-target"></div><div growl="" ng-show="!isActiveLeftTab(\'plots\')" inline="true" limit-messages="1" sct-feedback="" class="sct-feedback-container"></div></div></div><div ng-show="!useMiniLayout" class="dcl-right-pane clearfix"><a class="dcl-github-link dcl-no-link-style" href="https://github.com/datacamp/datacamp-light" uib-tooltip="View DataCamp Light on Github" tooltip-placement="left" target="_blank"><div class="dcl-github-logo"></div></a><ul class="dcl-content--tab"><li><a href="" ng-click="activateRightTab(\'console\')" ng-class="{\'dcl-active\': isActiveRightTab(\'console\')}">{{backendConfig.console}}</a></li><li><a ng-show="plotTabShown" href="" ng-click="activateRightTab(\'plots\')" ng-class="{\'dcl-active\': isActiveRightTab(\'plots\')}">Plots</a></li></ul><div class="dcl-content--tab-body"><div ng-show="isActiveRightTab(\'console\')" control="console" class="dcl-console-target dcl-console-full-target"><console class="dcl-console"></console></div><div ng-show="isActiveRightTab(\'plots\')" class="dcl-plots-full-target"><plots-container class="dcl-plots-container"></plots-container></div></div></div></div><action-panel exercise="exercise"></action-panel></div>';
    var i = '<div class="powered-by-datacamp"></div>',
      o = document.createElement("div");
    o.innerHTML = i;
    var c = o.firstChild;
    e.parentNode.insertBefore(c, e.nextSibling)
  }

  function a(e) {
    var t = document.createElement("script");
    t.type = "text/javascript", t.src = e, t.charset = "utf-8", l("body", t)
  }

  function i(e) {
    var t = document.createElement("link");
    t.type = "text/css", t.rel = "stylesheet", t.href = e, l("head", t)
  }

  function o() {
    var a = document.querySelectorAll("[data-datacamp-exercise]");
    0 === a.length && console.log("No DataCamp Light exercises found. Make sure the exercise has the 'data-datacamp-exercise' attribute.");
    for (var i = 0; i < a.length; i++) ! function(e) {
      var i = a[e];
      (" " + i.className + " ").indexOf(" datacamp-exercise ") > -1 || t(i)
    }(i);
    e()
  }

  function c() {
    o(), a(g + "script-8fa338a2dc.js")
  }

  function n() {
    o(), window.bootstrapDCLightExercises()
  }

  function s() {
    d();
    for (var e = [g + "style-8c2f2e17fe.css", "https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"], t = 0; t < e.length; t++) i(e[t])
  }

  function l(e, t) {
    document.getElementsByTagName(e)[0].appendChild(t)
  }

  function d() {
    var e = document.createElement("style");
    e.type = "text/css", l("head", e);
    var t = 'div.datacamp-exercise {  margin: 0;  border: 1px solid #d5eaef;  background: none;  position: relative;  min-height: 300px;  color: black;  box-shadow: none;}div[data-datacamp-exercise] {  margin: 0;  border: 1px solid #d5eaef;  background: #fff url(https://cdn.datacamp.com/spinner.gif) no-repeat center center !important;  background-size: auto 80px !important;  position: relative;  min-height: 300px;  color: transparent;  box-shadow: none;}div[data-datacamp-exercise] > code,div[data-datacamp-exercise] > div,div[data-datacamp-exercise] > p {  display: none;}div.powered-by-datacamp {  margin: 5px 0;  display: block;}div.powered-by-datacamp a {@import "https://fonts.googleapis.com/css?family=Open+Sans";  font-family: "Open Sans", sans-serif;  text-decoration: none;  border: 0;  color: #3ac;  font-size: 20px;}div.powered-by-datacamp .logo {  vertical-align: sub;  display: inline-block;  background: url("https://cdn.datacamp.com/dcl/assets/images/logo_blue.svg") no-repeat center center;  background-size: contain;  height: 27px;  width: 23px;  margin-left: 4px;}';
    e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t
  }

  function r() {
    return "function" == typeof window.initAddedDCLightExercises
  }
  var p = 300,
    g = "https://cdn.datacamp.com/dcl/";
  r() ? console.log("Warning: tried to load DataCamp Light multiple times.") : (window.initAddedDCLightExercises = n, s(), "complete" == document.readyState || "loaded" == document.readyState || "interactive" == document.readyState ? c() : document.addEventListener("DOMContentLoaded", c))
}();