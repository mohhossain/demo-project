
fetch('https://api.imgflip.com/get_memes')
.then(res => res.json())
.then(response => {
    console.log(response.data.memes)
    
    response.data.memes.map( meme => {
        renderMemes(meme)
    })
})

function renderJokes(jokes) {
    console.log(jokes)
}



function renderMemes(meme){
    let memes_list = document.querySelector('#memes-list');

    let container = document.createElement('div');
    
    container.id = 'container';

    let meme_image = document.createElement('img');
    meme_image.id = 'meme'
    meme_image.src = meme.url 

    let detail = document.createElement('button');
    detail.textContent = 'View Details'

    detail.addEventListener('click', () => {

        alert(`name: ${meme.name} url: ${meme.url}`);

    })

    container.append(meme_image, detail);

    memes_list.append(container);
}


// function showDetails(meme){
//     let name = document.createElement('p')
//     name.textContent = meme.name
//     let url = document.createElement('a')
//     url.href = meme.url

//     let detailContainer = document.createElement('div')

//     detailContainer.append(name, url)

//     document.getElementsByTagName('main')[0].append(detailContainer)
// }

// showDetails({
//     name: 'Drake Hotline Bling', 
//     url: "https://i.imgflip.com/30b1gx.jpg"
// })