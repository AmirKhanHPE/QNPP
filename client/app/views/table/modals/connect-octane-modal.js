(function() {
  'use strict';

  var tableModule = angular.module('opp.table');

  tableModule.controller('ModalOctaneConnectCtrl', ['$scope', '$uibModalInstance', 'connectSvc', 'CONSTS', 'toastSvc', function($scope, $uibModalInstance, connectSvc, CONSTS, toastSvc) {

    var storageKey = 'OctanePokerPlanning:serverName';



    function init() {
      $scope.showGenerate = CONSTS.ENV_MODE !== CONSTS.ENV_MODE_OPTIONS.PRODUCTION;
      var serverName = getFromStorage();
      if (serverName && serverName !== '') {
        $scope.serverURL = serverName;
        $scope.apiKey = 'qnplanningpoker_vqzn14zmo6z6niqlzyovk7m2k';
        $scope.apiSecret = '=bc9aaeaa3f34efcaC';
      }
      $scope.connecting = false;
    }


   $scope.sendAPI = function() {
     $scope.connecting = true;
     $scope.users = [];
     $scope.selectedUser = undefined;
     $scope.workSpaces = [];
     $scope.selectedWorkSpace = undefined;

     connectSvc.connectOctane($scope.apiKey, $scope.apiSecret, $scope.serverURL).then(function(status){
       $scope.connecting = false;
       saveToStorage($scope.serverURL);
       $scope.selectedWorkSpace = {'name' : 'loading..'};
       connectSvc.getWorkspaces().then(function(result) {
         $scope.selectedWorkSpace = undefined;
         toastSvc.showSuccessToast("You have been connected successfully to the Octane Server");
         $scope.workSpaces = result.data;
         $scope.selectedWorkSpace = result.data[0];
         selectUsers($scope.selectedWorkSpace.id);
       });
      }, function(reason) {
       $scope.connecting = false;
       toastSvc.showErrorToast("failed to connect to octane server");
     });
    };

    $scope.isLoading = function() {
      return ($scope.selectedWorkSpace !== undefined && $scope.selectedWorkSpace.name === 'loading..');
    }

    $scope.isUserLoading = function() {
      return ($scope.selectedUser !== undefined && $scope.selectedUser.name === 'loading..');
    }

    $scope.generate = function() {
      $scope.serverURL = 'https://mqast001pngx.saas.hpe.com';
      $scope.apiKey = 'qnplanningpoker_vqzn14zmo6z6niqlzyovk7m2k';
      $scope.apiSecret = '=bc9aaeaa3f34efcaC';
    }

    $scope.connect = function() {
      connectSvc.connectToWorkspace($scope.selectedWorkSpace.id, $scope.selectedUser.id).then(function(result){
        
        $uibModalInstance.close($scope.selectedUser.name);
      });

    }

    function saveToStorage(serverName) {
      localStorage.setItem(storageKey,serverName);
    }

    function getFromStorage() {
      return localStorage.getItem(storageKey);
    }

    function selectUsers(workSpaceId) {
      $scope.selectedUser = {'name' : 'loading..'};
      connectSvc.getUsers($scope.selectedWorkSpace.id).then(function(result) {
        $scope.selectedUser = undefined;
        $scope.users = result.data;
        if ($scope.users.length > 0) {
          $scope.selectedUser = $scope.users[0];
        }

      });
    }

    $scope.search = function(event) {
      event.preventDefault();
      event.stopPropagation();
    };

    $scope.setWorkSpace = function(data) {
      $scope.selectedWorkSpace = data;
      selectUsers( $scope.selectedWorkSpace.id);
      $scope.queryWorkspace = '';
    };

    $scope.setUserName = function(data) {
      $scope.selectedUser = data;
      $scope.queryUser = '';
    };



    init();

  }]);


})();