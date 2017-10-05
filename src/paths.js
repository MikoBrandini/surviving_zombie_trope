const paths = [{
        "id": 0,
        "text": "A bizzare case of rabies is spreading throughout the city. People inflected with the disease seem to perish but rise up and begin feed on the living. You're starting to slightly worry and it doesn't help that you're not feeling well.  ",
        "img": "https://i.imgur.com/iFuJQiN.jpg",
        "paths": [{
                "buttonTitle": "Go upstairs.",
                "next": 1
            },
            {
                "buttonTitle": "Go To The Hospital",
                "next": 4
            },
            {
                "buttonTitle": "Go to the cafeteria.",
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
        "text": "You find the locker room and decide to take a shower. After drying up, you can hear a young man begging for help.",
        "img": "https://i.imgur.com/xPbxlei.jpg",
        "paths": [{
                "buttonTitle": "Go back to where you woke up.",
                "next": 0
            },
            {
                "buttonTitle": "Find the young man in peril. ",
                "next": 5
            },
        ]
    },

    {
        "id": 2,
        "text": "You enter the empty cafeteria, but from the kitchen you hear strange sounds.",
        "img": "https://mikobrandini.github.io/portfolio/assets/img/mikotv.png",
        "paths": [{
                "buttonTitle": "Run back to where you came from.",
                "next": 0
            },
            {
                "buttonTitle": "Slowly approach the kitchen.",
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
        "text": "You find the young man having his guts ripped open. The zombies see you and target you as well.",
        "img": "https://i.imgur.com/xPbxlei.jpg"
    },
    {
        "id": 6,
        "text": "As you enter the kitchen, a hoard of reanimated cafeteria workers surround and consume you. ",
        "img": "https://i.imgur.com/xPbxlei.jpg"
    },


];

export default paths;
