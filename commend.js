app.controller("multiple_choice", function ($scope, $http, $routeParams, $interval) {
    $scope.cacCauhoi = [];
    $scope.idMH = $routeParams.idMH;
    $scope.tenMH = $routeParams.tenMH;
    document.title = $scope.tenMH + " | EasyQuiz";
    $http.get("./Subject/db/Quizs/" + $scope.idMH + ".js").then(
        function (d) {
            $scope.cacCauhoi = d.data;

            $scope.randomItems = [];
            while ($scope.randomItems.length < 10) {
                var item = $scope.cacCauhoi[Math.floor(Math.random() * $scope.cacCauhoi.length)];
                if ($scope.randomItems.indexOf(item) === -1) {
                    $scope.randomItems.push(item);
                }

            }
            $scope.cacCauhoi = $scope.randomItems;
            console.log($scope.cacCauhoi);
        }
    );


    $scope.pageSize = 1;
    $scope.start = 0;

    $scope.clickActive = function (index) {
        $scope.start = index;
    }

    $scope.score = 0;
    $scope.nextPage = function () {
        if ($scope.start < $scope.cacCauhoi.length - $scope.pageSize) {
            // Lấy ra object câu hỏi
            $scope.currentQuestion = $scope.cacCauhoi[$scope.start];
            console.log($scope.currentQuestion);
            // Lấy đáp án đã chọn
            var selectedAnswerId = $("input[name='" + $scope.currentQuestion.Id + "']:checked").val();
            console.log(selectedAnswerId);
            // Nếu đáp án đúng, tăng điểm lên 1
            console.log($scope.currentQuestion.AnswerId);
            if (selectedAnswerId == $scope.currentQuestion.AnswerId) {
                $scope.score++;
            }
            $scope.start += $scope.pageSize;
        } else {
            // $scope.start = 0
        }
    }
    $scope.prevPage = function () {
        if ($scope.start > 0) {
            $scope.start -= $scope.pageSize;
        } else {
            pageCount = Math.ceil($scope.cacCauhoi.length / $scope.pageSize);
            $scope.start = (pageCount - 1) * $scope.pageSize;
        }
    }
    $scope.firstPage = function () { $scope.start = 0 }
    $scope.lastPage = function () {
        pageCount = Math.ceil($scope.cacCauhoi.length / $scope.pageSize);
        $scope.start = (pageCount - 1) * $scope.pageSize;
    }


    var countDownDate = new Date().getTime() + (20 * 60 * 1000); // Lấy thời gian hiện tại và cộng thêm 20 phút

    var countdown = $interval(function () {
        var now = new Date().getTime(); // Lấy thời gian hiện tại

        var distance = countDownDate - now; // Tính khoảng cách thời gian giữa hiện tại và thời gian kết thúc

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); // Tính phút còn lại
        var seconds = Math.floor((distance % (1000 * 60)) / 1000); // Tính giây còn lại

        $scope.countdown = minutes + "m " + seconds + "s"; // Hiển thị thời gian còn lại

        if (distance < 0) {
            $interval.cancel(countdown); // Hủy bỏ bộ đếm khi đếm ngược kết thúc
            $scope.countdown = "Hết giờ"; // Hiển thị thông báo hết giờ
        }
    }, 1000); // Đếm ngược mỗi giây

});