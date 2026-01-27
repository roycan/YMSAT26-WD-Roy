//names of the image files
var links = [];
/* template
links[1]={
    section:"",
    title:"",
    desc:"",
    url:"",
    //names of the image files
    var links = [];
    /* template
    links[1]={
        section:"",
        title:"",
        desc:"",
        url:"",
        icon:"",
        by:"",
        stat:  // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
    }
    */
    links.push({
        section: "9Be",
        title: "Shakespeare's Quill",
        desc: "This is Shakespeare's Quill, a visually rich exploration of William Shakespeare’s world, blending dark design, animation, and literary history into a timeless experience.",
        url: "https://youngerpanao02.github.io/WDProjBerylliumPanaoTamon/",
        icon: "be2328.png",
        by: "PanaoTamon",
        stat: false
    });

    links.push({
        section: "9Be",
        title: "Pamana Adventures",
        desc: "Pamana Adventures is an interactive travel website where users create a personalized profile, explore destinations tailored to their interests and budget, and discover curated meaningful adventures across the Philippines made just for them.",
        url: "https://rafaelayatco.github.io/WDProjBeGaborniYatco/",
        icon: "",
        by: "",
        stat: false
    });

    links.push({
        section: "9be",
        title: "Icons of Ghibli",
        desc: "Whispers of Ghibli is a very emotional and sincere trip to the dream-like realm of the Studio Ghibli—where art, imagination, and feelings come together to create storytelling that will never be forgotten.",
        url: "https://aravilalado.github.io/WDProjBeMacatangayVillados/public/homepage.html",
        icon: "be1929.png",
        by: "",
        stat: false
    });

    links.push({
        section: "9Cs",
        title: "MineMaster",
        desc: "Minemaster is a collection of different guides designed to give inspiration to and improve your builds in the game Minecraft.",
        url: "https://frncjcnt.github.io/WDProjCesiumJacintoMapalo/index.html",
        icon: "Cs1419.png",
        by: "Mateo&Mapalo",
        stat: false
    });

    links.push({
        section: "9Cs",
        title: "Pizza Papi",
        desc: "Inspired by casual cooking games, this interactive website celebrates pizza through a game with rankings, historical insights, and creator details to provide an engaging experience for everyone from hungry audiences to pizza enthusiasts.",
        url: "https://steph0801.github.io/WDProjCesiumBasconMargarito/",
        icon: "cs0520.png",
        by: "Bascon&Margarita",
        stat: true
    });

    links.push({
        section: "9Cs",
        title: "Unstable Universe: Given one Chance, What Life will You Choose to Live?",
        desc: "This website is about a Minecraft server called the Unstable SMP that aims to tell amazing stories for its viewers.",
        url: "https://flarepia.github.io/3QPortifolioCSTonido/index.html",
        icon: "cs1730.png",
        by: "tonido",
        stat: false
    });

    links.push({
        section: "9Cs",
        title: "Clemmy OS Login",
        desc: "",
        url: "https://alena-harriett.github.io/WDProjCesiumMembradoReyes/",
        icon: "cs2128.webp",
        by: "Membrado&Reyes",
        stat: true // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
    });

    links.push({
        section: "9Li",
        title: "Martial Arts and the World",
        desc: "Martial Arts and The World is an interactive educational website showcasing the history, techniques, and philosophy of five major martial arts disciplines: Karate, Taekwondo, Judo, Brazilian Jiu-Jitsu, and Muay Thai.",
        url: "hhttps://davidhermosi.github.io/WDProjLiCristobalHermoso/",
        icon: "licrishermo.png",
        by: "Cristobal&Hermoso",
        stat: true // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
    });

    links.push({
        section: "9Li",
        title: "CHEMVIS",
        desc: "See chemistry in action with Chemivis, where 3D models, interactive pages, and fun games bring concepts to life!",
        url: "https://drijbl.github.io/WDProjLithiumGabrielTumbaga/",
        icon: "CHEMIVIS.png",
        by: "Gabriel&Tumbaga",
        stat: true  // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
    });

    links.push({
        section: "9Li",
        title: "Valorant: Beyond the Crosshair",
        desc: "Valorant: Beyond the Crosshair is an interactive guide designed to help players of all skill levels improve their gameplay. It offers detailed insights into agents, maps, weapons, and strategies — everything a player needs to understand the game in depth.",
        url: "https://nikkodizon.github.io/WDProjLithiumDIZONVIBAL/",
        icon: "",
        by: "Dizon&Vibal",
        stat: false // to indicate acceptance - true (for displaying) or false (means conditional after some edits) 
    });

    links.push({
        section: "9Sr",
        title: "Fandom Roulette!",
        desc: "A dynamic web project that explores various fandoms through an interactive and engaging roulette-style experience.",
        url: "https://tay-lor-ai.github.io/WDProjStrontiumTancincoYu/home.html",
        icon: "sr2630.png",
        by: "TancincoYu",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "Adventure Gone WRONG!!",
        desc: "A narrative-driven web experience following a group of adventurers whose journey takes an unexpected and humorous turn.",
        url: "https://albees-0511.github.io/CS3_1stQtrPortfolio/",
        icon: "sr1617.png",
        by: "RamosPerez",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "ZB1 Zone",
        desc: "A comprehensive fan portal for the K-pop group ZEROBASEONE (ZB1), featuring group profiles, discography, and media updates.",
        url: "https://pyasantos.github.io/WDProjStrontiumSalvadorSantos/",
        icon: "sr2021.png",
        by: "SalvadorSantos",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "ChiikArcade",
        desc: "A cute, Chiikawa-themed mini-game and resource hub that brings a colorful arcade experience directly to the web browser.",
        url: "https://katsuaisu.github.io/WDProjStrontiumDulaySaquing/",
        icon: "sr0622.png",
        by: "DulaySaquing",
        stat: true
    });

    links.push({
        section: "9Sr",
        title: "TokkiNet: Hopping into NewJeans",
        desc: "A specialized fan destination for NewJeans enthusiasts, celebrating the group's music, style, and unique rabbit-themed aesthetic.",
        url: "https://ceanagucyam.github.io/WDProjStrontiumGucyamTapia/",
        icon: "gucytap.png",
        by: "GucyamTapia",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "Stranger Than Friends",
        desc: "A creative web project exploring the nuances of interpersonal relationships and stories through a unique digital lens.",
        url: "https://yuna28232.github.io/WDProjStrontiumForonda-Lee/",
        icon: "Sr11Sr13.png",
        by: "ForondaLee",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "Cooked.",
        desc: "A sleek, modern web project focusing on culinary arts or gaming terminology, developed as part of the WDProj Strontium series.",
        url: "https://tan-b29.github.io/WDProjStrontiumReolizoTan/",
        icon: "jairomaggie.png",
        by: "ReolizoTan",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "Minecraft Utilities",
        desc: "A dedicated resource hub for Minecraft players, providing useful tools and information to enhance the block-building experience.",
        url: "https://croissant1095.github.io/CS3_Project_BalaresSurla/",
        icon: "sr0324.png",
        by: "BalaresSurla",
        stat: false
    });

    links.push({
        section: "9Sr",
        title: "Azra",
        desc: "Azra is a website perfect for freshies, laterals, and outsiders who want to know where they can find tambayan places to hang out, eat, and relax around Pisay!",
        url: "https://amberbuico.github.io/WDProjStrontiumBuicoMagat/",
        icon: "sr0414.png",
        by: "BuicoMagat",
        stat: true
    });

    links.push({
        section: "9Sr",
        title: "Keone's Project Portfolio",
        desc: "Our website is about Real Madrid, specifically about its history, players, statistics, and more.",
        url: "https://htmlpreview.github.io/?https://raw.githubusercontent.com/Keone245/Project/refs/heads/main/aboutme.html",
        icon: "sr0219.png",
        by: "BabaranRobles",
        stat: true
    });

    links.push({
        section: "9Sr",
        title: "Carlos & Fernandez Portfolio",
        desc: "Little Chef's Corner is an online cookbook made for aspiring chefs, a website filled with mouth-watering recipes and fun activities that customers can enjoy!",
        url: "https://bettinafernandez.github.io/WDProjStrontiumCarlosFernandez/",
        icon: "ynabet.png",
        by: "CarlosFernandez",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Survival Guide: Student Edition",
        desc:"A essential toolkit designed for students, offering survival tips, academic resources, and practical advice to navigate school life successfully.",
        url:"https://hannahchanb29.github.io/WDProjSodiumChanGuiang/",
        icon:"na1216.png",
        by:"CHANGUIANG",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Swiftie Verse",
        desc:"A comprehensive fan portal dedicated to Taylor Swift, featuring discography deep-dives, news, and a community space for fans.",
        url:"https://jeishawshaw.github.io/WDProjSodiumRefuerzoRugayan_/",
        icon:"francesjeisha.png",
        by:"RUGAYANREFUERZO",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"GoalGarden",
        desc:"An interactive goal-tracking application that visualizes your personal progress as a growing garden, encouraging consistent habit-building.",
        url:"https://dja0616.github.io/WDProjSodiumAsisAsperin/",
        icon:"na0405.png",
        by:"ASPERINASIS",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Closet Pilot",
        desc:"A digital fashion assistant and wardrobe organizer that helps users navigate their personal style and plan outfits with ease.",
        url:"https://zyzyzy29.github.io/WDProjSodiumAbalosMalang/",
        icon:"na0121.png",
        by:"ABALOSMALANG",
        stat: false
    });

    links.push({
        section:"9Na",
        title:"Project Sodium",
        desc:"A specialized chemistry resource and interactive guide focusing on the properties, reactions, and significance of the element Sodium.",
        url:"https://b2029coadelacruz.github.io/Q2-Project-Proposal/",
        icon:"charlesjorge.png",
        by:"MALIUANAGDELACRUZ",
        stat: false
    });

    links.push({
        section:"9Na",
        title:"CineVerse",
        desc:"An immersive cinematic universe guide where film enthusiasts can explore movie reviews, trailers, and curated watchlists.",
        url:"https://0kimchi.github.io/Me-and-Sabs-Project/",
        icon:"sodium0315.png",
        by:"ALPASANGUEVARRA",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Gameboy Pedia",
        desc:"A nostalgic encyclopedia for the Gameboy era, cataloging handheld console history, game reviews, and retro gaming culture.",
        url:"https://xionne-haha.github.io/CS3_2ndQtrPortfolio/CSQuarter2Project/",
        icon:"xionneliam.png",
        by:"BARTOLOMEJACOB",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Audrey and Bell's Library",
        desc:"A curated digital library and book recommendation site featuring literary reviews and a shared space for reading enthusiasts.",
        url:"https://bell-404.github.io/WDProjSodiumBondocCayabyab/",
        icon:"na0811.png",
        by:"BONDOCCAYABYAB",
        stat: false
    });

    links.push({
        section:"9Na",
        title:"OnceVerse | TWICE Fan Hub",
        desc:"The ultimate digital hub for ONCEs, featuring detailed member profiles, music videos, and a dedicated timeline of TWICE's career.",
        url:"https://klia0417.github.io/WDProjSodiumAlejandroJarme/",
        icon:"na0219.png",
        by:"ALEJANDROJARME",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Gardenara: Plant and relax with your very own garden",
        desc:"A relaxation and gardening simulator that allows users to virtually cultivate plants while enjoying a peaceful, meditative atmosphere.",
        url:"https://jesh-a.github.io/WDProjNaAyuyao-Ong/",
        icon:"na0625.jpg",
        by:"AYUYAOONG",
        stat: true
    });

    links.push({
        section:"9Na",
        title:"Koneko Kape",
        desc:"A charming virtual cat café experience where users can explore a menu of treats and interact with digital feline friends.",
        url:"https://carlessa-1.github.io/Koneko-Kape/",
        icon:"na1020.png",
        by:"CASTANEDALuis",
        stat: false
    });

    links.push({
        section:"9Rb",
        title:"StudyMate: Your Personal Study Companion",
        desc:"An interactive productivity dashboard featuring a personalized study environment and profile management system to assist student workflow.",
        url:"https://zirjishere.github.io/WDProjRubidiumMendaroMeneses/",
        icon:"zirjsasha.png",
        by:"MENDAROMENESES",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"Japanease: A Beginner's Guide to Japan",
        desc:"A vibrant travel guide featuring itineraries, budget planners, food guides, and real-time clock comparisons for tourists visiting Japan.",
        url:"https://shekinahmarcel.github.io/WDProjRubidiumEspinozaPuguon/final%20proj/A_home.html",
        icon:"rb0822.png",
        by:"PUGUONESPINOZA",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"Stardust Performers",
        desc:"A 10th-anniversary tribute and guide for the K-pop group TWICE, featuring member profiles, discography, and an overview of their artistic journey.",
        url:"https://gabriellepascual.github.io/WDProjRubidiumPascualTagle/",
        icon:"rb2127.png",
        by:"PASCUALTAGLE",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"PeriodiCastle",
        desc:"A Harry Potter-themed 'Great Hall of Elements' that sorts chemical elements into wizarding houses (Blocks S, P, D, F) to teach periodic trends.",
        url:"https://avieszha.github.io/WDProjRubidiumLustreReyes/index.html",
        icon:"avienzo.png",
        by:"LUSTREREYES",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"Meta Royale",
        desc:"A strategy hub for Clash Royale players featuring deck archetypes, meta card analysis, and arena progression tips for all skill levels.",
        url:"https://banonok11.github.io/WDProjRubidiumOcampoViray/",
        icon:"ocampoviray.png",
        by:"OCAMPOVIRAY",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"Discover East and West Coast Rap Music",
        desc:"An educational retrospective on 90s rap culture, exploring the iconic East Coast vs. West Coast rivalry and its lasting impact on the genre.",
        url:"https://sammr123a.github.io/WDProjRubidiumAustriaBansil/",
        icon:"austriabansil.png",
        by:"AUSTRIABANSIL",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"Valorant Hub",
        desc:"A fan-made guide focused on gameplay mastery, detailing weapon stats, agent abilities, and esports meta for tactical 5v5 rounds.",
        url:"https://ysaaa2010.github.io/WDProjRbOgerioRosario/",
        icon:"ysanathan.png",
        by:"OGERIOROSARIO",
        stat: false
    });

    links.push({
        section:"9Rb",
        title:"MiCayke Decorating!",
        desc:"A creative and interactive arcade-themed experience where users can virtually design and decorate their own custom cakes.",
        url:"https://micaydcr.github.io/WDProjRubidiumPagdilaoRubico/",
        icon:"rb2025.png",
        by:"PAGDILAORUBICO",
        stat: true
    });

    links.push({
        section:"9Rb",
        title:"ClickHub",
        desc:"A digital project index serving as a central hub for various Computer Science works and interactive student portfolios.",
        url:"https://sashalatte.github.io/WDProjRubidiumCangChua/",
        icon:"cangchua.png",
        by:"CHUACANG",
        stat: false
    });

    links.push({
        section:"9Rb",
        title:"Biology Visualized",
        desc:"An educational portal for young learners exploring the unifying themes of biology, including macroevolution, microevolution, and human history.",
        url:"https://mattokodu.github.io/WDProjRb_Escalona_Espocia/",
        icon:"EspociaEscalonaWebsite.png",
        by:"ESPOCIAESCALONA",
        stat: false
    });

    links.push({
        section:"9Rb",
        title:"A Vast Journey Into the Wonders of Teyvat",
        desc:"An immersive Genshin Impact fan site designed to guide travelers through the lore, regions, and characters of the world of Teyvat.",
        url:"https://windyy-ash.github.io/-WDProjRubidiumVillenaYbanez/choosetrav.html",
        icon:"Rb2830.png",
        by:"YBANEZVILLENA",
        stat: true
    });



    links.push({
section:"9K",
title:"Key CODE",
desc:"KeyCODE! is a gamified learning site with multiple levels (Easy, Medium, Hard) designed to challenge users while teaching coding concepts in a fun, interactive way.",
url:"https://anmvillarica.github.io/WDProjPotassiumCrisologoVillarica/",
icon:"aritala.png",
by:"CrisologoVillarica",
stat:true
})

