//js를 분리하여 재사용 가능
let as = document.querySelectorAll("a");

function night() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector("body").style.color = "white";
  //jquery:$(‘body’).css(‘backgroundColor’,”black”).css(‘color’,’white’)
  for (let i = 0; i < as.length; i = i + 1) {
    as[i].style.color = "white";
  }
  //jquery:$(‘a’).css(‘color’,’white’)
  // 이 버튼의 value값을 day로 변경한다.
}
//+jquery toggle: <div id="target">toogle</div> <input type="button" value="hide/show" onclick="$('#target').toggle();">
function day() {
  document.querySelector("body").style.backgroundColor = "white";
  document.querySelector("body").style.color = "black";
  // 이 버튼의 value값을 night로 변경한다.
  for (let i = 0; i < as.length; i = i + 1) {
    as[i].style.color = "black";
  }
}
//외부에서 사용할 function
export function dayNight(mode) {
  if (mode === "night") night();
  else day();
}
