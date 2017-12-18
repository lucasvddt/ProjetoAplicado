angular.module('primeiraApp').controller('investimentoCtrl', [
  '$scope',
  investimentoController
])

function investimentoController($scope){
  $scope.valor ;
  $scope.meses;
  $scope.valorPoupanca ;
  $scope.calcular = function(){
    $scope.valorPoupanca = $scope.valor * ( Math.pow(1.0046 , $scope.meses)) ;
    $scope.valorSelic= $scope.valor * ( Math.pow(1.00462 , $scope.meses)) ;
    $scope.valorCdb = $scope.valor * ( Math.pow(1.008176 , $scope.meses)) ;

$scope.myChartObject = {};
$scope.myChartObject.type = "PieChart";
$scope.teste = 5 ;
$scope.onions = [
    {v: "Poupança"},
    {v: $scope.valorPoupanca},
];

$scope.myChartObject.data = {"cols": [
    {id: "t", label: "Topping", type: "string"},
    {id: "s", label: "Slices", type: "number"}
], "rows": [
    {c: $scope.onions},

    {c: [
        {v: "Tesouro Direto"},
        {v: $scope.valorSelic},
    ]},
    {c: [
        {v: "CDB"},
        {v: $scope.valorCdb },
    ]}
]};

$scope.myChartObject.options = {
    'title': 'Gráfico de Investimentos'
 };

 };
}
