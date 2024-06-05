import React, { useState } from 'react';
import SectionList from './SectionList';
import ResumeForm from './ResumeForm';

const ResumeBuilder = () => {
    const [selectedSections, setSelectedSections] = useState([]);
    const [title, setTitle] = useState('');

    const addSection = (section) => {
        setSelectedSections([...selectedSections, section]);
    };

    const saveResume = async () => {
        const resume = {
            title: title, // 사용자로부터 입력받은 제목
            sections: selectedSections, // 전체 섹션 데이터를 보냄
            createdAt: new Date().toISOString()
        };

        try {
            const response = await fetch('http://localhost:8080/api/resumes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(resume),
            });

            if (response.ok) {
                alert('Resume saved successfully');
            } else {
                alert('Failed to save resume');
            }
        } catch (error) {
            console.error('Error saving resume:', error);
            alert('Error saving resume');
        }
    };

    const previewResume = () => {
        console.log("Preview resume:", selectedSections);
    };

    return (
        <div className="resume-builder">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter resume title"
            />
            <SectionList addSection={addSection} />
            <ResumeForm
                selectedSections={selectedSections}
                saveResume={saveResume}
                previewResume={previewResume}
            />
        </div>
    );
};

export default ResumeBuilder;
