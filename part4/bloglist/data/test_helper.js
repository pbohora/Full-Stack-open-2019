const Blog = require('../models/blog');

const blogs = [
  {
    title: 'Data visualization',
    author: 'Annika',
    url: 'https://anni.com',
    likes: 3
  },
  {
    title: 'AI in new world',
    author: 'Silvi',
    url: 'https://jsasddi.com',
    likes: 5
  }
];

const blogInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map(blog => blog.toJSON());
};
module.exports = { blogs, blogInDb };
