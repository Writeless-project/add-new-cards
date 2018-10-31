let Users = [{
    id: '1',
    first_name: "Seth",
    last_name: "Childers",
    password: "hashedPotato",
    email: "not_telling@gmail.com",
    Journals: [{
        id: '2',
        title: "My first journal",
        max_size: 10000,
        font_size: 12,
        font_family: "Roboto",
        page_color: "white",
        published: false,
        Entries: [{
            id: '3',
            title: "Wednesday February 14, 1889",
            picture: require('./assets/images/first.jpeg'),
            content: "Today I went on a walk because this project has given me a headache",
            date: Date()
        }, {
            id: '4',
            title: "Wednesday March 14, 1990",
            picture: require('./assets/images/second.jpeg'),
            content: "Today I got fired...It.Was.Sweet.",
            date: Date()
        }]
    }, {
        id: '5',
        title: "My second journal",
        max_size: 1000,
        font_size: 14,
        font_family: "Roboto",
        page_color: "yellow",
        published: true,
        Entries: [{
            id: '6',
            title: "Monday January 1, 2000",
            picture: require('./assets/images/third.jpeg'),
            content: "Yesterday I went on a walk because this project has given me a headache",
            date: Date()
        }, {
            id: '7',
            title: "Tuesday April 5, 2019",
            picture: require('./assets/images/fourth.jpg'),
            content: "Yesterday I got fired...It.Was.Sweet.",
            date: Date()
        }]
    }]
}, {
    id: '8',
    first_name: "Sam",
    last_name: "McGrath",
    password: "hashedPotato2",
    email: "sammy@gmail.com",
    Journals: [{
        id: '9',
        title: "Sam's first journal",
        max_size: 90000,
        font_size: 10,
        font_family: "Roboto",
        page_color: "pink",
        published: false,
        Entries: [{
            id: '10',
            title: "Friday February 15, 1999",
            picture: require('./assets/images/first.jpeg'),
            content: "I am crazy smrt!",
            date: Date()
        }, {
            id: '11',
            title: "Wednesday July 04, 1776",
            picture: require('./assets/images/second.jpeg'),
            content: "Sam I am.",
            date: Date()
        }]
    }, {
        id: '12',
        title: "Sam's second journal",
        max_size: 10001,
        font_size: 15,
        font_family: "Roboto",
        page_color: "gray",
        published: true,
        Entries: [{
            id: '13',
            title: "Wednesday December 02, 1962",
            picture: require('./assets/images/third.jpeg'),
            content: "<I don't like green eggs and ham.",
            date: Date()
        }, {
            id: '14',
            title: "This isn't a dated title which is kinda cool",
            picture: require('./assets/images/fourth.jpg'),
            content: "I do not like them, Sam I am.",
            date: Date()
        }]
    }]
}];

module.exports = {
    Users
}
