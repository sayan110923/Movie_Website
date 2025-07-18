const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const movieContainer = document.getElementById('movie-container');

const getPopularMovies = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    showMovies(data.results);
  } catch {
    console.log("Failed to fetch movies:", log);
    movieContainer.innerHTML = `<p style="color: red; text-align: center;">Oops! Something went wrong while fetching movies.</p>`;
  }
};

const showMovies = (movies) => {
  movieContainer.innerHTML = '';

  movies.forEach((movie) => {
    const { title, poster_path, vote_average } = movie;

    const movieCard = document.createElement('div');
    movieCard.classList.add('movie');

    movieCard.innerHTML = `
      <img src="${IMAGE_BASE_URL + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3 class="movie-title">${title}</h3>
        <p class="movie-rating">⭐ ${vote_average}</p>
      </div>
    `;

    movieContainer.appendChild(movieCard);
  });
};

getPopularMovies();





//---------------------------------------------------------------API fetch data-----------------------------------------------------------------
// {
//   "page": 1,
//   "results": [
//     {
//       "adult": false,
//       "backdrop_path": "/uIpJPDNFoeX0TVml9smPrs9KUVx.jpg",
//       "genre_ids": [27, 9648],
//       "id": 574475,
//       "original_language": "en",
//       "original_title": "Final Destination Bloodlines",
//       "overview": "Plagued by a violent recurring nightmare, college student Stefanie heads home to track down the one person who might be able to break the cycle and save her family from the grisly demise that inevitably awaits them all.",
//       "popularity": 1124.222,
//       "poster_path": "/6WxhEvFsauuACfv8HyoVX6mZKFj.jpg",
//       "release_date": "2025-05-14",
//       "title": "Final Destination Bloodlines",
//       "video": false,
//       "vote_average": 7.222,
//       "vote_count": 1119
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
//       "genre_ids": [10751, 878, 35, 12],
//       "id": 552524,
//       "original_language": "en",
//       "original_title": "Lilo & Stitch",
//       "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
//       "popularity": 425.3561,
//       "poster_path": "/c32TsWLES7kL1uy6fF03V67AIYX.jpg",
//       "release_date": "2025-05-17",
//       "title": "Lilo & Stitch",
//       "video": false,
//       "vote_average": 7.115,
//       "vote_count": 688
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg",
//       "genre_ids": [28, 10751, 14],
//       "id": 1087192,
//       "original_language": "en",
//       "original_title": "How to Train Your Dragon",
//       "overview": "On the rugged isle of Berk, where Vikings and dragons have been bitter enemies for generations, Hiccup stands apart, defying centuries of tradition when he befriends Toothless, a feared Night Fury dragon. Their unlikely bond reveals the true nature of dragons, challenging the very foundations of Viking society.",
//       "popularity": 347.6049,
//       "poster_path": "/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg",
//       "release_date": "2025-06-06",
//       "title": "How to Train Your Dragon",
//       "video": false,
//       "vote_average": 8.041,
//       "vote_count": 363
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/wnnu8htEZBLtwrke9QYfLKx6zjp.jpg",
//       "genre_ids": [53, 18, 80],
//       "id": 1426776,
//       "original_language": "en",
//       "original_title": "STRAW",
//       "overview": "What will be her last straw? A devastatingly bad day pushes a hardworking single mother to the breaking point — and into a shocking act of desperation.",
//       "popularity": 311.4665,
//       "poster_path": "/t3cmnXYtxJb9vVL1ThvT2CWSe1n.jpg",
//       "release_date": "2025-06-05",
//       "title": "STRAW",
//       "video": false,
//       "vote_average": 8.04,
//       "vote_count": 581
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/xVoj3HrOsnjOyyhqRD9jt5kTPc4.jpg",
//       "genre_ids": [878, 35, 28],
//       "id": 605722,
//       "original_language": "en",
//       "original_title": "Distant",
//       "overview": "After crash-landing on an alien planet, an asteroid miner must contend with the challenges of his new surroundings, while making his way across the harsh terrain to the only other survivor – a woman who is trapped in her escape pod.",
//       "popularity": 335.5246,
//       "poster_path": "/czh8HOhsbBUKoKsmRmLQMCLHUev.jpg",
//       "release_date": "2024-07-12",
//       "title": "Distant",
//       "video": false,
//       "vote_average": 6.2,
//       "vote_count": 120
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/6van4BavoNXaZhCPdzLHNQ4Uc8H.jpg",
//       "genre_ids": [53, 28],
//       "id": 1087891,
//       "original_language": "en",
//       "original_title": "The Amateur",
//       "overview": "After his life is turned upside down when his wife is killed in a London terrorist attack, a brilliant but introverted CIA decoder takes matters into his own hands when his supervisors refuse to take action.",
//       "popularity": 312.7117,
//       "poster_path": "/SNEoUInCa5fAgwuEBMIMBGvkkh.jpg",
//       "release_date": "2025-04-09",
//       "title": "The Amateur",
//       "video": false,
//       "vote_average": 6.955,
//       "vote_count": 583
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/zxjFabSJKMAvuu3acNg78nuTuCs.jpg",
//       "genre_ids": [28, 53, 27],
//       "id": 1442776,
//       "original_language": "zh",
//       "original_title": "Kuang Bao Ju Xi",
//       "overview": "A young man climbs into the mountains to pick up a meteorite that has fallen there and is killed by something. The \"thing\" descends to the village and begins to eat the inhabitants one by one, terrorizing the entire island.",
//       "popularity": 380.8317,
//       "poster_path": "/9TFaFsSXedaALXTzba349euDeoY.jpg",
//       "release_date": "2024-03-27",
//       "title": "Crazy Lizard",
//       "video": false,
//       "vote_average": 6,
//       "vote_count": 3
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/9f06S7Uc1Xmnc3OYtK8UKu9o3Ox.jpg",
//       "genre_ids": [28, 12, 27],
//       "id": 1181039,
//       "original_language": "zh",
//       "original_title": "鬼吹灯：献王虫谷",
//       "overview": "Adapted from the 3rd volume in the novel series \"Candle in the Tomb\" by Zhang Mu Ye. Hu Bayi, Wang Kaixuan, and Shiely Yang, infected with a curse, embark on a journey to King Xian's tomb to retrieve the Haochen Bead and break the curse. They face ancient organs, ghostly visions, explosive bugs, and a massive salamander.",
//       "popularity": 358.5779,
//       "poster_path": "/7Hk1qxAvZi9H9cfBb4iHkoGjapH.jpg",
//       "release_date": "2023-09-22",
//       "title": "Candle in the Tomb: The Worm Valley",
//       "video": false,
//       "vote_average": 6.5,
//       "vote_count": 4
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/eRNMOrA6Bigonug3dT1R7aLZQaq.jpg",
//       "genre_ids": [28],
//       "id": 1240475,
//       "original_language": "zh",
//       "original_title": "缉恶",
//       "overview": "The film tells the story of narcotics police officer Huang Mingjin and the \"mysterious figure\" Wei Yunzhou. Through completely different means and methods, in the process of calculating and wrestling with each other, they tear apart the facade of urban tranquility, exposing the underground drug network woven by the hidden hand \"Long Wang\", and ultimately eradicate the darkness with the sword of justice, revealing the dawn of light.",
//       "popularity": 263.3874,
//       "poster_path": "/m5UBHbEjQJx3AkRZWRY6A4l4ZDT.jpg",
//       "release_date": "2024-02-12",
//       "title": "Hunt the Wicked",
//       "video": false,
//       "vote_average": 5.571,
//       "vote_count": 7
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/fPWJn5pqBr8n4h0YxW3QuasdvoI.jpg",
//       "genre_ids": [28, 53],
//       "id": 1127110,
//       "original_language": "en",
//       "original_title": "Diablo",
//       "overview": "Ex-con Kris Chaney seizes the daughter of a Colombian gangster to fulfill a noble promise to the young girl's mother. When her father enlists both the criminal underworld and a psychotic killer to exact his revenge, Kris relies on everything he's ever learned to stay alive and keep his word.",
//       "popularity": 259.6851,
//       "poster_path": "/uFQduVyYIinJy3eLjozgfl6Xtcn.jpg",
//       "release_date": "2025-06-13",
//       "title": "Diablo",
//       "video": false,
//       "vote_average": 7,
//       "vote_count": 37
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/yb1YNS9zaxbwdQBaYIfIKxWD65q.jpg",
//       "genre_ids": [27, 53, 878],
//       "id": 1100988,
//       "original_language": "en",
//       "original_title": "28 Years Later",
//       "overview": "Twenty-eight years since the rage virus escaped a biological weapons laboratory, now, still in a ruthlessly enforced quarantine, some have found ways to exist amidst the infected. One such group lives on a small island connected to the mainland by a single, heavily-defended causeway. When one member departs on a mission into the dark heart of the mainland, he discovers secrets, wonders, and horrors that have mutated not only the infected but other survivors as well.",
//       "popularity": 223.6853,
//       "poster_path": "/361hRZoG91Nw6qXaIKuGoogQjix.jpg",
//       "release_date": "2025-06-18",
//       "title": "28 Years Later",
//       "video": false,
//       "vote_average": 7.2,
//       "vote_count": 157
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/yBDvgpyynDsbMyK21FoQu1c2wYR.jpg",
//       "genre_ids": [9648, 80, 53],
//       "id": 870028,
//       "original_language": "en",
//       "original_title": "The Accountant²",
//       "overview": "When an old acquaintance is murdered, Wolff is compelled to solve the case. Realizing more extreme measures are necessary, Wolff recruits his estranged and highly lethal brother, Brax, to help. In partnership with Marybeth Medina, they uncover a deadly conspiracy, becoming targets of a ruthless network of killers who will stop at nothing to keep their secrets buried.",
//       "popularity": 204.6371,
//       "poster_path": "/kMDUS7VmFhb2coRfVBoGLR8ADBt.jpg",
//       "release_date": "2025-04-23",
//       "title": "The Accountant²",
//       "video": false,
//       "vote_average": 7.2,
//       "vote_count": 896
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/a3F9cXjRH488qcOqFmFZwqawBMU.jpg",
//       "genre_ids": [16, 28, 878],
//       "id": 1376434,
//       "original_language": "en",
//       "original_title": "Predator: Killer of Killers",
//       "overview": "While three of the fiercest warriors in human history—a Viking raider, a ninja in feudal Japan, and a WWII pilot—are killers in their own right, they are merely prey for their new opponent: the ultimate killer of killers.",
//       "popularity": 217.1042,
//       "poster_path": "/2XDQa6EmFHSA37j1t0w88vpWqj9.jpg",
//       "release_date": "2025-06-05",
//       "title": "Predator: Killer of Killers",
//       "video": false,
//       "vote_average": 8,
//       "vote_count": 567
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/7TIoq6DRnMn2aDViSRfPooWZkga.jpg",
//       "genre_ids": [28, 18, 53],
//       "id": 1289601,
//       "original_language": "en",
//       "original_title": "Life After Fighting",
//       "overview": "Retired martial arts world champion Alex Faulkner has settled into a simple life, when the disappearance of two of his students leads to an unthinkable discovery close to home. Just when all hope of finding the children is lost, he locates the imprisoned girls and unsurfaces an international child trafficking operation, which draws him back into the fight of his life against those behind it.",
//       "popularity": 172.7666,
//       "poster_path": "/uKWAk4BHzyEOMmLKUDXoIAPhH36.jpg",
//       "release_date": "2024-06-07",
//       "title": "Life After Fighting",
//       "video": false,
//       "vote_average": 7.15,
//       "vote_count": 40
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/lOje1iz4VYWELYWRkZAwI7oIJd0.jpg",
//       "genre_ids": [28, 35, 80],
//       "id": 1239193,
//       "original_language": "en",
//       "original_title": "Deep Cover",
//       "overview": "Kat is an improv comedy teacher beginning to question if she’s missed her shot at success. When an undercover cop offers her the role of a lifetime, she recruits two of her students to infiltrate London’s gangland by impersonating dangerous criminals.",
//       "popularity": 189.6215,
//       "poster_path": "/euM8fJvfH28xhjGy25LiygxfkWc.jpg",
//       "release_date": "2025-06-12",
//       "title": "Deep Cover",
//       "video": false,
//       "vote_average": 6.8,
//       "vote_count": 174
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/nAxGnGHOsfzufThz20zgmRwKur3.jpg",
//       "genre_ids": [27, 14, 53],
//       "id": 1233413,
//       "original_language": "en",
//       "original_title": "Sinners",
//       "overview": "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
//       "popularity": 189.2124,
//       "poster_path": "/yqsCU5XOP2mkbFamzAqbqntmfav.jpg",
//       "release_date": "2025-04-16",
//       "title": "Sinners",
//       "video": false,
//       "vote_average": 7.553,
//       "vote_count": 1586
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
//       "genre_ids": [10751, 35, 12, 14],
//       "id": 950387,
//       "original_language": "en",
//       "original_title": "A Minecraft Movie",
//       "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
//       "popularity": 185.9455,
//       "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
//       "release_date": "2025-03-31",
//       "title": "A Minecraft Movie",
//       "video": false,
//       "vote_average": 6.501,
//       "vote_count": 1858
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/xtnfoFs9vOLBF7Ox13mFmFUovey.jpg",
//       "genre_ids": [28, 12, 18],
//       "id": 1311844,
//       "original_language": "en",
//       "original_title": "The Twisters",
//       "overview": "A deadly patchwork of destructive cyclones is on an apocalyptic path of convergence at a populated Midwest city center. There, the twisters will merge into one mega tornado that threatens to obliterate the cities for hundreds of miles around.",
//       "popularity": 365.1035,
//       "poster_path": "/8OP3h80BzIDgmMNANVaYlQ6H4Oc.jpg",
//       "release_date": "2024-06-28",
//       "title": "The Twisters",
//       "video": false,
//       "vote_average": 4.7,
//       "vote_count": 10
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/79tWkw0oc4Az96bzw5jGsMI05DS.jpg",
//       "genre_ids": [9648, 53, 28, 878],
//       "id": 1379587,
//       "original_language": "en",
//       "original_title": "Utopia",
//       "overview": "A soldier searching for his missing wife breaks into a high-tech facility, believing she's been caught in a human trafficking ring. But beyond its walls, he finds a surreal, futuristic fantasy park where reality and illusion blur. As he navigates this seductive and dangerous world, a shocking truth pulls him deeper into a deadly game where nothing is as it seems.",
//       "popularity": 166.4717,
//       "poster_path": "/yef0tY1Nw3BX8PJTfBLieqHj5Hw.jpg",
//       "release_date": "2024-12-09",
//       "title": "Utopia",
//       "video": false,
//       "vote_average": 5.4,
//       "vote_count": 38
//     },
//     {
//       "adult": false,
//       "backdrop_path": "/6YaTxghwL1HFBjcj43UHlP3zv5P.jpg",
//       "genre_ids": [12, 16, 10751],
//       "id": 666154,
//       "original_language": "en",
//       "original_title": "Kayara",
//       "overview": "A courageous and athletic teenager, Kayara dreams that she is destined to be the first female to break into the league of Chasquis - the official messengers of the Incan empire. As she learns what it takes to be a Chasqui along with its challenges, she tackles every mission she gets and discovers the ancient stories of her land and her people.",
//       "popularity": 138.1315,
//       "poster_path": "/tpZdjnoJ6Z3NsSxI6HjAIggrcEv.jpg",
//       "release_date": "2025-01-02",
//       "title": "Kayara",
//       "video": false,
//       "vote_average": 7.5,
//       "vote_count": 54
//     }
//   ],
//   "total_pages": 51033,
//   "total_results": 1020654
// }
