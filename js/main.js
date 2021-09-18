const backToTop = document.getElementById('back-to-top');

window.onscroll = function () {
    if (window.scrollY === 0) {
        backToTop.style.display = "none"
    } else {
        backToTop.style.display = "block";
    }
};

// const nayok = { 
//     name: "Salman Shah" ,
//     birthPlace:"sylhet" , 
//     firstSerial: "Pathor Somoy"
//   }

//   const{name, firstSerial} = nayok;
//   console.log(nayok);

let ul = `<li>Bou<li>`; 
ul +=  `<li>Jamai<li>`; 
console.log(ul);