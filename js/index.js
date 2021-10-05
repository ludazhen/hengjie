//侧边导航
$('.assistant-switch').mouseover(function() {
    $('.assistant-switch').find('.imth').attr('src', "images/lsz/icon-assistant-close.jpg")
});
$('.stece-ul').mouseleave(function() {
    $('.assistant-switch').find('.imth').attr('src', "images/lsz/icon-assistant-open.jpg")
});
//微信
$('.assistant-wechat').mouseover(function() {
    $('.assistant-wechat-pop').slideDown();
});
$('.assistant-wechat').mouseleave(function() {
    $('.assistant-wechat-pop').slideUp();
});
var initThemeLogo = function() {
        var a = $(".logo img");
        $("header").hasClass("theme-dark") || $("header").hasClass("theme-dark-white") ? a.attr("src", a.attr("data-theme-dark")) : a.attr("src", a.attr("data-theme-bright"))
    },
    changeTheme = function(a) {
        var t = null == a || null == a.theme ? "theme-dark" : "theme-" + a.theme;
        $("header").removeClass().addClass("clearfix " + t);
        var e = $(".logo img");
        $("header").hasClass("theme-dark") || $("header").hasClass("theme-dark-white") ? e.attr("src", e.attr("data-theme-dark")) : e.attr("src", e.attr("data-theme-bright"))
    },
    extendAssistantClear = function(a, t, e) { setTimeout(function() {!$(t).hasClass("active") || $(a).hasClass("hover-this") || $(t).hasClass("hover-this") || ($(t).hide("fast").removeClass("active"), null != e && "undefined" !== e && e()) }, 100) },
    initAssistant = function() {
        var a, t, e, i, s, n, o, r, h;
        $(".assistant-switch").hover(function() { e = $(this), a = $(this).find("img").eq(0), t = $(this).next(), $(this).addClass("hover-this"), t.hasClass("active") || (a.attr("src", a.attr("data-icon-close")), t.addClass("active"), t.hover(function() { $(this).addClass("hover-this") }, function() { $(this).removeClass("hover-this"), extendAssistantClear(e, t, function() { a.attr("src", a.attr("data-icon-open")) }) }).slideDown("fast")) }, function() { $(this).removeClass("hover-this"), extendAssistantClear(e, t, function() { a.attr("src", a.attr("data-icon-open")) }) }), $(".assistant-banner").hover(function() { i = $(this), s = $(this).parent().find(".assistant-banner-pop"), $(this).addClass("hover-this"), s.hasClass("active") || (s.addClass("active"), s.hover(function() { $(this).addClass("hover-this") }, function() { $(this).removeClass("hover-this"), extendAssistantClear(i, s) }).slideDown("fast")) }, function() { $(this).removeClass("hover-this"), extendAssistantClear(i, s) }), $(".assistant-wechat").hover(function() { n = $(this), o = $(this).parent().find(".assistant-wechat-pop"), $(this).addClass("hover-this"), trackEvent("nav", "side_wechat", "mouseover"), s = $(this).parent().find(".assistant-banner-pop"), s.hasClass("active") || (o.addClass("active"), o.hover(function() { $(this).addClass("hover-this") }, function() { $(this).removeClass("hover-this"), extendAssistantClear(n, o) }).slideDown("fast")) }, function() { $(this).removeClass("hover-this"), extendAssistantClear(n, o) }), $(".social-wechat a").hover(function() { trackEvent("nav", "btm_wechat", "mouseover"), r = $(this), h = $(this).parent().find(".social-wechat-pop"), $(this).addClass("hover-this"), h.hasClass("active") || (h.addClass("active"), h.hover(function() { $(this).addClass("hover-this") }, function() { $(this).removeClass("hover-this"), extendAssistantClear(r, h) }).slideDown("fast")) }, function() { $(this).removeClass("hover-this"), extendAssistantClear(r, h) })
    },
    hackTheme = function(a) { void 0 === a || void 0 === typeof a || a ? ($("header").hasClass("mouseon") || $("header").addClass("mouseon"), $(".logo img").attr("src", $(".logo img").attr("data-theme-dark"))) : $("header").hasClass("mouseon") && $("header").removeClass("mouseon") },
    extendNavClear = function() { $("header .active").removeClass("active"), $(".docker-container-item").hide().removeClass("hover-list"), $(".docker-container").hide(), hackTheme(!1) },
    extendDelay = function(a, t) { setTimeout(function() { $(a).hasClass("active") && !$(a).hasClass("hover-link") && ($(a).hasClass("submenu") ? $(t).hasClass("active") && !$(t).hasClass("hover-list") && (extendNavClear(), initThemeLogo(), "undefined" != typeof mySwiper && mySwiper.startAutoplay()) : (extendNavClear(), initThemeLogo(), "undefined" != typeof mySwiper && mySwiper.startAutoplay())) }, 50) },
    initNav = function() {
        var a, t, e;
        $("header nav a").each(function() {
            $(this).hover(function() {
                a = $(this),
                    e = $(".docker-container"),
                    $(this).hasClass("submenu") && (t = $(".docker-container-" + $(this).attr("data-control"))).hasClass("active") || extendNavClear(), $(this).addClass("active").addClass("hover-link"), $(this).hasClass("submenu") && (hackTheme(), e.show(), (t = $(".docker-container-" + $(this).attr("data-control"))).addClass("active"), t.hover(function() { t.addClass("hover-list") }, function() { t.removeClass("hover-list"), extendDelay(a, t) }), t.slideDown("fast"))
            }, function() { $(this).removeClass("hover-link"), extendDelay(a, t) })
        })
    },
    initMask = function() {
        $(".toggle-mask").each(function() {
            var a = $(this).find(".mask").eq(0);
            a.hasClass("exclude-height"), $(this).hasClass("disable-animate") || ($(this).hasClass("revert-mask") ? $(this).hover(function() { a.fadeIn() }, function() { a.fadeOut() }) : $(this).hover(function() { a.fadeOut() }, function() { a.fadeIn() }))
        })
    },
    //移入更换图片
    initToggle = function() {
        if ($(".toggle-icon li").each(function() {
                var a = $(this).find("img").first();
                $(this).hover(function() {
                    $(this).hasClass("active") || void 0 !== a.attr("data-img-on") && a.attr("src", a.attr("data-img-on"))
                }, function() {
                    $(this).hasClass("active") || void 0 !== a.attr("data-img-off") && a.attr("src", a.attr("data-img-off"))
                });
            }), 0 === $(".toggle-icon li.active").length && !$(".toggle-icon").hasClass("exclude-default")) {
            $(".toggle-icon li").eq(0).addClass("active");
            var a = $(".toggle-icon li").eq(0).find("img").eq(0);
            a.attr("src", a.attr("data-img-on"));
        }
    },
    trackEvent = function(a, t) { ga("send", "event", a, "click", t), _smq.push(["custom", a, t]) };
