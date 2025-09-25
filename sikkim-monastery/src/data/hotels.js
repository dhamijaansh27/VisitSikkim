const hotels = [
  {
    id: 1,
    name: "Udaan Keepsa Hotel & Spa, Gangtok ",
    price: 4500,
    rating: 4.5,
    image: "https://r1imghtlak.mmtcdn.com/568e995d-bb05-420a-a99a-27b2e43e48ff.jpeg?output-quality=75&downsize=243:162&output-format=jpg",
    images: [
      "https://r1imghtlak.mmtcdn.com/568e995d-bb05-420a-a99a-27b2e43e48ff.jpeg", 
      "https://r1imghtlak.mmtcdn.com/97e58ce2-b60d-488e-8087-e8f8ca0c6df6.JPG",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201912061721485808-b407d807-671a-4e86-9838-79c5d4001f8b.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201912061721485808-39667d53-a39a-4048-84fe-85633e44bd38.jpg",
      ],
    monastery: "Rumtek Monastery",
    address: "Gangtok (05 Min Walk to MG marg)",
    facilities: ["Free WiFi", "Spa", "Mountain View", "Restaurant", "Parking"]
  },
  {
    id: 2,
    name: "Kingston By Yagi",
    price: 6500,
    rating: 4.8,
    image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202103311517036595-3e7813e0-312c-4b64-9a61-c0bf9d85830e.jpg?&output-quality=75&crop=520:350;2,0&output-format=jpg&downsize=600:*",
     images: [
      "https://r1imghtlak.mmtcdn.com/d2affd65-4b5b-418b-8e1c-111e5c73dd9c.jpg", 
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202103311517036595-fd505998cdc011ee80a10a58a9feac02.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202103311517036595-a0b3d9d0cdc011eeb03e0a58a9feac02.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202103311517036595-e5dfe2f1-5ef0-4235-b78f-0e3eeff357e8.jpg"
      ],
    monastery: "Rumtek Monastery",
    address: "600 meter from M,G Marg Gangtok",
    facilities: ["Casino", "Spa", "Swimming Pool", "Restaurant", "Bar"]
  },
  {
    id: 3,
    name: "Hotel The Narayani Continental",
    price: 3000,
    rating: 4.2,
    image: "https://cf.bstatic.com/xdata/images/hotel/270x200/506299342.jpg?k=07a0edb9e216b8b3b0afcd464207a914b56d49231e599c716c269cbf92fb1cb6&o=",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/506299342.jpg?k=9a3f509d636ccdbcc722301783fc7c12bfafa67a4fc1b5e78e11113295792efb&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max500/506294855.jpg?k=796fa64666345301b409b0e9149d8c56d2b89156129576b6e019faf2328f0297&o=", 
      "https://cf.bstatic.com/xdata/images/hotel/max500/506294810.jpg?k=b6036b2057903fa27f4af758d18ca3084f9f6ec2da39a7afaf6107a6ed04b43c&o=",
       "https://cf.bstatic.com/xdata/images/hotel/max300/506299332.jpg?k=f30c782e9e46294ea604af9c984dae8b58f4d7f12e4286f7d08394a1445bca1f&o="
      ],
    monastery: "Enchey Monastery",
    address: "Upper Sichey Dr Br Ambedkar Road Opposite Tamang Gumpha, Near Palzor Stadium, Old District Court Road,, Gangtok 737101 India, Gangtok",
    facilities: ["Garden", "Restaurant", "Free WiFi", "Bonfire", "Parking"]
  },
  {
    id: 4,
    name: "Tempo Heritage Resort & Spa",
    price: 5000,
    rating: 4.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495730416.jpg?k=c08b401a9eeb3648e1c6bd7d2e7d843806ccf61187e6a5baa6089232192aa977&o=",
     images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495730416.jpg?k=c08b401a9eeb3648e1c6bd7d2e7d843806ccf61187e6a5baa6089232192aa977&o=", 
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/612035985.jpg?k=b68992be558d5791c1c6450cb45e5c57074aaf1f8b7c78c0eb7153e5d837461d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495730249.jpg?k=341a0ba6a2589fb5fa489bf01f06afef5c842edb3b8a36fe0b8bbb1f5a090925&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495730489.jpg?k=4c0ea6a2a7a3d9ecd8baa56048255ccac9bbf3e77f1ff2b362ac95f2b9ca7ae5&o=",
      ],
    monastery: "Enchey Monastery",
    address: "JN Road, Below Mintokgang Road, Near White Hall, Sungava, Gangtok",
    facilities: ["Garden", "Restaurant", "Free WiFi", "Bonfire", "Parking"]
  },
  {
    id: 5,
    name: "Hotel Khimsika Residency",
    price: 4500,
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/p/AF1QipM85cVE0JxbrgA6kLKb2IQpOkYTZc2rau5JVzU9=w574-h384-n-k-rw-no-v1",
     images: [
      "https://r1imghtlak.mmtcdn.com/3baefd56de5911ec87b20a58a9feac02.jpg", 
      "https://r1imghtlak.mmtcdn.com/71f80278c35311eead5c0a58a9feac02.jpeg",
      "https://r1imghtlak.mmtcdn.com/2530f3aede5911ec8f670a58a9feac02.jpg"
      ],
    monastery: "Kartok Monastery",
    address: "NOAP GAON DUGALAKHA ROAD, Pakyong, Sikkim",
    facilities: ["Garden", "Restaurant", "Free WiFi", "Bonfire", "Parking"]
  },
  {
    id: 6,
    name: "Vivanta Sikkim, Pakyong",
    price: 5000,
    rating: 4.7,
    image: "https://lh3.googleusercontent.com/p/AF1QipPEgUqFusOXQtqbpkK0E-5ahg4sWiqAKL28Hltp=w574-h384-n-k-rw-no-v1",
    images: [
      "https://lh3.googleusercontent.com/p/AF1QipPEgUqFusOXQtqbpkK0E-5ahg4sWiqAKL28Hltp=w574-h384-n-k-rw-no-v1", 
      "https://juggler.makemytrip.com/juggler/stream/key/platform-ugc-01JKYZJ2660KER80CY86YA5SH5/01JKYZJ2660KER80CY86YA5SH5.jpg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH78232268263700/QS1042/QS1042-Q1/2be21d54-6ea2-94cd-d564-e7f8cae84023.jpeg",
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH7411321289658/QS1042/QS1042-Q1/1646232688234.jpeg"
    ],
    monastery: "Kartok Monastery",
    address: "Bassnett Gaon, Namcheybong, Pakyong, Sikkim",
    facilities: ["Garden", "Restaurant", "Free WiFi", "Bonfire", "Parking"]
  },
  {
    id: 7,
    name: "The Mansarovar Hotel & Banquet",
    price: 5000,
    rating: 4.3,
    image: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nofHtyM7df0LIhiPGdcT8Sb4cic2oRimLxWR5k6YJqwWzHAXMC18yNXMMrbKE3bYJZXB_yYtQP07O4aMZAZ1Y0ltXE0ZJg6Eeq76uZjObZXhEwuPfFHNQtbU0RUWMJR-tQ0yoLt=w574-h384-n-k-rw-no-v1",
    images: [
      "https://lh3.googleusercontent.com/gps-cs-s/AC9h4nofHtyM7df0LIhiPGdcT8Sb4cic2oRimLxWR5k6YJqwWzHAXMC18yNXMMrbKE3bYJZXB_yYtQP07O4aMZAZ1Y0ltXE0ZJg6Eeq76uZjObZXhEwuPfFHNQtbU0RUWMJR-tQ0yoLt=w574-h384-n-k-rw-no-v1", 
      "https://r1imghtlak.mmtcdn.com/2b6984ca758e11ee8ed00a58a9feac02.jpeg",
      "https://r1imghtlak.mmtcdn.com/d448854e758b11eeb8f60a58a9feac02.jpeg",
      "https://r1imghtlak.mmtcdn.com/a32b018a74c311ee850f0a58a9feac02.jpeg"
    ],
    monastery: "Gonjang Monastery",
    address: "Tashi View Point, Gangtok, Sikkim",
    facilities: ["Garden", "Restaurant", "Free WiFi", "Bonfire", "Parking"]
  },
  {
    id: 8,
    name: "Hotel De Villa",
    price: 3500,
    rating: 4.0,
    image: "https://lh3.googleusercontent.com/proxy/vJ3jhKlEq3qMhx5OdZsuzgvQAwN-Ms_Wc5PT1ecn0InE8C-uATgyN8Oa7jP-aVmFyhWqEaxsX0HeKsovgecWksRhyNS4rwMNbmwhDLeiqal2a3k6lGb3MAxnwVryCeFgr0xe4f1_IMWnGyeD4CKIAIGtoDpvIlw=w574-h384-n-k-rw-no-v1",
    images: [
      "https://lh3.googleusercontent.com/proxy/vJ3jhKlEq3qMhx5OdZsuzgvQAwN-Ms_Wc5PT1ecn0InE8C-uATgyN8Oa7jP-aVmFyhWqEaxsX0HeKsovgecWksRhyNS4rwMNbmwhDLeiqal2a3k6lGb3MAxnwVryCeFgr0xe4f1_IMWnGyeD4CKIAIGtoDpvIlw=w574-h384-n-k-rw-no-v1", 
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/30/e4/a0/majestic-de-villa.jpg?w=1400&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/e9/65/91/oyo-17093-de-villa-hotel.jpg?w=600&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/30/e4/91/majestic-de-villa.jpg?w=1400&h=-1&s=1"
    ],
    monastery: "Gonjang Monastery",
    address: "Indira Bypass Road, near Shiv Mandir, Bojoghari, Gangtok, Sikkim",
    facilities: ["Garden", "Restaurant", "Free WiFi", "Bonfire", "Parking"]
  },
];

export default hotels;
