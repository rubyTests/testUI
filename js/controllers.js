/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
  var template =  '<ion-popover-view>' +
                  '   <ion-header-bar>' +
                  '       <h1 class="title">My Popover Title</h1>' +
                  '   </ion-header-bar>' +
                  '   <ion-content class="padding">' +
                  '       My Popover Contents' +
                  '   </ion-content>' +
                  '</ion-popover-view>';
  $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
  });

  //custom prevent effect while scroll
  
  $scope.onDrag=function(){
    var data=document.querySelector('.ink-ripple');
    console.log(data === null);
    if (data!==null) {
      data.className="ink-ripple:not"
      console.log(data,"data");
    }
  }
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('InstituteCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$ionicLoading','$cordovaCamera','$cordovaDialogs','$filter',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$ionicLoading,$cordovaCamera,$cordovaDialogs,$filter){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });

  $scope.items = [
  {
    src:'img/Gallery/1.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'img/Gallery/2.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'img/Gallery/3.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'img/Gallery/4.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'img/Gallery/5.png',
    // thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
  }
  ];
  $scope.WindowBack=function(){
    window.location.href="../www/index.html#/institute/about";
  }
  $scope.HistoryBack=function(){
   window.history.back(); 
  }
  $scope.loading = function() {
    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });
  };
  /*File Upload via camera and gallery*/
  $scope.Pickimage="https://cdn1.iconfinder.com/data/icons/smallicons-controls/32/614322-up-512.png";
  $scope.Upload=function(){
    $cordovaDialogs.confirm('Choose your option', 'Upload Receipt', ['Camera','Gallery'])
    .then(function(Selectoption) {
      if(Selectoption==1){
      /*Camera upload*/
        var options = {
          quality: 100,
          // for base64
          // destinationType: Camera.DestinationType.DATA_URL,
          //normal
          destinationType: Camera.DestinationType.FILE_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          targetWidth: 1024,
          targetHeight: 1024,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
          // allowEdit: true,
          // encodingType: Camera.EncodingType.JPEG,
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
          $scope.Pickimage=imageData;
          // $scope.Pickimage="data:image/jpeg;base64," + imageData;
        }, function(err) {
        });
      }else if(Selectoption==2){
        var options = {
          quality: 100,
          destinationType: Camera.DestinationType.FILE_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
          targetWidth: 1024,
          targetHeight: 1024,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false,
          correctOrientation:true
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
          // $scope.Pickimage="data:image/jpeg;base64," + imageData;
          $scope.Pickimage=imageData;
        }, function(err) {
          // error
        });
      }
    });
  }
  /*Course detail array*/
  $scope.groups = [
  { Deptname: 'Mechanical Engineering',iconURL: "http://ionicframework.com/img/docs/venkman.jpg",items: [{ courseName: 'Mechanical Engineering'},{courseName: 'Automobile Engineering'},{courseName:'Aerospace Engineering'},{courseName:'Mechatronics'}]},
    { Deptname: 'Electrical and Electronics Engineering',iconURL: "http://ionicframework.com/img/docs/venkman.jpg",items: [{ courseName: 'Electronics & Communication Engineering'},{ courseName: 'Telecommunication Engineering'},{ courseName: 'Electrical and Electronics Engineering'},{ courseName: 'Electronics & Instrumentation Engineering'},{courseName:'Instrumentation & Control Engineering'}]},
    {Deptname: 'Computing Engineering',iconURL: "http://ionicframework.com/img/docs/venkman.jpg",items: [{ courseName: 'Computer Science Engineering'},{ courseName: 'Information Technology'},{ courseName: 'Software Engineering'}]},
    {Deptname: 'Basic Sciences',iconURL: "http://ionicframework.com/img/docs/venkman.jpg",items: [{ courseName: 'Mathematics'},{ courseName: 'Physics'},{ courseName: 'Chemistry'}]},
    {Deptname: 'Bio - Engineering',iconURL: "http://ionicframework.com/img/docs/venkman.jpg",items: [{ courseName: 'Chemical Engineering'},{ courseName: 'Biotechnology'},{ courseName: 'Biomedical Engineering'},{courseName:'Genetic Engineering'},{courseName:'Food Process Engineering'}]}
  ];
  $scope.Career=[
    {jobTitle:'Project Officer',workst:'Infotech',salary:'Rs. 20,000/- Rs. 40,000/'},
    {jobTitle:'Junior Research Fellow',workst:'CTS',salary:'Rs. 35,000/- Rs. 70,000/'},
    {jobTitle:'Junior Research Fellow',workst:'TCS, Vellore .',salary:'Rs. 40,000/- Rs. 80,000/'},
    {jobTitle:'Asst Manager',workst:'wipro,',salary:'Rs. 40,000/- Rs. 80,000/'}
  ];
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    // $ionicScrollDelegate.resize();
  }
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  }
  /*login page*/
  $scope.inputType="password";
  $scope.activeicons=false;
  $scope.notactiveicons=true;
  $scope.showpass=function(){
    $scope.inputType="text";
    $scope.activeicons=true;
    $scope.notactiveicons=false;
  }
  $scope.hidepass=function(){
    $scope.inputType="password";
    $scope.activeicons=false;
    $scope.notactiveicons=true;
  }
  /*register page*/
  /*email and phone validation*/
  // var date = new Date();
  // $scope.dateofbirth = $filter('date')(new Date(), 'dd/MM/yyyy');
  $scope.Personal={};
  $scope.getDob=function(){
    $scope.dateofbirth = $filter('date')($scope.Personal.dateValue,'dd/MM/yyyy');
  }

  $scope.Education={};
  $scope.getYOC=function() {
   $scope.YearofComp=$filter('date')($scope.Education.dateValue,'dd/MM/yyyy'); 
  }
  // prevent effect while scroll
  $scope.onDrag=function(){
    var data=document.querySelector('.ink-ripple');
    console.log(data === null);
    if (data!==null) {
      data.className="ink-ripple:not"
      console.log(data,"data");
    }
  }
  // $scope.activetab=1;
  //   $scope.changeTab=function(tabid) {
  //   $scope.activetab=tabid;
  // }
  // $scope.viewtabcontent=function(tabindex){
  //   console.log(tabindex,'tabindex');
  //   if ($scope.activetab==tabindex) {
  //     return true;
  //   }else{
  //     return false;
  //   }
  // };

  $scope.onDrag=function(){
    var data=document.querySelector('.ink-ripple');
    console.log(data === null);
    if (data!==null) {
      data.className="ink-ripple:not"
      console.log(data,"data");
    }
  }
}])

