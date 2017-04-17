// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput' ,'ngCordova','ion-gallery','ui.rCalendar','jett.ionic.filter.bar','ionic-letter-avatar','ion-datetime-picker','srfSocialSharing'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleDefault();
		}
	});
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider,ionGalleryConfigProvider) {
	$ionicConfigProvider.views.transition('none');
	// Turn off caching for demo simplicity's sake
	$ionicConfigProvider.views.maxCache(0);

	//$ionicConfigProvider.scrolling.jsScrolling(false);
	/* for image gallery*/
	ionGalleryConfigProvider.setGalleryConfig({
    action_label: 'Close',
    template_gallery: 'gallery.html',
    template_slider: 'slider.html',
    toggle: true,
    row_size: 3,
    fixed_row_size: true
  });
	
	// Turn off back button text
	$ionicConfigProvider.backButton.previousTitleText(true);
	

	$stateProvider.state('app', {
	url: '/app',
	abstract: true,
	templateUrl: 'templates/menu.html',
	controller: 'AppCtrl'
	})

	.state('login', {
		url: '/login',
		templateUrl: 'templates/login.html'
		// controller: 'LoginCtrl'
	})

	.state('institute', {
		abstract: true,
		url: '/institute',
		templateUrl: 'templates/institute/Home.html',
		controller : 'InstituteCtrl'
	})

	.state('institute.about',{
		url :'/about',
		views:{
			'about':{
				templateUrl:'templates/test.html',
				controller :'InstituteCtrl'
			}
		}
	})

	.state('institute.about1',{
		url :'/about1',
		views:{
			'about1':{
				templateUrl:'templates/test2.html',
				controller :'InstituteCtrl'
			}
		}
	})

	.state('institute.about2',{
		url :'/about2',
		views:{
			'about2':{
				templateUrl:'templates/test1.html',
				controller :'InstituteCtrl'
			}
		}
	})
	
	.state('instGallery',{
		url:'/gallery',
		templateUrl:'templates/institute/gallery.html',
		controller:'InstituteCtrl'
	})
	.state('app.Dashboard', {
    url: '/Dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/student/Dashboard.html',
        controller: 'CampusCtrl'
      }
    }
  })
	/// Added by gnbanamani
  .state('Calendar',{
	    url:'/Calendar',
	    templateUrl: "templates/calendar/calendar.html",
	    controller: 'CalendarDemoCtrl'
	  })
   .state('AddEvent',{
    url:'/AddEvent',
    templateUrl: "templates/calendar/addEvent.html",
    controller: 'DatepickerCtrl'
  })
  .state('ViewEvents',{
    url:'/ViewEvents',
    templateUrl: "templates/calendar/viewEvents.html",
    controller: 'LinkShareController as linkShareCtrl'
  })
  .state('AddEventEdit',{
    url:'/AddEventEdit',
    templateUrl: "templates/calendar/addEventEdit.html",
    controller: 'DatepickerCtrl'
  })
  .state('studAttndPerctgView',{
    url:'/studAttndPerctgView',
    templateUrl: "templates/attendance/studAttndPerctgView.html",
    controller: 'StdAttndCtrl'
  })
  .state('empAttndPertgView',{
    url:'/empAttndPertgView',
    templateUrl: "templates/attendance/empAttndPertgView.html",
    controller: 'EmpAttndCtrl'
  })
  .state('StudentAttendanceMarking',{
    cache:false,
    url:'/StudentAttendanceMarking',
    templateUrl: "templates/attendance/studAttndcMarking.html",
    controller: 'MainController'
  })
  .state('selectCourseView',{
    cache:false,
    url:'/selectCourseView',
    templateUrl: "templates/attendance/selectCourse.html",
    controller: 'selectCourseCtrl'
  })
  .state('selectBatchView',{
    url:'/selectBatchView',
    cache:false,
    templateUrl: "templates/attendance/selectBatch.html",
    controller: 'selectBatchCtrl'
  })

  // .state('app.Profile',{
  //   url: "/Profile",
  //   views: {
  //     'menuContent': {
  //        templateUrl: "templates/student/Home.html",
  //        controller: 'CampusCtrl'
  //     }
  //   }
  // })

  // .state('app.Profile.About', {
  //   url: '/About',
  //   views: {
  //     'about': {
  //       templateUrl: 'templates/student/about.html',
  //       controller: 'CampusCtrl'
  //     }
  //   }
  // })

  // .state('app.Profile.Parents', {
  //   url: '/Parents',
  //   views: {
  //     'parents-details': {
  //       templateUrl: 'templates/student/ParentDetail.html',
  //       controller: 'CampusCtrl'
  //     }
  //   }
  // })

  // .state('app.Profile.Additional', {
  //   url: '/Additional',
  //   views: {
  //     'adddetails': {
  //       templateUrl:'templates/student/AdditionalDetail.html',
  //       controller :'CampusCtrl'
  //     }
  //   }
  // })

  // .state('app.Dashboard.Payment',{
  //   url: "/Payment-Detail",
  //   views: {
  //     'tab-Payment': {
  //       templateUrl: "templates/student/Payment.html",
  //       controller: 'CampusCtrl'
  //     }
  //   }
  // })

  // theres code//
	// .state('app.activity',{
	// 	url: '/activity',
	// 	views: {
	// 		'menuContent': {
	// 				templateUrl: 'templates/activity.html',
	// 				controller: 'ActivityCtrl'
	// 		},
	// 		'fabContent': {
	// 				template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
	// 				controller: function ($timeout) {
	// 						$timeout(function () {
	// 								document.getElementById('fab-activity').classList.toggle('on');
	// 						}, 200);
	// 				}
	// 		}
	// 	}
	// })

	// .state('app.friends', {
	// 	url: '/friends',
	// 	views: {
	// 		'menuContent': {
	// 				templateUrl: 'templates/friends.html',
	// 				controller: 'FriendsCtrl'
	// 		},
	// 		'fabContent': {
	// 				template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
	// 				controller: function ($timeout) {
	// 						$timeout(function () {
	// 								document.getElementById('fab-friends').classList.toggle('on');
	// 						}, 900);
	// 				}
	// 		}
	// 	}
	// })

	// .state('app.gallery', {
	// 	url: '/gallery',
	// 	views: {
	// 		'menuContent': {
	// 				templateUrl: 'templates/gallery.html',
	// 				controller: 'GalleryCtrl'
	// 		},
	// 		'fabContent': {
	// 				template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
	// 				controller: function ($timeout) {
	// 						$timeout(function () {
	// 								document.getElementById('fab-gallery').classList.toggle('on');
	// 						}, 600);
	// 				}
	// 		}
	// 	}
	// })
	// .state('app.profile', {
	// 	url: '/profile',
	// 	views: {
	// 		'menuContent': {
	// 				templateUrl: 'templates/profile.html',
	// 				controller: 'ProfileCtrl'
	// 		},
	// 		'fabContent': {
	// 				template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
	// 				controller: function ($timeout) {
	// 						$timeout(function () {
	// 								document.getElementById('fab-profile').classList.toggle('on');
	// 						}, 800);
	// 				}
	// 		}
	// 	}
	// })
	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/institute/about');
});