$(function() { initThemeLogo(), initNav(), initMask(), initAssistant(), initToggle() });
//banner淡入淡出轮播图
var bannerindex = 0;
$('.next').click(function() {
        bannerindex++
        if (bannerindex > $(".banner-img").length - 1) {
            bannerindex = 0
        }
        bannerchangeImg()

    })
    //自定义动画
function bannerchangeImg() {
    $(".banner-img").eq(bannerindex).fadeIn(800).siblings(".banner-img").fadeOut(300)
    $('.banner-circle li').eq(bannerindex).addClass('circle-active').siblings('.banner-circle li').removeClass('circle-active')
}
//自动轮播
var bannerTimer = setInterval(function() {
    bannerindex++
    if (bannerindex > $(".banner-img").length - 1) {
        bannerindex = 0
    }
    bannerchangeImg()
}, 5000);
//点击小圆点
$('.banner-circle li').click(function() {
    bannerindex = $(this).index()
    bannerchangeImg()
});
// 鼠标移入关闭定时器
$('.banner-img').hover(function() {
        clearInterval(bannerTimer)
    },
    function() {
        clearInterval(bannerTimer)
        bannerTimer = setInterval(function() {
            bannerindex++
            if (bannerindex > $(".banner-img").length - 1) {
                bannerindex = 0
            }
            bannerchangeImg()
        }, 3000)
    });
$('.topo').mouseleave(function() {
    $(this).find('.fasde').hide();
});
$('.topo').mouseover(function() {
    $(this).find('.fasde').show();
});

$(window).scroll(function() {
    var scroTop = $(window).scrollTop();
    if (scroTop > 800) {
        $('.index-product-series').css('position', 'fixed');
        $('.index-product-series').css('padding', '0');
        $('.index-product-series').css('top', '0px');
        $('.index-product-series').css('width', '100%');
        $('.fet').css('margin-top', '-31px');
        $('.fet').css('margin-left', '0px');
        $('.toggle-icon').css('width', '80%');
        $('.topo').css('border-left', '0px');
        $('.img-responsive1').css('margin-left', '-20px');
        $('.toggle-icon').css('margin-bottom', '20px');
        $('.fasde').css('margin-top', '-30px')
    } else {
        $('.index-product-series').css('position', '');
        $('.index-product-series').css('padding', '4.5em');
        $('.index-product-series').css('top', '0px');
        $('.index-product-series').css('width', '100%');
        $('.fet').css('margin-top', '1.75em');
        $('.fet').css('margin-left', 'auto');
        $('.toggle-icon').css('width', '80%');
        $('.topo').css('border-left', 'dashed 1px #d4d4d4');
        $('.img-responsive1').css('margin-left', 'auto');
        $('.toggle-icon').css('margin-bottom', '20px')
        $('.fasde').css('margin-top', '0px')
    }
});
$(window).scroll(function() {
    var scroTop = $(window).scrollTop();
    if (scroTop > 100) {
        $('.footerf').fadeIn(500);
    } else {
        $('.footerf').fadeOut(500);
    }
});

//为返回顶部元素添加点击事件
$('.footerf').click(function() {
    //将当前窗口的内容区滚动高度改为0，即顶部
    $("html,body").animate({ scrollTop: 0 }, "fast");
});
//二维码显示
$('.social-wechat').mouseover(function() {
    $('.social-wechat-pop').fadeIn(200);
});
$('.social-wechat').mouseleave(function() {
    $('.social-wechat-pop').fadeOut(200);
});