var fff = document.getElementsByTagName('li');
var abo = document.getElementsByTagName('a');
var bg1 = document.getElementById('bg1');
var bg = document.getElementsByClassName('first-screen')[0];
var content1 = document.getElementsByClassName('content1')[0];
var content2 = document.getElementsByClassName('content2')[0];
var content3 = document.getElementsByClassName('content3')[0];
var content4 = document.getElementsByClassName('content4')[0];
var header = document.getElementsByClassName('header')[0];
var left = document.getElementById('left');
var right = document.getElementById('right');
var tmp = 1;
bg.style.height = window.screen.availHeight + 'px';
//bg.style.width = window.screen.availWidth + 'px';
fff[0].style.opacity = 1;
content1.style = 'display: block;position:absolute;z-index:1;width:100%;top:' + window.screen.availHeight + 'px';


function removeClass(curEle, strClass) {
    var aryClass = strClass.replace(/(^ +)|( +$)/g, '').split(/\s+/g);
    for (var i = 0; i < aryClass.length; i++) {
        //var reg=new RegExp('(^| +)'+aryClass[i]+'( +|$)');
        var reg = new RegExp('\\b' + aryClass[i] + '\\b');
        if (reg.test(curEle.className)) {
            curEle.className = curEle.className.replace(reg, ' ').replace(/(^ +)|( +$)/g, '').replace(/\s+/g, ' ');
        }
    }
}
function offset(curEle) {
    var l = curEle.offsetLeft;
    var t = curEle.offsetTop;
    var par = curEle.offsetParent;
    while (par) {
        if (window.navigator.userAgent.indexOf('MSIE 8.0') === -1) {
            l += par.clientLeft;
            t += par.clientTop;
        }
        l += par.offsetLeft;
        t += par.offsetTop;
        par = par.offsetParent;
    }
    return {left: l, top: t};
}

