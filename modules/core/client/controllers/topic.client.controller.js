'use strict';

angular.module('core').controller('TopicController',
    function ($scope, $location, Authentication, $modal, $log) {
      $scope.user = window.user;
      $scope.user.points = 42;

      // Create a messages array
      $scope.messages = [
          {
              'position': 'for',
              'title': 'Popular results differ from Electoral results frequently.',
              'body': "In the current system, the electoral college's structure means that the president elect has lost the popular vote in 2 of the last 7 elections.",
              'sources':[{
                  'text': "New York Times election results page",
                  'url': "http://www.nytimes.com/article/election-results-2000s"
              }],
              comments: [
                  {
                      'commentType': 'agreement',
                      'body': 'This also occurs when looking at state legislative regions as well.',
                      'sources': [{
                          'url': 'http://www.washingtonpost.com/articles/gerrymandering-in-2012-election-cost-votes'
                      }]
                  }
              ],
              user: {
                username: "locke",
                points: 700
              },
              reactions: [
                {
                  value: 'good-citation',
                  reason: 'thanks for citing empirical data!'
                }
              ],
              created: new Date()
          },
          {
              'position': 'for',
              'title': 'The Electoral College gives some states an unfair advantage.',
              'body': "Less populous states can be overrepresented due to the amount of time it takes to update a state's electoral college votes.",
              'sources':[{
                  'text': "New York Times election results page",
                  'url': "http://www.nytimes.com/article/election-results-2000s"
              }],
              comments: [
                  {
                      'commentType': 'agreement',
                      'body': 'This also occurs when looking at state legislative regions as well.',
                      'sources': [{
                          'url': 'http://www.washingtonpost.com/articles/gerrymandering-in-2012-election-cost-votes'
                      }]
                  }
              ],
              user: {
                  username: "locke",
                  points: 700
              },
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
                      'commentType': 'rebuttal',
                      'body': 'James Madison portrayed the Electoral College differently: as a simple component in a democratic system.',
                      'sources': [{
                          'url': 'en.wikipedia.org/article/james-madison-letters'
                      }]
                  }
              ],
              user: {
                username: "demosthenes",
                points: 800
              },
              reactions: [
                {
                  value: 'low-quality-source',
                  reason: 'wikipedia is great and all but anyone can edit an article'
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

              return (Math.random() > 0.5) ? "for" : "against";
            },
            modalData: function() {
              return {};
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

      $scope.addPoint = function(position) {
        var pointModal = $modal.open({
          animation: true,
          templateUrl: 'modules/core/client/views/point.modal.client.view.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg',
          resolve: {
            position: function() {
              return position;
            },
            modalData: function() {
              return {};
            }
          }
        });

        pointModal.result.then(function (point) {
          var newMessage = {
              "position": position,
              "title": point.tldr,
              "body": point.body,
              "sources":[{
                  "text": point.citation,
                  "url": "http://www.url-in-support.com"
              }],
              user: point.user,
              comments: [],
              created: new Date()
          };

          console.log("adding a point", newMessage);
          $scope.messages.push(newMessage);
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      };

        $scope.submitComment = function() {
            // Add to comments
            var newComment = {
                'commentType': 'agreement',
                'body': $scope.commentBody,
                'sources':[{
                    'text': $scope.citationExplanation,
                    'url': $scope.commentCitation
                }],
                created: new Date()
            };
            $scope.messages[0].comments.push(newComment);

            $scope.clearFields();
            $scope.addingForComment = false;
        };

        $scope.clearFields = function() {
            $scope.addingForPoint = false;
            $scope.addingAgainstPoint = false;
            $scope.tldr = '';
            $scope.commentBody = '';
            $scope.commentCitation = '';
            $scope.citationExplanation = '';
        };

        $scope.canSubmitComment = function() {
            return $scope.commentBody && $scope.commentCitation;
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

        $scope.addComment = function(forOrAgainst) {
            if (forOrAgainst === 'against') {
                $scope.addingAgainstComment = true;
            } else {
                $scope.addingForComment = true;
            }

        };
        
        $scope.addReaction = function (message){
            $modal.open({
                controller: 'ReactionsCtrl',
                templateUrl: 'modules/core/client/views/chat.client.reaction.view.html'
            })
            .result
            .then(function(reaction){
                if (!message.reactions) message.reactions = [];
                message.reactions.push(reaction);
            });
        };
    }
);
