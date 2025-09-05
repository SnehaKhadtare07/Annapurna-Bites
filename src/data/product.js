// src/data/products.jsx

const allProducts = [
  // 🥦 Vegetarian Dishes
    { id: 1, name: 'Paneer Butter masala', price: 'Half-₹150 ', image: 'https://myfoodstory.com/wp-content/uploads/2021/10/Paneer-Butter-Masala-1-2.jpg' },
    { id: 2, name: 'Palak Paneer', price: 'Half-₹160 ', image: 'https://tse1.mm.bing.net/th/id/OIP.zkbR-UbV9mbFB4TqM7U64wHaFS?r=0&pid=ImgDet&w=189&h=134&c=7&dpr=1.3&o=7&rm=3' },
    { id: 3, name: 'Shahi Paneer', price: 'Half-₹170 ', image: 'https://th.bing.com/th/id/OIP.9Gcof8tZSHlQYs87PZM-BQHaGr?w=186&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id: 4, name: 'Kadai Paneer', price: 'Half-₹180 ', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/03/Best-Kadai-Paneer-Recipe.jpg' },
    { id: 5, name: 'Matar Paneer', price: 'Half-₹140 ', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/08/Matar-Paneer-Thumbnail.jpg'},
    { id: 6, name: 'Paneer Tikka Masala', price: 'Half-₹200 ', image: 'https://www.wellplated.com/wp-content/uploads/2017/09/Best-Paneer-Tikka-Masala.jpg' },
    { id: 7, name: 'Malai Kofta', price: 'Half-₹180', image: 'https://carveyourcraving.com/wp-content/uploads/2021/09/Best-Malai-Kofta-recipe.jpg' },
    { id: 8, name: 'Navratan Kofta', price: 'Half-₹170', image: 'https://th.bing.com/th/id/OIP.G9Biy33_oLMNe05mQQZxfAHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
    { id: 9, name: 'Mix Veg Curry', price: 'Half-₹120 ', image: 'https://tse4.mm.bing.net/th/id/OIP.QaeQzTwArt9AcUnONgv13wHaJq?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { id: 10, name: 'Veg Kolhapuri', price: 'Half-₹150 ', image: 'https://myfoodstory.com/wp-content/uploads/2022/04/Veg-Kolhapuri-3.jpg' },

    { id: 11, name: 'Veg Jaipuri', price: 'Half-₹160', image: 'https://foodoncall.co.in/wp-content/uploads/2017/09/veg-jaipuri.jpg' },
    { id: 12, name: 'Bhindi Masala', price: 'Half-₹130', image: 'https://myfoodstory.com/wp-content/uploads/2025/03/Bhindi-Masala-2.jpg' },
    { id: 13, name: 'Baingan Bharta', price: 'Half-₹130', image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Baingan-Bharta.jpg' },
    { id: 14, name: 'Aloo Gobi', price: 'Half-₹140', image: 'https://www.whiskaffair.com/wp-content/uploads/2019/09/Aloo-Gobi-1-3.jpg' },
    { id: 15, name: 'Dum Aloo Kashmiri', price: 'Half-₹140', image: 'https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/01/Kashmiri-Dum-Aloo-H1.jpg?w=600&ssl=1' },
    { id: 16, name: 'Chana Masala', price: 'Half-₹130', image: 'https://minimalistbaker.com/wp-content/uploads/2016/02/AMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg' },
    { id: 17, name: 'Rajma Masala', price: 'Half-₹150', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg' },
    { id: 18, name: 'Dal Tadka', price: 'Half-₹130', image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka.jpg' },
    { id: 19, name: 'Dal Makhani', price: 'Half-₹140', image: 'https://recipes.timesofindia.com/thumb/53097626.cms?imgsize=156015&width=800&height=800' },
    { id: 20, name: 'Kadhi Pakora', price: 'Half-₹130', image: 'https://www.teaforturmeric.com/wp-content/uploads/2023/01/Kadhi-08.jpg' },

   
    { id: 21, name: 'Sambar(South India)', price: 'Half-₹120', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/01/Vegetable-Sambar-Recipe.jpg' },
    { id: 22, name: 'Paneer Bhurji', price: 'Half-₹150', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Paneer-Bhurji.jpg' },
    { id: 23, name: 'Methi Malai Matar', price: 'Half-₹150', image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Best-Methi-Matar-Malai-768x1164.jpg' },
    { id: 24, name: 'Veg Handi', price: 'Half-₹150', image: 'https://candidtreat.com/wp-content/uploads/2021/01/Nizamihandi-scaled-1-958x575.jpeg' },
    { id: 25, name: 'Tinda Masala', price: 'Half-₹140', image: 'https://heartyfoodtalks.com/wp-content/uploads/2022/09/ROUND-GOURD-1-1170x878.jpg' },
    { id: 26, name: 'Lauki Kofta', price: 'Half-₹130', image: 'https://www.whiskaffair.com/wp-content/uploads/2020/09/Lauki-Kofta-2-1.jpg' },
    { id: 27, name: 'Veg Hyderabadi Curry', price: 'Half-₹160', image: 'https://i.ytimg.com/vi/IJPSjb2Nl94/maxresdefault.jpg' },
    { id: 28, name: 'Aloo Tamatar Curry', price: 'Half-₹100', image: 'https://bing.com/th?id=OSK.81c0fe4b565f214382be8c87883b3634' },
    { id: 29, name: 'Moong Dal fry', price: 'Half-₹90', image: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2020/01/Moong-Dal-Recipe-Step-By-Step-Instructions-scaled.jpg?fit=2560%2C1943&quality=30&strip=all&ssl=1' },
    { id: 30, name: 'onion pakoda', price: 'Half-₹70', image: 'https://i1.wp.com/www.happyandharried.com/wp-content/uploads/2017/10/ONION-PAKORA-SPICED-ONION-FRITTERS-WITH-GREEN-CHUTNEY-HAPPYHARRIED.jpg?resize=736%2C1104' },
    
    


    // 🍗 Non-vegetarian Dishes
    { id: 31, name: 'Butter Chiken', price: 'Half-₹220', image: 'https://masalaandchai.com/wp-content/uploads/2022/03/Butter-Chicken.jpg' },
    { id: 32, name: 'Chiken Tikka Masala', price: 'Half-₹220', image: 'https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg' },
    { id: 33, name: 'Chiken curry', price: 'Half-₹200', image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Curry-recipe.jpg' },
    { id: 34, name: 'Kadai chiken', price: 'Half-₹200', image: 'https://th.bing.com/th/id/R.70530b279a3a325f2f31527f7776260a?rik=a2gd96vRua7LIg&riu=http%3a%2f%2fwww.flavorquotient.com%2fwp-content%2fuploads%2f2016%2f08%2fKadai-Chicken-FQ-4-1-of-1.jpg&ehk=5h8Tsx5kCV%2bZdcqRBRqOd9IW%2fDnY6RKGJZwwJ8Qh%2bn4%3d&risl=&pid=ImgRaw&r=0' },
    { id: 35, name: 'Chiken Do Pyaza', price: 'Half-₹220', image: 'https://th.bing.com/th/id/R.1bbf93bd2b28c3f38329b19cab3f7a4e?rik=vGubSJrI7p2xsQ&riu=http%3a%2f%2fwww.flavorquotient.com%2fwp-content%2fuploads%2f2015%2f03%2fChicken-Do-Pyaza-4-6088.jpg&ehk=94xRw9ibaHMEBo1zmVDFLNNCBQEMkTof6dTD6bRiFjs%3d&risl=&pid=ImgRaw&r=0' },
    { id: 36, name: 'Chiken Handi', price: 'Half-₹210', image: 'https://admin.thecookaway.com/media/catalog/product/c/h/chicken_handi-min.jpg' },
    { id: 37, name: 'Chiken kolhapuri', price: 'Half-₹220', image: 'https://www.theloveofspice.com/wp-content/uploads/2020/07/chicken-kolhapuri.jpg' },
    { id: 38, name: 'Chicken Chettinad (South)', price: 'Half-₹220', image: 'https://bing.com/th?id=OSK.1ff18734869fb22f1a40c4cd655f16df' },
    { id: 39, name: 'Chicken Rezala (Bengal)', price: 'Half-₹240', image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Rezala.jpg' },
    { id: 40, name: 'Chicken Xacuti (Goa)', price: 'Half-₹240', image: 'https://i0.wp.com/www.thetakeiteasychef.com/wp-content/uploads/2016/02/1.jpg?fit=750%2C629&ssl=1' },

    { id: 41, name: 'Mutton Rogan Josh', price: 'Half-₹280', image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Rogan-Josh-750x750.jpg' },
    { id: 42, name: 'Mutton Curry', price: 'Half-₹280', image: 'https://myfoodstory.com/wp-content/uploads/2016/12/Easy-Mutton-Curry-4.jpg' },
    { id: 43, name: 'Mutton Do Pyaza', price: 'Half-₹290', image: 'https://i.ytimg.com/vi/o0HlyVfkN98/maxresdefault.jpg' },
    { id: 44, name: 'Mutton Handi', price: 'Half-₹280', image: 'https://www.flourandspiceblog.com/wp-content/uploads/2020/05/Mutton-Handi-1.jpg' },
    { id: 45, name: 'Mutton Kosha (Bengal)', price: 'Half-₹290', image: 'https://www.licious.in/blog/wp-content/uploads/2021/08/Mutton-Kosha-Mangsho-Glory-Shot.jpg' },
    { id: 46, name: 'Egg Curry', price: 'Half-₹260', image: 'https://www.whiskaffair.com/wp-content/uploads/2021/02/Punjabi-Egg-Curry-2-3.jpg' },
    { id: 47, name: 'Anda Masala', price: 'Half-₹270', image: 'https://images.services.kitchenstories.io/vmRyyK5xOTfkP0Jatqunl2h-11w=/1200x0/filters:quality(80)/images.kitchenstories.io/wagtailOriginalImages/R2899-photo-final-3x4.jpg' },
    { id: 48, name: 'Fish Curry (Bengal style)', price: 'Half-₹240', image: 'https://www.playfulcooking.com/wp-content/uploads/2019/09/bengali-macher-jhol-02.jpg' },
    { id: 49, name: 'Meen Moilee (Kerala)', price: 'Half-₹260', image: 'https://delishably.com/.image/t_share/MjA3ODk4MDU1OTc3MjE1NzQ5/cooking-with-history-keralas-traditional-dishes-through-ancient-narratives.jpg' },
    { id: 50, name: 'Goan Fish Curry', price: 'Half-₹260', image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Goan-Fish-Curry-600x600.jpg' },

    { id: 51, name: 'Prawn Masala', price: 'Half-₹350', image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Prawns-Masala-min.jpg' },
    { id: 52, name: 'Prawn Koliwada (Maharashtra)', price: 'Half-₹400', image: 'https://www.thetinytaster.com/wp-content/uploads/2021/02/PXL_20210224_074238368-scaled.jpg' },
    { id: 53, name: 'Egg Bhurji', price: 'Half-₹200', image: 'https://spicecravings.com/wp-content/uploads/2020/04/Egg-Bhurji-6-768x1152.jpg' },
    { id: 54, name: 'Chicken Stew (Kerala)', price: 'Half-₹300', image: 'https://theflavoursofkitchen.com/wp-content/uploads/2022/03/Kerala-Chicken-Stew-2-720x1079.jpg' },
    { id: 55, name: 'Keema Matar', price: 'Half-₹450', image: 'https://i0.wp.com/fatimacooks.net/wp-content/uploads/2021/11/3C0E7FD3-AEEF-4796-8A5B-9A14BBA4A9C2-scaled.jpeg?fit=1920%2C2560&ssl=1' },




    // 🍚 Popular Rice & Biryani Dishes
    { id: 56, name: 'Veg Pulao', price: 'Half-₹120', image: 'https://www.sharmispassions.com/wp-content/uploads/2014/07/VegPulao1-720x720.jpg' },
    { id: 57, name: '	Paneer Pulao', price: 'Half-₹140', image: 'https://skinnyspatula.com/wp-content/uploads/2023/01/Easy_Paneer_Pulao_0.jpg' },
    { id: 58, name: 'Jeera Rice', price: 'Half-₹100', image: 'https://www.funfoodfrolic.com/wp-content/uploads/2022/11/Jeera-Rice-Blog.jpg' },
    { id: 59, name: 'Steam Rice', price: 'Half-₹80', image: 'https://dinnerthendessert.com/wp-content/uploads/2019/02/Chinese-Steamed-Rice-1048x1572.jpg' },
    { id: 60, name: 'Lemon Rice', price: 'Half-₹100', image: 'https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe.jpg' },

    { id: 61, name: 'Curd Rice', price: 'Half-₹90', image: 'https://www.indianveggiedelight.com/wp-content/uploads/2022/08/curd-rice-featured.jpg' },
    { id: 62, name: 'Vegetable Biryani', price: 'Half-₹150', image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg' },
    { id: 63, name: 'Chicken Biryani', price: 'Half-₹190', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg' },
    { id: 64, name: 'Mutton Biryani', price: 'Half-₹270', image: 'https://recipes.timesofindia.com/photo/53094793.cms' },
    { id: 65, name: 'Egg Biryani', price: 'Half-₹200', image: 'https://th.bing.com/th/id/R.f126af7ebd9c68c0ce063b28ebd990a8?rik=1Hf%2fVrnjtwEP5A&riu=http%3a%2f%2fwww.relishthebite.com%2fwp-content%2fuploads%2f2015%2f02%2fEGgBiryani-2.jpg&ehk=ijW1fCc5KnzEBfbY%2fALqsju%2bNvsw6lZ8ua%2bcW1ncI50%3d&risl=&pid=ImgRaw&r=0' },




    // 🫓 Indian Breads ( Roti section )
    { id: 66, name: 'Tandoori Roti', price: 'per piece-₹30', image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-1014x1536.jpg' },
    { id: 67, name: 'Butter Roti', price: 'per piece-₹30', image: 'https://th.bing.com/th/id/R.35e9a2d5cf0a91e8c03cf6e9e4ef39bb?rik=rEIZNkcQ9Hceeg&riu=http%3a%2f%2fcookclickndevour.com%2fwp-content%2fuploads%2f2017%2f01%2ftandoori-roti-recipe-b.jpg&ehk=Q3FvC5ed4nTu5M3KniUWz9iJ48y0yY8uUnG97XrRTeI%3d&risl=&pid=ImgRaw&r=0' },
    { id: 68, name: 'Plain Naan', price: 'per piece-₹20', image: 'https://goldencurry.es/wp-content/uploads/2022/09/Plain-Naan.jpg' },
    { id: 69, name: 'Butter Naan', price: 'per piece-₹50', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg' },
    { id: 70, name: 'Garlic Naan', price: 'per piece-₹40', image: 'https://hostthetoast.com/wp-content/uploads/2018/08/naan-201.jpg' },

    { id: 71, name: 'Lachha Parata', price: 'per piece-₹40', image: 'https://myfoodstory.com/wp-content/uploads/2022/08/Homemade-Lachha-Paratha-2.jpg' },
    { id: 72, name: 'Stuffed Aloo Paratha', price: 'per piece-₹30', image: 'https://www.recipetineats.com/wp-content/uploads/2014/11/Aloo-Paratha-3.jpg' },
    { id: 73, name: 'Missi Roti', price: 'per piece-₹30', image: 'https://vanitascorner.com/wp-content/uploads/2018/02/Missi-Roti.jpg' },
    { id: 74, name: 'Roomali Roti', price: 'per piece-₹30', image: 'https://www.flavouroffood.com/wp-content/uploads/2020/09/Rumali-Roti-Recipe-2-768x457.jpg' },
    { id: 75, name: 'Chapati/Phulka', price: 'per piece-₹10', image: 'https://2.bp.blogspot.com/-cx9_LWEDysY/V_KRtIqyF6I/AAAAAAAAFhw/7e8Zoa0Ph38hlQzuqasM43XBGIlKeAnfgCLcB/s1600/DSC_1592.JPG' },



    
    // 🍨 Indian Sweet Dishes ( Desserts )
    { id: 76, name: 'Gulab Jamun', price: '2 pieces-₹30', image: 'https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988-768x768.jpeg' },
    { id: 77, name: 'Rasgulla', price: '2 pieces-₹30', image: 'https://www.thespruceeats.com/thmb/LRHVkNnPFRGjN5LixQWD1C9Pnjw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rasgulla-indian-dessert-1957839-hero-01-7c3528a2d34a4f1b9248c7483a73d0a6.jpg' },
    { id: 78, name: 'Rasmalai', price: '2 pieces-₹50', image: 'https://eatsbyramya.com/wp-content/uploads/2024/10/rasmalai_can_recipe-2048x2048.jpg' },
    { id: 79, name: 'Kheer (Rice Pudding)', price: 'A Bowl-₹50', image: 'https://www.cookwithmanali.com/wp-content/uploads/2017/06/Indian-Rice-Kheer-500x500.jpg' },
    { id: 80, name: 'Gajar ka Halwa', price: 'A Bowl-₹50', image: 'https://tse3.mm.bing.net/th/id/OIP.mFNp7gQ3p-ZNfh2JtIA_iAHaJL?r=0&w=807&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3' },

    { id: 81, name: 'Shira', price: 'A Bowl-₹50', image: 'https://as2.ftcdn.net/v2/jpg/05/41/29/17/1000_F_541291739_dTFs9plSXVlenPR5Jfezz6oW2ICi43kt.jpg' },
    { id: 82, name: 'Jalebi', price: '2 pieces-₹30', image: 'https://sinfullyspicy.com/wp-content/uploads/2014/10/1200-by-1200-images-1.jpg' },
    { id: 83, name: 'Malpua', price: '2 pieces-₹40', image: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/07/malpua-recipe-step-by-step-instructions-17.jpg?fit=1991%2C1944&ssl=1' },
    { id: 84, name: 'Rabadi', price: 'A Bowl-₹70', image: 'https://4.bp.blogspot.com/-d9BDy50sEZw/WXcsgfsuVaI/AAAAAAAAA8A/aScl5yp40xgoOftEh5Kob5mdy4FyX15VgCEwYBhgL/s1600/rabdi-recipe.jpg' },
    { id: 85, name: 'Sandesh', price: '2 pieces-₹40', image: 'https://www.spiceupthecurry.com/wp-content/uploads/2019/10/sandesh-recipe-1.jpg' },
    { id: 86, name: 'Cham-Cham', price: '2 pieces-₹40', image: 'https://th.bing.com/th/id/R.3fdfa0644dab00f3628a1052078ae028?rik=hJsz0ni5P0O13w&riu=http%3a%2f%2fcdn1.foodviva.com%2fstatic-content%2ffood-images%2fbengali-recipes%2fcham-cham%2fcham-cham.jpg&ehk=uDE77thZxNWcz5VY%2bX%2bYWLWpvTFRmGilrmeCe0ZJ0DE%3d&risl=&pid=ImgRaw&r=0' },
    { id: 87, name: 'Peda ( Mothichur Laddhu )', price: '2 pieces-₹30', image: 'https://mithaibd.com/images/detailed/100/Mithai-Spl-Motichur-Laddu--Orange.jpg' },

];

export default allProducts;
