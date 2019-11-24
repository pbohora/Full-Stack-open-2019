const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (request, response, next) => {
  try {
    const blogs = await Blog.find({});
    response.json(blogs.map(blog => blog.toJSON()));
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body;

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0
  });
  try {
    if (blog.title && blog.url) {
      const savedBlog = await blog.save();
      response.status(201).json(savedBlog.toJSON());
    } else {
      response.status(400).end();
    }
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body;
  const blog = {
    likes: body.likes
  };

  const updatedBlog = await Blog.findOneAndUpdate(request.params.id, blog, {
    new: true
  });
  response.json(updatedBlog.toJSON());
});

module.exports = blogsRouter;
