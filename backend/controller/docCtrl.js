const docModel = require("../models/docModel");

//! Helper function to handle errors
const handleError = (res, statusCode, message) => {
    return res.status(statusCode).json({ message });
  };

// ! Validate doctor data
const validateDoctor = (data, isUpdate = false) => {
    if (!isUpdate) {
      if (!data.basicInfo || !data.basicInfo.firstName || !data.basicInfo.lastName) {
        return 'First name and last name are required';
      }
      if (!data.contactInfo || !data.contactInfo.email || !data.contactInfo.email.address) {
        return 'Email address is required';
      }
      if (!data.professionalInfo || !data.professionalInfo.licenseNumber) {
        return 'License number is required';
      }
    }
    return null;
  };


// todo: --------------- Add Doctor Ctrl ----------------------
const docAddCtrl = async(req,res)=>{
    try {
        const error = validateDoctor(req.body);
        if (error) return handleError(res, 400, error);

        const doctor = new docModel({...req.body});
        const newDoc = await doctor.save();
        res.status(200).json({message: 'Doctor register successfully', newDoc})
    } catch (error) {
        console.log(error)
        handleError(res, 500, 'Server error');
    }
}

// todo: --------------- Get All Doctor Ctrl ----------------------
const getAllDocCtrl = async(req,res)=>{
    try {
        const doctors = await docModel.find()
        res.status(200).json(doctors)
    } catch (error) {
        console.log(error)
        handleError(res, 500, 'Server error');
    }
}

// todo: --------------- Get All Filtered Doctor Ctrl ----------------------
const getAllFilterDocCtrl = async (req, res) => {
  try {
    const {
      consult,
      language,
      hospital,
      price,
      specialization,
      rating,
      dayAvailable,
      experience
    } = req.body.filterData;

    // console.log("Filter Input:", req.body.filterData);

    // Set default ranges
    let minPrice = 0;
    let maxPrice = 10000;
    let minExp = 0;
    let maxExp = 100;

    // Parse price range
    if (price) {
      if (price === '100-500') {
        minPrice = 100;
        maxPrice = 500;
      } else if (price === '500-1000') {
        minPrice = 500;
        maxPrice = 1000;
      } else {
        minPrice = 1000;
        maxPrice = 10000;
      }
    }

    // Parse experience range
    if (experience) {
      if (experience === '0-5') {
        minExp = 0;
        maxExp = 5;
      } else if (experience === '6-10') {
        minExp = 6;
        maxExp = 10;
      } else if (experience === '11-16') {
        minExp = 11;
        maxExp = 16;
      } else {
        minExp = 17;
        maxExp = 100;
      }
    }

    // Build dynamic query
    const query = {
      'services': {
        $elemMatch: {
          price: { $gte: minPrice, $lte: maxPrice }
        }
      },
      'professionalInfo.yearsOfExperience': {
        $gte: minExp,
        $lte: maxExp
      }
    };

    if (consult) query.consult = consult.toLowerCase();
    if (language) query.language = language.toLowerCase();
    if (specialization) query['professionalInfo.specialization'] = specialization;
    if (rating) query.ratings = { $gte: Number(rating) };

    // Filter by day available
    if (dayAvailable) {
      query['availability.workingDays'] = dayAvailable;
    }

    // Filter by hospital name in employment history
    if (hospital) {
      query.employment = {
        $elemMatch: { hospitalName: new RegExp(hospital, 'i') }
      };
    }

    const DocFiltered = await docModel.find(query)
    // .select(
    //   'basicInfo.firstName consult language services professionalInfo.yearsOfExperience ratings availability employment'
    // );

    console.log("Filtered Count:", DocFiltered.length);

    res.status(200).json({
      success: true,
      message: "Filtered doctors retrieved successfully",
      data: DocFiltered
    });

  } catch (error) {
    console.error('Error filtering doctors:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while filtering doctors',
      error: error.message
    });
  }
};



module.exports = {docAddCtrl,getAllDocCtrl,getAllFilterDocCtrl}