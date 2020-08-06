export default function handleScroll(page, target) {
    const scrollOptions = {
        left: 0,
        top: target === "top" ? 0 : window.innerHeight,
        behavior: 'smooth',
    }
    const scrollDivs = document.querySelectorAll('.slide-page')
    // scrollDivs[scrollDivs.length - 1].scrollTo(scrollOptions)
    window.scrollTo(scrollOptions)
    let pageids
    scrollDivs.forEach((div, i) => {
        const node = div.childNodes[0].id
        const pg = page + "Page"
        console.log(`node= ${node} pg= ${pg}`)
        if (node === pg) {
            console.log(`match = ${i}`)
            scrollDivs[i].scrollTo(scrollOptions)
        }
    })

    console.log(scrollDivs)
}
