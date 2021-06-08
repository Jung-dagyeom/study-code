'use strict';

// window.onload = function(){
    var toggle = document.getElementById('toggle');
    var navbar = document.getElementById('.navbar');
    console.log(toggle);
    console.log(navbar);

// toggle을 클릭 했을때
    toggle.addEventListener('click', function(){
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    })
// navbar에 classListdp active 붙여줘


// arrow top 구현
// 1. 초기상태는 숨긴다 > css (완료)
// 2. 스크롤이 내려오면 보이게 한다.if
// 3. 스크롤이 일정부분 올라가면 숨기게 한다.else
// 4. arrow top을 클릭하면 스크롤을 최상단으로 올린다.
// addEventListener('scroll', function())

const arrowTop = document.getElementById('arrowTop')
document.addEventListener('scroll', function(){
    console.log('>>> scroll >>>');
    console.log(window.scrollY)
    if( window.scrollY > 73){
        arrowTop.classList.add('visible')
    }else{
        arrowTop.classList.remove('visible')
    }
})
// arrow top 클릭 시 scroll이 제일 위로 올라가게
arrowTop.addEventListener('click', function(event){
    console.log(event)
    // 
    e.preventDefault();
    // console.log('>>> click arrow top')
    window.scrollTo({ top: 0, behavior: 'smooth' })
})
