$(function(){
    $('.slide').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      fade: true,
    });
  });

  $(function(){　//ページの内容（HTMLやCSSなど）を全て読み込み準備が整ったら実行
    $('.btnHamburger').on('click', function(){　//.btnHamburgerがクリックされた時の処理
      $(this).toggleClass('is-active');　//.is-activeを付ける・外す
    });
  });

  // スムーススクロール
$(function(){
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  })
});

  // ハンバーガーメニューをクリックしたらクラスがアクティブに変わる
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
    })
  });