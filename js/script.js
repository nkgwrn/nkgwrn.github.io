// PhotoSwipe
initPhotoSwipeFromDOM(".js-my-gallery");

$(function () {
  //iOS対策
  var ua = navigator.userAgent;
  if (/iPhone|iPad|iPod/.test(ua)) {
    $("body").addClass("ios");
  }

  //Worksのリンクを有効化
  $(".works-url, .works-title").on("click", "a", function (e) {
    e.stopPropagation();
  });

  //ページ内スクロール
  var $nav = $(".gnav");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      1000,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
    return false;
  });

  // //ページ内ナビゲーション:WIP!
  // var menu = $("#js-gnav li a"),
  //   menuLen = menu.length,
  //   con = $(".section"),
  //   conArr = [],
  //   conArrLen,
  //   pos;
  // $(window).on("load resize", function () {
  //   for (var i = 0; i < menuLen; i++) {
  //     pos = con.eq(i).offset().top + 10;
  //     conArr[i] = pos;
  //   }
  //   conArrLen = conArr.length;
  // });

  // $(window).on("load scroll", function () {
  //   posCheck();
  // });

  // function posCheck() {
  //   var scrollPos = $(window).scrollTop();
  //   for (var i = 0; i < conArrLen; i++) {
  //     if (conArr[i] <= scrollPos && scrollPos < conArr[i + 1]) {
  //       menu.removeClass("is-current");
  //       menu.eq(i).addClass("is-current");
  //       break;
  //     }
  //   }
  // }
});
