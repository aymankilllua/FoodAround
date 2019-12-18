
 import img1 from "./component/img/flags/Vietnam.png"
 import img2 from "./component/img/flags/Greece.png"
 import img3 from "./component/img/flags/italy.png"
 import img4 from "./component/img/flags/pakistan.png"
 import img5 from "./component/img/flags/philippines.png"
 import img6 from "./component/img/flags/thailand.png"
 import img7 from "./component/img/flags/japan.png"
 import img8 from "./component/img/flags/ukraine.png"
 import img9 from "./component/img/flags/china.png"
 import img10 from "./component/img/flags/india.png"
 import img11 from "./component/img/flags/spain.png"
 import img12 from "./component/img/flags/france.png"
 import img13 from "./component/img/flags/mexico.png"
 import img14 from "./component/img/flags/switzerland.png"
 import img15 from "./component/img/flags/portugal.png"
 import img16 from "./component/img/flags/south-korea.png"
 import img17 from "./component/img/flags/sweden.png"
 import img18 from "./component/img/flags/montenegro.png"
 import img19 from "./component/img/flags/australia.png"
 import img20 from "./component/img/flags/usa.png"

 /* deshes img */
 import food1 from "./component/img/dishes/Vietnam-dish.jpg"
 import food2 from "./component/img/dishes/Greece-dish.jpg"
 import food3 from "./component/img/dishes/Italy-dish.jpg"
 import food4 from "./component/img/dishes/Pakistan-dish.jpg"
 import food5 from "./component/img/dishes/Philippines-dish.jpg"
 import food6 from "./component/img/dishes/Thailand-dish.jpg"
 import food7 from "./component/img/dishes/Japan-dish.jpg"
 import food8 from "./component/img/dishes/Ukraine-dish.jpg"
 import food9 from "./component/img/dishes/China-dish.jpg"
 import food10 from "./component/img/dishes/India-dish.jpg"
 import food11 from "./component/img/dishes/Spain-dish.jpg"
 import food12 from "./component/img/dishes/France-dish.jpg"
 import food13 from "./component/img/dishes/Mexico-dish.jpg"
 import food14 from "./component/img/dishes/Switzerland-dish.jpg"
 import food15 from "./component/img/dishes/Portugal-dish.jpg"
 import food16 from "./component/img/dishes/Korea-dish.jpg"
 import food17 from "./component/img/dishes/Sweden-dish.jpg"
 import food18 from "./component/img/dishes/Montenegro-dish.jpg"
 import food19 from "./component/img/dishes/Australia-dish.jpg"
 import food20 from "./component/img/dishes/USA-dish.jpg"


 /* landing page img */
 import land1 from "./component/img/landingpage/china.png"
 import land2 from "./component/img/landingpage/france.png"
 import land3 from "./component/img/landingpage/germany.png"
 import land4 from "./component/img/landingpage/korea.png"
 import land5 from "./component/img/landingpage/russia.png"
 import land6 from "./component/img/landingpage/span.png"
 import land7 from "./component/img/landingpage/uk.png"
 import land8 from "./component/img/landingpage/usa.png"

 export const landpage = [
    {id:1,img:land1,},
    {id:2,img:land2,},
    {id:3,img:land3,},
    {id:4,img:land4,},
    {id:5,img:land5,},
    {id:6,img:land6,},
    {id:7,img:land7,},
    {id:8,img:land8},
 ]

