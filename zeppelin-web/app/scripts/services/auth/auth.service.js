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
  .factory('Auth', function ($location, $rootScope, $http, User, $cookieStore, $q) {
    var currentUser = $cookieStore.get('token') ? User.get() : {};

    return {
      /*
       * Log in user to website
       */
      login: function(user, callback) {
        var deferred = $q.defer();
        //authorization here

        return deferred.promise;
      },

      /*
       * Log user out
       */
      logout: function () {
        $cookieStore.remove('token');
        currentUser = {};
      },

      getCurrentUser: function () {
        return currentUser;
      },

      isLoggedIn: function() {
        return currentUser.hasOwnProperty('role');
      },

      isLoggedInAsync: function(callback) {
        if (currentUser.hasOwnProperty('$promise')) {
          currentUser.$promise.then(function () {
            if (typeof(callback) == 'function') {
              callback(true);
            }
          }).catch(function () {
            if (typeof(callback) == 'function') {
              callback(false);
            }
          });
        } else {
          if (typeof(callback) == 'function') {
            callback(currentUser.hasOwnProperty('role'));
          }
        }
      },

      getToken: function () {
        return $cookieStore.get('token');
      }

    }



  });
