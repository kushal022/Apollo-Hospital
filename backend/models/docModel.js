const mongoose = require('mongoose');

//Schema Design:
const docSchema = new mongoose.Schema({
    basicInfo: {
        firstName: String,
        lastName: String,
        gender: String,  // 'Male', 'Female', 'Other'
        dateOfBirth: Date,
        profilePicture: String,  // URL to image
        bio: String
      },
    contactInfo: {
        email: {
          address: String,
          isVerified: Boolean
        },
        phone: {
          number: String,
          isVerified: Boolean
        },
        address: {
          street: String,
          city: String,
          state: String,
          zipCode: String,
          country: String
        },
        emergencyContact: {
          name: String,
          relationship: String,
          phone: String
        }
      },
      professionalInfo: {
        licenseNumber: String,
        licenseIssuingBody: String,
        licenseExpiryDate: Date,
        medicalSchool: String,
        graduationYear: Number,
        yearsOfExperience: Number,
        specialization: [String],  // e.g., ['Cardiology', 'Internal Medicine']
        boardCertifications: [String],
        languagesSpoken: [String]
      },
      employment: [{
        hospitalName: String,
        position: String,
        department: String,
        startDate: Date,
        endDate: Date,
        isCurrent: Boolean,
        location: String
      }],
      education: [{
        degree: String,
        institution: String,
        yearCompleted: Number,
        fieldOfStudy: String
      }],
      availability: {
        workingDays: [String],  // ['Monday', 'Wednesday', 'Friday']
        workingHours: {
          start: String,  // '09:00'
          end: String     // '17:00'
        },
        exceptions: [{
          date: Date,
          reason: String,
          isAvailable: Boolean,
          alternateHours: {
            start: String,
            end: String
          }
        }]
      },
      services: [{
        name: String,
        description: String,
        duration: Number,  // in minutes
        price: Number
      }],
      ratings: {
        type: Number,
      },
      status: String,
      language:{
        type:String,
        enum:['english','hindi','telugu']
      },
      consult:{
        type:String,
        enum:['online consult','hospital visit']
      },

    },{timestamps:true}
);

//Model:
const docModel = mongoose.model('doctors', docSchema);
//Export:
module.exports = docModel;