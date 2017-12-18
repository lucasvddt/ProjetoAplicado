angular.module('primeiraApp').constant('consts', {
  appName: 'WalletApp',
  version: '',
  owner: '',
  year: '',
  site: '',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
