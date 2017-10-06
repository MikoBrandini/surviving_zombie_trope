const paths = [{
        "id": 0,
        "text": "A bizarre case of rabies is spreading throughout the city. People inflected with the disease seem to perish but rise up and begin feed on the living. You're starting to slightly worry and it doesn't help that you're not feeling well.  ",
        "img": "https://i.imgur.com/iFuJQiN.jpg",
        "paths": [{
                "buttonTitle": "Visit Friend",
                "next": 1
            },
            {
                "buttonTitle": "Go To Hospital",
                "next": 4
            },
            {
                "buttonTitle": "Take Train",
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
        "text": "You decide to contact your friend to ride out the apocalypse together. She is well armed and ready to kick some zombie butt. Maybe a little too much for your liking. She wants to go to the mall and stock up on some ammo before they run out.",
        "img": "https://i.imgur.com/EIZwLBi.jpg?1",
        "paths": [{
                "buttonTitle": "Go Back Home.",
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
        "text": "You weren't the only person who thought of escaping via public transportation. The trains are still running, but slowly. After pushing yourself onto the platform, you can hear the train approaching from the distance. Unfortunately at the same time, the infected are slowly spreading the sickness, attacking survivors somewhere behind you. You can either wait for the upcoming train or escape via the emergency exit and run back home. ",
        "img": "https://i.imgur.com/pASSAoI.jpg?1",
        "paths": [{
                "buttonTitle": "Go Back Home",
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
        "text": "Luckily you have enough supplies to survive in your apartment for a few weeks but the situation gets worse outside. You haven't heard your next door neighbor in a few days. He must have escaped. You decide to break into his apartment via the fire escape. You climb through the shattered window and find an empty living room. You look for the kitchen and then you see him. It seems like you will be what's on the menu today. ",
        "img": "https://i.imgur.com/55vuAV8.jpg",
        "gameOver": "Game Over"
    },
    {
        "id": 4,
        "text": "You arrive at the local hospital without much hurdle. You are treated promptly and diagnosed with rabies. The doctors put you under an induced coma. You wake up 3 months later to an abandoned hospital. You quickly learn that while most of humanity was wiped off, a handful of people such as yourself are immune to the zombie symptoms. You now live in a military dictatorship ran by the soldiers who survived the infection in their nuclear submarines and aircraft carriers. You are kept alive to study your immune system. Congratulations!",
        "img": "https://i.imgur.com/RWDGt0q.jpg",
        "gameOver": "Game Over"
    },

    {
        "id": 5,
        "text": "You arrive and after pushing and shoving other panicking survivors, you end up with the ammo. Then you hear them. A huge horde out of the undead are inexplicably at this suburban mall. Sadly, your friend gets bitten. She bravely eliminates herself in order not to infect you. Shortly thereafter you get bit and turn into a zombie.",
        "img": "https://i.imgur.com/aUJ62Yx.jpg?1",
        "gameOver": "Game Over"
    },
    {
        "id": 6,
        "text": "As the train approaches, you see a zombie jump onto a woman and begin to feed on her. A young girl, possibly her daughter watches in horror. The train arrives and you decide to save the traumatized child. Right as you pick her up, you see a fellow passenger being munched on right next you. Unfortunately some of their blood splatters into your open mouth. Eventually, you and the girl safely reach the outskirts of the city, you begin to turn into a threat for everyone in the subway car.",
        "img": "https://i.imgur.com/FfnevrJ.jpg?1",
        "gameOver": "Game Over"
    },


];

export default paths;
