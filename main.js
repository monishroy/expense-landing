$(function () {

    /* ── Theme ── */
    // Default to dark mode on first visit (ignore OS preference)
    var theme = localStorage.getItem('exp-theme') || 'dark';
    applyTheme(theme);

    $('#themeBtn').on('click', function () {
        theme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(theme);
        localStorage.setItem('exp-theme', theme);
    });

    function applyTheme(t) {
        $('html').attr('data-theme', t);
        var icon = t === 'dark' ? "<i class='bx bx-sun'></i>" : "<i class='bx bx-moon'></i>";
        $('#themeBtn').html(icon);
        if (t === 'dark') {
            $('.sc.dk').css('display', 'flex');
            $('.sc.lt').css('display', 'none');
        } else {
            $('.sc.dk').css('display', 'none');
            $('.sc.lt').css('display', 'flex');
        }
    }

    /* ── Nav scroll ── */
    $(window).on('scroll', function () {
        $('#nav').toggleClass('nav-scrolled', $(this).scrollTop() > 55);
    });

    /* ── Mobile menu ── */
    $('#ham').on('click', function () { $('#mob').slideToggle(220); });
    $('#mob a').on('click', function () { $('#mob').slideUp(200); });

    /* ── Scroll reveal ── */
    function chkReveal() {
        var wb = $(window).scrollTop() + $(window).height();
        $('.reveal:not(.on)').each(function () {
            if (wb > $(this).offset().top + 48) $(this).addClass('on');
        });
    }
    $(window).on('scroll', chkReveal);
    chkReveal();

    /* ── FAQ ── */
    $('.fq').on('click', function () {
        var $fi = $(this).closest('.fi');
        var open = $fi.hasClass('open');
        $('.fi.open').removeClass('open').find('.fa').slideUp(260);
        if (!open) { $fi.addClass('open'); $fi.find('.fa').slideDown(260); }
    });

    /* ── Smooth scroll ── */
    $('a[href^="#"]').on('click', function (e) {
        var $t = $(this.hash);
        if ($t.length) { e.preventDefault(); $('html,body').animate({ scrollTop: $t.offset().top - 74 }, 540); }
    });

});