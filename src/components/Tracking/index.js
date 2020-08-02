import ReactGA from "react-ga"

export const initGA = (trackingID = "UA-173593293-1") => {
    ReactGA.initialize(trackingID);
}

export const PageView = () => {
    ReactGA.pageview(window.location.pathname +
        window.location.search);
}
