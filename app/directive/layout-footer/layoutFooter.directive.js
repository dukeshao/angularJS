angular.module('app').directive('layoutFooter', function LayoutHeader() {
  return {
    restrict: 'EA',
    replace: true,
    scope: {},
    templateUrl: 'directive/layout-footer/footer.html',
  };
});
