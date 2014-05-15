(function ($) {
    if (window != window.top)$('html').addClass("iframe");
    function go() {
        less.refresh(true);
        setTimeout("go()", 15000);
    }

    $(function () {
        /**
         * расстановка точек над ё
         */
        $('ul.menu').each(function () {
            $(this).children("li").each(function (i) {
                $(this).addClass("element-" + i);
            });
        });
        $('ul.menu').each(function () {
            $(this).addClass("level-" + $(this).parents("ul.menu").length);
        });
        $('ul.menu>li').each(function () {
            $(this).addClass("level-" + ($(this).parents("ul.menu").length - 1));
        });

        $(".html").mousemove(function (e) {
            var offset = $(this).offset();
            var relativeX = (e.pageX - offset.left);
            var relativeY = (e.pageY - offset.top);
            relativeX = -relativeX;
            relativeY = -relativeY;
            pos = $('#logo').css('background-position');
            pos = pos.split('px');
            parX = pos[0] - (pos[0] - relativeX / 5);
            parY = pos[1] - (pos[1] - relativeY / 5);
            if (parX <= -300) {
                parX = -300;
            }
            $('#logo').css({backgroundPosition: parX + 'px ' + parY + 'px'});

        });

        $('#webform-client-form-5').append('<div class="donload"><span>Прикрепить файл<span></div>');
        $('#webform-client-form-5 .donload').insertAfter("#webform-component-vvedite-vash-kommentariy");
        $('#webform-client-form-5 .donload span').click(
            function () {
                $('.form-managed-file .form-file').trigger('click');
            }
        );
        /*поле аудит*/
        audit = $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val();
        if (audit == '') {
            $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val("Введите Ваш сайт www.");
        }
        ;
        $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').focus(function () {
            iw = $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val();
            if (iw == "Введите Ваш сайт www.") {
                $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val('');
            }
        });
        $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').focusout(function () {
            iw = $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val();
            if (iw == "") {
                $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val('Введите Ваш сайт www.');
            }
        });

        /*поле имя*/

        imya = $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val();
        if (imya == '') {
            $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val("Введите Ваше имя");
        }
        ;
        $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').focus(function () {
            ii = $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val();
            if (ii == "Введите Ваше имя") {
                $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val('');
            }
        });
        $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').focusout(function () {
            ii = $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val();
            if (ii == "") {
                $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val('Введите Ваше имя');
            }
        });

        /*поле email*/

        email = $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val();
        if (email == '') {
            $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val("Оставьте Ваш email");
        }
        ;
        $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').focus(function () {
            ie = $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val();
            if (ie == "Оставьте Ваш email") {
                $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val('');
            }
        });
        $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').focusout(function () {
            ie = $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val();
            if (ie == "") {
                $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val('Оставьте Ваш email');
            }
        });





        /*поле телефон*/
        tel = $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val();
        if (tel == '') {
            $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val("Введите Ваш телефон");
        }
        ;
        $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').focus(function () {
            it = $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val();
            if (it == "Введите Ваш телефон") {
                $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val('');
            }
        });
        $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').focusout(function () {
            it = $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val();
            if (it == "") {
                $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val('Введите Ваш телефон');
            }
        });

        /*поле коментарий*/
        comm = $('#edit-submitted-vvedite-vash-kommentariy').val();
        if (comm == '') {
            $('#edit-submitted-vvedite-vash-kommentariy').val("Введите Ваши комментарии");
        }
        ;
        $('#edit-submitted-vvedite-vash-kommentariy').focus(function () {
            ic = $('#edit-submitted-vvedite-vash-kommentariy').val();
            if (ic == "Введите Ваши комментарии") {
                $('#edit-submitted-vvedite-vash-kommentariy').val('');
            }
        });
        $('#edit-submitted-vvedite-vash-kommentariy').focusout(function () {
            ic = $('#edit-submitted-vvedite-vash-kommentariy').val();
            if (ic == "") {
                $('#edit-submitted-vvedite-vash-kommentariy').val('Введите Ваши комментарии');
            }
        });

        /*поле ваше имя*/
        calback_imya = $('#edit-submitted-vashe-imya').val();
        if (calback_imya == '') {
            $('#edit-submitted-vashe-imya').val("Ваше имя *");
        }
        ;
        $('#edit-submitted-vashe-imya').focus(function () {
            iw = $('#edit-submitted-vashe-imya').val();
            if (iw == "Ваше имя *") {
                $('#edit-submitted-vashe-imya').val('');
            }
        });
        $('#edit-submitted-vashe-imya').focusout(function () {
            iw = $('#edit-submitted-vashe-imya').val();
            if (iw == "") {
                $('#edit-submitted-vashe-imya').val('Ваше имя *');
            }
        });
        /*поле ваш email*/
        calback_mail = $('#edit-submitted-vash-e-mail').val();
        if (calback_imya == '') {
            $('#edit-submitted-vash-e-mail').val("Ваш e-mail *");
        }
        ;
        $('#edit-submitted-vash-e-mail').focus(function () {
            iw = $('#edit-submitted-vash-e-mail').val();
            if (iw == "Ваш e-mail *") {
                $('#edit-submitted-vash-e-mail').val('');
            }
        });
        $('#edit-submitted-vash-e-mail').focusout(function () {
            iw = $('#edit-submitted-vash-e-mail').val();
            if (iw == "") {
                $('#edit-submitted-vash-e-mail').val('Ваш e-mail *');
            }
        });

        /*поле ваш телефон*/
        calback_tel = $('#edit-submitted-vash-telefon').val();
        if (calback_tel == '') {
            $('#edit-submitted-vash-telefon').val("Ваш телефон *");
        }
        ;
        $('#edit-submitted-vash-telefon').focus(function () {
            iw = $('#edit-submitted-vash-telefon').val();
            if (iw == "Ваш телефон *") {
                $('#edit-submitted-vash-telefon').val('');
            }
        });
        $('#edit-submitted-vash-telefon').focusout(function () {
            iw = $('#edit-submitted-vash-telefon').val();
            if (iw == "") {
                $('#edit-submitted-vash-telefon').val('Ваш телефон *');
            }
        });

        /*поле ваш комментарий*/
        calback_com = $('#edit-submitted-vash-kommentariy').val();
        if (calback_com == '') {
            $('#edit-submitted-vash-kommentariy').val("Ваш комментарий");
        }
        ;
        $('#edit-submitted-vash-kommentariy').focus(function () {
            iw = $('#edit-submitted-vash-kommentariy').val();
            if (iw == "Ваш комментарий") {
                $('#edit-submitted-vash-kommentariy').val('');
            }
        });
        $('#edit-submitted-vash-kommentariy').focusout(function () {
            iw = $('#edit-submitted-vash-kommentariy').val();
            if (iw == "") {
                $('#edit-submitted-vash-kommentariy').val('Ваш комментарий');
            }
        });
        
        /*Проверка полей формы*/
        $('#webform-client-form-5 .form-actions .form-submit').click(function () {
            c1 = $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val();
            c2 = $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val();
            c3 = $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val();
            c4 = $('#edit-submitted-vvedite-vash-kommentariy').val();
            c5 = $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val();
            if (c1 == 'Введите Ваш сайт www.') {
                $('#edit-submitted-prishlite-vash-sayt-na-besplatnyy-audit').val('');
            }
            if (c2 == 'Введите Ваше имя') {
                $('#edit-submitted-kak-ya-mogu-k-vam-obrashchatsya').val('');
            }
            if (c3 == 'Введите Ваш телефон') {
                $('#edit-submitted-ya-perezvonyu-vam-v-blizhayshee-vremya').val('');
            }
            if (c4 == 'Введите Ваши комментарии') {
                $('#edit-submitted-vvedite-vash-kommentariy').val('');
            }
            if (c5 == 'Оставьте Ваш email') {
                $('#edit-submitted-ostavte-svoy-adres-elektronnoy-pochty').val('');
            }
        });
        $('#webform-client-form-7 .form-actions .form-submit').click(function () {
            c1 = $('#edit-submitted-vashe-imya').val();
            c2 = $('#edit-submitted-vash-e-mail').val();
            c3 = $('#edit-submitted-vash-telefon').val();
            c4 = $('#edit-submitted-vash-kommentariy').val();
            if (c1 == 'Ваше имя *') {
                $('#edit-submitted-vashe-imya').val('');
            }
            if (c2 == 'Ваш e-mail *') {
                $('#edit-submitted-vash-e-mail').val('');
            }
            if (c3 == 'Ваш телефон *') {
                $('#edit-submitted-vash-telefon').val('');
            }
            if (c4 == 'Ваш комментарий') {
                $('#edit-submitted-vash-kommentariy').val('');
            }
        });
        $('.callback').click(
            function () {
                $('#block-webform-client-block-7').append(' <span class="button b-close"><span>X</span></span>');
                $('#block-webform-client-block-7').bPopup({
                    speed: 650,
                    transition: 'slideIn'
                });
            }
        );


        $('.region-info-blocks,.region-footer,.region-slider,.slider').append('<div style="clear:both;"></div>');
        $('.not-front .field-name-field-brief-description,.not-front .with-tabs').insertBefore($('.not-front .slider div'));


        if ($("#block-menu-menu-main").length) {
            $('.not-front #block-menu-menu-main .content').append('<div id="carriage"></div>');
        }

        w = $('header').width();
        wl = $('#logo-floater').width();
        wc = $('#block-block-2').width();
        ws = $('#block-block-8').width();
        wt = $('#block-block-1').width();
        wm = $('#block-block-3').width();
        wb = $('#block-block-9').width();

        //$('#logo-floater').append('<div class="debag"></div>');
        //$('#logo-floater .debag').text(w);
        if (w <= 820) {
            $('#logo-floater').css({'width': '325px', 'font-size': '9px'});
        }
        if (w > 820 && w <= 979) {
            left = w / 2 - wl / 2;
            $('#logo-floater').css({'width': '375px', 'font-size': '10px'});
        }

        if (w > 979) {
            $('#logo-floater').css({'left': '4px'});
            $('#block-block-2').css({'right': '230px'});
            $('#block-block-8').css({'margin-left': '4.91%'});
            $('#block-block-1').css({'right': '10px'});
            $('#block-block-3').css({'right': '10px'});

            if ($("#block-menu-menu-main").length) {
                $('.not-front #block-menu-menu-main').css({'display': 'block'});
                $('.not-front #block-menu-menu-main .content #carriage').css({'display': 'block'});
                wall = 0;
                $('.not-front #block-menu-menu-main .content a').each(
                    function () {
                        wa = $(this).width();
                        wall = wall + wa;
                        padding = (w - wall) / 16 - 2;
                        return padding;
                    }
                );
                $('.not-front #block-menu-menu-main .content a').css({'padding-left': padding, 'padding-right': padding});
                if ($(".not-front #block-menu-menu-main .content a.active").length) {
                    wactive = $('.not-front #block-menu-menu-main .content a.active').innerWidth();
                    pactive = $('.not-front #block-menu-menu-main .content a.active').position().left;
                    cl = $('.not-front #block-menu-menu-main .content #carriage').position().left;
                    $('.not-front #block-menu-menu-main .content #carriage').css({'width': wactive, 'left': pactive});
                }

                $('.not-front #block-menu-menu-main .content a').hover(

                    function () {
                        wactive = $(this).innerWidth();
                        pactive = $(this).position().left;
                        cl = $('.not-front #block-menu-menu-main .content #carriage').position().left;
                        $('.not-front #block-menu-menu-main .content #carriage').stop().animate({'width': wactive, 'left': pactive}, 200);
                    },

                    function () {

                    });
                $('.not-front #block-menu-menu-main').mouseleave(
                    function () {
                        wactive = $('.not-front #block-menu-menu-main .content a.active').innerWidth();
                        pactive = $('.not-front #block-menu-menu-main .content a.active').position().left;
                        cl = $('.not-front #block-menu-menu-main .content #carriage').position().left;
                        $('.not-front #block-menu-menu-main .content #carriage').stop().animate({'width': wactive, 'left': pactive}, 200);
                    }
                );
            }

        }
        if (w <= 979) {
            right = w / 2 - wc / 2;
            margin = w / 2 - ws / 2;
            $('#block-block-2').css({'right': right});
            $('#block-block-8').css({'margin-left': margin});
            if ($("#block-menu-menu-main").length) {
                $('.not-front #block-menu-menu-main').css({'display': 'block'});
                $('.not-front #block-menu-menu-main .content #carriage').css({'display': 'none'});
                wall = 0;
                wall2 = 0;
                $('.not-front #block-menu-menu-main .content a').each(
                    function () {
                        index = $(this).parent().index();
                        if (index < 5) {
                            wa = $(this).width();
                            wall = wall + wa;
                            padding = (w - wall) / 10 - 2;
                        }
                        else {
                            wa = $(this).width();
                            wall2 = wall2 + wa;
                            padding2 = (w - wall2) / 6 - 3;
                        }
                        return padding;
                    }
                );
                for (i = 0; i < 5; i++) {
                    $('.not-front #block-menu-menu-main .content li:eq(' + i + ') a').css({'padding-left': padding, 'padding-right': padding});
                }
                for (i = 5; i < 8; i++) {
                    $('.not-front #block-menu-menu-main .content li:eq(' + i + ') a').css({'padding-left': padding2, 'padding-right': padding2});
                }
            }
        }
        if (w <= 767) {
            right_t = w / 2 - wt / 2;
            right_m = w / 2 - wm / 2;
            margin_b = w / 2 - wb / 2;
            $('#logo-floater').css({'width': '310px', 'font-size': '10px'});
            $('#block-block-1').css({'right': right_t});
            $('#block-block-3').css({'right': right_m});
            $('#block-block-9').css({'margin-left': margin_b});
            $('.not-front #block-menu-menu-main').css({'display': 'none'});
            $('.not-front #block-menu-menu-main .content #carriage').css({'display': 'none'});
        }
        else {

        }
        if (w > 767) {
            $('#block-block-1').css({'right': '20px'});
            $('#block-block-3').css({'right': '20px'});
        }


        $(window).resize(function () {
            w = $('header').width();
            wl = $('#logo-floater').width();
            wc = $('#block-block-2').width();
            ws = $('#block-block-8').width();
            wt = $('#block-block-1').width();
            wm = $('#block-block-3').width();
            wb = $('#block-block-9').width();


            if (w <= 820) {
                $('#logo-floater').css({'width': '325px', 'font-size': '9px'});
            }
            if (w > 820 && w <= 979) {
                left = w / 2 - wl / 2;
                $('#logo-floater').css({'width': '375px', 'font-size': '10px'});
            }

            if (w > 979) {
                $('#logo-floater').css({'left': '4px'});
                $('#block-block-2').css({'right': '230px'});
                $('#block-block-8').css({'margin-left': '4.91%'});
                $('#block-block-1').css({'right': '10px'});
                $('#block-block-3').css({'right': '10px'});

                if ($("#block-menu-menu-main").length) {

                    $('.not-front #block-menu-menu-main').css({'display': 'block'});
                    $('.not-front #block-menu-menu-main .content #carriage').css({'display': 'block'});
                    $('.not-front #block-multiblock-1').css({'display': 'none'});
                    wall = 0;
                    $('.not-front #block-menu-menu-main .content a').each(
                        function () {
                            wa = $(this).width();
                            wall = wall + wa;
                            padding = (w - wall) / 16 - 2;
                            return padding;
                        }
                    );
                    $('.not-front #block-menu-menu-main .content a').css({'padding-left': padding, 'padding-right': padding});

                    if ($(".not-front #block-menu-menu-main .content a.active").length) {
                        wactive = $('.not-front #block-menu-menu-main .content a.active').innerWidth();
                        pactive = $('.not-front #block-menu-menu-main .content a.active').position().left;
                        cl = $('.not-front #block-menu-menu-main .content #carriage').position().left;
                        $('.not-front #block-menu-menu-main .content #carriage').css({'width': wactive, 'left': pactive});
                    }

                    $('.not-front #block-menu-menu-main .content a').hover(

                        function () {
                            wactive = $(this).innerWidth();
                            pactive = $(this).position().left;
                            cl = $('.not-front #block-menu-menu-main .content #carriage').position().left;
                            $('.not-front #block-menu-menu-main .content #carriage').stop().animate({'width': wactive, 'left': pactive}, 200);
                        },

                        function () {

                        });
                    $('#block-menu-menu-main').mouseleave(
                        function () {
                            wactive = $('.not-front #block-menu-menu-main .content a.active').innerWidth();
                            pactive = $('.not-front #block-menu-menu-main .content a.active').position().left;
                            cl = $('.not-front #block-menu-menu-main .content #carriage').position().left;
                            $('.not-front #block-menu-menu-main .content #carriage').stop().animate({'width': wactive, 'left': pactive}, 200);
                        }
                    );
                }


            }
            if (w <= 979) {
                right = w / 2 - wc / 2;
                margin = w / 2 - ws / 2;

                $('#block-block-2').css({'right': right});
                $('#block-block-8').css({'margin-left': margin});

                if ($("#block-menu-menu-main").length) {
                    $('.not-front #block-menu-menu-main').css({'display': 'block'});
                    $('.not-front #block-menu-menu-main .content #carriage').css({'display': 'none'});
                    $('.not-front #block-multiblock-1').css({'display': 'none'});

                    wall = 0;
                    wall2 = 0;
                    $('.not-front #block-menu-menu-main .content a').each(
                        function () {
                            index = $(this).parent().index();
                            if (index < 5) {
                                wa = $(this).width();
                                wall = wall + wa;
                                padding = (w - wall) / 10 - 2;
                            }
                            else {
                                wa = $(this).width();
                                wall2 = wall2 + wa;
                                padding2 = (w - wall2) / 6 - 2;
                            }
                            return padding;
                        }
                    );
                    for (i = 0; i < 5; i++) {
                        $('.not-front #block-menu-menu-main .content li:eq(' + i + ') a').css({'padding-left': padding, 'padding-right': padding});
                    }
                    for (i = 5; i < 8; i++) {
                        $('.not-front #block-menu-menu-main .content li:eq(' + i + ') a').css({'padding-left': padding2, 'padding-right': padding2});
                    }

                }

            }
            if (w <= 767) {
                right_t = w / 2 - wt / 2;
                right_m = w / 2 - wm / 2;
                margin_b = w / 2 - wb / 2;
                $('#logo-floater').css({'width': '310px', 'font-size': '10px'});
                $('#block-block-1').css({'right': right_t});
                $('#block-block-3').css({'right': right_m});
                $('#block-block-9').css({'margin-left': margin_b});
                $('.not-front #block-menu-menu-main').css({'display': 'none'});
                $('.not-front #block-multiblock-1').css({'display': 'none'});
            }
            if (w > 767) {
                $('#block-block-1').css({'right': '20px'});
                $('#block-block-3').css({'right': '20px'});
            }
            //$('#logo-floater .debag').text(w);
        });

        $('#block-block-9').click(
            function () {
                left_m = (w - 220) / 2;
                $('.not-front #block-multiblock-1').fadeIn(200).css({'left': left_m});
            }
        );

        $(document).click(function(event) {
            if ($(event.target).closest("#block-block-9").length) return;
            $("#block-multiblock-1").fadeOut(200);
            event.stopPropagation();
        });


        /*----------------------- PLACEHOLDER ------------------------*/
        function placeholder(formId){

            if (typeof formId === 'undefined')
            {
                formId = '.webform-client-form';
            }

            $(formId+' label').each(function(i){
                var label=this;
                var input=$("#"+($(this).attr('for')).toString());
                $(input).blur(function(){
                    $(input).removeClass("focus");
                    if($(input).attr("value")==""){
                        $(label).stop();
                        $(label).animate({"opacity":1},0);
                    }
                });
                $(input).focus(function() {
                    $(input).addClass("focus")
                });
                if ($(input).attr("value")!=""){
                    $(label).css("opacity",0);

                }
                $(input).bind('mouseover', function (){
                    $(label).stop();
                    $(label).animate({"opacity":0},0);
                    $(formId+' label').css("cursor","text");
                });
                $(input).bind("mouseout", function (){
                    if (!$(input).hasClass("focus")){
                        if($(input).attr("value")==""){
                            $(label).stop();
                            $(label).animate({"opacity":1},0);
                        }
                    }
                });
                $(input).bind('keyup', function (){

                    if($(input).attr("value")==""){
                        $(label).stop();
                        $(label).animate({"opacity":0},0);
                    }
                    else {
                        $(label).stop();
                        $(label).animate({"opacity":0},0);
                    }
                });
            });
        }

        placeholder('#webform-client-form-20');
        placeholder('#block-webform-client-block-21');
        placeholder('#block-multiblock-3');

        $('#block-block-18 .lending-4-list p').each(function(){
            h = $(this).height();
            $(this).css('margin-top', -h/2);
        });
        /**
         *  отладочное
         */

        /*	less.refresh(true);
         setTimeout("go()",15000);
         */
    });
})(jQuery);