links.push({
section:"9K",
title:"Motion Notion",
desc:"Motion Notion introduces the world of debate through Invictus Debaters, offering guides on speaker roles, motion analysis, and resources to make debate accessible for beginners.",
url:"https://miarobangk25.github.io/CS3_Potassium_K12_K25/",
icon:"miapio.png",
by:"FestejoRobang",
stat:false
})




links.push({
section:"9K",
title:"Are You Worthy?",
desc:"Are You Worthy? is a simple interactive homepage leading to games and social links, inviting users to test themselves in a playful environment.",
url:"https://jigglybuff19.github.io/WDProj_Potassium_Galo_Monterola/Homepage.html",
icon:"k1323.png",
by:"GaloMonterola",
stat:true
})

links.push({
section:"9K",
title:"Fractured Night",
desc:"Fractured Night is a portfolio site showcasing Phipa and Tomas’ creative interests in coding, music, and arts, blending personal introductions with project highlights.",
url:"https://phipalibunao.github.io/CS3_2ndQtr_K18_K21/public/homepage.html",
icon:"phipatomas.png",
by:"LibunaoMacalintal",
stat:true
})

links.push({
section:"9K",
title:"ARE YOU OK: A Check-Up on Us",
desc:"ARE YOU OK is a wellness-themed project site with account creation and login features, reflecting on mental health and community check-ins.",
url:"https://jfkam.github.io/WDProjSectionDalimotKam/",
icon:"dlimotkam.png",
by:"DalimotKam",
stat:SVGComponentTransferFunctionElement
})

