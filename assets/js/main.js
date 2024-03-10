$(function () {

    $('.header-inner').hover(function () {
        $('.header').addClass('on')
    }, function () {
        $('.header').removeClass('on'); //배경빼기
        $(".header .sub-list").removeClass('on') //모든서브 닫히고
        $('.header .bg').css('height', 0) //뒤에 따라온느 높이 0으로
    })



    $('.gnb .nav-item').mouseover(function () {

        child = $(this).find('.sub-list'); //내가 마우스올린거의 자식 sub-list;
        childHieght = child.outerHeight();

        if (child.length == 0) {
            childHieght = 0;
        }

        $('.header').addClass('on'); //헤더배경
        $('.header .sub-list').removeClass('on') //모든서브닫히고
        child.addClass('on') //내가 올린서브 열리고
        $('.header .bg').css('height', childHieght) //뒤에 배경 높이 따라오게

    })



    $('.deep-list li').hover(function () {
        //올
        $(this).addClass('on').siblings().removeClass('on')
    }, function () {
        //땟]
        $(this).removeClass('on').siblings().removeClass('on')
    })


    // 

    //메인슬라이드
    var mainSlide = new Swiper(".main-slide", {
        effect: "fade",

        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return `
              <span class="${className}">
                <svg class="progress" width="42" height="42">
                    <circle class="circle-origin-bg" r="20" cx="21" cy="21"></circle>
                    <circle class="circle-origin" r="20" cx="21" cy="21"></circle>
                </svg>
              </span>`;
            },
        },

        on: {
            "init": function () {
                curr = this.realIndex + 1;
                total = this.slides.length;

                $('.main-slide .curr').text(curr);
                $('.main-slide .total').text(total);
            },
            "slideChange": function () {

                curr = this.realIndex + 1;
                total = this.slides.length;

                $('.main-slide .curr').text(curr);
                $('.main-slide .total').text(total);
            }
        }

    });

    $('.sc-visual .autoplay').click(function () {

        if ($(this).hasClass('on')) {
            mainSlide.autoplay.start();
        } else {
            mainSlide.autoplay.stop();
        }

        $(this).toggleClass('on')
    })

    //main-slide_m 영역 (모바일) 
    var mobileSlide = new Swiper(".main-slide_m", {
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        effect: 'fade',
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        }
    });


    // sc-with 영역 frame
    $('.btn-circle').click(function (e) {
        e.preventDefault();
        id = $(this).data('id');

        frameEl = ` <div class="frame">
        <div class="frame-inner">
          <div class="wrap">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}?si=V_G8HXwi0LvkyPxE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <button class="close">×</button>
          </div>
        </div>
      </div>`;

        $('.sc-with').append(frameEl)

    })


    // $('.frame .close').click(function(e){
    //     alert();
    // })
    $(document).on('click', ".frame .close", function () {
        $('.sc-with .frame').remove();
    })




    //with-slide 부분
    var swiper = new Swiper(".with-slide", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    //sc-brand_m 영역 (모바일) 
    var swiper = new Swiper(".brand-slide", {
        slidesPerView: 'auto',
        spaceBetween: 10
    });




    //sc-recom 영역
    $('.tab-nav a').click(function (e) { //e-->이벤트
        e.preventDefault(); //링크이벤트 막기

        //내가 클릭한 "a"의 href안에 써져있는 값을 가져와라
        tabname = $(this).attr('href')

        //내가 클릭한 그 "a" --> this
        $(this).addClass('active').siblings().removeClass('active')
        $(tabname).addClass('active').siblings().removeClass('active')
    })


    //banner-slide 영역
    var bannerSlide = new Swiper(".banner-slide", {
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false

        },
        effect: "fade",
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
    });
    bannerSlide.on('slideChange', function () {
        curr = this.realIndex + 1;
        total = this.slides.length - 2;
        $('.banner-slide .curr').html(curr)
        $('.banner-slide .total').html(total)
    })



    //banner-slide_m 영역 (모바일) 
    var swiper = new Swiper(".banner-slide_m", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        }
    });


    //sc-plan 슬라이드
    var swiper = new Swiper(".plan-slide", {
        slidesPerView: '3',
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        mousewheel: {
            enabled: true, // 마우스 휠 스크롤 활성화
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });


    // schedule 영역 (sc-plan 영역 모바일)
    var scheduleSlide = new Swiper(".schedule-slide", {
        slidesPerView: 'auto',
        spaceBetween: 20,

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },

        mousewheel: {
            enabled: true, // 마우스 휠 스크롤 활성화
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
    });


    //sc-keyword 영역
    $('.tab-nav button').click(function (e) { //e-->이벤트
        e.preventDefault(); //링크이벤트 막기

        //내가 클릭한 button의 data-tab안에 써져있는 값을 가져와라
        tabname = $(this).data('tab')


        //내가 클릭한 그 button --> this
        $(this).addClass('active').siblings().removeClass('active')
        $(tabname).addClass('active').siblings().removeClass('active')
    });


    //sc-keyword_m 영역 (모바일) 
    $('.sc-keyword_m button').click(function (e) { //e-->이벤트
        e.preventDefault(); //링크이벤트 막기

        //내가 클릭한 button의 data-tab안에 써져있는 값을 가져와라
        tabname = $(this).data('tab')


        //내가 클릭한 그 button --> this
        $(this).addClass('active').siblings().removeClass('active')
        $(tabname).addClass('active').siblings().removeClass('active')
    });

    //sc-keyword_m 영역 (모바일) 
    var keywordmSlide = new Swiper(".keyword-slide_m", {
        slidesPerView: 'auto',
        spaceBetween: 15

    });


    //sc-review_m 영역 (모바일) 
    var swiper = new Swiper(".review-slide_m", {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });


    //sc-story_m 영역 (모바일) 
    var swiper = new Swiper(".story-slide_m", {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });



    //side-gnb 탭메뉴 영역
    $('.side-gnb .tab-nav a').click(function (e) { //e-->이벤트
        e.preventDefault(); //링크이벤트 막기

        //내가 클릭한 "a"의 href안에 써져있는 값을 가져와라
        tabname = $(this).attr('href')

        //내가 클릭한 그 "a" --> this
        $(this).addClass('active').siblings().removeClass('active')
        $(tabname).addClass('active').siblings().removeClass('active')
    });


    $('.side-gnb .side-item').click(function (e) {
        e.preventDefault(); // 링크 이벤트 막기

        // 현재 클릭한 .nav에 대한 처리
        if ($(this).find('.menu-list').length) {
            // 현재 클릭한 .nav에 대한 메뉴가 있는 경우
            $('.side-gnb .menu-list').removeClass('on');

            $(this).addClass('on');
            $(this).find('.menu-list').addClass('on');
        } else {
            // 현재 클릭한 .nav에 메뉴가 없는 경우
            $('.side-gnb .menu-list').removeClass('on');
        }
    });


    //sc-story 영역
    var storySlide = new Swiper(".sc-story .swiper", {});

    $('.sc-story .nav-area a').click(function (e) {
        e.preventDefault();
        //모든태그는 순서 (index)가있다 0부터 시작

        idx = $(this).index() //내가클릭한 a의 순서
        $(this).addClass('on').siblings().removeClass('on');
        storySlide.slideTo(idx);

    })

    // 비디오실행
    $('#playButton').click(function () {

        if ($(this).hasClass('on')) {
            $('#myVideo').get(0).play()
        } else {
            $('#myVideo').get(0).pause()
        }

        $(this).toggleClass('on');
    });



    // 사이드메뉴 열기 닫기  
    $('header .btn-menu').click(function () {
        $('.header .dimmed').addClass('on')
        $('.side-gnb').addClass('on')
    })

    $('.side-gnb .close').click(function () {
        $('.header .dimmed').removeClass('on')
        $('.side-gnb').removeClass('on')
    })


    // 사이드메뉴 li 토글버튼
    $('.side-gnb .side-item .nav').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('active').siblings().removeClass('active');
    })



    // 사이드메뉴 안에 sub-list 열고 닫기
    $('.side-gnb .side-item').click(function (e) {
        e.preventDefault(); //링크이벤트막기

        if ($(this).hasClass('on')) { //만약에 내가 클릭한 'nav'가 on이 있습니가?
            //예 있습니다 (두번째클릭)

            $(this).removeClass('on').siblings('.sub-list').slideUp()

        } else { //아니요 없습니다. (첫클릭)

            //모두닫히고
            $('.nav').removeClass('on').siblings('.sub-list').slideUp()


            //나만열려요
            $(this).addClass('on').siblings('.sub-list').slideDown()
        }

    })


    // 퀵메뉴
    let lastScroll = 0;

    $(window).scroll(function () {
        curr = $(window).scrollTop();

        if (curr > lastScroll) {
            $('.quick-wrap .btn.top').removeClass('on');
        } else {
            $('.quick-wrap .btn.top').addClass('on');
        }
        lastScroll = curr;
    })

    // 맨위로 버튼
    $('.top-btn').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })


    $('.quick-wrap .btn.close').click(function () {
        $('.quick-wrap .btns').toggleClass('on')
    })


    $('.quick-wrap .btn.top').click(function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })

}) //지우지마세요