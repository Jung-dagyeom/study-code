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
const aboutSection = document.getElementById('about')
const aboutHeight = aboutSection.clientHeight;
const header = document.getElementById('header')
// js 높이값 구하는 것 clientHeight
// console.log(aboutSection.clientHeight);

document.addEventListener('scroll', function(){
   
    if( window.scrollY > aboutHeight){
        arrowTop.classList.add('visible')
    }else{
        arrowTop.classList.remove('visible')
    }
    // 스크롤이 되었을때 header가 fixed가 되어라
    if(window.scrollY > 0){
        header.classList.add('fixedHead');
    }else{
        header.classList.remove('fixedHead');
    }
})
// arrow top 클릭 시 scroll이 제일 위로 올라가게
arrowTop.addEventListener('click', function(event){
    // event가 발생하면 event 객체는 자동으로 전달된다.
    // a 태그는 기본적으로 이동의 기둥을 가지고 있다.
    // 그래서 scroll To 이전에 화면 이동이 발생해 버린다.
    // 그러므로 preventDefault()로 막는다.
    event.preventDefault();
    // console.log('>>> click arrow top')
    window.scrollTo({ top: 0, behavior: 'smooth' })
});
// navbar 클릭 시 스크롤 이동
var navbaritem = document.querySelectorAll('.navbar__item a');
console.log(navbarItem);
navbaritem[0].addEventListener('click', function(event){
    navbarItem[0].scrollIntoView({behavior: "smooth"})
})
