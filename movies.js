Movies = [
    {
        "title": "Dangal",
        "budget": 600000,
        "releaseYear": "2014",
        "actors":
            [
                { female: "Sakshi Tanwar" },
                { male: "Aamir Khan" },
                { female: "Fatima Sana Shaikh" }
            ],
        "genres":
            [
                "Action",
                "Biography",
                "Drama"
            ],
        "rating": 8.9,
    },

    {
        "title": "Iron-Man",
        "budget": 1000000,
        "releaseYear": "2013",
        "actors":
            [
                { male: "Robert-Downey-Jr" }
            ],
        "genres":
            [
                "Action",
                "Comedy"

            ],
        "rating": 9,
    },

    {
        "title": "GolMaal",
        "budget": 6500000,
        "releaseYear": "2010",
        "actors":
            [
                { male: "Ajay Devgan" },
                { female: "Karina Kapoor" },
                { female: "Deven Verma" }
            ],
        "genres":
            [
                "Comedy",
                "Romance"
            ],
        "rating": 8.7,
    },

    {
        "title": "Dhoni",
        "budget": 800000,
        "releaseYear": "2018",
        "actors":
            [
                { male: "Shushant Singh Rajput" }
            ],
        "genres":
            [
                "Story",
                "Cricket",
            ],
        "rating": 8.9,
    },

    {
        "title": "Spider-Man",
        "budget": 950000,
        "releaseYear": "2016",
        "actors":
            [
                { male: "Tom-Halland" }

            ],
        "genres":
            [
                "Action",
                "Comedy"
            ],
        "rating": 9,
    },

    {
        "title": "Black Friday",
        "budget": 400000,
        "releaseYear": "2007",
        "actors":
            [
                { male: "Kay Kay Menon" },
                { male: "Pavan Malhotra" },
                { male: "Aditya Srivastava" }
            ],
        "genres":
            [
                "Crime",
                "Drama",
                "Thriller"
            ],
        "rating": 8.6,
    },

    {
        "title": "Taare Zameen Par",
        "budget": 300000,
        "releaseYear": "2008",
        "actors":
            [
                { male: "Aamir Khan" },
                { male: "Darsheel Safary" },
                { male: "Tanay Chheda" }
            ],
        "genres":
            [
                "Drama",
                "Family",
                "Music"
            ],
        "rating": 8.5,
    },

    {
        "title": "3 Idiots",
        "budget": 900000,
        "releaseYear": "2009",
        "actors":
            [
                { male: "Aamir Khan" },
                { male: "Madhavan" },
                { male: "Mona Singh" }
            ],
        "genres":
            [
                "Comedy",
                "Drama"
            ],
        "rating": 10,
    },

    {
        "title": "Chupke Chupke",
        "budget": 500000,
        "releaseYear": "2006",
        "actors":
            [
                { male: "Sharukh Khan" },
                { female: "Sakshi Tanwar" },
                { female: "Fatima Sana Shaikh" }
            ],
        "genres":
            [
                "Action",
                "Biography",
                "Drama"
            ],
        "rating": 8.9,
    },

    {
        "title": "PK",
        "budget": 700000,
        "releaseYear": "2015",
        "actors":
            [
                { male: "Aamir Khan" },
                { female: "Anushka Sharma" },
            ],
        "genres":
            [
                "Comedy",
                "Drama"
            ],
        "rating": 7.6,
    },

]


{// console.log(item.title)

    // console.log("Budget : ", item.budget > 500000 && item.budget, item.title) 
    // console.log("Budget : ", item.budget > 500000 && item  ) 

    // console.log("releaseYear : ", item.releaseYear <  2010 && item.releaseYear, item.title) 
    // console.log(item.actors, item.title) 
}




Movies.map((item) => {
    // console.log("item", item);

    // console.log(item.actors, item.title)


    // if (item.budget > 500000) {
    //     console.log(item.budget, item.title)
    // }


    // if (item.releaseYear < 2015){
    // console.log(item.releaseYear, item.title);
    // }    


    // // Search Aamir Khan Movies array of object:-
    // for (let i of item.actors) {
    //     if (i.male === "Aamir Khan") {
    //         console.log(item.title)
    //     }
    // }

})


// // Searching aamir khan movies using includes method:
// // include use krne ke liye movies ko key me change krni padegi..
// sortedData = Movies.sort((a, b) => a.budget - b.budget);
// // console.log(sortedData);
// sortedData.map((item) => {
//     if (item.actors.includes("Aamir Khan")){

//         console.log(item.budget, item.title);
//     }
//     console.log(item);
// })


// Movies.includes( item => item.actors === "Aamir Khan");
// console.log(item.actors);

// // Ascending order movies budget:-
// sortedData = Movies.sort((a, b) => a.budget - b.budget);
// // console.log(sortedData);

// sortedData.map((item) => {
//     console.log(item.budget, item.title);
// })


// Movies.forEach(i => {
//     i["actors"].forEach(element => {
//         if (Object.values(element).includes('Aamir Khan')) {
//             console.log("True", ) 
//         }
        
//     });
// });