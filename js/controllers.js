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
;
