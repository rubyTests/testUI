// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material', 'ionMdInput' ,'ngCordova','ion-gallery','ui.rCalendar','jett.ionic.filter.bar','ionic-letter-avatar','ion-datetime-picker','srfSocialSharing','easypiechart','ngFileUpload'])

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
	$ionicConfigProvider.tabs.position('bottom');

	//$ionicConfigProvider.scrolling.jsScrolling(false);
	/* for image gallery*/
		ionGalleryConfigProvider.setGalleryConfig({
      action_label: 'Close',
      toggle: false,
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
		templateUrl: 'templates/login.html',
		// controller: 'LoginCtrl'
		controller: 'InstituteCtrl'
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
				templateUrl:'templates/institute/About.html',
				controller :'InstituteCtrl'
			}
		}
	})

	.state('institute.academic',{
		url :'/academic',
		views:{
			'academic':{
				templateUrl:'templates/institute/Academic.html',
				controller :'InstituteCtrl'
			}
		}
	})

	.state('institute.contact',{
		url :'/contact',
		views:{
			'contact':{
				templateUrl:'templates/institute/Contact.html',
				controller :'InstituteCtrl'
			}
		}
	})
	
	.state('instGallery',{
		url:'/gallery',
		templateUrl:'templates/institute/instgallery.html',
		controller:'InstituteCtrl as linkShareCtrl'
	})

	/*login and register */

	.state('AdmissionLogin',{
		url:'/admission-login',
		templateUrl:'templates/institute/AdmissionLogin.html',
		controller :'InstituteCtrl'
	})

	.state('AdmissionRegister',{
		url:'/admission-register',
		templateUrl:'templates/institute/AdmissionRegister.html',
		controller :'InstituteCtrl'
	})

	.state('VerifyOTP',{
		url:'/otp-verification',
		templateUrl:'templates/institute/verifyOTP.html',
		controller :'InstituteCtrl'
	})

	.state('CourseSelection',{
		url:'/course-selection',
		templateUrl:'templates/institute/Application/CourseSelection.html',
		controller:'InstituteCtrl'
	})

	.state('PersonalDetail',{
		url:'/personal-detail',
		templateUrl:'templates/institute/Application/PersonalDetail.html',
		controller:'InstituteCtrl'
	})

	.state('ContactDetail',{
		url:'/contact-detail',
		templateUrl:'templates/institute/Application/ContactDetail.html',
		controller :'InstituteCtrl'
	})

	.state('EducationDetail',{
		url:'/education-detail',
		templateUrl:'templates/institute/Application/EducationDetail.html',
		controller:'InstituteCtrl'
	})

	.state('ParentDetail',{
		url:'/parent-detail',
		templateUrl:'templates/institute/Application/ParentsDetail.html',
		controller:'InstituteCtrl'
	})
	
	.state('Coures',{
		url:'/coures',
		templateUrl:'templates/institute/Coures.html',
		controller :'InstituteCtrl'
	})

	.state('Career',{
		url:'/career',
		templateUrl:'templates/institute/Career.html',
		controller :'InstituteCtrl'
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
  .state('app.Dashboard.Home', {
    url: '/Home',
    views: {
      'Home': {
        templateUrl: 'templates/student/Home.html',
        controller: 'CampusCtrl'
      }
    }
  })
  .state('app.Dashboard.Notification', {
    url: '/Notification',
    views: {
      'Notification': {
        templateUrl: 'templates/student/Notification.html',
        controller: 'CampusCtrl'
      }
    }
  })
  .state('app.Dashboard.Message', {
    url: '/Message',
    views: {
      'Message': {
        templateUrl: 'templates/student/Message.html',
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
  .state('ExamView',{
    url:'/ExamView',
    cache:false,
    templateUrl: "templates/marklist/examView.html",
    controller: 'marklistCtrl'
  })
  .state('MarkList',{
    url:'/MarkList',
    templateUrl: "templates/marklist/markList.html",
    controller: 'marklistCtrl'
  })
  .state('selectCourseMarklist',{
    cache:false,
    url:'/selectCourseMarklist',
    templateUrl: "templates/marklist/courseMarkList.html",
    controller: 'selectCourseCtrl'
  })
  .state('selectBatchMarklist',{
    url:'/selectBatchMarklist',
    cache:false,
    templateUrl: "templates/marklist/batchMarkList.html",
    controller: 'selectBatchCtrl'
  })
   .state('SelectStudentMarklist',{
    url:'/SelectStudentMarklist',
    templateUrl: "templates/marklist/studentMarkList.html",
    controller: 'MainController'
  })
   .state('TimeTable',{
    url:'/TimeTable',
    templateUrl: "templates/timetable/timeTable.html",
    controller: 'MainController'
  })
   .state('Repository',{
    url:'/Repository',
    templateUrl: "templates/repository/repositoryView.html"
    // controller: 'repositoryCtrl'
  })
  .state('AddPost',{
    url:'/AddPost',
    templateUrl: "templates/repository/addPost.html",
    controller: 'repositoryCtrl'
  })
  .state('AssignmentCourse',{
    url:'/AssignmentCourse',
    templateUrl: "templates/assignment/addAssignment.html",
    controller: 'assignmentCourseCtrl'
  })
  .state('AssignmentBatch',{
    url:'/AssignmentBatch',
    templateUrl: "templates/assignment/assignmentBatch.html",
    controller: 'assignmentBatchCtrl'
  })
  .state('AssignmentSubjects',{
    url:'/AssignmentSubjects',
    templateUrl: "templates/assignment/assignmentSubjects.html",
    controller: 'assignmentBatchCtrl'
  })

  .state('Profile',{
  	url:'/Profile',
  	templateUrl:'templates/student/Profile.html',
  	controller:'CampusCtrl'
  })
  .state('Profile.About',{
  	url:'/About',
  	views:{
  		'AboutDetail':{
  			templateUrl:'templates/student/about.html',
  			controller:'CampusCtrl'
  		}
  	}
  })
  .state('Profile.Parents',{
  	url:'/Parents',
  	views:{
  		'ParentsDetail':{
  			templateUrl:'templates/student/Parents.html',
  			controller:'CampusCtrl'
  		}
  	}
  })
  .state('Profile.Parents.Father',{
  	url:'/Father',
  	views:{
  		'Father-Detail':{
  			templateUrl:'templates/student/FatherDetail.html',
  			controller:'CampusCtrl'
  		}
  	}
  })
  .state('Profile.Parents.Mother',{
  	url:'/Mother',
  	views:{
  		'Mother-Detail':{
  			templateUrl:'templates/student/MotherDetail.html',
  			controller:'CampusCtrl'
  		}
  	}
  })
  .state('Profile.Parents.Guardian',{
  	url:'/Guardian',
  	views:{
  		'Guardian-Detail':{
  			templateUrl:'templates/student/GuardianDetail.html',
  			controller:'CampusCtrl'
  		}
  	}
  })
  .state('Profile.Additional',{
  	url:'/Additional',
  	views:{
  		'AdditionalDetail':{
  			templateUrl:'templates/student/Additional.html',
  			controller:'CampusCtrl'
  		}
  	}
  })

  

	
	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/institute/about');
});
