const gmapsButton = document.getElementById('gmaps-btn');
const osmButton = document.getElementById('osm-btn');

// Updated to handle asynchronous function
gmapsButton.addEventListener('click', async () => {
    try {
        await handleButtonPress('gmaps');
    } catch (error) {
        console.error('Error handling Gmaps button press:', error);
    }
});

osmButton.addEventListener('click', async () => {
    try {
        await handleButtonPress('osm');
    } catch (error) {
        console.error('Error handling OSM button press:', error);
    }
});
