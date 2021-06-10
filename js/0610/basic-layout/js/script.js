'use strict'

// 기본 세팅 1
// $(document).ready(function(){

// })

// 기본 세팅2 이 방법이 제일 많이 쓰인다.
$(function(){
    // header scroll event
    var $toggle = $('.toggle'),
        $gnb = $('.gnb');

    $($toggle).click(function(){
        $(this).toggleClass('active')
        $($gnb).toggleClass('visible')
    })

    // gnb visible

    // dimmed effect

    // gnb__item window scroll

    // arrow up window scroll

})