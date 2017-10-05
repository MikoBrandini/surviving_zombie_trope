const paths = [{
        "id": 0,
        "text": "A bizzare case of rabies is spreading throughout the city. People inflected with the disease seem to perish but rise up and begin feed on the living. You're starting to slightly worry and it doesn't help that you're not feeling well.  ",
        "img": "https://i.imgur.com/iFuJQiN.jpg",
        "paths": [{
                "buttonTitle": "Visit Friend",
                "next": 1
            },
            {
                "buttonTitle": "Go To The Hospital",
                "next": 4
            },
            {
                "buttonTitle": "Take Train To Countryside",
                "next": 2
            },
            {
                "buttonTitle": "Stay Home.",
                "next": 3
            }

        ]
    },

    {
        "id": 1,
        "text": "You decide to contact your friend to ride out apocalypse together. He is well armed and ready to kick some zombie ass. Maybe a little too much for your liking. He wants to go to the mall and stock up on some ammo before it's all gone.",
        "img": "https://i.imgur.com/EIZwLBi.jpg?1",
        "paths": [{
                "buttonTitle": "Go back home.",
                "next": 0
            },
            {
                "buttonTitle": "Go To The Mall",
                "next": 5
            },
        ]
    },

    {
        "id": 2,
        "text": "It seems like you weren't the only person with that idea. The trains are stil running, but slowly. After pushing yourself to the platform, you can hear the train approaching. Unfortunately at the same time, the infection is spreading somewhere in the back. You can either wait for the upcoming train or take an emergency exit and run back home. ",
        "img": "https://i.imgur.com/pASSAoI.jpg?1",
        "paths": [{
                "buttonTitle": "Emergency Exit Home",
                "next": 0
            },
            {
                "buttonTitle": "Wait For Train",
                "next": 6
            },

        ]
    },

    {
        "id": 3,
        "text": "Luckily you have enough supplies to survive in your apartment for a few weeks but the situation gets worse outside. You haven't heard your nextdoor neighbor in a few days. He must have escaped. You decide to break into his apartment via the fire escape. You climb throughthe shatter window and find an empty living room. You look for the kitchen and on the way there, you see him. It seems like you will be what's on the menu today. ",
        "img": "https://i.imgur.com/55vuAV8.jpg"
    },
    {
        "id": 4,
        "text": "You arrive at the local hospital without experiencing any trouble. You are treated promptly and diagnosed with rabies. The doctors put you under an induced coma. You wake up 3 months later to an abandoned hospital. You quickly learn that while most of humanity was wiped off, a handful of infected people such as yourself were immune to the zombie symptoms of the virus and only ever had rabie symptoms. You now live in a military dictatorship ran by the soldiers who survived the infection in their nuclear submarines and aircraft carriers.",
        "img": "https://i.imgur.com/RWDGt0q.jpg"
    },

    {
        "id": 5,
        "text": "You arrive and after fighting other survivors, you end up with the ammo. Sadly, your friend gets bitten. He bravely eliminates himself in order not to infect you. Shortly thereafter you get bit and turn into a zombie.",
        "img": "https://i.imgur.com/aUJ62Yx.jpg?1"
    },
    {
        "id": 6,
        "text": "While waititng for the train, you see a zombie jump on a woman and begin to infect her. A young girl, possibly her daughter watches in horror. The train arrives and while being shoved inside by other survivors, you decide to take the traumatized girl with you. Right as you pick her up, you hear a new victim being infected right next you. Unfortunately some of their blood lands in open mouth. You and the girl reach the outskirts of the city, right as you begin to turn into a threat for everyone in the subway car.",
        "img": "https://i.imgur.com/FfnevrJ.jpg?1"
    },


];

export default paths;
