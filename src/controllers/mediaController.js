import { error, success } from "../utils/responseTypes";
import { Comment, Like, Media } from "../models";
import { initialState } from "../utils/initialState";

let media = initialState();

const getMediaObjectById = mediaId => media.find(item => item.id === mediaId);
const deleteMediaObjectById = mediaId => {
  const index = media.findIndex(item => item.id === mediaId);
  if (index !== -1) {
    media.splice(index, 1);
  }
};

export const getAllMedia = (req, res) => {
  return res.json(
    success({
      message: "Media retrieved successfully",
      data: media
    })
  );
};

export const getMediaById = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject) {
    return res.json(
      success({
        message: "Media with id received",
        data: mediaObject
      })
    );
  }

  return res.json(
    error({
      message: `Could not find media with id=${mediaId} not found`
    })
  );
};

export const createMedia = (req, res) => {
  const { description, url } = req.body;
  const mediaObject = Media({ description, url });

  media.push(mediaObject);

  return res.json(
    success({
      message: "New media created",
      data: mediaObject
    })
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
        data: mediaObject
      })
    );
  }

  return res.json(
    error({
      message: `Could not find media with id=${mediaId}`
    })
  );
};

export const getLikes = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject && mediaObject.likes) {
    return res.json(
      success({
        message: `Likes for media with id=${mediaId} retrieved successfully`,
        data: mediaObject.likes
      })
    );
  }

  return res.json(
    error({
      message: `Could not find likes for media with id=${mediaId}`
    })
  );
};

export const createLike = (req, res) => {
  const { mediaId } = req.params;
  const { username } = req.body;
  const index = media.findIndex(item => item.id === mediaId);

  if (index !== -1 && username) {
    const like = Like({ username });

    media[index].likes.push(like);

    return res.json(
      success({
        message: `New like created for media with id=${mediaId}`,
        data: like
      })
    );
  }

  return res.json(
    error({
      message: `Could not create like for media with id=${mediaId}`
    })
  );
};

export const getComments = (req, res) => {
  const { mediaId } = req.params;
  const mediaObject = getMediaObjectById(mediaId);

  if (mediaObject && mediaObject.comments) {
    return res.json(
      success({
        message: `Comments for media with id=${mediaId} retrieved successfully`,
        data: mediaObject.comments
      })
    );
  }

  return res.json(
    error({
      message: `Could not find comments for media with id=${mediaId}`
    })
  );
};

export const createComment = (req, res) => {
  const { mediaId } = req.params;
  const { text } = req.body;
  const index = media.findIndex(item => item.id === mediaId);

  if (index !== -1 && text) {
    const comment = Comment({ text });

    media[index].comments.push(comment);

    return res.json(
      success({
        message: `New like created for media with id=${mediaId}`,
        data: comment
      })
    );
  }

  return res.json(
    error({
      message: `Could not create like for media with id=${mediaId}`
    })
  );
};
