import React from 'react';
import Section from './Section';

const ResumeForm = ({ selectedSections = [], saveResume, previewResume }) => {
    return (
        <div className="resume-form">
            <h3>Resume Form</h3>
            {selectedSections.length > 0 ? (
                selectedSections.map((section, index) => (
                    <Section key={index} section={section} />
                ))
            ) : (
                <p>No sections selected.</p>
            )}
            <button onClick={saveResume}>Save</button>
            <button onClick={previewResume}>Preview</button>
        </div>
    );
};

export default ResumeForm;

