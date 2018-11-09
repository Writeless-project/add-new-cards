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
        picture: require('./assets/images/notebook1.jpg'),
        Entries: [{
            id: '3',
            title: "Wednesday February 14, 1889",
            content: "Today I went on a walk because this project has given me a headache",
            date: Date()
        }, {
            id: '4',
            title: "Wednesday March 14, 1990",
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
        picture: require('./assets/images/second.jpeg'),
        published: true,
        Entries: [{
            id: '6',
            title: "Monday January 1, 2000",
            content: "Yesterday I went on a walk because this project has given me a headache",
            date: Date()
        }, {
            id: '7',
            title: "Tuesday April 5, 2019",
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
        picture: require('./assets/images/third.jpeg'),
        published: false,
        Entries: [{
            id: '10',
            title: "Friday February 15, 1999",
            content: "I am crazy smrt!",
            date: Date()
        }, {
            id: '11',
            title: "Wednesday July 04, 1776",
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
        picture: require('./assets/images/first.jpeg'),
        published: true,
        Entries: [{
            id: '13',
            title: "Wednesday December 02, 1962",
            content: "<I don't like green eggs and ham.",
            date: Date()
        }, {
            id: '14',
            title: "This isn't a dated title which is kinda cool",
            content: "I do not like them, Sam I am.",
            date: Date()
        }]
    }]
}];

module.exports = {
    Users
}
