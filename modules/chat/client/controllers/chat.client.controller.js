'use strict';

// Create the 'chat' controller
angular.module('chat').controller('ChatController', ['$scope', '$location', 'Authentication', 'Socket',
  function ($scope, $location, Authentication, Socket) {
    // Create a messages array
    $scope.messages = [
      {
        "position": "for",
        "title": "Popular results differ from Electoral results frequently.",
        "body": "In the current system, the electoral college's structure means that the president elect has lost the popular vote in 2 of the last 7 elections.",
        "sources":[{
          "text": "Excerpted text from cited source showing statistics",
          "url": "wwww.url-in-support.com"
        }],
        comments: [
          {
            "body": "Here is an argument that refutes this argument",
            "sources": [{
              "url": "wwww.rebuttalcite.org"
            }]
          }
        ],
        created: new Date()
      },
      {
        "position": "against",
        "title": "Elections need safeguards.",
        "body": "The electoral college is an important safeguard between popular opinion and executive office.",
        "sources":[{
          "text": "Excerpted text from cited source showing statistics",
          "url": "wwww.url-in-support.com"
        }],
        comments: [
          {
            "body": "Here is an argument that refutes this argument",
            "sources": [{
              "url": "wwww.rebuttalcite.org"
            }]
          }
        ],
        created: new Date()
      }
    ];

    // If user is not signed in then redirect back home
    if (!Authentication.user) {
      $location.path('/');
    }

    // Make sure the Socket is connected
    if (!Socket.socket) {
      Socket.connect();
    }

    // Add an event listener to the 'chatMessage' event
    Socket.on('chatMessage', function (message) {
      $scope.messages.unshift(message);
    });

    // Create a controller method for sending messages
    $scope.sendMessage = function () {
      // Create a new message object
      var message = {
        text: this.messageText
      };

      // Emit a 'chatMessage' message event
      Socket.emit('chatMessage', message);

      // Clear the message text
      this.messageText = '';
    };

    // Remove the event listener when the controller instance is destroyed
    $scope.$on('$destroy', function () {
      Socket.removeListener('chatMessage');
    });
  }
]);
