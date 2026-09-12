import React, { useState } from "react";
import "./GetFreeQuote.css";

const GetFreeQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupPin: "",
    dropPin: "",
    pickupFloor: "",
    dropFloor: "",
    liftAvailable: "",
    items: "",
    files: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      files: Array.from(e.target.files),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Quote Request:", formData);

    alert("Thank you! Your quote request has been submitted.");
  };

  return (
    <section className="quote-section" id="quote">
      <div className="quote-container">

        {/* Section Heading */}
        <div className="quote-heading">
          <span className="quote-tag">GET A FREE QUOTE</span>

          <h2>
            Plan Your Move <span>With Confidence</span>
          </h2>

          <p>
            Share your moving details with us and our team will get back to
            you with a suitable quotation.
          </p>
        </div>

        {/* Quote Form */}
        <div className="quote-card">
          <form onSubmit={handleSubmit}>

            {/* Customer Details */}
            <div className="form-section">
              <h3>Customer Details</h3>

              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Mobile Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>

              </div>
            </div>

            {/* Location Details */}
            <div className="form-section">
              <h3>Moving Details</h3>

              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="pickupPin">
                    Pickup PIN Code <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="pickupPin"
                    name="pickupPin"
                    placeholder="Enter pickup PIN code"
                    value={formData.pickupPin}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    maxLength="6"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="dropPin">
                    Drop PIN Code <span>*</span>
                  </label>

                  <input
                    type="text"
                    id="dropPin"
                    name="dropPin"
                    placeholder="Enter drop PIN code"
                    value={formData.dropPin}
                    onChange={handleChange}
                    pattern="[0-9]{6}"
                    maxLength="6"
                    required
                  />
                </div>

              </div>

              <div className="form-grid">

                <div className="form-group">
                  <label htmlFor="pickupFloor">
                    Pickup Floor
                  </label>

                  <select
                    id="pickupFloor"
                    name="pickupFloor"
                    value={formData.pickupFloor}
                    onChange={handleChange}
                  >
                    <option value="">Select floor</option>
                    <option value="Ground Floor">Ground Floor</option>
                    <option value="1st Floor">1st Floor</option>
                    <option value="2nd Floor">2nd Floor</option>
                    <option value="3rd Floor">3rd Floor</option>
                    <option value="4th Floor">4th Floor</option>
                    <option value="5th Floor">5th Floor</option>
                    <option value="6th+ Floor">6th+ Floor</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="dropFloor">
                    Drop Floor
                  </label>

                  <select
                    id="dropFloor"
                    name="dropFloor"
                    value={formData.dropFloor}
                    onChange={handleChange}
                  >
                    <option value="">Select floor</option>
                    <option value="Ground Floor">Ground Floor</option>
                    <option value="1st Floor">1st Floor</option>
                    <option value="2nd Floor">2nd Floor</option>
                    <option value="3rd Floor">3rd Floor</option>
                    <option value="4th Floor">4th Floor</option>
                    <option value="5th Floor">5th Floor</option>
                    <option value="6th+ Floor">6th+ Floor</option>
                  </select>
                </div>

              </div>

              <div className="form-group full-width">
                <label>
                  Lift Available?
                </label>

                <div className="radio-group">

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="liftAvailable"
                      value="Yes"
                      checked={formData.liftAvailable === "Yes"}
                      onChange={handleChange}
                    />
                    <span>Yes</span>
                  </label>

                  <label className="radio-option">
                    <input
                      type="radio"
                      name="liftAvailable"
                      value="No"
                      checked={formData.liftAvailable === "No"}
                      onChange={handleChange}
                    />
                    <span>No</span>
                  </label>

                </div>
              </div>
            </div>

            {/* Item Details */}
            <div className="form-section">
              <h3>Moving Items</h3>

              <div className="form-group full-width">
                <label htmlFor="items">
                  Tell Us About Your Items
                </label>

                <textarea
                  id="items"
                  name="items"
                  rows="5"
                  placeholder="Example: 1 sofa, 1 bed, refrigerator, washing machine, boxes, etc."
                  value={formData.items}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Photo / Video Upload */}
            <div className="form-section">
              <h3>Upload Photos / Videos</h3>

              <div className="upload-box">

                <input
                  type="file"
                  id="files"
                  name="files"
                  accept="image/*,video/*"
                  multiple
                  onChange={handleFileChange}
                />

                <label htmlFor="files" className="upload-label">
                  <span className="upload-icon">+</span>

                  <strong>Upload Photos or Videos</strong>

                  <small>
                    Add photos/videos of your सामान for a more accurate quote.
                  </small>
                </label>

              </div>

              {formData.files.length > 0 && (
                <p className="file-count">
                  {formData.files.length} file
                  {formData.files.length > 1 ? "s" : ""} selected
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="quote-submit">
              <button type="submit" className="quote-btn">
                Get My Free Quote
                <span>→</span>
              </button>

              <p>
                Our team will contact you after receiving your enquiry.
              </p>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default GetFreeQuote;