function click() {
    abo[0].onclick = function () {
        if (fff[2].style.opacity == 1) {
            bg.className += ' ' + 'fir-act2-1';
            setTimeout(function () {
                removeClass(bg, 'fir-act2-1')
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'fir-act3-4')

                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont2-11'
            }, 1000);
        } else if (fff[4].style.opacity == 1) {
            bg.className += ' ' + 'fir-act3-1';
            setTimeout(function () {
                removeClass(bg, 'fir-act3-1');
                removeClass(bg, 'fir-act2-3');
                removeClass(bg, 'fir-act4-3');
                removeClass(bg, 'fir-act3-4');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont3-11'
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg.className += ' ' + 'fir-act4-1';
            setTimeout(function () {
                removeClass(bg, 'fir-act4-1');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont4-11'
            }, 1000);
        }

        bg1.src = 'img/bg1.png'
        fff[0].style.opacity = 1;
        if (fff[0].style.opacity == 1) {
            fff[2].style.opacity = .5;
            fff[4].style.opacity = .5;
            fff[6].style.opacity = .5;
        }

        content2.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'none';
        content1.style.display = 'block';
        content1.style.position = 'absolute';
        content1.style.zIndex = 1;
        content1.style.width = '100%';
        content1.style.top = window.screen.availHeight + 'px';
    };
    abo[1].onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg.className += ' ' + 'fir-act1-2';
            setTimeout(function () {
                removeClass(bg, 'fir-act1-2');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont1-21'
            }, 1000);
        } else if (fff[4].style.opacity == 1) {
            bg.className += ' ' + 'fir-act3-2';
            setTimeout(function () {
                removeClass(bg, 'fir-act3-2');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont3-21'
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg.className += ' ' + 'fir-act4-2';
            setTimeout(function () {
                removeClass(bg, 'fir-act4-2');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont4-21'
            }, 1000);
        }
        bg1.src = 'img/bg2.png';
        fff[2].style.opacity = 1;
        if (fff[2].style.opacity == 1) {
            fff[0].style.opacity = .5;
            fff[4].style.opacity = .5;
            fff[6].style.opacity = .5;
        }

        content1.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'none';
        content2.style.display = 'block';
        content2.style.position = 'absolute';
        content2.style.zIndex = 1;
        content2.style.width = '100%';
        content2.style.top = window.screen.availHeight + 'px';


    };
    abo[2].onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg.className += ' ' + 'fir-act1-3';
            setTimeout(function () {
                removeClass(bg, 'fir-act1-3');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3');
                removeClass(bg, 'fir-act3-4')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont1-31'
            }, 1000);
        } else if (fff[2].style.opacity == 1) {
            bg.className += ' ' + 'fir-act2-3';
            setTimeout(function () {
                removeClass(bg, 'fir-act2-3');
                removeClass(bg, 'fir-act4-3');
                removeClass(bg, 'fir-act3-4');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont2-31'
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg.className += ' ' + 'fir-act4-3';
            setTimeout(function () {
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'fir-act3-4')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont4-31'
            }, 1000);
        }
        bg1.src = 'img/bg3.png';
        fff[4].style.opacity = 1;
        if (fff[4].style.opacity == 1) {
            fff[0].style.opacity = .5;
            fff[2].style.opacity = .5;
            fff[6].style.opacity = .5;
        }

        content1.style.display = 'none';
        content2.style.display = 'none';
        content4.style.display = 'none';
        content3.style.display = 'block';
        content3.style.position = 'absolute';
        content3.style.zIndex = 1;
        content3.style.width = '100%';
        content3.style.top = window.screen.availHeight + 'px';


    };
    abo[3].onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg.className += ' ' + 'fir-act1-4';
            setTimeout(function () {
                removeClass(bg, 'fir-act1-4');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3');
                removeClass(bg, 'fir-act3-4')

                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont1-41'
            }, 1000);
        } else if (fff[2].style.opacity == 1) {
            bg.className += ' ' + 'fir-act2-4';
            setTimeout(function () {
                removeClass(bg, 'fir-act2-4')
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'fir-act3-4')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont2-41'
            }, 1000);
        } else if (fff[4].style.opacity == 1) {
            bg.className += ' ' + 'fir-act3-4';
            setTimeout(function () {
                removeClass(bg, 'fir-act3-4');
                removeClass(bg, 'fir-act2-3')
                removeClass(bg, 'fir-act4-3')
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont3-41'
            }, 1000);
        }
        bg1.src = 'img/bg4.png';
        fff[6].style.opacity = 1;
        if (fff[6].style.opacity == 1) {
            fff[0].style.opacity = .5;
            fff[2].style.opacity = .5;
            fff[4].style.opacity = .5;
        }

        content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'none';
        content4.style.display = 'block';
        content4.style.position = 'absolute';
        content4.style.zIndex = 1;
        content4.style.width = '100%';
        content4.style.top = window.screen.availHeight + 'px';

    };

    right.onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg.className += ' ' + 'fir-act1-2';
            setTimeout(function () {
                removeClass(bg, 'fir-act1-2');
                removeClass(bg, 'fir-act1-3');
                removeClass(bg, 'fir-act1-4');
                removeClass(bg, 'fir-act2-1');
                removeClass(bg, 'fir-act2-3');
                removeClass(bg, 'fir-act2-4');
                removeClass(bg, 'fir-act3-1');
                removeClass(bg, 'fir-act3-2');
                removeClass(bg, 'fir-act3-4');
                removeClass(bg, 'fir-act4-1');
                removeClass(bg, 'fir-act4-2');
                removeClass(bg, 'fir-act4-3');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');
                bg.className += ' ' + 'cont1-21'
            }, 1000);
        } else if (fff[2].style.opacity == 1) {
            bg.className += ' ' + 'fir-act2-3';
            setTimeout(function () {
                removeClass(bg, 'fir-act2-3');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont2-31'
            }, 1000);
        } else if (fff[4].style.opacity == 1) {
            bg.className += ' ' + 'fir-act3-4';
            setTimeout(function () {
                removeClass(bg, 'fir-act3-4');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont3-41'
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg.className += ' ' + 'fir-act4-1';
            setTimeout(function () {
                removeClass(bg, 'fir-act4-1');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont4-11'
            }, 1000);
        }


        if (content1.style.display == 'block') {
            tmp = 1
            bg1.src = 'img/bg2.png';
            fff[2].style.opacity = 1;
            if (fff[2].style.opacity = 1) {
                fff[0].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }

            content1.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content2.style.display = 'block';
            content2.style.position = 'absolute';
            content2.style.zIndex = 1;
            content2.style.width = '100%';
            content2.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)
        } else if (content2.style.display == 'block') {
            tmp = 2
            bg1.src = 'img/bg3.png';
            fff[4].style.opacity = 1;
            if (fff[4].style.opacity = 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content1.style.display = 'none';
            content2.style.display = 'none';
            content4.style.display = 'none';
            content3.style.display = 'block';
            content3.style.position = 'absolute';
            content3.style.zIndex = 1;
            content3.style.width = '100%';
            content3.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        } else if (content3.style.display == 'block') {
            tmp = 3
            bg1.src = 'img/bg4.png';
            fff[6].style.opacity = 1;
            if (fff[6].style.opacity = 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
            }

            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'block';
            content4.style.position = 'absolute';
            content4.style.zIndex = 1;
            content4.style.width = '100%';
            content4.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        } else if (content4.style.display == 'block') {
            tmp = 4
            bg1.src = 'img/bg1.png'
            fff[0].style.opacity = 1;
            if (fff[0].style.opacity = 1) {
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content1.style.display = 'block';
            content1.style.position = 'absolute';
            content1.style.zIndex = 1;
            content1.style.width = '100%';
            content1.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        }
        ;
    }
    left.onclick = function () {
        if (fff[0].style.opacity == 1) {
            bg.className += ' ' + 'fir-act1-4';
            setTimeout(function () {
                removeClass(bg, 'fir-act1-4');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont1-41'
            }, 1000);
        } else if (fff[2].style.opacity == 1) {
            bg.className += ' ' + 'fir-act2-1';
            setTimeout(function () {
                removeClass(bg, 'fir-act2-1');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont2-11'
            }, 1000);
        } else if (fff[4].style.opacity == 1) {
            bg.className += ' ' + 'fir-act3-2';
            setTimeout(function () {
                removeClass(bg, 'fir-act3-2');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont3-21'
            }, 1000);
        } else if (fff[6].style.opacity == 1) {
            bg.className += ' ' + 'fir-act4-3';
            setTimeout(function () {
                removeClass(bg, 'fir-act4-3');
                removeClass(bg, 'cont1-21');
                removeClass(bg, 'cont1-31');
                removeClass(bg, 'cont1-41');
                removeClass(bg, 'cont2-11');
                removeClass(bg, 'cont2-31');
                removeClass(bg, 'cont2-41');
                removeClass(bg, 'cont3-11');
                removeClass(bg, 'cont3-21');
                removeClass(bg, 'cont3-41');
                removeClass(bg, 'cont4-11');
                removeClass(bg, 'cont4-21');
                removeClass(bg, 'cont4-31');

                bg.className += ' ' + 'cont4-31'
            }, 1000);
        }


        if (content1.style.display == 'block') {
            tmp = 1

            bg1.src = 'img/bg4.png';
            fff[6].style.opacity = 1;
            if (fff[6].style.opacity = 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
            }


            content1.style.display = 'none';
            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'block';
            content4.style.position = 'absolute';
            content4.style.zIndex = 1;
            content4.style.width = '100%';
            content4.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)


        } else if (content2.style.display == 'block') {
            tmp = 2
            bg1.src = 'img/bg1.png'
            fff[0].style.opacity = 1;
            if (fff[0].style.opacity = 1) {
                fff[2].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content2.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content1.style.display = 'block';
            content1.style.position = 'absolute';
            content1.style.zIndex = 1;
            content1.style.width = '100%';
            content1.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)


        } else if (content3.style.display == 'block') {
            tmp = 3
            bg1.src = 'img/bg2.png';
            fff[2].style.opacity = 1;
            if (fff[2].style.opacity = 1) {
                fff[0].style.opacity = .5;
                fff[4].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content1.style.display = 'none';
            content3.style.display = 'none';
            content4.style.display = 'none';
            content2.style.display = 'block';
            content2.style.position = 'absolute';
            content2.style.zIndex = 1;
            content2.style.width = '100%';
            content2.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        } else if (content4.style.display == 'block') {
            tmp = 4
            bg1.src = 'img/bg3.png';
            fff[4].style.opacity = 1;
            if (fff[4].style.opacity = 1) {
                fff[0].style.opacity = .5;
                fff[2].style.opacity = .5;
                fff[6].style.opacity = .5;
            }


            content1.style.display = 'none';
            content2.style.display = 'none';
            content4.style.display = 'none';
            content3.style.display = 'block';
            content3.style.position = 'absolute';
            content3.style.zIndex = 1;
            content3.style.width = '100%';
            content3.style.top = window.screen.availHeight + 'px';
            scroll(0, 0)

        }
    }

}
click();


function changeContent() {
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';

    window.onscroll = function () {
        var s = document.body.scrollTop || document.documentElement.scrollTop
        var c = document.body.clientHeight || document.documentElement.clientHeight
        var cs = c + s;
        if (s >= bg.clientHeight) {
            header.style = 'background: rgba(128,128,128,0.5);'
        } else {
            header.style = ''
        }
        var part11 = document.getElementsByClassName('part3')[0];
        if (offset(part11).top <= cs) {
            if(part11.className=='part3')
            part11.className += ' ' + 'fade';


            var part11_1 = document.getElementsByClassName('part4')[0];
            part11_1.style.opacity='0';
            if(offset(part11_1).top <= cs){
                part11_1.style.opacity='1'
            }

        }


        var part12 = document.getElementsByClassName('part5')[0];
        if (offset(part12).top <= cs) {
            if(part12.className=='part5')
                part12.className += ' ' + 'fade'
        }
        var part13 = document.getElementsByClassName('part6')[0];
        if (offset(part13).top <= cs) {
            if(part13.className=='part6')
                part13.className += ' ' + 'fade'
        }
        var part14 = document.getElementsByClassName('part7')[0];
        if (offset(part14).top <= cs) {
            if(part14.className=='part7')
                part14.className += ' ' + 'fade'
        }
        var part15 = document.getElementsByClassName('part8')[0];
        if (offset(part15).top <= cs) {
            if(part15.className=='part8')
                part15.className += ' ' + 'fade'
        }
        var part16 = document.getElementsByClassName('part9')[0];
        if (offset(part16).top <= cs) {
            if(part16.className=='part9')
                part16.className += ' ' + 'fade'
        }
        var part17 = document.getElementsByClassName('part10')[0];
        if (offset(part17).top <= cs) {
            if(part17.className=='part10')
                part17.className += ' ' + 'fade'
        }
        var part21 = document.getElementsByClassName('part3')[1];
        if (offset(part21).top <= cs && offset(part21).top!=0) {
            if(part21.className=='part3')
                part21.className += ' ' + 'fade'
        }
        var part22 = document.getElementsByClassName('part4')[1];
        if (offset(part22).top <= cs && offset(part22).top!=0) {
            if(part22.className=='part4')
                part22.className += ' ' + 'fade'
        }
        var part23 = document.getElementsByClassName('part5')[1];
        if (offset(part23).top <= cs && offset(part23).top!=0) {
            if(part23.className=='part5')
                part23.className += ' ' + 'fade'
        }
        var part24 = document.getElementsByClassName('part6')[1];
        if (offset(part24).top <= cs && offset(part24).top!=0) {
            if(part24.className=='part6')
                part24.className += ' ' + 'fade'
        }
        var part25 = document.getElementsByClassName('part7')[1];
        if (offset(part25).top <= cs && offset(part25).top!=0) {
            if(part25.className=='part7')
                part25.className += ' ' + 'fade'
        }
        var part26 = document.getElementsByClassName('part8')[1];
        if (offset(part26).top <= cs && offset(part26).top!=0) {
            if(part26.className=='part8')
                part26.className += ' ' + 'fade'
        }
        var part27 = document.getElementsByClassName('part10')[1];
        if (offset(part27).top <= cs && offset(part27).top!=0) {
            if(part27.className=='part10')
                part27.className += ' ' + 'fade'
        }
        var part28 = document.getElementsByClassName('part11')[1];
        if (offset(part28).top <= cs && offset(part28).top!=0) {
            if(part28.className=='part11')
                part28.className += ' ' + 'fade'
        }
        var part29 = document.getElementsByClassName('part12')[1];
        if (offset(part29).top <= cs && offset(part29).top!=0) {
            if(part29.className=='part12')
                part29.className += ' ' + 'fade'
        }
        var part310 = document.getElementsByClassName('part13')[0];
        if (offset(part310).top <= cs && offset(part310).top!=0) {
            if(part310.className=='part13')
                part310.className += ' ' + 'fade'
        }
        var part311 = document.getElementsByClassName('part15')[0];
        if (offset(part311).top <= cs && offset(part311).top!=0) {
            if(part311.className=='part15')
                part311.className += ' ' + 'fade'
        }
        var part312 = document.getElementsByClassName('part16')[0];
        if (offset(part312).top <= cs && offset(part312).top!=0) {
            if(part312.className=='part16')
                part312.className += ' ' + 'fade'
        }
        var part313 = document.getElementsByClassName('part17')[0];
        if (offset(part313).top <= cs && offset(part313).top!=0) {
            if(part313.className=='part17')
                part313.className += ' ' + 'fade'
        }
        var part314 = document.getElementsByClassName('part19')[0];
        if (offset(part314).top <= cs && offset(part314).top!=0) {
            if(part314.className=='part19')
                part314.className += ' ' + 'fade'
        }
        var part315 = document.getElementsByClassName('part20')[0];
        if (offset(part315).top <= cs && offset(part315).top!=0) {
            if(part315.className=='part20')
                part315.className += ' ' + 'fade'
        }
        var part316 = document.getElementsByClassName('part21')[0];
        if (offset(part316).top <= cs && offset(part316).top!=0) {
            if(part316.className=='part21')
                part316.className += ' ' + 'fade'
        }
        var part317 = document.getElementsByClassName('part22')[0];
        if (offset(part317).top <= cs && offset(part317).top!=0) {
            if(part317.className=='part22')
                part317.className += ' ' + 'fade'
        }
        var part318 = document.getElementsByClassName('part24')[0];
        if (offset(part318).top <= cs && offset(part318).top!=0) {
            if(part318.className=='part24')
                part318.className += ' ' + 'fade'
        }
        var part319 = document.getElementsByClassName('part25')[0];
        if (offset(part319).top <= cs && offset(part319).top!=0) {
            if(part319.className=='part25')
                part319.className += ' ' + 'fade'
        }
        var part320 = document.getElementsByClassName('part26')[0];
        if (offset(part320).top <= cs && offset(part320).top!=0) {
            if(part320.className=='part26')
                part320.className += ' ' + 'fade'
        }
        var part321 = document.getElementsByClassName('part27')[0];
        if (offset(part321).top <= cs && offset(part321).top!=0) {
            if(part321.className=='part27')
                part321.className += ' ' + 'fade'
        }
        var part322 = document.getElementsByClassName('part28')[0];
        if (offset(part322).top <= cs && offset(part322).top!=0) {
            if(part322.className=='part28')
                part322.className += ' ' + 'fade'
        }
        var part323 = document.getElementsByClassName('part29')[0];
        if (offset(part323).top <= cs && offset(part323).top!=0) {
            if(part323.className=='part29')
                part323.className += ' ' + 'fade'
        }
        var part324 = document.getElementsByClassName('part30')[0];
        if (offset(part324).top <= cs && offset(part324).top!=0) {
            if(part324.className=='part30')
                part324.className += ' ' + 'fade'
        }
        var part325 = document.getElementsByClassName('part31')[0];
        if (offset(part325).top <= cs && offset(part325).top!=0) {
            if(part325.className=='part31')
                part325.className += ' ' + 'fade'
        }
        var part326 = document.getElementsByClassName('part32')[0];
        if (offset(part326).top <= cs && offset(part326).top!=0) {
            if(part326.className=='part32')
                part326.className += ' ' + 'fade'
        }
        var part41 = document.getElementsByClassName('part3')[3];
        if (offset(part41).top <= cs && offset(part41).top!=0) {
            if(part41.className=='part3')
                part41.className += ' ' + 'fade'
        }
        var part41_1 = document.getElementsByClassName('part4')[3];
        part41_1.style.opacity='0';
        if(offset(part41_1).top <= cs){
            part41_1.style.opacity='1'
        }

        var part42 = document.getElementsByClassName('part5')[2];
        if (offset(part42).top <= cs && offset(part42).top!=0) {
            if(part42.className=='part5')
                part42.className += ' ' + 'fade'
        }
        var part42_1 = document.getElementsByClassName('part6')[2];
        part42_1.style.opacity='0';
        if(offset(part42_1).top <= cs){
            part42_1.style.opacity='1'
        }
        var part43 = document.getElementsByClassName('part7')[2];
        if (offset(part43).top <= cs && offset(part43).top!=0) {
            if(part43.className=='part7')
                part43.className += ' ' + 'fade'
        }
        var part43_1 = document.getElementsByClassName('part8')[2];
        part43_1.style.opacity='0';
        if(offset(part43_1).top <= cs){
            part43_1.style.opacity='1'
        }
        var part44 = document.getElementsByClassName('part9')[2];
        if (offset(part44).top <= cs && offset(part44).top!=0) {
            if(part44.className=='part9')
                part44.className += ' ' + 'fade'
        }
        var part44_1 = document.getElementsByClassName('part10')[2];
        part44_1.style.opacity='0';
        if(offset(part44_1).top <= cs){
            part44_1.style.opacity='1'
        }
        var part45 = document.getElementsByClassName('part11')[2];
        if (offset(part45).top <= cs && offset(part45).top!=0) {
            if(part45.className=='part11')
                part45.className += ' ' + 'fade'
        }
        var part46 = document.getElementsByClassName('part12')[2];
        if (offset(part46).top <= cs && offset(part46).top!=0) {
            if(part46.className=='part12')
                part46.className += ' ' + 'fade'
        }
        var part47 = document.getElementsByClassName('part13')[1];
        if (offset(part47).top <= cs && offset(part47).top!=0) {
            if(part47.className=='part13')
                part47.className += ' ' + 'fade'
        }
        var part48 = document.getElementsByClassName('part14')[1];
        if (offset(part48).top <= cs && offset(part48).top!=0) {
            if(part48.className=='part14')
                part48.className += ' ' + 'fade'
        }

    }





}
changeContent();








