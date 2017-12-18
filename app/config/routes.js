angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('billingCycle', {
      url: "/billingCycles?page",
      templateUrl: "billingCycle/tabs.html"
    })
    .state('investimentos', {
    url: "/investimentos",
    templateUrl: "investimentos/investimentos.html"
  })

    $urlRouterProvider.otherwise('/dashboard')
}])
