// Thay đổi nội dung búc thư ở đây
var letterContent ="Chúc mừng kỷ niệm 1000 ngày của tụi mình nhé! Thời gian trôi nhanh thật, mới ngày nào anh còn kiếm cớ trả bình nước để gặp em, mà giờ đã được 1000 ngày òyyy kkk. 1000 ngày tuy không dài, nhưng đủ để mình trải qua mọi cung bậc cảm xúc – từ những lúc vui vẻ, hạnh phúc đến những lần giận hờn, tranh cãi. Mỗi khoảnh khắc đó đều giúp tụi mình hiểu nhau hơn, yêu thương và trân trọng nhau hơn. Cảm ơn em – cô gái vừa nhỏ bé nhưng luôn mạnh mẽ, kiên nhẫn và luôn đồng hành cùng anh. Dù anh không hoàn hảo, em vẫn chọn ở lại, vẫn tin tưởng và cùng anh vượt qua mọi thử thách. Điều đó thật sự ý nghĩa với anh.Hôm nay, anh chỉ muốn nói rằng anh rất trân trọng những gì chúng ta đã có. Anh hy vọng tụi mình sẽ luôn bên nhau, cùng nhau đi qua mọi chặng đường phía trước, dù có khó khăn thế nào. Chúc cho tình yêu của mình luôn bền vững và hạnh phúc như hiện tại! ❤️🎂🎉🌹💖"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

// khi có hiệu ứng gõ chữ, khoá hiệu ứng click trong màn hình
var isWriting = false

function effectWrite () {
    isWriting = true
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
            // Khi viết xong ký tự cuối cùng, mở khóa click
            if (index === letterContentSplited.length - 1) {
                setTimeout(() => {
                    isWriting = false
                }, 100)
            }
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    // Kiểm tra nếu đang có hiệu ứng gõ chữ thì không cho phép click
    if (isWriting) {
        return
    }
    
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})