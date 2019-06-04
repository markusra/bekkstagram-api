import Media from "../models/mediaModel";
import { success } from "../utils/response-util";

export const getAllMedia = (req, res) => {
  Media.find((err, media) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }
    res.json({
      status: "success",
      message: "Media retrieved successfully",
      data: media
    });
  });
};

export const createMedia = (req, res) => {
  var media = new Media();
  media.url = req.body.url;

  media.save(err => {
    res.json({
      message: "New media created",
      data: media
    });
  });
};

export const getMediaById = (req, res) => {
  Media.findById(req.params.media_id, (err, media) => {
    if (err) res.send(err);
    res.json({
      message: "Media with id received",
      data: media
    });
  });
};

export const updateMedia = (req, res) => {
  Media.findById(req.params.media_id, (err, media) => {
    if (err) res.send(err);
    media.url = req.body.url;

    media.save(err => {
      if (err) res.json(err);
      res.json({
        message: "Media info updated",
        data: media
      });
    });
  });
};

export const deleteMedia = (req, res, next) => {
  const mediaId = req.params.media_id;

  Media.findById(mediaId, (err, media) => {
    if (err) {
      res.json({
        status: "error",
        message: err
      });
    }

    if (media) {
      media.remove(err => {
        if (err) res.json(err);
        res.json(
          success({ data: media, message: `Media with id=${mediaId} deleted` })
        );
      });
    } else {
      res.json({
        status: "error",
        message: `Could not find media with id=${mediaId}`
      });
    }
  });
};
