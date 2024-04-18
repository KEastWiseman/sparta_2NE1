/*
    html이 준비되면 실행합니다.
*/
$(document).ready(function () {
    /*
        card 클래스를 가진 모든 태그를 찾아서 마우스를 올리면 컨테이너가 회전하고,
        마우스가 이탈하면 원위치로 돌아가도록 style을 변경하는 이벤트를 부여합니다.
    */
    $(".card").each(function (i) {
        $(this).mousemove(function (e) {
            let x = e.offsetX;
            let y = e.offsetY;
            let rotateY = -1 / 5 * x + 20;
            let rotateX = 1 / 30 * y - 10;
            $(this).css({ 'transform': `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }).css({ 'transition': `none` });
        });
        $(this).mouseleave(function (e) {
            $(this).css({ 'transform': `perspective(350px) rotateX(0deg) rotateY(0deg)` }).css({ 'transition': `ease 1s` });
        });
    });
});