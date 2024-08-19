function fromOsm(url) {
    const regex = /#map=\d+\/(-?\d+\.\d+)\/(-?\d+\.\d+)/;
    const match = url.match(regex);
    if (match) {
        console.log(`Coords Extracted: ${match[1]}, ${match[2]}`);
        return { lat: match[1], long: match[2] };
    } else {
        console.log("Error extracting coordinates");
        return { lat: 0, long: 0 };
    }
}

function genOsmUrl(coords) {
    //https://www.openstreetmap.org/#map=13/53.56621/10.03567
    return "https://www.openstreetmap.org/#map=13/" + coords.lat + "/" + coords.long;
}