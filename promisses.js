const ticketBooking = () => {
    return new Promise((resolve, reject) => {
        const isBoarded = true;
        let ticketStatus = {};
        if (isBoarded) {
            ticketStatus = { status: 'booked', bookingDate: new Date().toISOString() };
            resolve(ticketStatus);
        } else {
            ticketStatus = { status: 'failed', bookingDate: new Date().toISOString() };
            reject(ticketStatus);
        }
    });

}

const travel = () => {
    return new Promise((resolve, reject) => {
        const isBoarded = true;
        if (isBoarded) {
            resolve('Passenger boarded');
        } else {
            reject("Flight cancelled");
        }
    });

}


ticketBooking().then(bookingData => {
    return bookingData;
}).then(data => {
    if (data.status == "booked") {
        travel().then(travelData => {
            console.log(travelData);
        })
    }
}).catch(error => {
    console.log(error);
});