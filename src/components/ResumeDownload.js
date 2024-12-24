import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from './ResumeDocument';

function ResumeDownload({ resumeData }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#003366' }}>Download Resume</h2>
      <p style={{ fontSize: '16px', color: '#555' }}>Click the button below to download your professionally formatted resume as a PDF.</p>
      <PDFDownloadLink
        document={<ResumeDocument data={resumeData} />}
        fileName="resume.pdf"
      >
        {({ loading }) => (
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#003366',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            {loading ? 'Generating PDF...' : 'Download Resume'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
}

export default ResumeDownload;
