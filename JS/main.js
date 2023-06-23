// const number = [1,8,2,6,8,10];

// // number.forEach(function xyz(num){
// //     console.log(num);
// // })

// console.log(number.indexOf(10));

// slide-image = [0,1,2,3]

let slider = document.querySelectorAll(".slideImage");
let count = 0;
function prev(){
    count--
    slideImg()
}

function next(){
    count++
    slideImg()
}

slider.forEach(function xyz(slide,index){
    slide.style.left = `${index * 100 }%`
})


let slideImg = () => {
    slider.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${count * 100}%)`
        }
    )
}