.controller('CampusCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$ionicTabsDelegate', 
  '$ionicSlideBoxDelegate','$ionicSideMenuDelegate','$ionicScrollDelegate','$ionicLoading', function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$ionicTabsDelegate,$ionicSlideBoxDelegate,$ionicSideMenuDelegate,$ionicScrollDelegate,$ionicLoading) {
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.onSwipeLeft=function(){
    var currentTabIndex=$ionicTabsDelegate.selectedIndex();
    if(currentTabIndex >= 0){
      $ionicTabsDelegate.select(currentTabIndex+1);
    }
  }
  $scope.onSwipeRight=function(){    
   var currentTabIndex=$ionicTabsDelegate.selectedIndex();
    if(currentTabIndex >= 0){
      $ionicTabsDelegate.select(currentTabIndex-1);
    }
  }
  $scope.activeSlide = 0;

  $scope.slideChanged = function(index) {
    console.log(index,'slideChanged');
    $ionicTabsDelegate.select(index);
  };

  $scope.setSlide = function(index) {
    $ionicSlideBoxDelegate.slide(index);
  };
  $scope.GoBack=function(){
   window.history.back(); 
  }
    $scope.onDrag=function(){
    var data=document.querySelector('.ink-ripple');
    console.log(data === null);
    if (data!==null) {
      data.className="ink-ripple:not"
      console.log(data,"data");
    }
  }
  $scope.loading = function() {
    $ionicLoading.show({
      template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
    });
  };
  // $scope.hidetab=true;
  // $scope.addclass=false;
  // $scope.hideTabbar=function () {
  //   var myEl = angular.element( document.querySelectorAll( '.tabs' ) );
  //   myEl.addClass('alpha');
  //   var daaa=document.querySelectorAll('.alpha');
  //   daaa[1].style.top='0px';
  //   $scope.hidetab=false;
  //   $scope.addclass=true;
  // }
  // $scope.showTabbar=function(){
  //   var myEl = angular.element( document.querySelectorAll( '.tabs' ) );
  //   myEl.addClass('alpha');
  //   var daaa=document.querySelectorAll('.alpha');
  //   daaa[1].style.top='44px';
  //  $scope.hidetab=true; 
  //  $scope.addclass=false;
  // }
  // $scope.bgClass='';
  // $scope.activeSlide=0;
  // $scope.slideChanged=function(index){
  //   if(index==0){
  //     var data=document.querySelector('.slider');
  //     data.className="slider firstSilde";
  //     $scope.bgClass="BgSilde1";
  //   }
  //   else if(index==1){
  //     var data=document.querySelector('.slider');
  //     data.className="slider secondSilde";
  //     $scope.bgClass="BgSilde2";
  //   }else if(index==2){
  //     var data=document.querySelector('.slider');
  //     data.className="slider thirdSilde";
  //     $scope.bgClass="BgSilde2";
  //   }
  // }
  // $scope.slideChanged($scope.activeSlide);
  // $scope.enableSlide = function() {   
  //   $ionicSlideBoxDelegate.enableSlide(true);
  // }
  // $scope.toggleScroll=true;
  // $scope.RightenableSlide = function() {   
  //   $ionicSlideBoxDelegate.enableSlide(false);
  //   $scope.toggleScroll=false;
  // }  
}])

