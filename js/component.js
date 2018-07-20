;(function() {
'use strict';

    angular.module('elementsApp').component('component', {
        bindings: {},
        controller: MyController,
        controllerAs: 'vm',
        templateUrl: 'js/component.html'
    });
    MyController.$inject = ['$scope'];

    function MyController($scope) {
        var vm = this;
        vm.val = 'Test';


        vm.$onInit = onInit;

        function onInit() {
            angular.element(document).find('custom-button').on('onAction', function(e) {
                vm.val = (e.detail % 2) === 0 ? 'Test' : 'Second';
                $scope.$apply();
            });
        }
    }
})();