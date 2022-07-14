//==============Render fuction======================

function render(d) {
    $(".video__lenta").html("")
    let sanoq = 0
    d.map((i) => {
        let card = `
            <div class="col-6 col-md-4  col-lg-3" >
               <iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen width="100%" height="45%" class="" src="${i.src}" ></iframe>
                <div><p>${i.title}</p></div>
                <button class="btn btn_dalete" onclick="deleteFun(${sanoq})" style="float:left;color: rgb(143, 26, 26);s" >Delete</button>
                <button onclick="editeFun(${sanoq})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn" style="float:right;color: rgb(8, 89, 8); " >Edite</button><br><br>
                <div><h3>${i.date}</h3></div>
            </div>  
        `
        $(".video__lenta").append(card)
        sanoq++
    })
}
render(video)

//==============Search==================
$(".search").on("input", () => {
    let value = $(".search").val()
    let result = video.filter(item => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })
    render(result)
})

//==========Categories fuction============
$(".all").on("click", () => {
    render(video)
})

$(".it").on("click", () => {
    let it = video.filter(i => {
        return i.categories.includes("it")
    })
    render(it)
})

$(".sport").on("click", () => {
    let sport = video.filter(i => {
        return i.categories.includes("sport")
    })
    render(sport)
})

$(".muzik").on("click", () => {
    let muzik = video.filter(i => {
        return i.categories.includes("muzik")
    })
    render(muzik)
})

//=======ADDelement function======== 
$(".btn_submit").on("click", () => {
    let newUrl = $(".inUrl").val()
    let newTitle = $(".inTitle").val()
    let newDate = $(".inDate").val()
    let newCat = $(".inCat").val()
    video.push({
        src: newUrl,
        title: newTitle,
        date: newDate,
        categories: newCat
    })
    render(video)
})

// ==============Delete fuction===========
function deleteFun(sanoq) {
    video.splice(sanoq, 1)
    render(video)
}

//=================Edite fuction===========

let imageSrc
let currentEditedItemIndex = 0
function editeFun(index) {
    currentEditedItemIndex = index
    imageSrc = video[currentEditedItemIndex].src
    $(".eUrl").val(" ")
    $(".eTitle").val(video[index].title)
    $(".eDate").val(video[index].date)
    $(".eCat").val(video[index].categories)
}

$(".edite_btn").on("click", () => {
    video[currentEditedItemIndex].src = $(".eUrl").val()
    video[currentEditedItemIndex].title = $(".eTitle").val()
    video[currentEditedItemIndex].categories = $(".eCat").val()
    video[currentEditedItemIndex].date = $(".eDate").val()
    imageSrc = ""
    $(".eCat").val("")
    $(".eDate").val("")
    $(".eTitle").val("")
    render(video)
    
})