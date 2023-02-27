var app = angular.module('myApp', ["ngRoute"]);
app.controller("myCtrl", function ($scope) {
    $scope.listProducts = products;
})
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "View/AppContainer.html" })
        .when("/danhsachsanpham", { templateUrl: "View/AppContainer.html" })
        .when("/xemgiohang", { templateUrl: "View/ShoppingCarts.html" })
});
var cart = [];
var productIncart = {}
app.directive('appcontainer', [
    function () {
        return {
            restrict: "E",
            templateUrl: "Components/AppContainer.html",
            scope: {
                sanpham: "=",
            },
            controller: function ($scope) {
                document.title = "Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website"
                $scope.formatNumber = function (num) {
                    // 123456789 => 123.456.789
                    if (num === null || num === undefined) {
                        return '';
                    }
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
                $scope.formatAmount = function (num) {
                    if (num < 1000) {
                        return num.toString();
                    }
                    const numStr = num.toString();
                    const len = numStr.length;
                    const kIndex = len - 3;
                    const numFormat = numStr.slice(0, kIndex) + "k" + numStr.slice(kIndex, len - 2);
                    return numFormat;
                }

                $scope.AddCart = function (product) {
                    var index = cart.findIndex(idSP => (idSP.id == product.id))
                    if (index >= 0) {
                        cart[index].soluong++;
                        console.log(cart);
                    } else {
                        productIncart = { ...product, soluong: 1 }
                        cart.push(productIncart);
                        console.log(cart);
                    }
                }

            }
        }
    }
]);
app.directive('giohang', [
    function () {
        return {
            restrict: "E",
            templateUrl: "Components/ShoppingCarts.html",
            scope: {
                giohang: '='
            },
            controller: function ($scope) {
                document.title = "Giỏ hàng";
                $scope.carts = cart;
                console.log($scope.carts);
                $scope.formatNumber = function (num) {
                    // 123456789 => 123.456.789
                    if (num === null || num === undefined) {
                        return '';
                    }
                    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
                $scope.formatAmount = function (num) {
                    if (num < 1000) {
                        return num.toString();
                    }
                    const numStr = num.toString();
                    const len = numStr.length;
                    const kIndex = len - 3;
                    const numFormat = numStr.slice(0, kIndex) + "k" + numStr.slice(kIndex, len - 2);
                    return numFormat;
                }

                $scope.tongsoluong = function () {
                    var tsl = 0;
                    for (var i = 0; i < $scope.carts.length; i++) {
                        tsl += $scope.carts[i].soluong;
                    }
                    return tsl;
                }
                $scope.tongtienthanhtoan = function () {
                    var tt = 0;
                    for (var i = 0; i < $scope.carts.length; i++) {
                        tt += $scope.carts[i].soluong * $scope.carts[i].priceOld * ((100 - $scope.carts[i].SaleOff) / 100);
                    }
                    return tt;
                }
                $scope.xoa = function (index) {
                    $scope.carts.splice(index, 1);
                }
                $scope.tangsoluong = function (index) {
                    $scope.carts[index].soluong++;
                }
                $scope.giamsoluong = function (index) {
                    $scope.carts[index].soluong--;
                }
            }
        }
    }
]);
app.component('headertop', {
    templateUrl: "Components/Header.html"
});
app.component('footerend', {
    templateUrl: "Components/Footer.html"
});