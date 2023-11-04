import { useState } from "react";
import axios from "axios";

const JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2YTU2NmFkYy01MzdhLTRjYmMtYjJiMi1jZWJlOGFiODc2ZTUiLCJlbWFpbCI6IjFtczIxY3kwNDZAbXNyaXQuZWR1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjBmZDAwNWRhODgxNGQxZjQwN2UwIiwic2NvcGVkS2V5U2VjcmV0IjoiZTAzOGJkNjI0MWMwMzJhNDQ2ZjRlZWEyM2YwMTc3M2Y5NTEyNDcyZWMwNzk5NjVmZDg4YTk3NjgyZDJjNTQ1NSIsImlhdCI6MTY5OTEyNTUxOX0.4Y4mEEc1GKBUu8zbEgK1wsZMSbZbPmGW-WQ8gUdkkpc`;

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async () => {
    const formData = new FormData();

    formData.append('file', selectedFile);

    const metadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', metadata);

    const options = JSON.stringify({
      cidVersion: 0,
    });
    formData.append('pinataOptions', options);

    try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Your Files</h2>
        <label className="block text-lg font-semibold mb-2">Choose File</label>
        <input type="file" onChange={changeHandler} className="w-full py-2 px-3 border border-gray-300 rounded-lg mb-3" />
        <button onClick={handleSubmission} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 w-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
