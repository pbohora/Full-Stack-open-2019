const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response) => {
  try {
    const blogs = await Blog.find({});
    response.json(blogs.map(blog => blog.toJSON()));
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.post('/', async (request, response) => {
  const body = new Blog(request.body);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  });
  try {
    if (blog.title && blog.url) {
      const result = await blog.save();
      response.status(201).json(result.toJSON());
    } else {
      response.status(400).end();
    }
  } catch (exception) {
    next(exception);
  }
});

module.exports = blogsRouter;
