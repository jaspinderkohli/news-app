import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
     articles =  [
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/adrienne-vogt\">Adrienne Vogt</a> and <a href=\"/profiles/matt-meyer\">Matt Meyer</a>, CNN",
            "title": "Live updates: 3 killed in Pennsylvania shooting, suspect barricaded in New Jersey with hostages, officials say - CNN",
            "description": "At least three people are dead after two shootings in Falls Township, Pennsylvania, Saturday morning, officials say. The gunman has since taken hostages at a location in Trenton, New Jersey. Follow live updates.",
            "url": "https://www.cnn.com/us/live-news/falls-township-shootings-pennsylvania-03-16-24/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240316132434-03-pa-shooting-0316-super-tease.jpg",
            "publishedAt": "2024-03-16T18:10:00Z",
            "content": "Pennsylvania law enforcement officials have named 26-year-old Andre Gordon as a suspect in connection to fatal shootings that occurred in Falls Township on Saturday.\r\nFalls Township Police say office… [+1346 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Rebekah Riess",
            "title": "New Mexico State Police officer fatally shot ‘in cold blood’ by driver he tried to help, police say - CNN",
            "description": "A New Mexico State Police officer was fatally shot “in cold blood” early Friday when he offered to help the driver of a disabled vehicle, who responded by shooting the officer twice and driving off with his patrol car, authorities said.",
            "url": "https://www.cnn.com/2024/03/16/us/new-mexico-police-officer-killed/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/jaremy-smith.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-03-16T18:01:00Z",
            "content": "A New Mexico State Police officer was fatally shot in cold blood early Friday when he offered to help the driver of a disabled vehicle, who responded by shooting the officer twice and driving off wit… [+3196 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Samantha Ibrahim",
            "title": "'They're alive!' Moment Cara Delevingne's two cats are pulled from her burning LA home by firefighters - New York Post ",
            "description": "“Thank you to the firefighters,” Delevingne declared.",
            "url": "https://nypost.com/2024/03/16/entertainment/moment-cara-delevingnes-two-cats-are-pulled-from-her-burning-la-home-by-firefighters/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/03/cara-delevingne-continues-post-social-78479751.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2024-03-16T17:23:00Z",
            "content": "Cara Delevingne’s cats are feline fine after being rescued from her burning home on Friday. \r\nThe supermodel’s $7 million Los Angeles mansion went up in flames early yesterday morning, with her paren… [+2704 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Mike Jones",
            "title": "Grading the good, bad and ugly of every major NFL free agency 2024 deal - The Athletic",
            "description": "Which deals make sense? Which are puzzling? We grade the agreements with the biggest free agents and the teams that paid up.",
            "url": "https://theathletic.com/5332081/2024/03/16/nfl-2024-free-agency-grades/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/03/16092455/GettyImages-1940049744-scaled.jpg",
            "publishedAt": "2024-03-16T16:57:11Z",
            "content": "The 2024 NFL year officially started on Wednesday, and thanks to the legal tampering window for free agency that opened Monday, it has been a frenzied week.\r\nMarquee free agents at every position and… [+51085 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "By <a href=\"/profiles/brad-lendon\">Brad Lendon</a>, <a href=\"/profiles/andrew-raine\">Andrew Raine</a> and Amarachi Orie, CNN",
            "title": "Devastation in Gaza as Israel wages war on Hamas: Live updates - CNN",
            "description": "Israeli Prime Minister Benjamin Netanyahu says he has approved plans for military action in Rafah, as Gazans report more deadly Israeli airstrikes in the enclave. Follow for live updates.",
            "url": "https://www.cnn.com/middleeast/live-news/israel-hamas-war-gaza-news-03-16-24/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240311145218-israel-tank-gaza-011924-super-tease.jpeg",
            "publishedAt": "2024-03-16T16:20:00Z",
            "content": "The Ministry of Health in Gaza has said 37 people, including children and pregnant women, were killed in an Israeli airstrike on a residential block in central Gaza on Friday night.\r\nCNN is unable to… [+1687 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Ellen Francis, Amber Ferguson",
            "title": "Boeing 737-800 missing panel after United Airlines flight lands in Oregon - The Washington Post",
            "description": "A United Airlines Boeing 737-800 that landed Friday in Oregon’s Medfort Airport from San Francisco was missing an external panel, officials said.",
            "url": "https://www.washingtonpost.com/transportation/2024/03/16/boeing-plane-panel-missing-united-airlines-oregon/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/J3XUNPFZABFKAQUENBB5EIVB2I.jpg&w=1440",
            "publishedAt": "2024-03-16T16:13:10Z",
            "content": "Investigators are looking into why a Boeing plane was missing an external panel after a San Francisco to Oregon flight, officials said. The company was already facing heightened scrutiny from travele… [+2726 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Cara Tabachnick",
            "title": "Blind 750-pound alligator seized from New York home, setting up showdown as owner vows to \"fight them to get him back\" - CBS News",
            "description": "Self-proclaimed owner Tony Cavallaro said he treated his pet alligator Albert \"than most people take care of their kids.\"",
            "url": "https://www.cbsnews.com/news/hamburg-alligator-seized-albert-blind-new-york-home/",
            "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/03/16/87415521-598d-47fa-b3dd-d1fe66795112/thumbnail/1200x630/9b70aad2e4fcfd6db96a211eab15f22a/gettyimages-2068654597-1.jpg?v=d1d78866939020fc1f2607ef7298e4ec",
            "publishedAt": "2024-03-16T15:49:59Z",
            "content": "A 750-pound, 11-foot-long alligator named Albert was seized from a New York home this week, setting the stage for a confrontation between the state's Department of Environmental Conservation and the … [+2165 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "AAMER MADHANI",
            "title": "Schumer's rebuke of Netanyahu shows the long, fragile line the US and allies walk on interference - The Associated Press",
            "description": "Republicans and Israeli officials were quick to express outrage after Senate Majority Leader Chuck Schumer lashed out at Prime Benjamin Netanyahu’s handling of the war in Gaza and called for Israel to hold new elections. They accused the Democratic leader of …",
            "url": "https://apnews.com/article/schumer-netanyahu-israel-poland-hamas-3c86e541396fda36b0ef05b2d36c28e5",
            "urlToImage": "https://dims.apnews.com/dims4/default/a8d29f9/2147483647/strip/true/crop/4200x2363+0+218/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0a%2Ff6%2F1ae16b7206a54f6628b0dee19675%2F660d58f90527493597a63b20eb331b82",
            "publishedAt": "2024-03-16T15:09:00Z",
            "content": "WASHINGTON (AP) Republicans and Israeli officials were quick to express outrage after Senate Majority Leader Chuck Schumer sharply criticized Prime Minister Benjamin Netanyahus handling of the war in… [+6804 chars]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "ELISE MORTON",
            "title": "Russia says Ukrainian shelling killed 2 in a border city while it thwarted an incursion - The Associated Press",
            "description": "A Russian regional governor says two people have been killed in Ukrainian shelling of the city of Belgorod, close to the border with Ukraine. Three others were wounded. Russia’s Defense Ministry said it thwarted attempts by “Ukrainian sabotage and reconnaissa…",
            "url": "https://apnews.com/article/russia-ukraine-drone-shelling-belgorod-10ad4cf3c67ee0d19f107d7885a61c10",
            "urlToImage": "https://dims.apnews.com/dims4/default/a8b7932/2147483647/strip/true/crop/3319x1867+0+174/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F26%2Fce%2F8ee705be20b4e559206061bfb8e7%2Fa6b6011672aa47f3bc93656ce43805b2",
            "publishedAt": "2024-03-16T15:07:00Z",
            "content": "Ukrainian shelling of the Russian city of Belgorod killed two people, officials said Saturday, while Russia claimed to have thwarted a new attempt by saboteurs to cross the border. \r\nSaturdays attack… [+3018 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PhiladelphiaEagles.com"
            },
            "author": null,
            "title": "Eagles acquire Kenny Pickett in a trade with the Steelers - PhiladelphiaEagles.com",
            "description": "The first quarterback selected in the 2022 NFL Draft provides valuable depth behind entrenched starter Jalen Hurts.",
            "url": "https://www.philadelphiaeagles.com/news/eagles-kenny-pickett-trade-steelers",
            "urlToImage": "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_12_desktop/eagles/rsvwig5yjoad0vkdktww",
            "publishedAt": "2024-03-16T15:01:39Z",
            "content": "He finished his college career as Pitt's all-time leader in wins (32), passing yards (12,303), pass completions (1,045), total offense (13,112), TD responsibility (102), and passing TDs (81).\r\nThe so… [+1539 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "[Removed]"
            },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "1970-01-01T00:00:00Z",
            "content": "[Removed]"
        },
        {
            "source": {
                "id": "associated-press",
                "name": "Associated Press"
            },
            "author": "STAN CHOE, CHRISTOPHER RUGABER",
            "title": "Mnuchin's interest in TikTok and distressed NY bank echoes his pre-Trump investment playbook - The Associated Press",
            "description": "Steven Mnuchin is a former U.S. Treasury secretary who said this week that he is interested in buying TikTok, just days after his investment firm led a $1 billion deal to inject life into a beaten-down bank. It all sounds like a wacky Hollywood script, but it…",
            "url": "https://apnews.com/article/mnuchin-tiktok-nycb-indymac-lego-movie-5527566c81a6f3d9b288bba232f55684",
            "urlToImage": "https://dims.apnews.com/dims4/default/08db369/2147483647/strip/true/crop/5472x3078+0+285/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1d%2Ff0%2Fae8b7e7e10cea8f8312c2078c066%2F7c5b00c65afa4153a84bace70db474b1",
            "publishedAt": "2024-03-16T14:53:00Z",
            "content": "NEW YORK (AP) It seems like a bizarre mishmash: A former Trump cabinet official is saying he wants to buy TikTok just days after leading a group that pumped $1 billion into a beaten-down bank. But it… [+5810 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Ahjané Forbes",
            "title": "Walmart stores closing: California, Maryland the latest, reports say - USA TODAY",
            "description": "Walmart is another low-price retailer that has announced store closures this week, with a handful of closures coming on the heels of Dollar Trees.",
            "url": "https://www.usatoday.com/story/money/retail/2024/03/16/walmart-stores-closing/72993015007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/02/20/USAT/72668979007-ap-walmart-care-expansion.jpg?crop=2999,1687,x0,y156&width=2999&height=1687&format=pjpg&auto=webp",
            "publishedAt": "2024-03-16T14:48:39Z",
            "content": "Walmart is the latest low-price retailer to announce store closures, according to reports.\r\nTwo stores in California and one store in Maryland is closing, according to the Business Insider. The media… [+3152 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Eric Levenson",
            "title": "Both James and Jennifer Crumbley were found guilty. But they took different paths to get there - CNN",
            "description": "Despite the similarities, their manslaughter trials unfolded quite differently.",
            "url": "https://www.cnn.com/2024/03/16/us/james-jennifer-crumbley-trials-differences/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/20240315-01-crumbley-parents-split.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-03-16T14:22:00Z",
            "content": "Of the 15 witnesses who testified for the prosecution in James Crumbleys manslaughter trial, all but one had already testified in his wifes trial last month.\r\nIn each trial, prosecutors used testimon… [+8702 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": null,
            "title": "Vaughan Gething to become Welsh first minister and Europe’s first Black leader - CNN",
            "description": "Vaughan Gething won the Welsh Labour Party leadership contest on Saturday, meaning he will become the first Black leader of the semi-autonomous government in Wales.",
            "url": "https://www.cnn.com/2024/03/16/europe/gething-wales-europe-first-black-leader-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2088395782.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-03-16T14:02:00Z",
            "content": "Vaughan Gething won the Welsh Labour Party leadership contest on Saturday, meaning he will become the first Black leader of the semi-autonomous government in Wales.\r\nToday, we turn a page in the book… [+1414 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Jenna Portnoy",
            "title": "On four year anniversary of covid, families remember flags on Mall - The Washington Post",
            "description": "Covid memorial flags are being archived as America moves further from the World Health Organization’s pandemic declaration, four years ago this month.",
            "url": "https://www.washingtonpost.com/dc-md-va/2024/03/17/covid-families-flags-pandemic-grief/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VIPCYNKVLNHSXAWKSWTYQHN47E.JPG&w=1440",
            "publishedAt": "2024-03-16T14:00:00Z",
            "content": "Return to menuEd Koenig searched up one row and down the next, up and down, for hours. But on that warm, breezy day in September2021, he couldnt find the flag he had dedicated online to Jody Settle, … [+2043 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "Meredith Garofalo",
            "title": "Solar eclipse 2024 weather prospects: Q&A with an expert - Space.com",
            "description": "Taking a deeper look into climatology and other factors to better understand an early outlook for eclipse weather along the path of totality on April 8.",
            "url": "https://www.space.com/total-solar-eclipse-weather-prospects-how-experts-make-predictions-q-and-a",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Ngtn7DLLu8soamFQnJ9M4M-1200-80.jpg",
            "publishedAt": "2024-03-16T12:00:50Z",
            "content": "Space is part of Future US Inc, an international media group and leading digital publisher. Visit our corporate site.\r\n©\r\nFuture US, Inc. Full 7th Floor, 130 West 42nd Street,\r\nNew York,\r\nNY 10036."
        },
        {
            "source": {
                "id": "newsweek",
                "name": "Newsweek"
            },
            "author": "James Bickerton",
            "title": "Rudy Giuliani Rages at Judge Over Fani Willis Ruling - Newsweek",
            "description": "Giuliani called Judge McAfee a \"sissy boy\" after he ruled that DA Fani Willis can still prosecute him and Donald Trump.",
            "url": "https://www.newsweek.com/rudy-giuliani-rages-judge-over-fani-willis-ruling-1879942",
            "urlToImage": "https://d.newsweek.com/en/full/2363135/rudy-giuliani.jpg",
            "publishedAt": "2024-03-16T11:31:24Z",
            "content": "Rudy Giuliani has attacked Judge Scott McAfee who on Friday ruled that Fulton County District Attorney Fani Willis can continue prosecuting Donald Trump and other defendants, including the former New… [+4592 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Michael Dorgan",
            "title": "Chicago to start evicting illegal migrants from shelters Saturday - Fox News",
            "description": "Chicago plans to start evicting waves of illegal immigrants from the city’s shelter system this weekend as his 60-day rule kicks, Mayor Brandon Johnson has announced.",
            "url": "https://www.foxnews.com/politics/chicago-start-evicting-illegal-migrants-shelters-saturday",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/10/Migrants_Brandon-Johnson.jpg",
            "publishedAt": "2024-03-16T11:30:00Z",
            "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+3176 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "‘Overthrow the system’: Haiti gang leader Cherizier seeks revolution - Al Jazeera English",
            "description": "Jimmy Cherizier tells Al Jazeera: ‘It’s not just people with guns who’ve damaged the country but the politicians too.’",
            "url": "https://www.aljazeera.com/news/2024/3/16/overthrow-the-system-haiti-gang-leader-cherizier-seeks-revolution",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/03/2024-03-11T214714Z_1149784636_RC2TJ6AEWUK6_RTRMADP_3_HAITI-VIOLENCE-1710353170.jpg?resize=1920%2C1440",
            "publishedAt": "2024-03-16T11:26:15Z",
            "content": "A powerful Haitian gang leader has rejected attempts by foreign nations for an electoral road map and a path to peace as the country plunges deeper into violent chaos and armed groups control most of… [+5561 chars]"
        }
    ]
    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles : this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2> NewsWave - Top Headlines</h2>
        <div className="row">
            {
            this.state.articles.map(
                (element)=>
                {
                    return <div className="col md-4" key={element.url}>
                                <NewsItems title={(element.title?element.title:"").slice(0, 45)} description={(element.description?element.description:"").slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                           </div>
                }
              )
            };
        </div>
      </div>
    )
  }
}

export default News
