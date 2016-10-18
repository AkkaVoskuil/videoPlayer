'use strict';

var app = angular.module('videoClientApp');

app.factory('toastrFactory', function () {

    return {
        error: function (text) {
            toastr.warning('We are currently unable to recover the videos for you, please try again later.')
        }
    };
});
