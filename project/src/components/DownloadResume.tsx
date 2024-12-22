import React from "react";

const DownloadResume = () => {
  return (
    <div>
      <h1>Download My Resume</h1>
      <a
        href="/resume.pdf" // Path to the file in the public folder
        download="My_Resume" // Name of the file when downloaded
      >
        <button>Download Resume</button>
      </a>
    </div>
  );
};

export default DownloadResume;