links.push({
section:"9K",
title:"Apple Clicker",
desc:"Apple Clicker is a playful web game by Doctolero and Lampa, featuring a gallery, socials, and reflections on learning JavaScript and HTML through creative coding.",
url:"https://uandoc.github.io/WDProjPotassiumDoctoleroLampa/",
icon:"k1017.png",
by:"DoctoleroLampa",
stat:true
})




links.push({
section:"9K",
title:"Bluestains",
desc:"Bluestains is a creative project site with a homepage linking to Bluebloods content, showcasing design and storytelling elements.",
url:"https://jacobcorvus.github.io/CS3_Potassium_K07_K11/Public/BluebloodsHome.html",
icon:"tonyjacob.png",
by:"CorpusEspiritu",
stat:false
})



links.push({
section:"9K",
title:"Beyond the Border",
desc:"Beyond the Border is a GitHub-hosted project blending creative writing and web development, though its live site is incomplete.",
url:"https://github.com/ejmpurisima/WDProjPotassium_PurisimaTuddao.git",
icon:"ninaerin.png",
by:"PurisimaTuddao",
stat:false
})

links.push({
section:"9K",
title:"Jujutsu Chronicles",
desc:"Jujutsu Chronicles is a themed project inspired by anime, with placeholders for story-driven content and collaborative design.",
url:"https://mustardkendrickmango.github.io/WDProj_PotassiumCarpisoSalandanan/",
icon:"chiarateo.png",
by:"CarpisoSalandanan",
stat:true
})




    function dispProj() {
        var x;
        var genNum = [];
        var numProj = Math.floor(Math.random() * links.length);
        for (let i = 0; i < links.length; i++) {
            // update list of used number
            genNum.push(numProj);
            // check if the generated random number is already used.	
            numProj = Math.floor(Math.random() * links.length)
            x = genNum.indexOf(numProj)
            if (genNum.length == links.length)
                break;
            while (x >= 0) {
                numProj = Math.floor(Math.random() * links.length)
                x = genNum.indexOf(numProj)
            }
        }
        // construct content of the body
        var tobeDisp = ""
        for (let i = 0; i < links.length; i++) {
            tobeDisp +=
                '<div class="gallery">' +
                '<a target="_blank" href="' + links[genNum[i]].url + '">' +
                '<div> <img src="img\\' + links[genNum[i]].icon + '" /></div>' +
                '<div class="desc"><span>' + links[genNum[i]].title + '</span>' +
                '<p>' + links[genNum[i]].desc + '</p></div>' +
                '</a></div>'

        }

        document.getElementById("pHolder").innerHTML = tobeDisp;
        let myVar = setTimeout(dispProj, 50000);
    }



