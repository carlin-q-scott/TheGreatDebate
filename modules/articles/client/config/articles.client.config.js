'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Categories',
      state: 'categories',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'Politics',
      state: 'categories.politics'
    });
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'Science',
      state: 'categories.science'
    });
    Menus.addSubMenuItem('topbar', 'categories', {
      title: 'Social Issues',
      state: 'categories.social'
    });
  }
]);
