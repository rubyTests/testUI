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

.controller('InstituteCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.items = [
  {
    src:'http://www.wired.com/images_blogs/rawfile/2013/11/offset_WaterHouseMarineImages_62652-2-660x440.jpg',
    sub: 'This is a <b>subtitle</b>'
  },
  {
    src:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg',
    sub: '' /* Not showed */
  },
  {
    src:'http://www.hdwallpapersimages.com/wp-content/uploads/2014/01/Winter-Tiger-Wild-Cat-Images.jpg',
    thumb:'http://www.gettyimages.co.uk/CMS/StaticContent/1391099215267_hero2.jpg'
  }
]
}])

.controller('CampusCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$ionicTabsDelegate', 
  '$ionicSlideBoxDelegate','$ionicSideMenuDelegate','$ionicScrollDelegate', function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$ionicTabsDelegate,$ionicSlideBoxDelegate,$ionicSideMenuDelegate,$ionicScrollDelegate) {
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
  $scope.bgClass='';
  $scope.activeSlide=0;
  $scope.slideChanged=function(index){
    if(index==0){
      var data=document.querySelector('.slider');
      data.className="slider firstSilde";
      $scope.bgClass="BgSilde1";
    }
    else if(index==1){
      var data=document.querySelector('.slider');
      data.className="slider secondSilde";
      $scope.bgClass="BgSilde2";
    }else if(index==2){
      var data=document.querySelector('.slider');
      data.className="slider thirdSilde";
      $scope.bgClass="BgSilde2";
    }
  }
  $scope.slideChanged($scope.activeSlide);
  $scope.enableSlide = function() {   
    $ionicSlideBoxDelegate.enableSlide(true);
  }
  $scope.toggleScroll=true;
  $scope.RightenableSlide = function() {   
    $ionicSlideBoxDelegate.enableSlide(false);
    $scope.toggleScroll=false;
  }  


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
// Gnanamani created @ 21.03.2017
 .controller('CalendarDemoCtrl',['$scope','ionicMaterialInk','ionicMaterialMotion','$timeout','$filter',function($scope,ionicMaterialInk,ionicMaterialMotion,$timeout,$filter){
  $timeout(function(){
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.ripple();
  });
// .controller('CalendarDemoCtrl', function ($scope,$filter) {
  'use strict';
  $scope.calendar = {};
  $scope.init = function () {
    $scope.calendar.eventSource =  $scope.saveEvent();
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

  $scope.onTimeSelected = function (selectedTime, events, disabled) {
    console.log('Selected time: ' + selectedTime + ', hasEvents: ' + (events !== undefined && events.length !== 0) + ', disabled: ' + disabled);
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
.controller('DatepickerCtrl', function ($scope,$filter) {
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
})
.controller('StdAttndCtrl', function($scope,$ionicScrollDelegate) {
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
})
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
.controller('MainController', function($scope,$state, $timeout,$http ,$ionicFilterBar,$ionicPopup,$ionicLoading,$ionicModal) {
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
      },100);
   
      setTimeout(function()
      {
      
        $state.go("app.Dashboard");
      },300);
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
})
.controller('selectCourseCtrl',function($scope,$http,$state,$ionicFilterBar,$location){
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
})
.controller('selectBatchCtrl',function($scope,$http,$state,$ionicFilterBar,$location){
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
})
.controller('LinkShareController', 
    function ($scope) {
      'use strict';

      var vm = this;

      vm.share = {
        'networks': ['anywhere'],
        'message':  'Custom share message',
        'subject':  'Custom share subject',
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
})
;
