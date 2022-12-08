const API_URL = `https://newsapi.org/v2/Formula1/sources?country=usapiKey=706e3f9a85834c848a24dd1ec7f8159f`;

const newsData = [
  {
    status: "ok",
    totalResults: 14,
    articles: [
      {
        source: { id: null, name: "CBS Sports" },
        author: "Richard Biebrich Jr.",
        title:
          "Formula 1, IndyCar silly season update: Oscar Piastri among new drivers getting familiar with their rides",
        description:
          "The F1 driver shuffle started in the garage right after the season finale ended in Abu Dhabi",
        url: "https://www.cbssports.com/motor-sports/news/formula-1-indycar-silly-season-update-oscar-piastri-among-new-drivers-getting-familiar-with-their-rides/",
        urlToImage:
          "https://sportshub.cbsistatic.com/i/r/2022/11/25/c91aa59b-2767-4f4b-83bd-ead3ef7affd4/thumbnail/1200x675/8d60176b2bea478dbdcd2ee8ed4d0515/gettyimages-1443477948-1.jpg",
        publishedAt: "2022-11-25T14:48:30Z",
        content:
          "The silly season is finally fully open for business in the world of open-wheel racing, and while Formula 1 stuck around in Abu Dhabi for the final test of the 2022 season, the hot stove temperature f… [+4134 chars]",
      },
      {
        source: { id: null, name: "Sports Illustrated" },
        author: "Madeline Coleman",
        title:
          "Vettel Finishes His Final F1 Lap As Ferrari Holds on for Vice Champion",
        description:
          "Max Verstappen and Sergio Perez both finished in the top three for Red Bull, while Charles Leclerc came in between them for Ferrari.",
        url: "https://www.si.com/formula1/2022/11/20/sebastian-vettel-retirement-ferrari-charles-leclerc-vice-champions-abu-dhabi",
        urlToImage:
          "https://www.si.com/.image/t_share/MTkzODg1MTAxODY2NjI0NDk2/seb-farewell.jpg",
        publishedAt: "2022-11-20T20:40:45Z",
        content:
          "After a long 246 days, the 2022 Formula One season finished in a puff of smoke as fireworks sounded off and two Red Bulls, a Ferrari and later, an Aston Martin perfectly executed donuts in front of t… [+14815 chars]",
      },
      {
        source: { id: null, name: "F1technical.net" },
        author: "Balazs Szabo",
        title: "Strategy guide for the Abu Dhabi Grand Prix",
        description:
          "Thanks to the relatively high degradation seen over the first two days of the Abu Dhabi Grand Prix weekend, Formula One’s sole tyre supplier Pirelli thinks that the two-stop strategy might turn out to be the best way to complete the season-closing race. F1Tec…",
        url: "https://www.f1technical.net/news/23898",
        urlToImage:
          "http://f1tcdn.net/images/news/2022/abudhabi-alfaromeo.jpeg",
        publishedAt: "2022-11-20T11:52:10Z",
        content:
          "By Balazs Szabo on 20 Nov 2022, 13:52\r\nThanks to the relatively high degradation seen over the first two days of the Abu Dhabi Grand Prix weekend, Formula Ones sole tyre supplier Pirelli thinks that … [+2696 chars]",
      },

      {
        source: { id: null, name: "Sports Illustrated" },
        author: "Madeline Coleman",
        title:
          "Russell, Hamilton Launch Mercedes Back Into F1 Winning Ways in Brazil",
        description:
          "A chaotic storm began brewing across multiple team radios farther back on the grid behind the 1-2 of Mercedes’s George Russell and Lewis Hamilton.",
        url: "https://www.si.com/formula1/2022/11/14/george-russell-win-lewis-hamilton-mercedes-f1-brazil",
        urlToImage:
          "https://www.si.com/.image/t_share/MTkzNzMwNTAyMzcxMzIxMjgz/george-lewis.jpg",
        publishedAt: "2022-11-14T01:36:34Z",
        content:
          "712 days. \r\nThat’s how long it’s been since Mercedes recorded a 1-2 finish, dating back to Imola 2020 with Lewis Hamilton (P1) and Valtteri Bottas (P2). Two years later, the ’22 campaign had not gone… [+14191 chars]",
      },
      {
        source: { id: null, name: "F1technical.net" },
        author: "Balazs Szabo",
        title: "Strategy guide for the Sao Paulo Grand Prix",
        description:
          "Based on yesterday’s Sprint dash, it seems that there are a number of different strategy options that are available to the teams at today’s Sao Paulo Grand Prix. F1Technical’s Balázs Szabó analyses the possible strategies for today’s 71-lap race at the Autodr…",
        url: "https://www.f1technical.net/news/23888",
        urlToImage:
          "http://f1tcdn.net/images/news/2022/saopaulo-astonmartin.jpeg",
        publishedAt: "2022-11-13T14:58:54Z",
        content:
          "By Balazs Szabo on 13 Nov 2022, 16:58\r\nBased on yesterdays Sprint dash, it seems that there are a number of different strategy options that are available to the teams at todays Sao Paulo Grand Prix. … [+4271 chars]",
      },
      {
        source: { id: null, name: "RaceFans" },
        author: "Will Wood",
        title:
          "Sainz admits “big mistakes” cost him front-row start | RaceFans Round-up",
        description:
          'In the RaceFans Round-up: Sainz admits "big mistakes" cost him front-row start • Szafnauer wants rethink over Gasly\'s penalty points • Qualifying disappointment for Alfa Romeo',
        url: "https://www.racefans.net/2022/11/12/racefans-round-up-12-11-5/",
        urlToImage:
          "https://www.racefans.net/wp-content/uploads/2022/11/racefansdotnet-21-11-12-00-40-22-1.jpg",
        publishedAt: "2022-11-12T01:01:00Z",
        content:
          "In the round-up: Carlos Sainz Jnr admits he should be higher than fifth on the grid for today’s Interlagos sprint race.In brief\r\nSainz said qualifying was “absolutely crazy with the weather” which ma… [+4609 chars]",
      },
      {
        source: { id: null, name: "Independent.ie" },
        author: "Pól Ó Conghaile",
        title:
          "Grand Prix getaways – how can you travel to see Formula 1, and what’s the experience like?",
        description:
          "You will hear a Formula 1 car before you see it. You will feel it before you see it. There&rsquo;s almost a sense of foreshadowing, of air being sucked back down the track. The high-pitched scream rises, eats into your eardrums until suddenly, in a visceral r…",
        url: "https://www.independent.ie/life/travel/europe/grand-prix-getaways-how-can-you-travel-to-see-formula-1-and-whats-the-experience-like-42118500.html",
        urlToImage:
          "https://www.independent.ie/life/travel/europe/c2f49/42117162.ece/AUTOCROP/w1240h700/tyImages_1423954134",
        publishedAt: "2022-11-05T02:30:00Z",
        content:
          "You will hear a Formula 1 car before you see it. You will feel it before you see it. Theres almost a sense of foreshadowing, of air being sucked back down the track. The high-pitched scream rises, ea… [+13677 chars]",
      },
      {
        source: { id: null, name: "Crypto Daily" },
        author: "Crypto Daily",
        title:
          "Day Two of Web Summit 2022: LEGO creates a virtual world for kids, F1 to work remotely, startups rule",
        description:
          "Among the speakers at Web Summit 2022 on day two were F1 driver Toto Wolff and Microsoft Vice Chair and President Brad Smith, and the day was full of meaningful discussions for the tech industry. During the entire event, which ends on November 4, there are ov…",
        url: "https://cryptodaily.co.uk/2022/11/day-two-of-web-summit-2022-lego-creates-a-virtual-world-for-kids-f1-to-work-remotely-startups-rule",
        urlToImage:
          "https://cryptodailycdn.ams3.cdn.digitaloceanspaces.com/imgonline-com-ua-resize-ae4tkmgjctnf.jpg",
        publishedAt: "2022-11-04T15:30:00Z",
        content:
          "Among the speakers at Web Summit 2022 on day two were F1 driver Toto Wolff and Microsoft Vice Chair and President Brad Smith, and the day was full of meaningful discussions for the tech industry. Dur… [+5663 chars]",
      },
      {
        source: { id: "fox-news", name: "Fox News" },
        author: "Ryan Gaydos",
        title:
          "Max Verstappen sets F1 record for most wins in single season with latest victory in Mexico City",
        description:
          "Max Verstappen sits alone as the single-season record holder for victories after Sunday's win in the Mexico Grand Prix. He's already wrapped up a world championship.",
        url: "https://www.foxnews.com/sports/max-verstappen-sets-f1-record-most-wins-single-season-latest-victory-mexico-city",
        urlToImage:
          "https://static.foxnews.com/foxnews.com/content/uploads/2022/10/12e31ad0-Max-Verstappen4.jpg",
        publishedAt: "2022-10-31T00:07:01Z",
        content:
          "Max Verstappen's incredible Formula One season got better with a record-breaking victory at the Mexico Grand Prix on Sunday.\r\nVerstappen, who has already wrapped up a points title, broke the record f… [+1991 chars]",
      },
      {
        source: { id: null, name: "F1technical.net" },
        author: "Balazs Szabo",
        title: "Race guide for the Mexico Grand Prix",
        description:
          "Uncertainty revolves around the possible strategies for today’s Mexico City Grand Prix as there are a number of different options that are available to the teams. F1Technical’s Balázs Szabó analyses the possible strategies for today’s 71-lap race at the Autod…",
        url: "https://www.f1technical.net/news/23878",
        urlToImage: "http://f1tcdn.net/images/news/2022/mexico-vettel.jpeg",
        publishedAt: "2022-10-30T11:04:43Z",
        content:
          "By Balazs Szabo on 30 Oct 2022, 13:04\r\nUncertainty revolves around the possible strategies for todays Mexico City Grand Prix as there are a number of different options that are available to the teams… [+3705 chars]",
      },
      {
        source: { id: null, name: "Sports Illustrated" },
        author: "Madeline Coleman",
        title:
          "Alonso’s Penalty Reversed After Twist in Alpine-Haas F1 Protests",
        description:
          "The Spanish driver had been demoted from seventh to P15 following Haas’s protest at the U.S. Grand Prix regarding driving his car in unsafe conditions.",
        url: "https://www.si.com/formula1/2022/10/28/fernando-alonso-penalty-reversed-after-twist-alpine-haas-f1-protests",
        urlToImage:
          "https://www.si.com/.image/t_share/MTkzMzQ3MzgwMjgyNjY0ODY3/fernando-alpine-penalty.jpg",
        publishedAt: "2022-10-28T12:45:31Z",
        content:
          "Alpine confirmed late Thursday night that the FIA stewards decided to reverse Fernando Alonso’s penalty, handing him back his seventh place finish at the United States Grand Prix. \r\nHe also receives … [+2201 chars]",
      },
      {
        source: { id: null, name: "CBS Sports" },
        author: "Richard Biebrich Jr.",
        title: "Audi to partner with Sauber, join Formula 1 grid in 2026",
        description:
          "Sauber remains in control of race operations as the deal fcloses another door for Andretti Autosport to join F1",
        url: "https://www.cbssports.com/motor-sports/news/audi-to-partner-with-sauber-join-formula-1-grid-in-2026/",
        urlToImage:
          "https://sportshub.cbsistatic.com/i/r/2022/10/26/220348fd-f864-4195-8aed-e380f3810eec/thumbnail/1200x675/b49f7ad519e12665120eb80991a618ed/valtteri-bottas-getty.jpg",
        publishedAt: "2022-10-26T16:24:26Z",
        content:
          "Multiple sources, including Formula1.com, are reporting Alfa Romeo's sponsorship of Sauber will come off the car at the conclusion of the 2023 season. However, the team will continue to use their Fer… [+1338 chars]",
      },
      {
        source: { id: null, name: "F1technical.net" },
        author: "Balazs Szabo",
        title: "Audi reveals F1 entry as works team with Sauber for 2026",
        description:
          "Audi has finally revealed that it will join forces with the Sauber Group with the Swiss company set to become its strategic partner and its works team from the 2026 season onwards.",
        url: "https://www.f1technical.net/news/23869",
        urlToImage: "http://f1tcdn.net/images/news/2022/ff-wticwaaau5sl.jpg",
        publishedAt: "2022-10-26T08:42:29Z",
        content:
          "By Balazs Szabo on 26 Oct 2022, 10:42\r\nAudi has finally revealed that it will join forces with the Sauber Group with the Swiss company set to become its strategic partner and its works team from the … [+2337 chars]",
      },
    ],
  },
];
export default newsData;
