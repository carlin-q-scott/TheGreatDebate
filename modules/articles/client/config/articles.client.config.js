'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Topics',
      state: 'topics',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'topics', {
      title: 'Politics',
      state: 'topics.politics'
    });
    Menus.addSubMenuItem('topbar', 'topics', {
      title: 'Science',
      state: 'topics.science'
    });
    Menus.addSubMenuItem('topbar', 'topics', {
      title: 'Social Issues',
      state: 'topics.social'
    });
  }
]);
