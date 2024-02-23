const Tour = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  res.status(200).json({
    // requestedAt: req.requestTime,
    // status: 'success',
    // result: tours.length,
    // data: {
    //   tours,
    // },
  });
};

exports.createTour = async (req, res) => {
  try {
    // const newTour = new Tour({})
    // newTour.save()
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tours: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = (req, res) => {
  res.status(200).json({
    // status: 'success',
    // data: {
    //   tours: tour,
    // },
  });
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    // status: 'success',
    // data: {
    //   tour: '<Updating tour here...>',
    // },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
