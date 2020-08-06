export default function handleScroll() {
    const scrollOptions = {
        left: 0,
        top: window.innerHeight,
        behavior: 'smooth'
    }
    const scrollDivs = document.querySelectorAll('.slide-page')
    // scrollDivs[scrollDivs.length - 1].scrollTo(scrollOptions)
    // window.scrollTo(scrollOptions)
    console.log(scrollDivs[0].children)
}
