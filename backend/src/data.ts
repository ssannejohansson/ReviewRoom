/* ----------------------
TYPES 
---------------------- */

export interface Review {
  id: string;
  title?: string; // Optional title
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Show {
  id: string;
  title: string;
  description: string;
  genre: string;
  year: number;
  imageUrl: string;
  reviews: Review[];
  createdAt: string;
  createdBy: string;
}

/* ----------------------
IN-MEMORY DATA STORE 
---------------------- */

export const shows: Show[] = [
  {
    id: "1",
    title: "Breaking Bad",
    description:
      "A high school chemistry teacher diagnosed with cancer teams up with a former student to secure his family's future by manufacturing methamphetamine.",
    genre: "Drama",
    year: 2008,
    imageUrl: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
    reviews: [
      {
        id: "1",
        title: "The greatest show ever made",
        author: "alex@example.com",
        rating: 5,
        comment:
          "Absolutely flawless from start to finish. Walter White's transformation is one of the most compelling character arcs in TV history.",
        createdAt: "2024-11-03T10:22:00.000Z",
      },
      {
        id: "2",
        title: "A slow burn that pays off",
        author: "maya@example.com",
        rating: 5,
        comment:
          "Takes a few episodes to get going but once it does you cannot stop watching. The writing is incredibly tight.",
        createdAt: "2024-12-14T18:45:00.000Z",
      },
      {
        id: "3",
        author: "jonas@example.com",
        rating: 4,
        comment:
          "Brilliant, though the finale left me with mixed feelings. Still a must-watch.",
        createdAt: "2025-01-07T09:10:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "2",
    title: "The Bear",
    description:
      "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop, navigating chaos, trauma, and the pursuit of greatness.",
    genre: "Drama/Comedy",
    year: 2022,
    imageUrl: "https://image.tmdb.org/t/p/w500/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg",
    reviews: [
      {
        id: "1",
        title: "Stressful in the best way",
        author: "priya@example.com",
        rating: 5,
        comment:
          "I had to pause multiple times just to breathe. The kitchen scenes are so intense and real. Season 2 is a masterpiece.",
        createdAt: "2025-01-20T14:30:00.000Z",
      },
      {
        id: "2",
        author: "tom@example.com",
        rating: 4,
        comment:
          "Not what I expected from a show about a restaurant but in the best possible way. The ensemble cast is incredible.",
        createdAt: "2025-02-05T20:15:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "3",
    title: "The Handmaid's Tale",
    description:
      "Set in the totalitarian theocracy of Gilead, a woman forced into sexual slavery must navigate a world where women have lost all rights and freedoms.",
    genre: "Drama/Dystopian",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/eGUT7j3n3rn5yGihlCgwUnD70HV.jpg",
    reviews: [
      {
        id: "1",
        title: "Haunting and important",
        author: "emma@example.com",
        rating: 5,
        comment:
          "Elisabeth Moss is phenomenal. The world-building is terrifying precisely because it feels so plausible. Essential viewing.",
        createdAt: "2024-10-11T09:30:00.000Z",
      },
      {
        id: "2",
        author: "lena@example.com",
        rating: 4,
        comment:
          "Incredibly well made but deeply uncomfortable — which is exactly the point. Later seasons dip a little but season 1 is flawless.",
        createdAt: "2025-01-15T21:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "4",
    title: "The Last of Us",
    description:
      "A hardened smuggler and a teenage girl must survive a post-apocalyptic America overrun by a fungal infection that turns humans into aggressive creatures.",
    genre: "Drama/Horror",
    year: 2023,
    imageUrl: "https://image.tmdb.org/t/p/w500/dmo6TYuuJgaYinXBPjrgG9mB5od.jpg",
    reviews: [
      {
        id: "1",
        title: "Emotional and breathtaking",
        author: "zoe@example.com",
        rating: 5,
        comment:
          "The third episode alone is one of the greatest pieces of television ever made. I cried for an hour straight.",
        createdAt: "2024-09-19T21:00:00.000Z",
      },
      {
        id: "2",
        author: "dan@example.com",
        rating: 5,
        comment:
          "Perfectly cast, beautifully shot and genuinely terrifying at times. Pedro Pascal is incredible in this role.",
        createdAt: "2025-01-11T17:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "5",
    title: "Succession",
    description:
      "The Roy family controls one of the world's largest media empires, but their patriarch's aging sparks a brutal battle for power among his children.",
    genre: "Drama",
    year: 2018,
    imageUrl: "https://image.tmdb.org/t/p/w500/z0XiwdrCQ9yVIr4O0pxzaAYRxdW.jpg",
    reviews: [
      {
        id: "1",
        title: "The best show of the decade",
        author: "harriet@example.com",
        rating: 5,
        comment:
          "Sharp, savage and wickedly funny. The writing is on another level and every character is perfectly drawn. The finale destroyed me.",
        createdAt: "2024-08-03T12:30:00.000Z",
      },
      {
        id: "2",
        author: "leo@example.com",
        rating: 5,
        comment:
          "Nothing on TV comes close to this. The dialogue alone is worth the watch — every scene crackles with tension and dark humour.",
        createdAt: "2024-11-22T19:00:00.000Z",
      },
      {
        id: "3",
        title: "Uncomfortable but brilliant",
        author: "iris@example.com",
        rating: 4,
        comment:
          "You will not like any of the characters and yet you cannot look away. Genuinely one of the most original shows ever made.",
        createdAt: "2025-02-07T10:10:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "6",
    title: "Chernobyl",
    description:
      "A dramatization of the 1986 nuclear disaster at Chernobyl and the courageous men and women who made enormous sacrifices to contain it.",
    genre: "Historical Drama",
    year: 2019,
    imageUrl: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    reviews: [
      {
        id: "1",
        title: "Terrifying and essential",
        author: "max@example.com",
        rating: 5,
        comment:
          "The most unsettling thing I have ever watched because every second of it is real. Meticulously researched and powerfully acted.",
        createdAt: "2024-06-18T15:45:00.000Z",
      },
      {
        id: "2",
        author: "anna@example.com",
        rating: 5,
        comment:
          "Absolutely harrowing. Jared Harris gives a career-defining performance. A show everyone should watch at least once.",
        createdAt: "2024-10-30T20:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "7",
    title: "Sons of Anarchy",
    description:
      "A close-knit outlaw motorcycle club struggles to maintain order in their small California town while dealing with inner conflict, rival gangs, and the law.",
    genre: "Crime/Drama",
    year: 2008,
    imageUrl: "https://image.tmdb.org/t/p/w500/kiy8BHtIHAslh81rvFcZ4wbNGdY.jpg",
    reviews: [
      {
        id: "1",
        title: "Gritty and addictive",
        author: "ryan@example.com",
        rating: 5,
        comment:
          "The lead performance is outstanding. The show pulls you in from episode one and never really lets go. One of the best crime dramas on TV.",
        createdAt: "2024-09-08T17:20:00.000Z",
      },
      {
        id: "2",
        author: "nina@example.com",
        rating: 4,
        comment:
          "Brutal, emotional and surprisingly Shakespearean. The later seasons get messy but the ride is absolutely worth it.",
        createdAt: "2024-11-30T13:45:00.000Z",
      },
      {
        id: "3",
        title: "Not for everyone but I loved it",
        author: "marco@example.com",
        rating: 4,
        comment:
          "Dark themes handled with real depth. The club dynamics and loyalty conflicts keep every episode interesting.",
        createdAt: "2025-02-12T10:05:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "8",
    title: "Shameless",
    description:
      "The dysfunctional Gallagher family, led by deadbeat dad Frank, navigates poverty, crime, and chaos on the South Side of Chicago with raw humour and heart.",
    genre: "Comedy/Drama",
    year: 2011,
    imageUrl: "https://image.tmdb.org/t/p/w500/ifo31fMWLmyOVpdak9K0kY4jldQ.jpg",
    reviews: [
      {
        id: "1",
        title: "Messy, chaotic, brilliant",
        author: "kate@example.com",
        rating: 5,
        comment:
          "The family feels so real. It is funny, heartbreaking and completely unhinged all at once. Early seasons are some of the best TV ever made.",
        createdAt: "2024-08-22T15:10:00.000Z",
      },
      {
        id: "2",
        author: "jack@example.com",
        rating: 4,
        comment:
          "Starts incredibly strong. Frank is one of the most entertaining characters on television even when you want to strangle him.",
        createdAt: "2025-01-03T19:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "9",
    title: "Gangs of London",
    description:
      "After the assassination of the most powerful crime boss in London, the city's criminal underworld is thrown into chaos as rival gangs battle for control.",
    genre: "Crime/Action",
    year: 2020,
    imageUrl: "https://image.tmdb.org/t/p/w500/fVgwa6wGw9ddGM5O7mqrrwB6gHK.jpg",
    reviews: [
      {
        id: "1",
        title: "The most intense show on TV",
        author: "finn@example.com",
        rating: 5,
        comment:
          "The action sequences are absolutely insane — some of the best choreography I have ever seen in a TV show. The story keeps you hooked throughout.",
        createdAt: "2024-10-05T20:00:00.000Z",
      },
      {
        id: "2",
        author: "sara@example.com",
        rating: 4,
        comment:
          "Brutal and relentless. Not for the faint-hearted but the performances and direction are outstanding.",
        createdAt: "2025-01-28T18:15:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "10",
    title: "The Wire",
    description:
      "The Baltimore drug scene is examined from the perspectives of both law enforcement and drug dealers, exploring systemic failures in American cities.",
    genre: "Crime/Drama",
    year: 2002,
    imageUrl: "https://image.tmdb.org/t/p/w500/4lbclFySvugI51fwsyxBTOm4DqK.jpg",
    reviews: [
      {
        id: "1",
        title: "The gold standard of TV drama",
        author: "victor@example.com",
        rating: 5,
        comment:
          "Nothing before or since has matched the depth and realism of The Wire. It is less a TV show and more a social document.",
        createdAt: "2024-05-09T09:00:00.000Z",
      },
      {
        id: "2",
        author: "grace@example.com",
        rating: 4,
        comment:
          "Dense and slow to start but incredibly rewarding. By season two you are completely hooked and cannot imagine watching anything else.",
        createdAt: "2024-09-25T16:50:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "11",
    title: "Peaky Blinders",
    description:
      "A gangster family epic set in 1919 Birmingham, following the Shelby crime family as they navigate rival gangs, police, and political intrigue.",
    genre: "Crime/Drama",
    year: 2013,
    imageUrl: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    reviews: [
      {
        id: "1",
        title: "Style, violence and great storytelling",
        author: "noah@example.com",
        rating: 5,
        comment:
          "The atmosphere is unlike anything else on TV. Post-war Birmingham has never looked so cinematic and menacing.",
        createdAt: "2024-07-01T18:00:00.000Z",
      },
      {
        id: "2",
        author: "lily@example.com",
        rating: 4,
        comment:
          "The lead carries every scene effortlessly. The show stumbles slightly in later seasons but the core cast keeps it compelling.",
        createdAt: "2025-01-19T14:25:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "12",
    title: "Yellowstone",
    description:
      "A powerful ranching family fights to protect their sprawling Montana ranch from land developers, a nearby reservation, and America's first national park.",
    genre: "Drama/Western",
    year: 2018,
    imageUrl: "https://image.tmdb.org/t/p/w500/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg",
    reviews: [
      {
        id: "1",
        title: "Modern western at its finest",
        author: "cole@example.com",
        rating: 5,
        comment:
          "The scenery alone is worth watching for. Add in the family power struggles and the lead performance and you have something truly special.",
        createdAt: "2024-07-14T14:00:00.000Z",
      },
      {
        id: "2",
        author: "beth@example.com",
        rating: 4,
        comment:
          "Slow to start but builds into something gripping. The writing gets sharper every season.",
        createdAt: "2024-12-01T11:30:00.000Z",
      },
      {
        id: "3",
        title: "Addictive drama",
        author: "oscar@example.com",
        rating: 5,
        comment:
          "Cannot stop watching. The family dynamics are fascinating and every episode ends on a moment that makes you need the next one immediately.",
        createdAt: "2025-03-10T20:45:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "13",
    title: "Ozark",
    description:
      "A financial advisor drags his family from Chicago to the Ozarks, where he must launder money to appease a drug cartel and keep his family alive.",
    genre: "Crime/Drama",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/pCGyPVrI9Fzw6rE1Pvi4BIXF6ET.jpg",
    reviews: [
      {
        id: "1",
        title: "Breaking Bad level tension",
        author: "sam@example.com",
        rating: 5,
        comment:
          "The whole family is fantastic but Julia Garner steals every single scene she is in. One of the most gripping crime dramas in years.",
        createdAt: "2024-08-14T20:00:00.000Z",
      },
      {
        id: "2",
        author: "mia@example.com",
        rating: 4,
        comment:
          "Dark, tense and full of twists. Gets better with each season and the finale is genuinely satisfying.",
        createdAt: "2025-03-05T11:40:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "14",
    title: "The Sopranos",
    description:
      "New Jersey mob boss Tony Soprano navigates the competing demands of his criminal organization and his family life, aided by sessions with his psychiatrist.",
    genre: "Crime/Drama",
    year: 1999,
    imageUrl: "https://image.tmdb.org/t/p/w500/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg",
    reviews: [
      {
        id: "1",
        title: "The show that changed television forever",
        author: "tony@example.com",
        rating: 5,
        comment:
          "Nothing that came before prepared audiences for this. The writing, the acting, the moral complexity — it set the template for every prestige drama that followed.",
        createdAt: "2024-06-10T18:00:00.000Z",
      },
      {
        id: "2",
        author: "carmela@example.com",
        rating: 5,
        comment:
          "James Gandolfini is simply one of the greatest actors to ever appear on screen. The finale still divides people and that is exactly the point.",
        createdAt: "2024-11-18T20:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "15",
    title: "Mindhunter",
    description:
      "In the late 1970s, two FBI agents pioneer the science of criminal profiling by interviewing imprisoned serial killers to understand and catch active ones.",
    genre: "Crime/Thriller",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/eg2eepJtJeRtCZEUJvIYyb2PnYD.jpg",
    reviews: [
      {
        id: "1",
        title: "Slow burn perfection",
        author: "holden@example.com",
        rating: 5,
        comment:
          "The interviews with the killers are some of the most gripping scenes ever put to screen. Fincher's direction makes every conversation feel genuinely dangerous.",
        createdAt: "2024-08-07T21:00:00.000Z",
      },
      {
        id: "2",
        author: "bill@example.com",
        rating: 5,
        comment:
          "Criminally underrated and heartbreaking that it was cancelled. The BTK scenes in season two are absolutely chilling.",
        createdAt: "2025-01-14T19:45:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "16",
    title: "Landman",
    description:
      "A fast-talking fixer works to keep a scrappy oil company afloat in the booming and brutal West Texas oil fields, balancing deals, danger, and family.",
    genre: "Drama",
    year: 2024,
    imageUrl: "https://image.tmdb.org/t/p/w500/hYthRgS1nvQkGILn9YmqsF8kSk6.jpg",
    reviews: [
      {
        id: "1",
        title: "Surprisingly gripping",
        author: "tommy@example.com",
        rating: 4,
        comment:
          "Did not expect much but was hooked within the first episode. The lead performance is electric and the Texas setting feels completely authentic.",
        createdAt: "2025-01-22T20:00:00.000Z",
      },
      {
        id: "2",
        author: "caitlin@example.com",
        rating: 4,
        comment:
          "Sharp dialogue and a world you rarely see on TV. Gets better with every episode as the stakes keep rising.",
        createdAt: "2025-03-08T17:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "17",
    title: "Mayor of Kingstown",
    description:
      "The McLusky family serves as power brokers in Kingstown, Michigan, where the prison industry dominates and they are the only hope for justice in a broken system.",
    genre: "Crime/Drama",
    year: 2021,
    imageUrl: "https://image.tmdb.org/t/p/w500/6rWIip9MZELAA0SKii5WqsBDCYW.jpg",
    reviews: [
      {
        id: "1",
        title: "Dark and uncompromising",
        author: "mike@example.com",
        rating: 5,
        comment:
          "Jeremy Renner is at his absolute best here. The show does not sugarcoat anything about the prison system and is all the more powerful for it.",
        createdAt: "2024-09-14T21:15:00.000Z",
      },
      {
        id: "2",
        author: "iris@example.com",
        rating: 4,
        comment:
          "Brutal and bleak but completely compelling. The world feels real and lived-in in a way few crime dramas manage.",
        createdAt: "2025-02-03T18:50:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "18",
    title: "Animal Kingdom",
    description:
      "A teenager moves in with his estranged relatives after his mother's death, only to discover the Cody family is a dangerous crime family run by a cunning matriarch.",
    genre: "Crime/Drama",
    year: 2016,
    imageUrl: "https://image.tmdb.org/t/p/w500/rzvdKrnSRKPFI0pgqMQknDPpRC9.jpg",
    reviews: [
      {
        id: "1",
        title: "Hidden gem of crime TV",
        author: "smurf@example.com",
        rating: 5,
        comment:
          "Ellen Barkin is absolutely terrifying as Smurf. The family dynamic is completely unique and the show gets darker and bolder with every season.",
        createdAt: "2024-07-19T20:00:00.000Z",
      },
      {
        id: "2",
        author: "pope@example.com",
        rating: 4,
        comment:
          "Slept on by most people but it is genuinely excellent. The tension within the family is more gripping than most of the heists themselves.",
        createdAt: "2024-12-09T16:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "19",
    title: "Narcos",
    description:
      "The true story of the rise and fall of Colombian drug lord Pablo Escobar and the DEA agents who dedicated their lives to bringing him down.",
    genre: "Crime/Drama",
    year: 2015,
    imageUrl: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    reviews: [
      {
        id: "1",
        title: "Stranger than fiction",
        author: "steve@example.com",
        rating: 5,
        comment:
          "Wagner Moura's portrayal of Escobar is nothing short of mesmerising. The fact that most of it actually happened makes it even more extraordinary.",
        createdAt: "2024-05-28T19:30:00.000Z",
      },
      {
        id: "2",
        author: "javier@example.com",
        rating: 5,
        comment:
          "One of the most bingeable shows ever made. The narration pulls you in immediately and the pacing is relentless from start to finish.",
        createdAt: "2024-10-17T21:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "20",
    title: "Prison Break",
    description:
      "A structural engineer gets himself deliberately incarcerated to help break out his brother, who has been wrongly sentenced to death for the murder of the Vice President's brother.",
    genre: "Crime/Thriller",
    year: 2005,
    imageUrl: "https://image.tmdb.org/t/p/w500/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg",
    reviews: [
      {
        id: "1",
        title: "Season one is flawless television",
        author: "michael@example.com",
        rating: 5,
        comment:
          "The first season is one of the most tightly plotted and tense things ever made. The tattooed blueprint idea alone is genius.",
        createdAt: "2024-06-30T20:00:00.000Z",
      },
      {
        id: "2",
        author: "lincoln@example.com",
        rating: 4,
        comment:
          "Gets wilder as it goes but the ride is so fun you forgive it everything. Wentworth Miller and Dominic Purcell have incredible chemistry.",
        createdAt: "2025-01-25T17:10:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "21",
    title: "True Detective",
    description:
      "An anthology crime series in which a single case is told through multiple perspectives, exploring the dark side of human nature across different times and locations.",
    genre: "Crime/Thriller",
    year: 2014,
    imageUrl: "https://image.tmdb.org/t/p/w500/zYqVTiHK5ZajYcNzAW7qWte5NWS.jpg",
    reviews: [
      {
        id: "1",
        title: "Season one is untouchable",
        author: "rust@example.com",
        rating: 5,
        comment:
          "McConaughey and Harrelson are absolutely electric together. The long take in episode four alone is worth the entire watch. One of the greatest seasons of television ever made.",
        createdAt: "2024-09-12T20:00:00.000Z",
      },
      {
        id: "2",
        author: "marty@example.com",
        rating: 4,
        comment:
          "Season one is a masterpiece. Later seasons don't quite reach those heights but the anthology format keeps things fresh and interesting.",
        createdAt: "2025-01-08T18:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "22",
    title: "Vikings",
    description:
      "The legendary Norse warrior Ragnar Lothbrok rises from farmer to king, leading his people on raids across England and France while navigating betrayal and political intrigue.",
    genre: "Historical Drama",
    year: 2013,
    imageUrl: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    reviews: [
      {
        id: "1",
        title: "Epic in every sense of the word",
        author: "ragnar@example.com",
        rating: 5,
        comment:
          "Travis Fimmel is magnetic as Ragnar. The battle sequences are breathtaking and the Norse mythology woven throughout gives it a unique identity unlike any other historical drama.",
        createdAt: "2024-07-22T19:00:00.000Z",
      },
      {
        id: "2",
        author: "lagertha@example.com",
        rating: 4,
        comment:
          "The early seasons are some of the best historical drama ever made. It loses a little steam later on but the sheer scale and ambition never wavers.",
        createdAt: "2025-02-14T21:15:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "23",
    title: "Outlander",
    description:
      "A WWII combat nurse is mysteriously transported back to 18th century Scotland, where she is caught between two very different men and two very different lives.",
    genre: "Drama/Romance",
    year: 2014,
    imageUrl: "https://image.tmdb.org/t/p/w500/oftZNfyTVNU7IfOqoGLoT8MGvNs.jpg",
    reviews: [
      {
        id: "1",
        title: "Completely unlike anything else on TV",
        author: "claire@example.com",
        rating: 5,
        comment:
          "The Scottish Highlands have never looked more stunning. The central romance is genuinely compelling and the historical detail is impressive. Caitriona Balfe carries the whole show effortlessly.",
        createdAt: "2024-10-03T20:30:00.000Z",
      },
      {
        id: "2",
        author: "jamie@example.com",
        rating: 4,
        comment:
          "Sweeping, romantic and surprisingly brutal at times. Not what you expect but absolutely worth sticking with through the slower episodes.",
        createdAt: "2025-01-17T17:45:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "24",
    title: "1883",
    description:
      "The origin story of the Yellowstone Dutton family as they journey west through the Great Plains, enduring hardship, violence, and loss to find a place to call home.",
    genre: "Drama/Western",
    year: 2021,
    imageUrl: "https://image.tmdb.org/t/p/w500/waLbm384SQDwLTCn6ttPqQS5kfV.jpg",
    reviews: [
      {
        id: "1",
        title: "The best western since Deadwood",
        author: "elsa@example.com",
        rating: 5,
        comment:
          "Isabel May's narration is hauntingly beautiful. The show captures the brutal reality of westward expansion without romanticising it. Tim McGraw and Faith Hill are a revelation.",
        createdAt: "2024-08-19T21:00:00.000Z",
      },
      {
        id: "2",
        author: "james@example.com",
        rating: 5,
        comment:
          "Genuinely moved me in ways I did not expect from a Yellowstone prequel. The finale is devastating. Absolutely unmissable television.",
        createdAt: "2025-03-01T19:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "25",
    title: "The Last Kingdom",
    description:
      "A Saxon nobleman raised by Vikings fights to reclaim his birthplace and help unite England under King Alfred, torn between two cultures and two identities.",
    genre: "Historical Drama",
    year: 2015,
    imageUrl: "https://image.tmdb.org/t/p/w500/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
    reviews: [
      {
        id: "1",
        title: "Utterly gripping from start to finish",
        author: "uhtred@example.com",
        rating: 5,
        comment:
          "Alexander Dreymon is outstanding as Uhtred. The show balances political intrigue, brutal combat and genuine character development better than almost anything else in the genre.",
        createdAt: "2024-06-25T20:00:00.000Z",
      },
      {
        id: "2",
        author: "brida@example.com",
        rating: 4,
        comment:
          "Criminally underrated. Far better than most historical dramas and it only gets stronger as the seasons go on. Destiny is all.",
        createdAt: "2024-12-18T18:10:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "26",
    title: "We Were the Lucky Ones",
    description:
      "Based on a true story, a Jewish Polish family is separated at the outbreak of WWII and each member fights for survival across three continents, determined to reunite.",
    genre: "Historical Drama",
    year: 2024,
    imageUrl: "https://image.tmdb.org/t/p/w500/rRv6Lji53tXnP1h6UGYDQVx4FGg.jpg",
    reviews: [
      {
        id: "1",
        title: "One of the most important shows in years",
        author: "nechuma@example.com",
        rating: 5,
        comment:
          "Joey King is extraordinary. The show handles an almost unimaginable story with immense care and humanity. I sobbed through most of it and could not stop watching.",
        createdAt: "2024-05-14T20:30:00.000Z",
      },
      {
        id: "2",
        author: "jakob@example.com",
        rating: 5,
        comment:
          "Devastating, hopeful and beautifully made. The true story behind it makes every episode hit even harder. Essential viewing.",
        createdAt: "2024-09-07T17:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "27",
    title: "Snowfall",
    description:
      "Set in 1983 Los Angeles, a young man gets pulled into the crack cocaine epidemic that would soon devastate American cities, navigating rival dealers, the CIA, and his own ambition.",
    genre: "Crime/Drama",
    year: 2017,
    imageUrl: "https://image.tmdb.org/t/p/w500/y7ntzl7msiaS6o7dvDbNG7XFYcR.jpg",
    reviews: [
      {
        id: "1",
        title: "The most underrated crime drama on television",
        author: "franklin@example.com",
        rating: 5,
        comment:
          "Damson Idris is a genuine star. The show builds slowly but by season three it is as gripping as anything on TV. The way it portrays the crack epidemic from every angle is remarkable.",
        createdAt: "2024-08-30T20:15:00.000Z",
      },
      {
        id: "2",
        author: "lucia@example.com",
        rating: 4,
        comment:
          "Takes a couple of seasons to find its footing but once it does it is absolutely riveting. The family dynamics at the centre of it all are what make it truly special.",
        createdAt: "2025-01-06T19:40:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "28",
    title: "Lost",
    description:
      "The survivors of a plane crash are stranded on a mysterious island full of secrets, supernatural forces, and other dangerous inhabitants who may not want them to leave.",
    genre: "Drama/Mystery",
    year: 2004,
    imageUrl: "https://image.tmdb.org/t/p/w500/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg",
    reviews: [
      {
        id: "1",
        title: "Nothing has ever hooked me faster",
        author: "jack@example.com",
        rating: 5,
        comment:
          "The pilot is still one of the greatest episodes of television ever made. The ensemble cast is incredible and the mystery kept me up night after night. A genuine cultural phenomenon.",
        createdAt: "2024-07-04T21:00:00.000Z",
      },
      {
        id: "2",
        author: "kate@example.com",
        rating: 4,
        comment:
          "The first three seasons are some of the most addictive TV ever made. The ending divides people but the journey absolutely justifies every minute.",
        createdAt: "2024-11-10T18:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "29",
    title: "Mayans M.C.",
    description:
      "A Sons of Anarchy spinoff following EZ Reyes, a prospect in the Mayans motorcycle club on the US-Mexico border, as he navigates loyalty, family, and cartel politics.",
    genre: "Crime/Drama",
    year: 2018,
    imageUrl: "https://image.tmdb.org/t/p/w500/510A0upV9WRAynEgs1E2B3eBxi5.jpg",
    reviews: [
      {
        id: "1",
        title: "Surpasses its predecessor in many ways",
        author: "ez@example.com",
        rating: 5,
        comment:
          "JD Pardo brings incredible depth to EZ. The show tackles immigration, identity and family loyalty in ways Sons of Anarchy never did. By season three it is genuinely unmissable.",
        createdAt: "2024-10-21T20:00:00.000Z",
      },
      {
        id: "2",
        author: "angel@example.com",
        rating: 4,
        comment:
          "Darker and more politically aware than Sons of Anarchy. The border setting gives it a completely different feel and the cartel storylines are gripping.",
        createdAt: "2025-02-19T17:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "30",
    title: "24",
    description:
      "Counter Terrorism Unit agent Jack Bauer races against the clock to prevent catastrophic attacks on America, with each season unfolding in real time over a single day.",
    genre: "Action/Thriller",
    year: 2001,
    imageUrl: "https://image.tmdb.org/t/p/w500/iq6yrZ5LEDXf1ArCOYLq8PIUBpV.jpg",
    reviews: [
      {
        id: "1",
        title: "The original edge of your seat thriller",
        author: "ctu@example.com",
        rating: 5,
        comment:
          "Kiefer Sutherland defined a generation of action television. The real time format is a stroke of genius and seasons one through five are relentlessly gripping.",
        createdAt: "2024-06-05T21:00:00.000Z",
      },
      {
        id: "2",
        author: "chloe@example.com",
        rating: 4,
        comment:
          "Absolutely addictive. The cliffhangers at the end of every episode are brutal. Even when the plots get outlandish you cannot stop watching.",
        createdAt: "2024-10-28T19:15:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "31",
    title: "The Night Of",
    description:
      "A Pakistani-American college student wakes up next to a murdered woman with no memory of what happened, and a public defender takes on his seemingly unwinnable case.",
    genre: "Crime/Drama",
    year: 2016,
    imageUrl: "https://image.tmdb.org/t/p/w500/q13XJHdnsmxQL9rXRcnNDrZGHjO.jpg",
    reviews: [
      {
        id: "1",
        title: "The most gripping miniseries I have ever seen",
        author: "naz@example.com",
        rating: 5,
        comment:
          "John Turturro gives a career defining performance. The show dissects the American justice system with devastating precision. Every episode left me breathless.",
        createdAt: "2024-09-02T20:30:00.000Z",
      },
      {
        id: "2",
        author: "stone@example.com",
        rating: 5,
        comment:
          "Flawless from start to finish. The atmosphere is oppressive and brilliant. One of the finest pieces of crime television ever made.",
        createdAt: "2025-01-30T18:45:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "32",
    title: "Sharp Objects",
    description:
      "A journalist with a troubled past returns to her small Missouri hometown to cover the murders of two young girls, uncovering dark secrets about her own family.",
    genre: "Crime/Thriller",
    year: 2018,
    imageUrl: "https://image.tmdb.org/t/p/w500/1SGovj2qDdkJexvhFiXllj9EYfu.jpg",
    reviews: [
      {
        id: "1",
        title: "Haunting and beautifully made",
        author: "camille@example.com",
        rating: 5,
        comment:
          "Amy Adams is absolutely incredible. The Southern Gothic atmosphere is suffocating in the best possible way and the final episode left me completely stunned.",
        createdAt: "2024-08-11T21:15:00.000Z",
      },
      {
        id: "2",
        author: "adora@example.com",
        rating: 4,
        comment:
          "Slow and deliberate but deeply rewarding. Patricia Clarkson is terrifying. The ending reframes everything you thought you understood.",
        createdAt: "2025-02-22T19:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "33",
    title: "Queen of the South",
    description:
      "A young Mexican woman flees to the United States after her drug dealer boyfriend is murdered, and slowly rises through the criminal underworld to become a cartel queenpin.",
    genre: "Crime/Drama",
    year: 2016,
    imageUrl: "https://image.tmdb.org/t/p/w500/rzdC5EHkkKJE6OPVdh6gT1pR1c9.jpg",
    reviews: [
      {
        id: "1",
        title: "Alice Braga carries this show on her back",
        author: "teresa@example.com",
        rating: 5,
        comment:
          "The transformation Teresa goes through over five seasons is extraordinary. A smart, stylish crime drama that never gets the credit it deserves.",
        createdAt: "2024-07-08T20:00:00.000Z",
      },
      {
        id: "2",
        author: "james@example.com",
        rating: 4,
        comment:
          "Gripping and fast paced. The cartel world feels dangerous and real. Gets better with every season as Teresa's power grows.",
        createdAt: "2024-12-05T17:50:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "34",
    title: "Weeds",
    description:
      "A recently widowed suburban mother begins selling marijuana to maintain her family's affluent lifestyle, gradually getting pulled deeper into the criminal underworld.",
    genre: "Comedy/Drama",
    year: 2005,
    imageUrl: "https://image.tmdb.org/t/p/w500/gKUsBTa5b0GY7U4iWBseeBalfjO.jpg",
    reviews: [
      {
        id: "1",
        title: "Mary-Louise Parker is a national treasure",
        author: "nancy@example.com",
        rating: 5,
        comment:
          "Funny, dark and completely unpredictable. Nancy Botwin is one of the most compelling antiheroes on television and the show is never afraid to go somewhere truly unexpected.",
        createdAt: "2024-06-14T19:30:00.000Z",
      },
      {
        id: "2",
        author: "silas@example.com",
        rating: 4,
        comment:
          "The first three seasons are brilliant. It gets wilder as it goes but the central performance keeps you invested no matter how crazy things get.",
        createdAt: "2025-01-12T18:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "35",
    title: "Fargo",
    description:
      "An anthology crime series inspired by the Coen Brothers film, each season telling a darkly comic tale of murder, greed, and human folly in the frozen American Midwest.",
    genre: "Crime/Drama",
    year: 2014,
    imageUrl: "https://image.tmdb.org/t/p/w500/a3VW6khsyUVKrG0GBCWFG3NzWPX.jpg",
    reviews: [
      {
        id: "1",
        title: "As good as the film it was inspired by",
        author: "molly@example.com",
        rating: 5,
        comment:
          "Each season is its own masterpiece. The writing is sharp and funny and deeply unsettling all at once. Billy Bob Thornton in season one is one of the greatest TV villain performances ever.",
        createdAt: "2024-09-29T20:00:00.000Z",
      },
      {
        id: "2",
        author: "lorne@example.com",
        rating: 5,
        comment:
          "Endlessly inventive. The anthology format means each season feels completely fresh while maintaining the same darkly comic DNA. There is nothing else quite like it.",
        createdAt: "2025-02-10T18:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "36",
    title: "The Affair",
    description:
      "A summer romance between a married waitress and a married novelist tears apart both their families, told through the unreliable perspectives of each person involved.",
    genre: "Drama",
    year: 2014,
    imageUrl: "https://image.tmdb.org/t/p/w500/8scKJeu6GoxMqpt7UO5aMeU0TOn.jpg",
    reviews: [
      {
        id: "1",
        title: "The unreliable narrator device is brilliantly used",
        author: "helen@example.com",
        rating: 4,
        comment:
          "Seeing the same scenes from two completely different perspectives is genuinely fascinating. The show asks difficult questions about memory, truth and desire without easy answers.",
        createdAt: "2024-11-06T19:45:00.000Z",
      },
      {
        id: "2",
        author: "noah@example.com",
        rating: 4,
        comment:
          "Ruth Wilson is extraordinary. The show is messy and flawed like real relationships are. More emotionally honest than most dramas dare to be.",
        createdAt: "2025-03-03T17:20:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "37",
    title: "1923",
    description:
      "A Yellowstone prequel following the Dutton family during the Great Depression and Prohibition era, as patriarch Jacob Dutton fights to protect the ranch from land barons and corruption.",
    genre: "Drama/Western",
    year: 2022,
    imageUrl: "https://image.tmdb.org/t/p/w500/zgZRJZvZn5cpsWAB0zMUdad3iZd.jpg",
    reviews: [
      {
        id: "1",
        title: "Harrison Ford and Helen Mirren are everything",
        author: "jacob@example.com",
        rating: 5,
        comment:
          "Two of Hollywood's greatest actors at the absolute top of their game. The Montana landscape is stunning and the story is gripping from the very first scene.",
        createdAt: "2024-08-25T20:30:00.000Z",
      },
      {
        id: "2",
        author: "cara@example.com",
        rating: 4,
        comment:
          "A worthy companion to 1883. The dual storylines keep things moving and the period detail is impressive. Helen Mirren alone is worth the price of admission.",
        createdAt: "2025-01-31T19:00:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "38",
    title: "Top Boy",
    description:
      "A gritty portrayal of drug dealers and gang life on a London housing estate, following Dushane and Sully as they fight to maintain control of their operation across decades.",
    genre: "Crime/Drama",
    year: 2011,
    imageUrl: "https://image.tmdb.org/t/p/w500/iBqgEMnbleoeLqdadlvBGDxVvKb.jpg",
    reviews: [
      {
        id: "1",
        title: "The British answer to The Wire",
        author: "dushane@example.com",
        rating: 5,
        comment:
          "Brutally realistic and deeply human. Ashley Walters and Kane Robinson have extraordinary chemistry. The Netflix revival is as good as anything the show has ever done.",
        createdAt: "2024-10-14T20:15:00.000Z",
      },
      {
        id: "2",
        author: "sully@example.com",
        rating: 5,
        comment:
          "Nothing on British television comes close to this. The estate feels completely real, the characters are complex and the storytelling is fearless.",
        createdAt: "2025-02-28T18:40:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "39",
    title: "Euphoria",
    description:
      "A group of high school students in a small American town navigate identity, trauma, addiction, and love in a visually stunning and brutally honest portrait of modern youth.",
    genre: "Drama",
    year: 2019,
    imageUrl: "https://image.tmdb.org/t/p/w500/aJrG7OkoTMPWG5c8opz8a93AZPY.jpg",
    reviews: [
      {
        id: "1",
        title: "Unlike anything else on television",
        author: "rue@example.com",
        rating: 5,
        comment:
          "Zendaya gives one of the greatest performances in the history of television. The show is visually extraordinary and emotionally devastating. It captures something real about modern adolescence.",
        createdAt: "2024-09-18T21:00:00.000Z",
      },
      {
        id: "2",
        author: "jules@example.com",
        rating: 4,
        comment:
          "Overwhelming and brilliant. Not easy viewing but important and unforgettable. The cinematography alone makes it worth watching.",
        createdAt: "2025-01-26T19:30:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
  {
    id: "40",
    title: "The Fall",
    description:
      "A determined Metropolitan Police detective is sent to Belfast to review a stalled murder investigation and finds herself in a cat and mouse game with an active serial killer.",
    genre: "Crime/Thriller",
    year: 2013,
    imageUrl: "https://image.tmdb.org/t/p/w500/fm7nN3nUADA7JGgnFNlOWpXn1tf.jpg",
    reviews: [
      {
        id: "1",
        title: "Gillian Anderson has never been better",
        author: "stella@example.com",
        rating: 5,
        comment:
          "The show is a masterclass in slow burn tension. Anderson and Dornan are magnetic together. What makes it unique is how it humanises the killer without excusing him for a single second.",
        createdAt: "2024-11-25T20:00:00.000Z",
      },
      {
        id: "2",
        author: "spector@example.com",
        rating: 5,
        comment:
          "Deeply unsettling and completely gripping. The Belfast setting adds a layer of atmosphere that is hard to shake. One of the finest crime dramas Britain has ever produced.",
        createdAt: "2025-03-07T18:15:00.000Z",
      },
    ],
    createdAt: new Date().toISOString(),
    createdBy: "seed",
  },
];