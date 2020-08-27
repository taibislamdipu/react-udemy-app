

var courses = [
    {
        id: 1,
        name: 'Artificial Intelligence A-Z™: Learn How To Build An AI',
        instructor: 'Ece Ras',
        image: 'https://img-a.udemycdn.com/course/240x135/1219332_bdd7.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 2,
        name: 'Docker and Kubernetes: The Complete Guide',
        instructor: 'Lance Castro',
        image: 'https://img-a.udemycdn.com/course/240x135/1793828_7999.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 3,
        name: 'iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp',
        instructor: 'Christy Perry',
        image: 'https://img-a.udemycdn.com/course/240x135/1778502_f4b9_11.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 4,
        name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
        instructor: 'Dance Castro',
        image: 'https://img-a.udemycdn.com/course/240x135/1026604_790b_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 5,
        name: 'iOS 10 & Swift 3: From Beginner to Paid Professional™',
        instructor: 'Nce Aasr',
        image: 'https://img-a.udemycdn.com/course/240x135/892102_963b.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 6,
        name: '2020 Complete Python Bootcamp: From Zero to Hero in Python',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 7,
        name: 'The Web Developer Bootcamp',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/625204_436a_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 8,
        name: 'Machine Learning A-Z™: Hands-On Python & R In Data Science',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/950390_270f_3.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 9,
        name: 'Java Programming Masterclass for Software Developers',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/533682_c10c_4.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 10,
        name: 'Complete C# Unity Game Developer 2D',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/258316_55e9_8.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 11,
        name: 'Angular - The Complete Guide (2020 Edition)',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/756150_c033_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 12,
        name: 'Python for Data Science and Machine Learning Bootcamp',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/903744_8eb2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 13,
        name: 'The Complete JavaScript Course 2020: Build Real Projects!',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/851712_fc61_5.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 14,
        name: 'The Data Science Course 2020: Complete Data Science Bootcamp',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 15,
        name: 'The Complete Web Developer Course 2.0',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/764164_de03_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 16,
        name: 'The Complete JavaScript Course 2020: Build Real Projects!',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/851712_fc61_5.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 17,
        name: 'The Data Science Course 2020: Complete Data Science Bootcamp',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/1754098_e0df_3.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    },
    {
        id: 18,
        name: 'The Complete Web Developer Course 2.0',
        instructor: 'Lstr Di',
        image: 'https://img-a.udemycdn.com/course/240x135/764164_de03_2.jpg',
        price: Math.floor(10 + Math.random() * 10),
        review: Math.floor(1000 + Math.random() * 1000)
    }
]

export default courses;