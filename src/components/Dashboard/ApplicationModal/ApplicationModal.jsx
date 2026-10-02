import { useState } from 'react';
import './ApplicationModal.css'


export default function ApplicationModal({isAppModalOpen , iscloseExit}){

    const initialFormState = {
        companyName: "",
        jobTitle: "",
        salaryMin: "",
        salaryMax: "",
        interviewDate: "",
        interviewType: "IN_PERSON",
        stage: "Pending"
    };
    
    const [formData, setFormData] = useState(initialFormState);
    function handleChange(field , value){
        setFormData(prev => ({ ...prev, [field]: value }));
    }
    function handleExit(){
        setFormData(initialFormState);
        iscloseExit();
    }

    return(
        <div className={`modal-overlay ${isAppModalOpen ? "application-active" : " "}`}>
            <div className="app-modal">
                <div className="app-header">
                    <h3 className='app-header-text'>Add application</h3>
                    <span className='exit-application-modal' onClick={handleExit}>X</span>
                </div>
                <div className="app-form-container">
                    <div className="form-grid">
                        <p className='input-text'>Company Name</p>
                        <input type="text" className='form-input' placeholder='e.g Microsoft' value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)}/>
                    </div>
                     <div className="form-grid">
                        <p className='input-text'>Job Title</p>
                        <input type="text"  className='form-input' placeholder='e.g Backend Developer' value={formData.jobTitle} onChange={(e) => handleChange("jobTitle", e.target.value)}/>
                    </div>
                     <div className="grid-form">
                        <div className="inner-form-container">
                            <p className='input-text'>Salary min</p>
                            <input type="text"  className='form-input' placeholder='e.g ₱5000'  inputMode='numeric' value={formData.salaryMin} onChange={(e) => 
                            handleChange("salaryMin", e.target.value.replace(/[^0-9]/g, '')
                        )}
                         />
                        </div>
                        <div className="inner-form-container">
                            <p className='input-text'>Salary max</p>
                            <input type="text" className='form-input' placeholder='e.g ₱1000' inputMode='numeric' value={formData.salaryMax} onChange={(e) => 
                                handleChange("salaryMax", e.target.value.replace(/[^0-9]/g, '')
                                )}/>
                        </div>
                    </div>
                    <div className="form-grid">
                        <p className='input-text'>Interview date</p>
                        <input type="date"  className='form-selector' value={formData.interviewDate} onChange={(e) => handleChange("interviewDate", e.target.value)} />
                    </div>
                    <div className="form-grid">
                        <p className='input-text'>Interview Type</p>
                        <select name="interview-type" className='form-selector' value={formData.interviewType} onChange={(e) => handleChange("interviewType", e.target.value)}>
                            <option value="IN_PERSON">In person</option>
                            <option value="HYBRID">Hybrid</option>
                            <option value="VIRTUAL">Virtual</option>
                        </select>
                    </div>
                    <div className="stages-choice">
                        <p className='input-text'>Stage</p>
                        <div className="stages-inner-container">
                            <div className="choice">
                                Pending
                            </div>
                            <div className="choice">
                                Shortlisted
                            </div>
                            <div className="choice">
                                Rejected
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="app-btns-container">
                    <button className="app-btn cancel">Cancel</button>
                    <button className="app-btn save">Add application</button>
                </footer>
            </div>
        </div>
    );
}