// directive for prevent effect while scroll

.directive('customDrag',function(){
  return function($scope,element,attribute) {
    element.bind('drag',function(){
    var data=document.querySelector('.ink-ripple');
      console.log(data === null);
      if (data!==null) {
        data.className="ink-ripple:not"
        console.log(data,"data");
      }
    });
  }
})





.controller('CalendarDemoCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$filter',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$filter){
  'use strict';
  $scope.calendar = {};
   $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.onDrag=function(){
    var data=document.querySelector('.ink-ripple');
    console.log(data === null);
    if (data!==null) {
      data.className="ink-ripple:not"
      console.log(data,"data");
    }
  }
  $scope.init = function () {
     $scope.calendar.eventSource = createRandomEvents();
    //console.log($scope.calendar.eventSource,"eventSource");
  }
  $scope.goback=function(){
    window.history.back();
  }
  $scope.changeMode = function (mode) {
    $scope.calendar.mode = mode;
  };
  $scope.onEventSelected = function (event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  };

  $scope.onViewTitleChanged = function (title) {
    console.log(title,"title");
    $scope.viewTitle = title;      
  };

  $scope.today = function () {
    $scope.calendar.currentDate = new Date();
  };

  $scope.isToday = function () {
    var today = new Date(),
      currentCalendarDate = new Date($scope.calendar.currentDate);
      today.setHours(0, 0, 0, 0);
      currentCalendarDate.setHours(0, 0, 0, 0);
      return today.getTime() === currentCalendarDate.getTime();
  };
  $scope.listEvents=true;
  $scope.onTimeSelected = function (selectedTime, events, disabled) {
    // alert((events !== undefined && events.length !== 0),"events")
    $scope.listEvents=events !== undefined && events.length !== 0;
    // alert($scope.listEvents);
    // console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
  };
function createRandomEvents() {
            var events = [];
            // for (var i = 0; i < 50; i += 1) {
                var date = new Date();
                var eventType = Math.floor(Math.random() * 2);
                var startDay = Math.floor(Math.random() * 90) - 45;
                var endDay = Math.floor(Math.random() * 2) + startDay;
                var startTime;
                var endTime;
                // if (eventType === 0) {
                //     startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                //     if (endDay === startDay) {
                //         endDay += 1;
                //     }
                //     endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                //     events.push({
                //         title: 'Sports Day',
                //         description:'Sports Day where students participate in various races and events..',
                //         img:'img/material3.jpg',
                //         startTime: date,
                //         endTime: date,
                //         allDay: true
                //     });
                // } else {
                    var startMinute = Math.floor(Math.random() * 24 * 60);
                    var endMinute = Math.floor(Math.random() * 180) + startMinute;
                    startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                    endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                    events.push({
                      title: 'Environment day'  ,
                      description:'Environment day is celebrated with a special message.',
                      img:'img/material1.jpg',
                      startTime: date,
                      endTime:  date,
                      allDay: false
                    },
                    {
                    title: 'Science exhibition',
                    description:'Science exhbition and SUPW exhibition are held every year..',
                    img:'img/material2.jpg',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                  {
                    title: 'Sports Day',
                    description:'Sports Day where students participate in various races and events..',
                    img:'img/material3.jpg',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  }
                  ,{
                    title: 'Childrens Day',
                    description:'Investiture Day ceremony where newly elected student leaders ',
                    img:'img/material4.jpg',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                  {
                    title: 'Appreciation Day',
                    description:'These are days we appreciate our students in the field of sports',
                    img:'img/material5.jpg',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                   {
                    title: 'Convocation Day',
                    description:'Graduation is getting a diploma or academic degree or the ceremony that is sometimes associated with it, in which students become graduates.',
                    img:'img/material2.jpg',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                   {
                    title: 'Annual Day',
                    description:'Annual Day forms an integral part of our school activities.  It is an occasion of celebration, felicitation, feast and festivity when students present not only their wonderful performances but also receive honours for their curricular and co-curricular achievements. ',
                    img:'img/material5.jpg',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                   {
                    title: 'Environment day',
                    description:'Environment day is celebrated with a special message.',
                    img:'img/run-fun-walk.png',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                  {
                    title: 'Science exhibition',
                    description:'Science exhbition and SUPW exhibition are held every year..',
                    img:'img/20717.png',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                  {
                    title: 'Sports Day',
                    description:'Sports Day where students participate in various races and events..',
                    img:'img/Womens-Day-Logo.png',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  }
                  ,{
                    title: 'Childrens Day',
                    description:'Investiture Day ceremony where newly elected student leaders ',
                    img:'img/boy_girl_logo.gif',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  },
                  {
                    title: 'Appreciation Days',
                    description:'These are days we appreciate our students in the field of sports',
                    img:'img/logoapp.png',
                    startTime: date,
                    endTime: date,
                    allDay: false
                  }
                    );
                // }
            
            return events;
        }
}])
// Gnanamani created @ 21.03.2017
.controller('CalendarDemoCtrl2',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$filter',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$filter){
  $scope.getCurrent=function(){
    if ($scope.calendar.mode=='month') {
      return false;  
    }else{
      return true;  
    }
    
  }
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('CalendarDemoCtrl', function ($scope,$filter) {
  'use strict';
  $scope.calendar = {};
  $scope.init = function () {
    $scope.calendar.eventSource =  $scope.saveEvent();
    //console.log($scope.calendar.eventSource,"eventSource");
  }



  $scope.goback=function(){
    window.history.back();
  }
  // $scope.ionicGoBack=function(){
  //   window.history.back();
  // }
  $scope.changeMode = function (mode) {
    $scope.calendar.mode = mode;
  };
  $scope.onEventSelected = function (event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  };

  $scope.onViewTitleChanged = function (title) {
    console.log(title,"title");
    $scope.viewTitle = title;      
  };

  $scope.today = function () {
    $scope.calendar.currentDate = new Date();
  };

  $scope.isToday = function () {
    var today = new Date(),
      currentCalendarDate = new Date($scope.calendar.currentDate);
      today.setHours(0, 0, 0, 0);
      currentCalendarDate.setHours(0, 0, 0, 0);
      return today.getTime() === currentCalendarDate.getTime();
  };
  $scope.listEvents=true;
  $scope.onTimeSelected = function (selectedTime, events, disabled) {
    // alert((events !== undefined && events.length !== 0),"events")
    $scope.listEvents=events !== undefined && events.length !== 0;
    // alert($scope.listEvents);
    // console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
  };
  $scope.saveEvent = function (){
    var events = [];
    var date = new Date();
    $scope.startTime = $filter('date')(new Date(), 'hh:mm a');
    console.log($scope.startTime,"timeeee");
    var eventType = Math.floor(Math.random() * 2);
    var startDay = Math.floor(Math.random() * 90) - 45;
    var endDay = Math.floor(Math.random() * 2) + startDay;
    var startTime;
    var endTime;
    events.push({
      title: $scope.title,
      startTime: $scope.datetimeValue,
      endTime: $scope.datetimeValue1,
      allDay: false
    },
    {
      title: 'Environment day',
      description:'Environment day is celebrated with a special message.',
      img:'img/material1.jpg',
      startTime: date,
      endTime:  date,
      allDay: false
    },
    {
      title: 'Science exhibition',
      description:'Science exhbition and SUPW exhibition are held every year..',
      img:'img/material2.jpg',
      startTime: date,
      endTime: date,
      allDay: false
    },
    {
      title: 'Sports Day',
      description:'Sports Day where students participate in various races and events..',
      img:'img/material3.jpg',
      startTime: date,
      endTime: date,
      allDay: false
    }
    ,{
      title: 'Childrens Day',
      description:'Investiture Day ceremony where newly elected student leaders ',
      img:'img/material4.jpg',
      startTime: date,
      endTime: date,
      allDay: false
    },
    {
      title: 'Appreciation Day',
      description:'These are days we appreciate our students in the field of sports',
      img:'img/material5.jpg',
      startTime: date,
      endTime: date,
      allDay: false
    },
     {
      title: 'Convocation Day',
      description:'Graduation is getting a diploma or academic degree or the ceremony that is sometimes associated with it, in which students become graduates.',
      img:'img/material2.jpg',
      startTime: date,
      endTime: date,
      allDay: false
    },
     {
      title: 'Annual Day',
      description:'Annual Day forms an integral part of our school activities.  It is an occasion of celebration, felicitation, feast and festivity when students present not only their wonderful performances but also receive honours for their curricular and co-curricular achievements. ',
      img:'img/material5.jpg',
      startTime: date,
      endTime: date,
      allDay: false
    },
     {
      title: 'Environment day',
      description:'Environment day is celebrated with a special message.',
      img:'img/run-fun-walk.png',
      startTime: date,
      endTime: date,
      allDay: false
    },
    {
      title: 'Science exhibition',
      description:'Science exhbition and SUPW exhibition are held every year..',
      img:'img/20717.png',
      startTime: date,
      endTime: date,
      allDay: false
    },
    {
      title: 'Sports Day',
      description:'Sports Day where students participate in various races and events..',
      img:'img/Womens-Day-Logo.png',
      startTime: date,
      endTime: date,
      allDay: false
    }
    ,{
      title: 'Childrens Day',
      description:'Investiture Day ceremony where newly elected student leaders ',
      img:'img/boy_girl_logo.gif',
      startTime: date,
      endTime: date,
      allDay: false
    },
    {
      title: 'Appreciation Days',
      description:'These are days we appreciate our students in the field of sports',
      img:'img/logoapp.png',
      startTime: date,
      endTime: date,
      allDay: false
    }
    );
      return events;
    }
  }])
  .controller('DatepickerCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$filter',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$filter){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('DatepickerCtrl', function ($scope,$filter) {
  $scope.goback=function(){
    window.history.back();
  }
    var date = new Date();
    $scope.dateValue = $filter('date')(new Date(), 'dd/MM/yyyy');
    $scope.timeValue = $filter('date')(new Date(), 'hh:mm a');
    $scope.dateValue1 = $filter('date')(new Date(), 'dd/MM/yyyy');
    $scope.timeValue1 = $filter('date')(new Date(), 'hh:mm a');
    $scope.demoValue ='Environment Day';
    $scope.demoDesc ='Environment day is celebrated with a special message and theme to keep the environment clean and green.';
}])
  .controller('StdAttndCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$ionicScrollDelegate',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$filter,$ionicScrollDelegate){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('StdAttndCtrl', function($scope,$ionicScrollDelegate) {
  $scope.goback=function(){
    window.history.back();
  }
  var c3chart_donut_id = 'c3_chart_donut';
    if ( $('#'+c3chart_donut_id).length ) {
      var c3chart_donut = c3.generate({
        bindto: '#'+c3chart_donut_id,
        data: {
            columns: [
                ['Absent', 30],
                ['Present', 120]
            ],
            type : 'donut',
        },
        
       
        donut: {
            title: "80 %",
            width: 20,
            label: {
               show: false
               },
        },
        size: {
            height: 210,
            width:  200
            },
        interaction: {
            enabled: false
        },
        color: {
            pattern: ['#E67157', '#AA85BC']
        }
    });
  }
}])
.controller('EmpAttndCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$ionicScrollDelegate',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$ionicScrollDelegate){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('EmpAttndCtrl', function($scope,$ionicScrollDelegate) {
 $scope.goback=function(){
    window.history.back();
  }
  var c3chart_donut_id = 'c3_chart_donut';
    if ( $('#'+c3chart_donut_id).length ) {
      var c3chart_donut = c3.generate({
        bindto: '#'+c3chart_donut_id,
        data: {
            columns: [
                ['LOP', 20],
                ['CL', 10],
                ['Present', 120]
            ],
            type : 'donut',
        },
        
       
        donut: {
            title: "80 %",
            width: 20,
            label: {
               show: false
               },
        },
        size: {
            height: 210,
            width:  200
            },
        interaction: {
            enabled: false
        },
        color: {
            pattern: ['#E67157', '#AA85BC','#3597DA']
        }
    });
  }
}])
 .controller('MainController',['$scope','ionicMaterialInk','ionicMaterialMotion','$state','$timeout','$http','$ionicFilterBar','$ionicPopup','$ionicLoading','$ionicModal',function($scope,ionicMaterialInk,ionicMaterialMotion,$state, $timeout,$http ,$ionicFilterBar,$ionicPopup,$ionicLoading,$ionicModal){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('MainController', function($scope,$state, $timeout,$http ,$ionicFilterBar,$ionicPopup,$ionicLoading,$ionicModal) {
  $scope.goback=function(){
    window.history.back();
  }
    var filterBarInstance;
    $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.students,
        // filterProperties: ['name'],
        update: function (filteredItems, filterText) {
          $scope.students = filteredItems;
        }
      });
    };
    $scope.putAttdnc = function(student) {
      console.log(student.availability,"student");
        if(student.availability==false){
          var myPopup = $ionicPopup.confirm({
            template: '<div class="linecls">' +
                        '<input type="text" placeholder="Description" class="avtrclss">'+
                      '</div>'+
                      '</br>'+
                      '<div class="">' +
                        '<select name="singleSelect" ng-model="data.singleSelect">' +
                          '<option value="">Select Duration</option>' +
                          '<option value="option-1">Full Day</option>' +
                          '<option value="option-2">Half Day</option>' +
                          '<option value="option-2">One Hour</option>' +
                        '</select>' +
                      '</div>',
        scope: $scope,
        buttons: [
          { text: 'Cancel'},
          {
            text: 'Save',
            type: 'button-small button-positive',
            onTap: function(res) {
              if (res) {
                student.availability=!student.availability;
              } else {

              }
            }
          }
        ]
      });
   
    }else{
      var myPopup = $ionicPopup.confirm({
        template: 'Are you sure you want to Remove?'
      });
      myPopup.then(function(res) {
        console.log(res,"res");
        if (res) {
          student.availability=!student.availability;
        }
      });
    }
  }
  $scope.students = [];
    $http.get('templates/json/student.json')
    .success(function(data){
      $scope.students=data;
    }).error(function(err){
  });
  $scope.modalClasses = ['fade-in-scale'];
  $scope.openModal = function(animation) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: animation
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.modal.show();
     
       setTimeout(function()
      {
        $scope.modal.hide();
      },700);
   
      setTimeout(function()
      {
        $state.go("app.Dashboard");
      },700);
    });
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });
}])

 .controller('selectCourseCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$state','$timeout','$http','$ionicFilterBar',function($scope,ionicMaterialInk,ionicMaterialMotion,$state, $timeout,$http ,$ionicFilterBar){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('selectCourseCtrl',function($scope,$http,$state,$ionicFilterBar,$location){
  $scope.goback=function(){
    window.history.back();
  }

  var filterBarInstance;
   $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.courses,
      filterProperties: ['c_name'],
      update: function (filteredItems, filterText) {
        $scope.courses = filteredItems;
      }
    });
  };

  $scope.courses = [];
  $http.get('templates/json/course.json')
  .success(function(data){
    $scope.courses=data;
  }).error(function(err){
  });
}])
 .controller('selectBatchCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$state','$timeout','$http','$ionicFilterBar','$location',function($scope,ionicMaterialInk,ionicMaterialMotion,$state, $timeout,$http ,$ionicFilterBar,$location){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('selectBatchCtrl',function($scope,$http,$state,$ionicFilterBar,$location){
  $scope.goback=function(){
    window.history.back();
    //$location.path('selectCourseView');
  }
  $scope.selectbatch =function(){
  }
   var filterBarInstance;
   $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.batches,
      filterProperties: ['b_name'],
      update: function (filteredItems, filterText) {
        $scope.batches = filteredItems;
      }
    });
  };
  $scope.batches = [];
  $http.get('templates/json/batch.json')
  .success(function(data){
    $scope.batches=data;
  }).error(function(err){
  });
}])
 .controller('LinkShareController',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout',function($scope,ionicMaterialInk,ionicMaterialMotion, $timeout){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('LinkShareController', 
//     function ($scope) {
      'use strict';

      var vm = this;

      vm.share = {
        'networks': ['anywhere'],
        'message':  'Environment day'+
                    '<br>'+
                    '5:00pm - 6:00pm',
        'subject':  'Environment',
        'file':   '',
        'link':   'http://surfit.mobi',
        'toArr':  ['info@surfit.mobi'],
        'bccArr': [],
        'ccArr':  [], 
        'phone':  '098765432'
      }
       $scope.goback=function(){
      window.history.back();
    }
}])
 .controller('LoginCtrl', function($scope,$cordovaOauth,$http) {
 
 $scope.flogin = function() {
           $cordovaOauth.facebook("431062713751366", ["email", "read_stream", "user_website", "user_location", "user_relationships"]).then(function(result) {
              localStorage.setItem("accessToken",result.access_token);
              if(result.access_token) {
                
                    $http.get("https://graph.facebook.com/v2.2/me", { params: { access_token: result.access_token, fields: "id,name,gender,email,location,website,picture,relationship_status", format: "json" }}).then(function(result) {
                          alert(JSON.stringify(result.data));
                    }, function(error) {
                        alert("There was a problem getting your profile.  Check the logs for details.");
                        console.log(error);
                    });
              }else{
                  alert("Not signed in");
              }

            }, function(error) {
                alert("There was a problem signing in!  See the console for logs");
                alert(error);
                console.log(error);
            });
    };
    $scope.Glogin = function() {
      
        $cordovaOauth.google("214375389987-57sm2h297h1m0seagaq8m3hsdlbi193i.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
         alert(JSON.stringify(result));
        var data=null;
          $http.get("https://www.googleapis.com/oauth2/v1/userinfo", { params: { access_token: result.access_token, fields: data, format: "json" }})
          .then(function(result) {
                alert(JSON.stringify(result.data));
          }, function(error) {
            alert("There was a problem getting your profile.  Check the logs for details.");
          });
        }, function(error) {
            console.log(error);
        });
    };
    $scope.twitterLogin = function() {  
      $cordovaOauth.twitter("N9YLXisEtuO6rtpPMwwigpUZ5", "N9YLXisEtuO6rtpPMwwigpUZ5").then(function(result) {
          alert('ok111');
          alert(JSON.stringify(result));
      }, function(error) {
          alert(JSON.stringify(error));
      });
    }
 
})
 .controller('marklistCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$state','$timeout',function($scope,ionicMaterialInk,ionicMaterialMotion,$state, $timeout){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.goback=function(){
    window.history.back();
  }
  $scope.marklist =function(){
    $state.go("MarkList");
  }
  
}])
  .controller('repositoryCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$ionicActionSheet','$cordovaFileTransfer','$ionicLoading','$ionicModal','$state','Upload',function($scope,ionicMaterialInk,ionicMaterialMotion, $timeout,$ionicActionSheet,$cordovaFileTransfer,$ionicLoading,$ionicModal,$state,Upload){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.uploading = true;
  $scope.goback=function(){
    window.history.back();
  }
  $scope.actionSheet = function() {
    
    $ionicActionSheet.show({
      // titleText: 'Action Sheet',
      buttons: [
        { text: '<i class="icon ion-android-share"></i> Share' },
        { text: '<i class="icon ion-arrow-move"></i> Move' },
      ],
      destructiveText: '<i class="icon ion-trash-a"></i> Delete',
      // cancelText: 'Cancel',
      cancel: function() {
        console.log('CANCELLED');
      },
      buttonClicked: function(index) {
        console.log('BUTTON CLICKED', index);
        return true;
      },
      destructiveButtonClicked: function(value,event) {
        $scope.IsVisible = true;
        return true;
      }
    });
  };
      

  $scope.Pickimage="file:///C:/Users/Appnlogic/Downloads/noun_670576_cc.svg";
  $scope.PickimagePdf="img/adobe-pdf-icon-logo-vector-01.png";
 
    // upload on file select or drop
    $scope.upload = function (file) {
      // $scope.Pickimage=file[0].$ngfBlobUrl;
      $scope.fileType=file[0].type;
       $scope.fileDetails=file[0].name;
      console.log(file[0].type,"typee");
      $scope.uploading = false;
        Upload.upload({
            url: 'upload',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };
  
   $scope.save = function(animation){
    
   
    // Setup the loader
    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
      // template: '<p>Add post...</p><ion-spinner></ion-spinner>'
    });
      $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: animation
      }).then(function(modal) {
        $scope.modal = modal;
          $timeout(function () {
            $ionicLoading.hide();
          }, 900);
          setTimeout(function()
          {
            $scope.modal.show();
          },1000);
         
          $timeout(function () {
            $scope.modal.hide();
          }, 1900);
          setTimeout(function()
          {
            $state.go("Repository");
          },1900);
        
      });

    }
}])

