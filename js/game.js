// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "startpic.jpg",
    levels: {

        start: {
            message: "It's Friday night. You've had a long week at work and you are comfy on the couch scrolling through instagram when you see that your favorite band is playing a surprise show downtown.",
            choices: [
                {
                    text: "It's raining. Order seamless and call it a night. ",
                    nextLevel: "done",
                },

                {
                    text: "Put on some real pants and go!",
                    nextLevel: "rain",
                },
            ]
        },

        rain: {
            background_image: "rainynight.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "It's raining, it's cold, and uber prices are surging.",
            choices: [
                {
                    text: "Walk 10 blocks to the subway",
                    nextLevel: "subway",
                },
                  {
                    text: "Over it. Go home and order seamless.",
                    nextLevel: "done",
                },
            ]
        },
        
        subway: {
            background_image: "subwaystation.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Ugh. Express trains aren't running. It will take you at least an hour to get there.",
            choices: [
                {
                    text: "Take a pricey uber. Guess you won't be buying any merch at the show.",
                    nextLevel: "concert",
                },
                {
                    text: "How can you call yourself a real New Yorker if you don't wait for the train sometimes? Take the subway.",
                    nextLevel: "traincar",
                },
                  {
                    text: "Not worth this much time or money. Go home and order seamless.",
                    nextLevel: "done",
                },
            ]
        },
        
        traincar: {
            background_image: "oneguy.png",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "It's just you and one shifty looking guy on the train. But he's wearing band shirt of the show you're headed to! He must be going there too...right?",
            choices: [
                {
                    text: "Talk to the hooded mystery man",
                    nextLevel: "manager",
                },
                  {
                    text: "You know better than to talk to strangers on late night trains. Stay the course to the concert.",
                    nextLevel: "concert",
                },
            ]
        },
        manager: {
            background_image: "manager.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You approach the man and point hesistantly to his shirt while you mutter that you're headed to the concert. He looks up at you and tells you that he's their manager and just made it to the city after a long day of traveling. He asks if you want to join him for the rest of the journey.",
            choices: [
                {
                    text: "On second thought, this guy looks shady as heck. Get off the train and call an expensive uber after all.",
                    nextLevel: "concert",
                },
                  {
                    text: "Eh, you've made it this far. You're clearly feelin' spontaneous. Take a seat on the bench next to the 'manager.'",
                    nextLevel: "band",
                },
            ]
        },
        
        band: {
            background_image: "backstage.jpg",
            message: "He really was the manager! You have a heart to heart on the train and he takes you backstage to hang out with the band all night. Guess all those risks paid off, huh? If you could do it all over, would you make the same choices?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        
        concert: {
            background_image: "concert.jpg",
            message: "You made it! Best show of YOUR WHOLE LIFE. Don't you want to re-live this night again and again?",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        done: {
            background_image: "thaifood.jpeg",
            message: "You fall asleep covered in pad thai and cheeto dust. The next morning you see that your friends had a great time without you...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
