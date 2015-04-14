/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

/*
 * OPR Utility
 */
angular.module('zeppelinWebApp')
  .controller('LoginCtrl', function ($rootScope, $scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    $rootScope.nonAuth = true;

    $scope.login = function (form) {
      $scope.submitted = true;
      if (form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
          .then(function () {
            $rootScope.nonAuth = false;
            $location.path('/');
          })
          .catch(function (err) {
            $scope.errors.other = err.message;
          });
      }
    };
  });