/* array of food */
export const country = [
    {id:0,
        flagimg:img1,
        dish:food1  ,
        description:[
            "The main ingredients of Vietnamese food include shrimp paste, fish sauce, rice, herbs, Thai basil, fruits and vegetables. But at the same time, unlike other Asian countries, Vietnam has one of the healthiest foods in this region."
        ],
     topfood:[
        "Goi cuon – spring rolls stuffed with coriander, greens, minced pork, shrimp or crab.",
        "Banh mi – sandwich with vegetables, omelette and various different fillings.",
        "Banh Xeo – Vietnamese pancakes. The literal translation is «sizzling pancake».",
        "Pho – noodle soup.",
        "Cha Ca – white fish, sauteed in butter with spring onions.",
        "Must-Drink in Vietnam: Jasmine tea, Bia Hoi – local beer, strong iced coffee, lemon iced tea.",
     ],
     name:"Vietnam"},

    {id:1,
        flagimg:img2 ,
        dish:food2  ,
        description:[
           "There are many things in general you can try, from salads to hot dishes, from sweets to soups. But if you want something traditional, cheap and fast – it`s definitely souvlaki. The iconic dish of Greece is a fast food that you usually can find anywhere on the streets, in the bars, in small take-out shops and cafes. You will see souvlaki over the whole country. And if you are lucky enough to be invited to a house party of Greek people – ask for mousaka. It is the best when it`s homemade." 
        ],  
    topfood:[
        "Greak salad – it is called just «salad» in Greece. Be aware of this when you order in restaurant.",
        "Souvlaki – “Little skewers” in Greek: it`s basically little pieces of marinated pork, fried on grill.",
        "Mousaka – is an eggplant- or potato-based dish. You definitely would want to give it a try.",
        "Must-Drink in Greece: ouzo, tsipouro",
    ],
    name:"Greece"},

    {id:2,
        flagimg:img3 ,
        dish:food3  ,
        description:[
            "It’s hard to speak about Italian food, it’s better to enjoy it. The traditional colors of Italian cuisine – red, green and yellow always create a great mixture of flavor and taste. Usually all the dishes are based on tomato, bread and olive oil. The secret of the cuisine is not in a sophisticated preparation process, it is more in the freshness of the products."
        ],  
    topfood:[
        "Pizza – Margherita, Quattro Formaggi, Speck e Mascarpone & many more…",
        "Pasta – choose Carbonara, Pesto, Cacio e pepe and Amatriciana: these are the best options.",
        "Caprese – ask for it just if the ingredients are: original mozzarella di bufala, “Cuor di Bue” tomato & Extra virgin Olive oil. With a slice of Italian fresh bread, it’s a simple and amazing dish.",
        "Panna cotta – a creamy dessert made of heaven, usually served with red-berry jam.",
        "Must-Drink in Italy: Red Wine (Barbaresco, Barolo, Brunello di Montalicino & many more…), White wine (Gewürztraminer, Muller Thurgau, Chardonnay, Vermentino, Arneis & many more…), Sparkling wine (Franciacorta & Prosecco), limoncello, San Pellegrino water.",
    ],
    name:"Italy"},

    {id:3,
        flagimg:img4 ,
        dish:food4  ,
        description:[
            "Pakistanis, being Muslims, don’t consume pork and alcohol, they rather concentrate on beef, chicken, fish and vegetables. They also use a lot of flavors, you will see these in majority of dishes: chilli powder, ginger, curry, coriander, paprika, cinnamon and garlic."
        ],  
    topfood:[
        "Shahi tukra – a sweet dish made with sliced bread, cream, sugar, milk and saffron.",
        "Chicken tandoori – chicken marinated and roasted in tandoor",
        "Roti – local bread",
        "Dhal – is a stew made with lentils",
        "Raita – vegetable salad with yogurt",
        "Must-Drink in Pakistan: lassi (yogurt drink)",
    ],
    name:"Pakistan"},

    {id:4,
        flagimg:img5 ,
        dish:food5  ,
        description:[
            "Filipino cuisine is based on a mixture of different traditional foods of India, Spain, China and America."
        ], 
    topfood:[
        "Adobo – not a photoshop tool, but rather chicken cooked in garlic",
        "Torta – omelette",
        "Pancit – noodles",
        "Lumpia – spring rolls",
        "Puchero – a strange but intriguing mixture of taste, created by beef in bananas and tomato sauce.",
        "Must-Drink in Philippines: palm wine or gin made by Ginebra San Miguel.",
    ],
    name:"Philippines"},

    {id:5,
        flagimg:img6 ,
        dish:food6  ,
        description:[
            "Like many other Asian cuisines, Thai cooking uses rice as a basic ingredient for the majority of dishes. The word “food” in Thai language means literally “to eat rice”. Furthermore, it has 5 main tastes, which you may meet in almost every dish. These are: sour lime, savory fish sauce, hot chilli, salt and sweetness (usually added by palm tree)."
        ], 
    topfood:[
        "Tom Yam Goong – a delicious soup with lemongrass, kalgan, laim, chilli, coco, shrimps and cream",
        "Pad Thai –  a stir-fried rice noodle dish, made with tofu, eggs, tamarind and other delicious ingredients",
        "Som Tam – a spicy green papaya salad.",
        "Must-Drink in Thailand: there are multiple breweries in Thailand, so drink beer. As a stronger alternative you may use Sang Som which is the local rum, distilled from sugarcane.",
    ],
    name:"Thailand"},

    {id:6,
        flagimg:img7 ,
        dish:food7  ,
        description:[
            "Japanese food is one of a kind. You will never mistake it. Sushi, sashimi, unagi, and sake… we all know this. But this cuisine is not only about products and recipes, here a lot is about their indigenous culture and traditions. It is not surprising then that they made the whole world eat with chopsticks instead of knives and forks."
        ],  
    topfood:[
        "Tempura – the Japanese contribution to the world’s love for deep-fried foods.",
        "Wagashi – sweets, made of red bean paste",
        "Unagi – eel",
        "Soba and Udon – types of Noodles",
        "Tonkatsu – deep-fried pork cutlets",
        "Must-Drink in Japan: Yakitori beer, Sake, Tea",
    ],
    name:"Japan"},

    {id:7,
        flagimg:img8 ,
        dish:food8  ,
        description:[
         "It’s all about extremely fat and therefore enormously tasty foods. Various pastries, soups, meat dishes and unexpected mixture of tastes – you may find all these in Ukrainian cuisine.",
         "The famous Russian beetroot soup, borsch, actually comes from Ukrainian cuisine. Ukrainian borsch is a little bit different than the Russian one, but you will hardly notice. Anyways – it rocks."   
        ], 
    topfood:[
        "Borsch – a meat-beetroot soup, made with everything that was found in the fridge.",
        "Salo – salted pork fat. Sounds creepy, but it’s amazing.",
        "Gorilka – homemade Ukrainian vodka. Strong as hell.",
        "Vareniki – kind of raviolis with different fillings: potato, cabbage, cottage cheese or cherry.",
        "Zrazi – beef cutlets with different fillings.",
        "Must-Drink in Ukraine: Gorilka, Black Tea, Cranberry juice.",
    ],
    name:"Ukraine"},

    {id:8,
        flagimg:img9 ,
        dish:food9  ,
        description:[
         "It is not a coincidence that you will find Chinese food pretty much everywhere. But remember, there are 2 types of Chinese cuisine – authentic and fake. How to identify the first type? Easy. If you are in China – it’s all over. If you are in your city’s Chinese restaurant – choose the place where customers are Chinese, not tourists."   
        ] , 
    topfood:[
        "Soy puff – enormously tasteless piece of “bread”, which thought will help you not to suffer from all the spicy hot dishes.",
        "Tofu – another tasteless food, it is a soy cheese. But when it’s fried with spices – nothing`s better.",
        "Noodles – they could be made of pretty much anything. Be ready for this, and be curious – all these usually taste like heaven.",
        "Bird’s nest soup: it is the soup that has been prepared with the gelatinous product derived from the nests of cliff-dwelling birds. You can imagine, it has a very unusual taste. You should only try it if you have extra money to order something as a plan “B”.",
        "Chop suey – not only a song by System of A Down. It is also a stir-fried dish with meat or shrimps and vegetables (mushrooms, water chestnuts, bamboo shoots, bean sprouts). It is usually served on rice.",
        "Must-Drink in China: Tea or any Chinese beer.",
    ],
    name:"China"},

  /*   {id:9,
        flagimg:img10,
        dish:food10 ,
        description:[
          "As we remember, the cow is a sacred animal here and the majority of Indians are vegetarians. Traditional Indian food uses many different spices and is slathered with  flavourful sauce. They are also big fans of Indian homemade white cheese, called Panir. Every dish is traditionally accompanied by naan bread. Of course, rice is one of the basic products of Indian cuisine as well."  
        ], 
    topfood:[
        "Paneer Butter Masala – it’s the most popular dish in India, you may find it anywhere. It is made of tomato puree with cream and the traditional Indian herbs and spices.",
        "Aloo Gobi – a side dish, made of potato and cauliflower.",
        "Must-Drink in India: Masala Tea, Kingfisher beer, Old Monk rum.",
    ],
     name:"India"}, */

    {id:9,
        flagimg:img11,
        dish:food11 ,
        description:[
            "With a huge variety of dining: from the simple street food to gorgeous restaurant El Celler de Can Roca, which was ranked first in the The World’s Best 50 Restaurants 2015, Spain has a lot to offer for a foodie traveler."
        ], 
    topfood:[
        "Paella – a Spanish risotto, usually with seafood.",
        "Tapas – traditional Spanish snacks.",
        "Jamon – a row cured meat. Delicious and flavorous.",
        "Must-Drink in Spain: Sangria, beer.",
    ],
     name:"Spain"},

    {id:10,
        flagimg:img12,
        dish:food12 ,
        description:[
            "We all know France for being a gourmet capital. Well, seems like it deserves this title. Croissant with a little cup of coffee in the morning – it’s a must do in France.",

            "All the food best-sellers come from here: baguettes, macaroni, praline, Madeleines, pain au chocolat, raisin brioche bread… The list is enormous. Onion cake and fish soup sound weird, but French know how to make it delicious as well.thai"
            
        ] ,
    topfood:[
        "Charcuterie – all varieties of meat, sausages, ham etc.",
        "Roquefort – famous blue cheese. Although it smells like old socks, the taste is worth all the aromatic inconveniences.",
        "Bouillabaisse – fish soup.",
        "Tartar – raw meat or fish, served with olive oil and flavors.",
        "Croque-Monsieur – the best breakfast that you could ever imagine. It is a toast sandwich with fried egg, ham and melted cheese in between bread.",
        "Must-Drink in France: wine, wine and wine.",
    ],
     name:"France"},

    {id:11,
        flagimg:img13,
        dish:food13 ,
        description:[
            "Warm, sunny, blue sea and liters of tequila – this is the ideal picture of Mexico. Actually, this is not only positive, but also true and realistic. Add to this corn, beans, tomato and chilli peppers, and you would get the real taste of the country."
        ], 
    topfood:[
        "Chili con carne – amazing, very spicy, tomato and meat based soup.",
        "Tacos – crispy corn chips.",
        "Quessadilla – a wrap with avocado, meat, chilli pepper and beans.",
        "Guacamole – avocado based dip.",
        "Enchilladas – kind of Mexican lasagna.",
        "Empanadas – fried flakey pastry stuffed with chicken, beef or cheese.",
    ],
     name:"Mexico"},

    {id:12,
        flagimg:img14,
        dish:food14 ,
        description:[
            "Switzerland is a country where 3 different cultures intersect: Italian, French and German. This is why it is sometimes hard to identify the characteristic of Swiss food. But apart from chocolate and cheese, they still have something to be proud of."
        ], 
    topfood:[
        "La Fondue – melted cheese served in a communal pot to dip bread inside.",
        "Les Röstis – roasted potato.",
        "La longeole – the traditional swiss sausage made of pork and fennel.",
        "Chocolate – a tradition in Switzerland.",
        "Must-Drink in Switzerland: Rivella (a carbonated Swiss drink based on lactose) and Absinthe, apart from wine, of course.",
    ],
     name:"Switzerland"},

    {id:13,
        flagimg:img15,
        dish:food15 ,
        description:[
            "The Portuguese cuisine might be characterised by one short sentence of my friend Solene, she is French and spend half a year in Portugal, she says: “The cuisine is amazing, but be ready to gain 5 kilos in 6 months”. Mmm, let’s risk and go for it."
        ], 
    topfood:[
        "Bacalhau – raw fish in coconut or other marinade.",
        "Pateis de Natal – small sweet pastries.",
        "Alzeida – typical sausages.",
        "Pollo arrosto – street food roasted chicken.",
        "Francesinha – Portuguese croque-monsieur.",
        "Must-Drink in Portugal: Vinho do porto – typical didgestive, Vinho Douro – local wine.",
    ],
     name:"Portugal"},

    {id:14,
        flagimg:img16,
        dish:food16 ,
        description:[
            "Rice, vegetables and meats are the main ingredients of this cuisine. In addition to that you will also find a variety of all flavors in Korean dishes – sesame oil, soy sauce, garlic, ginger, pepper flakes and fermented red chilli paste."
        ], 
    topfood:[
        "Dolsotbap – cooked rice in a stone pot (dolsot).",
        "Kongguksu – a cold noodle dish with a broth made from ground soy beans.",
        "Ganjang – soy sauce.",
        "Kimchi – fermented vegetable dishes usually made with cabbage.",
        "Jokbal : pig’s feet.",
        "Must-Drink in Korea: tea, Korean liquor «soju», and local light beers.",
    ],
     name:"Korea"},

    {id:15,
        flagimg:img17,
        dish:food17 ,
        description:[
            "Thanks to IKEA, we all know that Sweden is famous for meatballs with cream sauce and mashed potato, served with pickles. Historically, they also cooked reindeer meat. Usually, Swedish food is simple with contrasting flavors."
        ], 
    topfood:[
        "Fiskbullar – fishballs.",
        "Ärtsoppa – yellow pea soup.",
        "Raggmunk – potato pancakes.",
        "Ostkaka – Swedish cheesecake.",
        "Kanelbulle – cinnamon bread roll.",
    ],
     name:"Sweden"},

    {id:16,
        flagimg:img18,
        dish:food18 ,
        description:[
            "Montenegrin cuisine has an Italian flavour, Russian-sized dishes and French quantity of various pastries. Montenegro is well-known for cheese-making, wine and spirits, different soups and meat dishes. This cuisine is made to delight your preferences and to warm you during the cold season."
        ], 
    topfood:[
        "Polenta – a dish made of corn flavour.",
        "Stuffed peppers – grilled peppers, stuffed with meat and vegetables. Served with a creamy sauce.",
        "Skorup – salted cottage cream.",
        "Plieskavitsa – a grilled dish of spiced meat mixture of pork, beef and lamb.",
        "Must-Drink in Montenegro: Turkish coffee, Boza (fermented beverage).",
    ],
     name:"Montenegro"},

    {id:17,
        flagimg:img19,
        dish:food19 ,
        description:[
            "This cuisine will surprise you. Although Aussies don’t have a strong history of culinary traditions, they do have some unexpected features in food habits. Apart from multicultural food from all over the world, you will find here some local specialities, such as kangaroo, possum, ostrich and crocodile meat."
        ], 
    topfood:[
        "Vegemite – very salty and thick paste made from leftover brewers’ yeast with vegetable and spice additives.",
        "Cheesymite scroll – bread made of Vegemite",
        "Melbourne Chicken – cooked in olive oil usually served with pink sauce",
        "Fairy bread – white bread with butter and sprinkles.",
        "Must-Drink in Australia: Billy tea, wine, beer and coffee.",
    ],
     name:"Australia"},

    {id:18,
        flagimg:img20,
        dish:food20 ,
        description:[
            "Probably the best food destination to exist. Not because of strong American culinary traditions, but more because New York City gathers all of the cuisines mentioned before. Here you can find anything you want. But of course, NY City is also remarkable for American cuisine. Tempting burgers and succulent steaks – these are the best sellers in New York."
        ], 
    topfood:[
        "Mac & cheese: it’s the American version of Italian pasta. With some differences though: it has fewer flavors, no olive oil and no sauce.",
        "Caesar salad – an Iceberg salad, mixed with grilled chicken, Parmesan cheese and anchovy sauce.",
        "Cheesecake – a cake, made of pressured Philadelphia cheese. Usually served with red-berry sauce.",
        "Must-Drink in USA: beer, Starbucks coffee, whiskey.",
    ],
     name:"USA"},


]