import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const CopyeditorSamples = () => {
  const samplePdf = "/sample-work.pdf"; // Link to your sample work PDF

  return (
    <div>
      <h1>Copyediting Samples</h1>
      <p>Here are some of my copyediting samples:</p>
      <div style={{ width: '100%', height: '500px' }}>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
          <Viewer fileUrl={samplePdf} />
        </Worker>
      </div>
    </div>
  );
};

export default CopyeditorSamples;
