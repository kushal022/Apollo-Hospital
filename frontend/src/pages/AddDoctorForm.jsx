import React, { useState } from 'react';
import axios from 'axios';

const initialState = {
  basicInfo: {
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    profilePicture: '',
    bio: ''
  },
  contactInfo: {
    email: { address: '', isVerified: false },
    phone: { number: '', isVerified: false },
    address: { street: '', city: '', state: '', zipCode: '', country: '' },
    emergencyContact: { name: '', relationship: '', phone: '' }
  },
  professionalInfo: {
    licenseNumber: '',
    licenseIssuingBody: '',
    licenseExpiryDate: '',
    medicalSchool: '',
    graduationYear: '',
    yearsOfExperience: '',
    specialization: '',
    boardCertifications: '',
    languagesSpoken: ''
  },
  employment: [{ hospitalName: '', position: '', department: '', startDate: '', endDate: '', isCurrent: false, location: '' }],
  education: [{ degree: '', institution: '', yearCompleted: '', fieldOfStudy: '' }],
  availability: {
    workingDays: '',
    workingHours: { start: '', end: '' },
    exceptions: [{ date: '', reason: '', isAvailable: false, alternateHours: { start: '', end: '' } }]
  },
  services: [{ name: '', description: '', duration: '', price: '' }],
  ratings: '',
  status: '',
  language: '',
  consult: ''
};

const AddDoctorForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (path, value) => {
    setFormData(prev => {
      const updated = { ...prev };
      const keys = path.split('.');
      let obj = updated;
      for (let i = 0; i < keys.length - 1; i++) {
        obj = obj[keys[i]];
      }
      obj[keys[keys.length - 1]] = value;
      return updated;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3700/api/v1/doc/createDoctor', formData);
      alert('Doctor added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding doctor');
    }
  };

  const inputClass = "bg-gray-100 shadow-sm p-2 rounded";

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6 md:p-8 max-w-6xl mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold">Add Doctor</h2>

      <section>
        <h3 className="text-xl font-semibold mb-2">Basic Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="First Name" className={inputClass} onChange={e => handleChange('basicInfo.firstName', e.target.value)} />
          <input placeholder="Last Name" className={inputClass} onChange={e => handleChange('basicInfo.lastName', e.target.value)} />
          <input placeholder="Gender" className={inputClass} onChange={e => handleChange('basicInfo.gender', e.target.value)} />
          <input type="date" placeholder="Date of Birth" className={inputClass} onChange={e => handleChange('basicInfo.dateOfBirth', e.target.value)} />
          <input placeholder="Profile Picture URL" className={inputClass} onChange={e => handleChange('basicInfo.profilePicture', e.target.value)} />
          <textarea placeholder="Bio" className={inputClass} onChange={e => handleChange('basicInfo.bio', e.target.value)} />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="Email Address" className={inputClass} onChange={e => handleChange('contactInfo.email.address', e.target.value)} />
          <input placeholder="Phone Number" className={inputClass} onChange={e => handleChange('contactInfo.phone.number', e.target.value)} />
          <input placeholder="Street" className={inputClass} onChange={e => handleChange('contactInfo.address.street', e.target.value)} />
          <input placeholder="City" className={inputClass} onChange={e => handleChange('contactInfo.address.city', e.target.value)} />
          <input placeholder="State" className={inputClass} onChange={e => handleChange('contactInfo.address.state', e.target.value)} />
          <input placeholder="Zip Code" className={inputClass} onChange={e => handleChange('contactInfo.address.zipCode', e.target.value)} />
          <input placeholder="Country" className={inputClass} onChange={e => handleChange('contactInfo.address.country', e.target.value)} />
          <input placeholder="Emergency Contact Name" className={inputClass} onChange={e => handleChange('contactInfo.emergencyContact.name', e.target.value)} />
          <input placeholder="Emergency Relationship" className={inputClass} onChange={e => handleChange('contactInfo.emergencyContact.relationship', e.target.value)} />
          <input placeholder="Emergency Phone" className={inputClass} onChange={e => handleChange('contactInfo.emergencyContact.phone', e.target.value)} />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold mb-2">Professional Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="License Number" className={inputClass} onChange={e => handleChange('professionalInfo.licenseNumber', e.target.value)} />
          <input placeholder="License Issuing Body" className={inputClass} onChange={e => handleChange('professionalInfo.licenseIssuingBody', e.target.value)} />
          <input type="date" placeholder="License Expiry Date" className={inputClass} onChange={e => handleChange('professionalInfo.licenseExpiryDate', e.target.value)} />
          <input placeholder="Medical School" className={inputClass} onChange={e => handleChange('professionalInfo.medicalSchool', e.target.value)} />
          <input placeholder="Graduation Year" className={inputClass} onChange={e => handleChange('professionalInfo.graduationYear', e.target.value)} />
          <input placeholder="Years of Experience" className={inputClass} onChange={e => handleChange('professionalInfo.yearsOfExperience', e.target.value)} />
          <input placeholder="Specialization (comma separated)" className={inputClass} onChange={e => handleChange('professionalInfo.specialization', e.target.value)} />
          <input placeholder="Board Certifications (comma separated)" className={inputClass} onChange={e => handleChange('professionalInfo.boardCertifications', e.target.value)} />
          <input placeholder="Languages Spoken (comma separated)" className={inputClass} onChange={e => handleChange('professionalInfo.languagesSpoken', e.target.value)} />
        </div>
      </section>

      {/* <!-- Employment, Education, Availability, Services sections remain unchanged --> */}

      <section>
        <h3 className="text-xl font-semibold mb-2">Additional Info</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input placeholder="Ratings" className={inputClass} onChange={e => handleChange('ratings', e.target.value)} />
          <input placeholder="Status" className={inputClass} onChange={e => handleChange('status', e.target.value)} />
          <select className={inputClass} onChange={e => handleChange('language', e.target.value)}>
            <option value="">Select Language</option>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="telugu">Telugu</option>
          </select>
          <select className={inputClass} onChange={e => handleChange('consult', e.target.value)}>
            <option value="">Select Consult Type</option>
            <option value="online consult">Online Consult</option>
            <option value="hospital visit">Hospital Visit</option>
          </select>
        </div>
      </section>

      <div className="flex justify-end space-x-4">
        <button type="reset" className="bg-gray-200 px-4 py-2 rounded shadow">Reset</button>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded shadow">Submit</button>
      </div>
    </form>
  );
};

export default AddDoctorForm;
