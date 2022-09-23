window.onload = function () {
  AOS.init();

  // 모바일 버튼 활성화
  let menuBtn = $(".mobile-menu-btn");
  let menuWrap = $(".mbmenu-wrap");
  menuBtn.click(function () {
    let result = menuBtn.hasClass("menu-btn-close");
    if (result) {
      menuBtn.removeClass("menu-btn-close");
      menuWrap.hide();
    } else {
      menuBtn.addClass("menu-btn-close");
      menuWrap.show();
    }
  });

  // 반응형 처리
  $(window).resize(function () {
    // 화면의 너비
    let temp = $(window).width();
    if (temp > 1200) {
      menuWrap.hide();
      menuBtn.removeClass("menu-btn-close");
    }
  });

  // 모바일 메뉴 바깥 부분 클릭시 닫기
  menuWrap.click(function () {
    menuBtn.removeClass("menu-btn-close");
    menuBtn.addClass("menu-btn-open");
    menuWrap.hide();
  });

  // 서브메뉴 숨겼다가 나타내기
  let mainMenu = $(".mbmenu > li");
  let mainMenuHeight = 50;
  let subMenu = $(".mbsubmenu");
  let subMenuItemHeight = 50;
  let subMenuArr = [];

  $.each(subMenu, function (index, item) {
    let count = $(this).find("li").length;
    subMenuArr[index] = mainMenuHeight + subMenuItemHeight * count;
  });

  $.each(mainMenu, function (index, item) {
    $(this).mouseenter(function () {
      $(this).css("height", subMenuArr[index]);
    });
    $(this).mouseleave(function () {
      $(this).css("height", mainMenuHeight);
    });
  });

  // 헤더 변형 및 고정
  let headerBtm = $(".header-btm");
  $(window).scroll(function () {
    // 스크롤바 상단의 위치
    let scY = $(window).scrollTop();
    if (scY >= 80) {
      headerBtm.addClass("header-scroll");
      $("body").css("padding-top", 40);
      $(".mobile-menu-btn").css("");
    } else {
      headerBtm.removeClass("header-scroll");
      $("body").css("padding-top", 0);
    }
  });

  // FIX CONTROLLER:: 위, 아래로
  let goTop = $(".fc-moving-gotop");
  goTop.click(function () {
    $("html").animate({ scrollTop: 0 }, 1000);
  });

  let goBtm = $(".fc-moving-gobtm");
  let btmY = $(document).height();
  goBtm.click(function () {
    $("html").animate({ scrollTop: btmY }, 1000);
  });

  // 장바구니 카운트:: 상품 내 카트 버튼 누르면 헤더 카트의 갯수 변경
  let headerCartNumber = $(".header-cart-number");
  let cartCount = 0;
  headerCartNumber.html(cartCount);
  let addCart = $(".shopping-cart");
  $.each(addCart, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();
      cartCount++;
      headerCartNumber.html(cartCount);
    });
  });

  // LIKE 수 카운트
  let likeBtn = $(".likebtn > b");
  likeBtn.html(0);
  let addLike = $(".likebtn");
  $.each(addLike, function (index, item) {
    $(this).click(function (event) {
      event.preventDefault();
      let tempCount = $(this).find(">b").text();
      tempCount = parseInt(tempCount) + 1;
      $(this).find(">b").html(tempCount);
    });
  });
};

$(document).ready(function () {
  // Modal 기능
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");
  // click() 을 이용해서 hide() 해보자!
  modalClose.click(function () {
    // modalWrap.hide();
    modalWrap.stop().fadeOut(300);
    $("html").css("overflow", "auto");
  });
  $("html").keydown(function (key) {
    if (key.keyCode == 13) {
      modalWrap.stop().fadeOut(200);
      $("html").css("overflow", "auto");
    }
  });
  let modalMain = $(".modal-main");
  modalMain.click(function (event) {
    event.stopPropagation();
  });
  modalWrap.click(function () {
    modalWrap.stop().fadeOut(200);
    $("html").css("overflow", "auto");
  });
});
