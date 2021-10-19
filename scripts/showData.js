async function getData(url) {
    let res = await fetch(url);
    let data = await res.json();

    return data
}

async function append(data,container) {
    data.forEach(({title , image}) =>{
        let div = document.createElement('div')

        let p = document.createElement('p')
        p.innerHTML = title

        let img = document.createElement('img')
        img.src = image
        div.append(img,p)

        container.append(div)
    })
}
export {getData , append}