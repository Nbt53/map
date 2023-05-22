const getLocation = async () => {
    if (typeof navigator !== 'undefined') {

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    console.log('Latitude:', latitude);
                    console.log('Longitude:', longitude);

                    // Use latitude and longitude to determine location or perform further actions
                },
                (error) => {
                    console.error('Error getting geolocation:', error.message);
                }
            );
        } else {
            console.log('Geolocation is not supported by your browser');
        }

    } else {
        return 'm147db'
    }

}

module.exports.getLocation = getLocation