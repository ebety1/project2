var ar = document.getElementById('ar')
var en = document.getElementById('en')
var img = document.getElementById('img')
var title = document.getElementById('title')
var text = document.getElementById('text')

ar.onclick = ()=>{
    setLang('ar')
    localStorage.setItem('save','ar')
}
en.onclick = ()=>{
    setLang('en')
    localStorage.setItem('save','en')
}
onload = ()=>{
    setLang(localStorage.getItem('save'))
}


function setLang(getLang){
    if(getLang === 'ar'){
        img.src = 'img/ar.png'
        title.innerHTML = 'أيفون 3000 الجديد'
        text.style.direction = 'rtl'
        text.innerHTML  = `الجديد كليا والأكثر أناقة حيث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العام2067 الجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العامالجديد كليا والأكثر أناقة يحث يعتبر هذا الأيفون أفخم ماصنعت ابل منذ مطلع هذا العام`
    }else if(getLang === 'en'){
        img.src = 'img/en.png'
        title.innerHTML = 'the new iPhon 3000'
        text.innerHTML = ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores autem cupiditate eum dicta, ex at nulla nobis nesciunt sit provident ipsa, dolor maxime similique ut? Earum reiciendis aliquam ducimus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores autem cupiditate eum dicta, ex at nulla nobis nesciunt sit provident ipsa, dolor maxime similique ut? Earum reiciendis Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati asperiores autem cupiditate eum dicta, ex at nulla nobis nesciunt sit provident ipsa, dolor maxime similique ut? Earum reiciendis.'
    }
}
