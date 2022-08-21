window.onload = function(){
  // 장바구니 카운트 기능
  // let headerCartNumber = $('.header-cart-number');
  // let cartCout = 0;
  // headerCartNumber.html(cartCout);
  // let newItem = $('.new-item a');
  // $.each(newItem, function(index, item) {

  //   $(this).click(function(event){
  //     // a 태그라면 href 를 막는다.
  //     event.preventDefault();
  //     cartCout ++;
  //     headerCartNumber.html(cartCout);
  //   });

  // });

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
};