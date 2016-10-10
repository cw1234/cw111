(function() {
  'use strict';

  angular
    .module('createHomework')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
