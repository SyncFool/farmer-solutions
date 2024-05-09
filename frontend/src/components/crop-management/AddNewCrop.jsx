import React, { useState } from 'react';
import axios from 'axios'; // Assuming you use axios for HTTP requests
import TopBar from '../TopBar.jsx';
import Sidebar from '../sidebar/Sidebar.jsx';
import DFooter from '../DFooter.jsx';
import BreadCrumb from '../BreadCrumb.jsx';

export default function AddNewCrop() {
  const [cropName, setCropName] = useState('');
  const [cropDescription, setCropDescription] = useState('');
  const [cropProducedSize, setCropProducedSize] = useState('');
  const [cropPrice, setCropPrice] = useState('');
  const [cropInStock, setCropInStock] = useState('');
  const [imageFile, setImageFile] = useState(null); 
  const handleFileChange = (e) => {
    // Set the selected image file when input changes
    setImageFile(e.target.files[0]);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(); // Create FormData object
  
      // Append form data
      formData.append('cropName', cropName);
      formData.append('cropDescription', cropDescription);
      formData.append('cropProducedSize', cropProducedSize);
      formData.append('cropPrice', cropPrice);
      formData.append('cropInStock', cropInStock);
  
      // Append image file
      formData.append('image', imageFile); // Assuming imageFile is the selected image file
  
      // Make HTTP request to upload image and save crop details
      const response = await axios.post('http://127.0.0.1:3000/addCrop', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      });
  
      console.log(response.data); // Log response from server
      // Clear form fields after successful submission
      setCropName('');
      setCropDescription('');
      setCropProducedSize('');
      setCropPrice('');
      setCropInStock('');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <div className="full-box">
        <Sidebar />
        {/* Right Area Opened */}
        <div className="right-area">
          {/* Header */}
          <TopBar />
          {/* Bread Crum */}
          <BreadCrumb props={'नई फसल जोड़ें'}></BreadCrumb>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="crop-details-area-edit-add card">
              <div className="card" style={{ width: '30rem' }}>
                <form onSubmit={handleFormSubmit}>
                  <div className="m-auto d-flex flex-column p-3" style={{ width: '90%', height: '7rem' }}>
                    <label htmlFor="formFile" className="form-label">
                      फसल तस्वीर अपलोड करें
                    </label>
                    <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <div className="mb-3">
                        <label htmlFor="cropName" className="form-label">
                          फसल का नाम
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cropName"
                          value={cropName}
                          onChange={(e) => setCropName(e.target.value)}
                          required
                        />
                      </div>
                    </h5>
                    <p className="card-text">
                      <div className="mb-3">
                        <label htmlFor="cropDescription" className="form-label">
                          फसल विवरण
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cropDescription"
                          value={cropDescription}
                          onChange={(e) => setCropDescription(e.target.value)}
                          required
                        />
                      </div>
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          उत्पादित फसल
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="टन में"
                          aria-label="cropProducedSize"
                          value={cropProducedSize}
                          onChange={(e) => setCropProducedSize(e.target.value)}
                          required
                        />
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          कीमत
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="प्रति टन"
                          aria-label="cropPrice"
                          value={cropPrice}
                          onChange={(e) => setCropPrice(e.target.value)}
                          required
                        />
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          स्टॉक में
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="टन में"
                          aria-label="cropInStock"
                          value={cropInStock}
                          onChange={(e) => setCropInStock(e.target.value)}
                          required
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="card-body d-flex justify-content-center ">
                    <button type="submit" className="btn btn-outline-success rounded-pill">
                      जमा करें
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Right Area Close */}

          {/* footer Area */}
          <DFooter></DFooter>
        </div>
      </div>
    </>
  );
}
