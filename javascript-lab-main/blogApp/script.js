const blogs = [
  {
    title: "Green Corners of My Hostel Room",
    date: "06 June 2025",
    content: "Living in a small hostel room doesn’t stop me from nurturing life. Every corner of my space hosts a plant...",
    link: "articles/article1.html"
  },
  {
    title: "From Soil to Soul",
    date: "06 June 2025",
    content: "I didn’t always love plants. My journey began during a difficult time, when I was emotionally drained and mentally exhausted...",
    link: "articles/article2.html"
  },
  {
    title: "Tiny Leaves, Big Peace",
    date: "06 June 2025",
    content: "Each morning, I check my plants before anything else. Even before brushing my teeth, I walk to the windowsill and scan for change...",
    link: "articles/article3.html"
  },
  {
    title: "Balcony Jungle Chronicles",
    date: "06 June 2025",
    content: "My balcony is a mini rainforest. Basil, mint, and rosemary line the ledge. A monstera fights for space with a chili plant...",
    link: "articles/article4.html"
  },
  {
    title: "Planting Calm in a Busy Life",
    date: "06 June 2025",
    content: "In the middle of coding, writing, and learning, I pause to water my plants. These pauses aren’t breaks—they’re therapy...",
    link: "articles/article5.html"
  },
  {
    title: "Rooted in Routine",
    date: "06 June 2025",
    content: "My Garden Days I have a plant-care schedule: Mondays are for misting, Thursdays for watering, Sundays for soil checks...",
    link: "articles/article6.html"
  },
  {
    title: "Sunlight, Soil, and Self-Care",
    date: "06 June 2025",
    content: "Plants need light, water, and nutrients. So do I. This reminder helps me take better care of myself...",
    link: "articles/article7.html"
  },
  {
    title: "My Little Forest Indoors",
    date: "06 June 2025",
    content: "With 15+ plants, my room resembles a tiny forest. Ferns, peace lilies, cacti—each has a name, a story...",
    link: "articles/article8.html"
  },
  {
    title: "Gardening Alone but Not Lonely",
    date: "06 June 2025",
    content: "Caring for plants fills a silence that doesn’t feel empty. I talk to my plants. I name them...",
    link: "articles/article9.html"
  },
  {
    title: "Growing with garden",
    date: "06 June 2025",
    content: "Growing with My Plants, every new leaf is a milestone. Every repotted plant is progress. As I learn JavaScript and rebuild my life...",
    link: "articles/article10.html"
  }
];


const blogContainer = document.getElementById("left-coloumn");

blogs.forEach((blog) => {
    const card = document.createElement("div");

    card.classList.add("card");
    card.innerHTML = 
           `<a href="${blog.link}">
                    <h2>${blog.title}</h2>
                    <h5>${blog.date}</h5>
                    <div class="blog-image"></div>
                    <p>${blog.content}</p>
            </a>`;

    blogContainer.appendChild(card);


})