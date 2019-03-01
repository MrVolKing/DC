$(document).ready(() => {

    // scrol menu
    // $(document).on('click', '.sectmenu__item a', function() {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top;
    //     $('body,html').animate({
    //         scrollTop: top
    //     }, 500);
    // })

    // burger
    $('.burger').click(function() {
        $('.adaptmenu').addClass('adaptmenu_active');
        $('body').css('overflow', 'hidden');
    });

    $('.close').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });

    $('.adaptmenu nav').click(function() {
        $('.adaptmenu').removeClass('adaptmenu_active');
        $('body').css('overflow', 'visible');
        $('body').css('overflow-x', 'hidden');
    });


   
    
    // popap

    $('.show_popap').click(function() {
        $('.modalDialogcustom').addClass('modalDialogcustom_active');
        $('body').css('overflow', 'hidden')
    });

    $('.contentpopap__cancel').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });

    $('.shadow_popap').click(function() {
        $('.modalDialogcustom').removeClass('modalDialogcustom_active');
        $('body').css('overflow', 'visible')
    });




    // slider
    // var menu1 = ['Хранение информации о клиентах <b>в подходящем для AI формате</b> ', '<b>Выбор предложения</b>, креатива, заголовка для каждого получателя с помощью AI', '<b>Построение на основе AI сегментов</b>  для массовых коммуникаций под конкретные предложения', '<b>Выбор с помощью AI</b> наилучших предложений под созданные сегменты'];
    // var menu2 = ['<b>Неограниченный набор условий</b> для персонализации путешествия клиента', '<b>Автовыбор контента</b> для каждого получателя с помощью AI', '<b>Реакция на действия клиента</b> в других системах (CRM, сайт)', 'Автоматизация кросс-канальных коммуникаций <b>любой сложности</b>'];
    // var menu3 = ['Возможность использовать свои сервера для отправки email или <b>транзакционный API</b>', '<b>Продвинутый</b> планировщик массовых рассылок ', '<b>Inbox-мониторинг</b> и гибкое управление рассылками', '<b>Автоматическая проверка</b> базы по внутренним и внешним black-листам', '<b>Уникальная инфраструктура</b>, позволяющая AI подключиться к управлению маркетингом'];
    // var menu4 = ['<b>Детальный контроль</b> дохода с каждой кампании, предложения, креатива', '<b>Контроль качества</b> доставки по каналам рассылок', '<b>Кастомные параметры</b> для отслеживания внешних событий и условий'];
    
    
    var menu1 = ['Customers data storage suitable for AI-driven Marketing', 'AI-suggested best offer, creative, and subject-line for one-on-one communication', 'Intelligent auto segments driven by specific offers for highly effective direct marketing', 'Next best offer recommendation delivered by machine learning for your scheduled segments'];
    var menu2 = ['Unlimited set of conditions for personalizing a customer\'s journey', 'Automated personalized content for each customer through intelligent algorithms', 'Continuous performance improvement by taking into account customer behavior data from across sources (CRM, website etc.)', 'Cross-channel campaigns of any point of complexity to deliver exceptional one-on-one experiences at scale'];
    var menu3 = ['Ability to send emails through your own SMTP-servers or preferred transactional API ', 'Advanced bulk-campaigns scheduling with built-in suggestions driven by AI', 'Automatic database check against internal and external blacklists', 'First-in-class platform that enables AI-managed marketing automation'];
    var menu4 = ['Detailed breakdown report by campaign, offer, or creative to improve your marketing ROI', 'Deliverability insights per each sending channel', 'Custom parameters for tracking external events and bringing together data from across sources'];
    

    var swiper = new Swiper('.swiper-container1', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
                renderBullet: function (index, className) {
                    return '<li class="' + className +  '">' + (menu1[index]) + '</li>';
            },
            // el: '.swiper-pagination'
        },
        // pagination:{
        //     el: '.swiper-pagination'
        // },
        
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });


      var swiper = new Swiper('.swiper-container2', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu2[index]) + '</li>';
            },
        },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });

      var swiper = new Swiper('.swiper-container3', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu3[index]) + '</li>';
            },
        },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });

      var swiper = new Swiper('.swiper-container4', {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
            el: '.swiper-pagination4',
            clickable: true,
            renderBullet: function (index, className) {
                return '<li class="' + className +  '">' + (menu4[index]) + '</li>';
            },
        },
        autoplay: {
            delay: 90000,
            disableOnInteraction: false,
        }
      });


      
      
      
      // slidel sect7

      var swiper = new Swiper('.swiper-container7', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        breakpoints: {
            769: {
                direction: 'vertical',
                spaceBetween: 30
            }
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
       
      });





      // slider sect1
      var swiper = new Swiper('.swiper-container-sect1', {
        pagination: {
          el: '.swiper-pagination-sect1',
          clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        }
      });




      //video
       
    // const video_el_a_1 = document.getElementById('video_11');
    // const video_el_a_2 = document.getElementById('video_12');
    // const video_el_a_3 = document.getElementById('video_13');
    // const video_el_a_4 = document.getElementById('video_14');

    // const video_el_b_1 = document.getElementById('video_21');
    // const video_el_b_2 = document.getElementById('video_22');
    // const video_el_b_3 = document.getElementById('video_23');
    // const video_el_b_4 = document.getElementById('video_24');

    // const video_el_c_1 = document.getElementById('video_31');
    // const video_el_c_2 = document.getElementById('video_32');
    // const video_el_c_3 = document.getElementById('video_33');
    // const video_el_c_4 = document.getElementById('video_34');
    // const video_el_c_5 = document.getElementById('video_35');

    // const video_el_d_1 = document.getElementById('video_41');
    // const video_el_d_2 = document.getElementById('video_42');
    // const video_el_d_3 = document.getElementById('video_43');

    // // console.log($(window).height());

    // if ($(window).width() >= 800) {

    //     $(window).scroll(function() {
    //         if ($(this).scrollTop()  > 500){
    //             video_el_a_1.play();
    //             video_el_a_2.play();
    //             video_el_a_3.play();
    //             video_el_a_4.play();
    //             // this.console.log('play')
    //             // console.log($(window).scrollTop());
    
    //             video_el_b_1.pause();
    //             video_el_b_2.pause();
    //             video_el_b_3.pause();
    //             video_el_b_4.pause();
    
    //             video_el_c_1.pause();
    //             video_el_c_2.pause();
    //             video_el_c_3.pause();
    //             video_el_c_4.pause();
    //             video_el_c_5.pause();
    
    //             video_el_d_1.pause();
    //             video_el_d_2.pause();
    //             video_el_d_3.pause();
                
    //         }
            
            
    //     });
    
    //     $(window).scroll(function() {
    //         if ($(this).scrollTop()  > 1370){
    //             video_el_b_2.play();
    //             video_el_b_1.play();
    //             video_el_b_3.play();
    //             video_el_b_4.play();
    //             // this.console.log('play2')
    
    //             video_el_a_1.pause();
    //             video_el_a_2.pause();
    //             video_el_a_3.pause();
    //             video_el_a_4.pause();
                
    //             video_el_c_1.pause();
    //             video_el_c_2.pause();
    //             video_el_c_3.pause();
    //             video_el_c_4.pause();
    //             video_el_c_5.pause();
    
    //             video_el_d_1.pause();
    //             video_el_d_2.pause();
    //             video_el_d_3.pause();
    //         }
    //     });
    
    //     $(window).scroll(function() {
    //         if ($(this).scrollTop()  > 2200){
    //             video_el_b_2.pause();
    //             video_el_b_1.pause();
    //             video_el_b_3.pause();
    //             video_el_b_4.pause();
    
    //             video_el_a_1.pause();
    //             video_el_a_2.pause();
    //             video_el_a_3.pause();
    //             video_el_a_4.pause();
                
    //             video_el_c_1.play();
    //             video_el_c_2.play();
    //             video_el_c_3.play();
    //             video_el_c_4.play();
    //             video_el_c_5.play();
    
    //             video_el_d_1.pause();
    //             video_el_d_2.pause();
    //             video_el_d_3.pause();
    //         }
    //     });
    
    //     $(window).scroll(function() {
    //         if ($(this).scrollTop()  > 3000){
    //             video_el_b_2.pause();
    //             video_el_b_1.pause();
    //             video_el_b_3.pause();
    //             video_el_b_4.pause();
    
    //             video_el_a_1.pause();
    //             video_el_a_2.pause();
    //             video_el_a_3.pause();
    //             video_el_a_4.pause();
                
    //             video_el_c_1.pause();
    //             video_el_c_2.pause();
    //             video_el_c_3.pause();
    //             video_el_c_4.pause();
    //             video_el_c_5.pause();
    
    //             video_el_d_1.play();
    //             video_el_d_2.play();
    //             video_el_d_3.play();
    //         }
    //     });
    // }


});

                                                                        

                                                                           

                                        

