import queries from './queries';
import { Post, User, Comment, Rating } from '../models';

module.exports = {
  async create(req, res) {
    try {
      const rating = await Rating.create({
        ratingBlob: req.ratingData,
      });

      return res.status(200).send(rating);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async list(req, res) {
    try {
      const rating = await Rating.findAll(
          queries.rating.list({ User, Post, Comment, Rating })
      );
      return res.status(200).send(rating);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async get(req, res) {
    try {
      const post = await Rating.findById(
          req.params.postId,
          queries.rating.get({ User, Post, Comment, Rating })
      );

      if (!post) {
        return res.status(404).send({
          message: 'Post Not Found',
        });
      }

      return res.status(200).send(post);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async update(req, res) {
    try {
      const post = await Rating.find({
        where: {
          id: req.params.postId,
          userId: req.user.id,
        },
      });

      if (!post) {
        return res.status(404).send({
          message: '404 on post update',
        });
      }

      const updatedPost = await post.update({
        title: req.body.title || post.title,
        content: req.body.content || post.content,
      });

      return res.status(200).send(updatedPost);
    } catch (err) {
      return res.status(500).send(err);
    }
  },

  async delete(req, res) {
    try {
      const post = await Rating.find({
        where: {
          id: req.params.postId,
          userId: req.user.id,
        },
      });

      if (!post) {
        return res.status(404).send({
          message: 'Post Not Found',
        });
      }

      await post.destroy();

      return res.status(200).send({
        message: null,
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  },
};
