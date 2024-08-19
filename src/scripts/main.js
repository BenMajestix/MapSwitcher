async function getCurrTabUrl() {
    try {
        const [tab] = await browser.tabs.query({ currentWindow: true, active: true });
        return tab.url;
    } catch (error) {
        console.error(`Error fetching tab URL: ${error}`);
        return null;
    }
}

function extractDomainFromUrl(url) {
    const regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/i;
    const match = url.match(regex);
    return match ? match[1] : "error extracting domain";
}

async function handleButtonPress(toSite) {
    const fromUrl = await getCurrTabUrl(); // Now waits for the URL to be fetched
    const domain = extractDomainFromUrl(fromUrl);

    let coords;
    let newUrl;
    if (domain === 'google.com') {
        coords = fromGmaps(fromUrl);
    } else if (domain === 'openstreetmap.org') {
        coords = fromOsm(fromUrl);
    } else {
        console.log("Site not recognized");
        return;
    }

    if (toSite === 'gmaps') {
        newUrl = genGmapsUrl(coords);
    } else if (toSite === 'osm') {
        newUrl = genOsmUrl(coords);
    } else {
        console.log("Button Press Error");
    }

    console.log("New Url: ");
    console.log(newUrl);

    // Open a new tab with the generated URL
    const creating = browser.tabs.create({
        url: newUrl
    });
    creating.then(onCreated, onError);
}

// Function to handle tab creation success
function onCreated(tab) {
    console.log(`Created new tab: ${tab.id}`);
}

// Function to handle errors during tab creation
function onError(error) {
    console.log(`Error: ${error}`);
}