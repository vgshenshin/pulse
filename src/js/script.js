// $(document).ready(function(){
//     $('.carousel__inner').slick({
//       speed: 1200,
//       adaptiveHeight: true,
//       prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//       responsive: [
//         {
//           breakpoint: 992,
//           settings: {
//             dots: true,
//             arrows: false
//           }
//         }
//       ]
//     });
//   });
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	navPosition: "bottom",
	responsive: {
		320: {
			nav: true,
		},
		768: {
			nav: false
		}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

$(document).ready(function(){
	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

//Первый упрощенный вариант исполнения переключения контента карточки товара без функции
/* 	$('.catalog-item__link').each(function(i) {
		$(this).on('click', function(e){
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	});

	$('.catalog-item__back').each(function(i) {
		$(this).on('click', function(e){
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
		})
	}); */

	//Оптимизировали код с помощью функции

	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e){
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	//modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
/* 	$('.button_mini').on('click', function() {
		$('.overlay, #order').fadeIn('slow');
	}); */

	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});
});

