window.onload = function(){
  AOS.init();

  // 헤더 변형 및 고정
  let headerBtm = $('.header-btm');
  $(window).scroll(function(){
    // 스크롤바 상단의 위치
    let scY = $(window).scrollTop();    
    if(scY >= 80) {
      headerBtm.addClass('header-scroll');
      $('body').css('padding-top', 40);
    }else{
      headerBtm.removeClass('header-scroll');
      $('body').css('padding-top', 0);
    }
  });

  // FIX CONTROLLER:: 위, 아래로
  let goTop = $('.fc-moving-gotop');
  goTop.click(function(){
    $('html').animate({scrollTop:0}, 1000);
  });

  let goBtm = $('.fc-moving-gobtm');
  let btmY = $(document).height();
  goBtm.click(function(){
    $('html').animate({scrollTop:btmY}, 1000);
  });

  // 장바구니 카운트:: 상품 내 카트 버튼 누르면 헤더 카트의 갯수 변경
  let headerCartNumber = $('.header-cart-number');
  let cartCount = 0;
  headerCartNumber.html(cartCount);
  let addCart = $('.shopping-cart');
  $.each(addCart, function(index, item) {
    $(this).click(function(event){
      event.preventDefault();
      cartCount ++;
      headerCartNumber.html(cartCount);
    });

  });
};