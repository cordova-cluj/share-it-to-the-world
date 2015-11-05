angular.module('starter.controllers', [])


.controller('WelcomeCtrl', function ($scope, $state) {
    $scope.googleSignIn = function () {
        $state.go('tab.dash');
    }
})

.controller('DashCtrl', function ($scope) { })

.controller('ChatsCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})

.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
})

.controller('PicturesCtrl', function ($scope) {

    $scope.index = 0;

    $scope.next = function () {
        $scope.index++;
        if ($scope.pictures.length <= $scope.index)
            $scope.index = 0;

        $scope.picture = $scope.pictures[$scope.index];
    }

    $scope.prev = function () {
        $scope.index--;
        if ($scope.index === -1)
            $scope.index = $scope.pictures.length - 1;
        $scope.picture = $scope.pictures[$scope.index];
    }

    $scope.picture = {
        src: "img/arnold.jpg",
        text: "Arnold"
    };

    $scope.pictures =
[
    {
        src: "img/arnold.jpg",
        text: "Arnold"
    },
    {
        src: "img/katherine.jpg",
        text: "Katherine"
    },
    {
        src: "img/ironMan.jpg",
        text: "Iron Man"
    }
];
});
