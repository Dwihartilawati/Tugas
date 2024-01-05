const container = document.querySelector('.container')
const photo = document.querySelector('.photo')
const thumb = document.querySelectorAll('.thumb')

// thumb.forEach(el => {
//     el.addEventListener('click', e => {
//         photo.src = e.target.src
//         console.log(e.target.src)
//     })
// })

container.addEventListener('click', function (e){
    if(e.target.className == 'thumb'){
        photo.src = e.target.src
    }
})


