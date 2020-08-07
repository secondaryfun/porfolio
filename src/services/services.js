export default function handleScroll(page, target) {
    const scrollOptions = {
        left: 0,
        top: target === "top" ? 0 : window.innerHeight,
        behavior: 'smooth',
    }
    const scrollDivs = document.querySelectorAll('.slide-page')
    scrollDivs.forEach((div, i) => {
        const node = div.childNodes[0].id
        const pg = page + "Page"
        if (node === pg) {
            scrollDivs[i].scrollTo(scrollOptions)
        }
    })
}

export const getScrollingDiv = (page) => {
    const scrollDivs = document.querySelectorAll('.slide-page')
    let match = null
    scrollDivs.forEach((div, i) => {
        const node = div.childNodes[0].id
        const pg = page + "Page"
        if (node === pg) {
            match = scrollDivs[i]
        }
    })

    return match
}
