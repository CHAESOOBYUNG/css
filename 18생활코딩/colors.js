var Links = {
     setColor: function(color) {
    // var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < alist.length) {
    //         console.log(alist[i]);
    //         alist[i].style.color = color;
    //         i += 1;
    //     } // js방식
    $('a').css('color', color); // jQuery로 구현
    }
} 
   
// function LinksSetColor(color) {
//     var alist = document.querySelectorAll('a');
//         var i = 0;
//         while(i < alist.length) {
//             console.log(alist[i]);
//             alist[i].style.color = color;
//             i += 1;
//         }
// }

var Body = {
    setColor: function(color) {
    var target = document.querySelector('body');
    target.style.color = color;
    }, // 객체의 property를 구분하기 위해 , 를 찍음.
    setBackgroundColor: function(color) {
    var target = document.querySelector('body');
    target.style.backgroundColor = color; 
    }
}
// function BodySetColor(color) {
//     var target = document.querySelector('body');
//     target.style.color = color;
// }

// function BodySetBackgroundColor(color) {
//     var target = document.querySelector('body');
//     target.style.backgroundColor = color; 
// }

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    }
    else {
        Body.setBackgroundColor('white'); 
        Body.setColor('black');
        self.value = 'night';  

        Links.setColor('blue');
    }
}