.controller('assignmentCourseCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$state','$timeout','$http','$ionicFilterBar',function($scope,ionicMaterialInk,ionicMaterialMotion,$state, $timeout,$http ,$ionicFilterBar){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.goback=function(){
    window.history.back();
  }
  var filterBarInstance;
   $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.courses,
      filterProperties: ['c_name'],
      update: function (filteredItems, filterText) {
        $scope.courses = filteredItems;
      }
    });
  };
  $scope.courses = [];
  $http.get('templates/json/course.json')
  .success(function(data){
    $scope.courses=data;
  }).error(function(err){
  });
}])
.controller('assignmentBatchCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$state','$timeout','$http','$ionicFilterBar','$location',function($scope,ionicMaterialInk,ionicMaterialMotion,$state, $timeout,$http ,$ionicFilterBar,$location){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.goback=function(){
    window.history.back();
  }
  $scope.selectbatch =function(){
  }
   var filterBarInstance;
   $scope.showFilterBar = function () {
    filterBarInstance = $ionicFilterBar.show({
      items: $scope.batches,
      filterProperties: ['b_name'],
      update: function (filteredItems, filterText) {
        $scope.batches = filteredItems;
      }
    });
  };
  $scope.batches = [];
  $http.get('templates/json/batch.json')
  .success(function(data){
    $scope.batches=data;
  }).error(function(err){
  });
}])

;
