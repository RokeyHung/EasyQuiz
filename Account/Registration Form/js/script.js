const pwShowHide = document.querySelectorAll(".eye-icon")
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.querySelectorAll(".password");
        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.clickRegistraion = function () {
        var setEmail = $scope.emailInput;
        localStorage.setItem('fullname', 'John Doe');
        localStorage.setItem('email', setEmail);
        var getEmail = localStorage.getItem('email');
        console.log(getEmail);
        window.location.href = "profile.html";
    }  
})
app.directive('matchPassword', function () {
    return {
        require: 'ngModel',
        scope: {
            otherModelValue: '=matchPassword'
        },
        link: function (scope, element, attributes, ngModel) {
            ngModel.$validators.passwordMatch = function (modelValue) {
                return modelValue === scope.otherModelValue;
            };

            scope.$watch('otherModelValue', function () {
                ngModel.$validate();
            });
        }
    };
});