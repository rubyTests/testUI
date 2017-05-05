/**
 * Ionic Letter Avatar is directive for AngularJS apps 
 * @version v3.0.0 - 2015-09-28 * @link https://github.com/uttesh/ionic-letteravatar
 * @author Uttesh Kumar T.H. <uttesh@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function () {

	'use strict';
	var nla = angular.module('ionic-letter-avatar', []);

	nla.constant('defaultSettings', {
		alphabetcolors : ["#5A8770", "#6AD19F", "#6FA9AB", "#2196f3", "#85A655", "#F18636", "#D93A37", "#7786BA", "#5C9BBC", "#009688", "#9A89B5", "#407887", "#9ccc65", "#B49255", "#8d6e63", "#FFA07A", "#596588", "#0087BF", "#D870AD", "#0087BF", "#B2B7BB", "#72ACAE", "#9C8AB4", "#5A8770", "#EEB424", "#407887"],
		textColor : '#ffffff',
		defaultBorder : 'border:5px solid white',
		fontsize : 16, // unit in pixels
		height : 40, // unit in pixels
		width : 40, // unit in pixels
		fontWeight : 500, //
		charCount : 1,
		fontFamily : 'HelveticaNeue-Light,Helvetica Neue Light,Helvetica Neue,Helvetica, Arial,Lucida Grande, sans-serif',
		base : 'data:image/svg+xml;base64,',
		radius : 'border-radius:30px;',

	});

	nla.directive('ionicLetterAvatar', ['defaultSettings', function (defaultSettings) {
				return {
					restrict : 'E',
					replace : true,
					link : function (scope, element, attrs) {

						var params = {
							charCount : attrs.charcount || defaultSettings.charCount,
							data : attrs.data,
							textColor : defaultSettings.textColor,
							height : attrs.height || defaultSettings.height,
							width : attrs.width || defaultSettings.width,
							fontsize : attrs.fontsize || defaultSettings.fontsize,
							fontWeight : attrs.fontweight || defaultSettings.fontWeight,
							fontFamily : attrs.fontfamily || defaultSettings.fontFamily,
							avatarBorderStyle : attrs.avatarcustomborder,
							avatardefaultBorder : attrs.avatarborder,
							defaultBorder : defaultSettings.defaultBorder,
							shape : attrs.shape
						};

						var c = params.data.substr(0, params.charCount).toUpperCase();
						var cobj = getCharacterObject(c, params.textColor, params.fontFamily, params.fontWeight, params.fontsize);
						var colorIndex = '';
						var color = '';

						if (c.charCodeAt(0) < 65) {
							color = getRandomColors();
						} else {
							colorIndex = Math.floor((c.charCodeAt(0) - 65) % defaultSettings.alphabetcolors.length);
							color = defaultSettings.alphabetcolors[colorIndex];
						}

						var svg = getImgTag(params.width, params.height, color);
						svg.append(cobj);
						var lvcomponent = angular.element('<div>').append(svg.clone()).html();
						var svgHtml = window.btoa(unescape(encodeURIComponent(lvcomponent)));
						var component;
						var base = defaultSettings.base;
						var _style = '';
						if (params.avatarBorderStyle) {
							_style = params.avatarBorderStyle;
						} else if (params.avatardefaultBorder) {
							_style = params.defaultBorder;
						}

						if (params.shape) {
							if (params.shape === 'round') {
								var round_style = defaultSettings.radius + _style;
								component = "<img src=" + base + svgHtml + " style='" + round_style + "' />";
							}
						} else {
							component = "<img src=" + base + svgHtml + " style='" + _style + "' />";
						}
						element.replaceWith(component);
					}
				};
			}
		]);

	function getRandomColors() {
		var letters = '0123456789ABCDEF'.split('');
		var _color = '#';
		for (var i = 0; i < 6; i++) {
			_color += letters[Math.floor(Math.random() * 12)];
		}
		return _color;
	}

	function getImgTag(width, height, color) {

		var svgTag = angular.element('<svg></svg>')
			.attr({
				'xmlns' : 'http://www.w3.org/2000/svg',
				'pointer-events' : 'none',
				'width' : width,
				'height' : height
			})
			.css({
				'background-color' : color,
				'width' : width + 'px',
				'height' : height + 'px'
			});

		return svgTag;
	}

	function getCharacterObject(character, textColor, fontFamily, fontWeight, fontsize) {
		var textTag = angular.element('<text text-anchor="middle"></text>')
			.attr({
				'y' : '50%',
				'x' : '50%',
				'dy' : '0.35em',
				'pointer-events' : 'auto',
				'fill' : textColor,
				'font-family' : fontFamily
			})
			.html(character)
			.css({
				'font-weight' : fontWeight,
				'font-size' : fontsize + 'px',
			});

		return textTag;
	}

})();

// angular.module('ionicApp', ['ionic','ionic-letter-avatar']);