function UserService(){
    this.sayHello = function (name) {
        return "Hello there " + name;
    }
}

function MainCtrl(UserService){
    this.items = [{
        name: '刘理想',
        id: 7297510
    },{
        name: '福宝',
        id: 0278916
    },{
        name: 'Wet Suit',
        id: 2389017
    },{
        name: 'Beach Towel',
        id: 1000983
    }];

    this.sayHello = function(name){
        UserService.sayHello(name);
    };
}

/**
* app Module
*
* App
*/
angular.module('app', [])
.service('User', UserService)
.controller('MainCtrl', MainCtrl)
