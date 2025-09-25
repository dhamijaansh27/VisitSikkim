import rumtekMonasteryImage from './images/rumtek-monastery.jpg';
import encheyMonasteryImage from './images/enchey-monastery.jpg';
import pemayangtseMonasteryImage from './images/pemayangtse-monastery.jpg';
import tashidingMonasteryImage from './images/tashiding-monastery.jpg';
import dubdiMonasteryImage from './images/dubdi-monastery.jpg';
import sikkimLandscapeImage from './images/sikkim-landscape.jpg';
import culturalEventImage from './images/cultural-event.jpg';
import digitalArchiveImage from './images/digital-archives.jpg';
import rumtek from './images/rumtek.mp4';
import rumtek_inner from './images/rumtek_inner.mp4';
import enchey from './images/enchey.mp4';
export const featuredMonasteries = [
    {
        id: 'rumtek',
        name: 'Rumtek Monastery',
        description: 'The Dharma Chakra Centre and seat of the Karmapa, this monastery is one of the most important in Sikkim. Its golden stupa contains sacred relics.',
        location: 'East Sikkim',
        image: rumtekMonasteryImage,
        video1: rumtek,
        video2: rumtek_inner,
        tours: ['Main Prayer Hall', 'Golden Stupa', 'Monastery Gardens']
    },
    {
        id: 'enchey',
        name: 'Enchey Monastery',
        description: 'Perched on a hill overlooking Gangtok, this "Solitary Temple" offers breathtaking views and houses an impressive collection of masks used in ritual dances.',
        location: 'Gangtok',
        image: encheyMonasteryImage,
        video1: enchey,
        video2: rumtek_inner,
        tours: ['Temple Interior', 'Masks & Rituals', 'Viewpoint']
    },
    {
        id: 'pemayangtse',
        name: 'Pemayangtse Monastery',
        description: 'A masterpiece of Buddhist architecture, this ancient monastery is a treasure trove of intricate wooden carvings, including a 7-tiered wooden sculpture of Guru Rinpoche.',
        location: 'Pelling, West Sikkim',
        image: pemayangtseMonasteryImage,
        video1: rumtek,
        video2: rumtek_inner,
        tours: ['Main Temple', 'The Seven-Tiered Heaven', 'Oldest Relics']
    },
    {
        id: 'tashiding',
        name: 'Tashiding Monastery',
        description: 'Considered the most sacred monastery in Sikkim, it is believed that a single visit here can cleanse a lifetime of sins.',
        location: 'West Sikkim',
        image: tashidingMonasteryImage,
        video1: rumtek,
        video2: rumtek_inner,
        tours: ['Sacred Hill', 'Prayer Flags', 'Stupas & Chortens']
    },
    {
        id: 'dubdi',
        name: 'Dubdi Monastery',
        description: 'Founded in 1701, Dubdi is the oldest monastery in Sikkim. It requires a peaceful trek to reach, making it a truly serene destination.',
        location: 'Yuksom, West Sikkim',
        image: dubdiMonasteryImage,
        video1: rumtek,
        video2: rumtek_inner,
        tours: ['Oldest Sanctuary', 'Ancient Trails', 'Historical Site']
    }
];

export const heroImages = {
    home: sikkimLandscapeImage,
    events: culturalEventImage,
    archives: digitalArchiveImage,
};

export default featuredMonasteries;