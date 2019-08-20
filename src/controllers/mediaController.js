import { error, success } from '../utils/responseTypes';
import { Comment, Like, Media } from '../models';
import { initialState } from '../utils/initialState';

let media = initialState();

const getMediaObjectById = mediaId => media.find(item => item.id === mediaId);

const getCommentObject = (mediaId, commentId) => {
  const mediaObject = getMediaObjectById(mediaId);
  const comments = mediaObject.comments;

  return comments.find(item => item.id === commentId);
}

const deleteMediaObjectById = mediaId => {
  const index = media.findIndex(item => item.id === mediaId);
  if (index !== -1) {
    media.splice(index, 1);
  }
};

export const getAllMedia = (req, res) => {
  return res.json(
    success({
      message: 'Media retrieved successfully',
      data: media,
    }),
  );
};

export const getMediaById = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject) {
    return res.json(
      success({
        message: 'Media with id received',
        data: mediaObject,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not find media with id=${mediaId} not found`,
    }),
  );
};

export const createMedia = (req, res) => {
  const { description, url, username } = req.body;
  const mediaObject = Media({ description, url, username });

  media.push(mediaObject);

  return res.json(
    success({
      message: 'New media created',
      data: mediaObject,
    }),
  );
};

export const deleteMedia = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject) {
    deleteMediaObjectById(mediaId);

    return res.json(
      success({
        message: `Media with id=${mediaId} deleted successfully`,
        data: mediaObject,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not find media with id=${mediaId}`,
    }),
  );
};

export const getLikes = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject && mediaObject.likes) {
    return res.json(
      success({
        message: `Likes for media with id=${mediaId} retrieved successfully`,
        data: mediaObject.likes,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not find likes for media with id=${mediaId}`,
    }),
  );
};

export const createLike = (req, res) => {
  const { mediaId } = req.params;
  const { username } = req.body;
  const index = media.findIndex(item => item.id === mediaId);

  if (index !== -1 && username) {
    const likes = media[index].likes;
    const likeIndex = likes.findIndex(like => like.username === username);

    if (likeIndex === -1) {
      const like = Like({ username });

      media[index].likes.push(like);

      return res.json(
        success({
          message: `New like created for media with id=${mediaId}`,
          data: like,
        }),
      );
    } else {
      return res.json(
        error({
          message: `User with username=${username} has already liked the media with id=${mediaId}`,
        }),
      );
    }
  }

  return res.json(
    error({
      message: `Could not create like for media with id=${mediaId}`,
    }),
  );
};

export const deleteLike = (req, res) => {
  const { mediaId } = req.params;
  const { username } = req.body;
  const index = media.findIndex(item => item.id === mediaId);

  if (index !== -1 && username) {
    const likes = media[index].likes;
    const likeIndex = likes.findIndex(like => like.username === username);

    if (likeIndex !== -1) {
      likes.splice(likeIndex, 1);

      return res.json(
        success({
          message: `Like deleted for media with id=${mediaId}`,
          data: Like({ username }),
        }),
      );
    }
  }

  return res.json(
    error({
      message: `Could not delete like for media with id=${mediaId}`
    }),
  );
};

export const getComment = (req, res) => {
  const { mediaId, commentId } = req.params;
  const commentObject = getCommentObject(mediaId, commentId);

  if (commentObject) {
    return res.json(
      success({
        message: `Comment with id=${commentId} retrieved successfully`,
        data: commentObject,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not find comment with id=${commentId}`,
    }),
  );
};

export const getCommentLikes = (req, res) => {
  const { mediaId, commentId } = req.params;
  const commentObject = getCommentObject(mediaId, commentId);

  if (commentObject && commentObject.likes) {
    return res.json(
      success({
        message: `Likes for comment with id=${commentId} retrieved successfully`,
        data: commentObject.likes,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not find likes for comment with id=${commentId}`,
    }),
  );
};

export const createCommentLike = (req, res) => {
  const { mediaId, commentId } = req.params;
  const { username } = req.body;
  const commentObject = getCommentObject(mediaId, commentId);

  const mediaIndex = media.findIndex(item => item.id === mediaId);
  const commentIndex = media[mediaIndex].comments.findIndex(item => item.id === commentId);


  if (mediaIndex !== -1 && commentIndex !== -1 && username) {
    const like = Like({ username });

    media[mediaIndex].comments[commentIndex].likes.push(like);

    return res.json(
      success({
        message: `New like created for comment with id=${commentId}`,
        data: like,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not create like for comment with id=${commentId}`,
    }),
  );
};

// export const deleteCommentLike = (req, res) => {
//   const { mediaId, commentId } = req.params;
//   const { username } = req.body;
//   const commentObject = getCommentObject(mediaId, commentId);

//   const mediaIndex = media.findIndex(item => item.id === mediaId )
//   const commentIndex = media[mediaIndex].comments.findIndex(item => item.id === commentId);

//   if (mediaIndex !== -1 && commentIndex !== -1 && username) {

//     const likes = media[mediaIndex].comments[commentIndex].likes

//     const likeIndex = likes.findIndex(like => like.username === username);

//     if (likeIndex !== -1) {
//       likes.splice(likeIndex, 1);


//       return res.json(
//         success({
//           message: `Like deleted for comment with id=${commentId} remaning likes are ${likes} ${likeIndex}`,
//           data: Like({ username }),
//         }),
//       );
//     }
//   }

//   return res.json(
//     error({
//       message: `Could not delete like for comment with id=${commentId} ${likes} ${commentIndex} `,

//     }),
//   );
// };

export const getComments = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject && mediaObject.comments) {
    return res.json(
      success({
        message: `Comments for media with id=${mediaId} retrieved successfully`,
        data: mediaObject.comments,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not find comments for media with id=${mediaId}`,
    }),
  );
};

export const createComment = (req, res) => {
  const { mediaId } = req.params;
  const { text, username } = req.body;
  const index = media.findIndex(item => item.id === mediaId);

  console.log(text);
  console.log(typeof text)

  if (index !== -1 && text
    && (typeof text === "string")
    && username
    && (typeof username === "string")) {
    const comment = Comment({ text, username });

    media[index].comments.push(comment);

    return res.json(
      success({
        message: `New like created for media with id=${mediaId}`,
        data: comment,
      }),
    );
  }

  return res.json(
    error({
      message: `Could not create like for media with id=${mediaId}`,
    }),
  );
};
