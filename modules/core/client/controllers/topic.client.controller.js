'use strict';

angular.module('core').controller('TopicController', ['$scope', '$location', 'Authentication', '$modal',
    function ($scope, $location, Authentication, $modal) {
      $scope.user = {

      };

        // Create a messages array
        $scope.messages = [
            {
                'position': 'for',
                'title': 'Popular results differ from Electoral results frequently.',
                'body': "In the current system, the electoral college's structure means that the president elect has lost the popular vote in 2 of the last 7 elections.",
                'sources':[{
                    'text': "New York Times election results page",
                    'url': "www.nytimes.com/ article/election-results-2000s"
                }],
                comments: [
                    {
                        'body': 'This also occurs when looking at state legislative regions as well.',
                        'sources': [{
                            'url': 'www.washingtonpost.com/ articles/gerrymandering-in-2012-election-cost-votes'
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
                    "text": "George Washington's letter portrayed the Electoral College as protecting the electorate against disaster",
                    "url": "en.wikipedia.org/article/george-washington-letters"
                }],
                comments: [
                    {
                        'body': 'James Madison portrayed the Electoral College differently: as a simple component in a democratic system.',
                        'sources': [{
                            'url': 'en.wikipedia.org/ article/james-madison-letters'
                        }]
                    }
                ],
                created: new Date()
            }
        ];

      $scope.join = function() {
        var joinModal = $modal.open({
          animation: true,
          templateUrl: 'modules/core/client/views/join.modal.client.view.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            position: function() {
              return (Math.random() > .5) ? "for" : "against";
            }
          }
        });

        joinModal.result.then(function (position) {
          $scope.user.joined = true;
          $scope.user.position = position;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

        $scope.addPoint = function(pointType) {
            if (pointType === 'for') {
                $scope.addingForPoint = true;
            } else if (pointType === 'against') {
                $scope.addingAgainstPoint = true;
            }
        };

        $scope.submitPoint = function() {
            // Add to messages
            var newMessage = {
                "position": $scope.addingForPoint ? 'for' : 'against',
                "title": $scope.tldr,
                "body": $scope.body,
                "sources":[{
                    "text": $scope.citation,
                    "url": "wwww.url-in-support.com"
                }],
                comments: [],
                created: new Date()
            };
            $scope.messages.push(newMessage);

            $scope.clearFields();
        };

        $scope.clearFields = function() {
            $scope.addingForPoint = false;
            $scope.addingAgainstPoint = false;
            $scope.tldr = '';
            $scope.body = '';
            $scope.citation = '';
            $scope.citationExplanation = '';
        };

        $scope.canSubmit = function() {
            return $scope.tldr && $scope.body && $scope.citation;
        };

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
