let ar1=[
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look sad? Because it had too many problems.",
    "I only know 25 letters of the alphabet. I don't know y.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I asked the librarian if the library had any books on paranoia. She whispered, \"They're right behind you.\"",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I used to be a baker because I kneaded dough.",
    "How do you organize a space party? You planet!",
    "What did one hat say to the other? Stay here, I'm going on ahead!",
    "I told my wife she should embrace her mistakes. She gave me a hug.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the bicycle fall over? Because it was two-tired.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "I'm friends with all electricians. We have such a positive connection.",
    "I used to play piano by ear, but now I use my hands and fingers.",
    "Why don't scientists trust atoms? Because they make up everything!"
]
let getNewJoke=()=>{
    let k=Math.floor(Math.random()*10);
    document.getElementById("jokeshow").innerHTML=ar1[k];
}
Array.from(document.getElementsByTagName("h1"))[0].style.color="white";