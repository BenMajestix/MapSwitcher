function fromGmaps(url) {
    const regex = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
    const match = url.match(regex);
    if (match) {
        console.log(`Coords Extracted: ${match[1]}, ${match[2]}`);
        return { lat: match[1], long: match[2] };
    } else {
        console.log("Error extracting coordinates");
        return { lat: 0, long: 0 };
    }
}

function genGmapsUrl(coords) {
    // https://www.google.com/maps/@53.5547254,9.8156573
    return "https://www.google.com/maps/@" + coords.lat + "," + coords.long;
}
