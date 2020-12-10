
document.addEventListener('keydown',function(){
  console.log('안녕하세요!');
  console.log('제가 가장 좋아하는 스낵');
  console.log('오리온 고래밥으로 홈페이지를 만들어봤습니다.');
  console.log('아. 배고파ㅎㅎ');
  console.log('---------------------------------');
});

//상단 드롭메뉴
let hedy = document.getElementById('header');
let mainTitle = document.querySelectorAll('.mainMenus');
let subShow = document.getElementById('header-nav');
let redLogo = document.getElementById('logoMainz');
let menuImage = document.querySelectorAll('.pranchIcon');

for( let i = 0; i < mainTitle.length; i++){
 hedy.addEventListener('mouseover',function(e){
     hedy.classList.add('open');
     redLogo.classList.add('redLogo');
   for( let x = 0; x < mainTitle.length; x++){
     mainTitle[x].style.color = '#ac162c';
   }
   for( let y = 0; y < menuImage.length; y++){
     menuImage[y].classList.add('imgBlue');
   }
 });
 hedy.addEventListener('mouseout',function(e){
     hedy.classList.remove('open');
     redLogo.classList.remove('redLogo');
   for( let x =0; x < mainTitle.length; x++){
     mainTitle[x].style.color = '#fff';
   }

   for( let y = 0; y < menuImage.length; y++){
     menuImage[y].classList.remove('imgBlue');
   }
 });
}


//마우스 스크롤
let windowScroll = 0;

window.addEventListener('scroll',function(){
  if( window.scrollY > windowScroll){
    hedy.classList.add('blue');
  }else{
    hedy.classList.remove('blue');
  }
});

//스크롤 이벤트
let doc = document.documentElement;
let scrolls;
let phone = document.getElementById('talkPhone');


window.addEventListener('scroll',function(){
  scrolls = doc.scrollTop;
//  console.log(scrolls);
  if(scrolls > 2300){
     phone.classList.add('aniPhoneUp');
  }else{
     phone.classList.remove('aniPhoneUp');
  }
});

//팝업
let openJaws = document.getElementById('detailOpenone');
let openWhale = document.getElementById('detailOpentwo');

let popUp = document.getElementById('popupWrap');

let popUpJaws = document.getElementById('detailOne');
let popUpWhale = document.getElementById('detailTwo');

openJaws.addEventListener('click',function(){
  popUp.style.display = 'block';
  popUpJaws.style.opacity = 1;
});
openWhale.addEventListener('click',function(){
  popUp.style.display = 'block';
  popUpWhale.style.opacity = 1;
});
popUp.addEventListener('click',function(){
  popUp.style.display = 'none';
});