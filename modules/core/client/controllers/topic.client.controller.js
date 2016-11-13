'use strict';

angular.module('core').controller('TopicController', ['$scope', '$location', 'Authentication',
    function ($scope, $location, Authentication) {
        // Create a messages array
      $scope.messages = [
        {
          'position': 'for',
          'title': 'Popular results differ from Electoral results frequently.',
          'body': "In the current system, the electoral college's structure means that the president elect has lost the popular vote in 2 of the last 7 elections.",
          'sources':[{
            'text': 'Excerpted text from cited source showing statistics',
            'url': 'wwww.url-in-support.com'
          }],
          comments: [
            {
              'body': 'Here is an argument that refutes this argument',
              'sources': [{
                'url': 'wwww.rebuttalcite.org'
              }]
            }
          ],
          created: new Date()
        },
        {
          'position': 'against',
          'title': 'Elections need safeguards.',
          'body': 'The electoral college is an important safeguard between popular opinion and executive office.',
          'sources':[{
            'text': 'Excerpted text from cited source showing statistics',
            'url': 'wwww.url-in-support.com'
          }],
          comments: [
            {
              'body': 'Here is an argument that refutes this argument',
              'sources': [{
                'url': 'wwww.rebuttalcite.org'
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
        // Create a controller method for sending messages
      $scope.sendMessage = function () {
            // Create a new message object
        var message = {
          text: this.messageText
        };

            // Clear the message text
        this.messageText = '';
      };
    }
]);
