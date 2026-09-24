import {useState} from 'react';
import {useNavigate} from 'react-router';
import {useFile, useMedia} from '../hooks/apiHooks';
import useForm from '../hooks/formHooks';

const Upload = () => {
  const [file, setFile] = useState(null);
  const {postFile} = useFile();
  const {postMedia} = useMedia();
  const navigate = useNavigate();

  const initValues = {
    title: '',
    description: '',
  };

  const doUpload = async () => {
    try {
      const token = localStorage.getItem('token');

      const fileResult = await postFile(file, token);
      await postMedia(fileResult.data, inputs, token);

      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useForm(
    doUpload,
    initValues,
  );

  const handleFileChange = (event) => {
    if (event.target.files) {
      console.log(event.target.files[0]);
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Upload</h1>

      <form className="max-w-md" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="mb-1 block" htmlFor="title">
            Title
          </label>

          <input
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-3">
          <label className="mb-1 block" htmlFor="description">
            Description
          </label>

          <textarea
            className="w-full rounded border border-gray-300 bg-white p-2"
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="mb-1 block" htmlFor="file">
            File
          </label>

          <input
            className="block w-full rounded border border-gray-300 bg-white p-2"
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>

        <img
          className="mb-4 h-[200px] w-[200px] object-cover"
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/200?text=Choose+image'
          }
          alt="preview"
        />

        <button
          className="cursor-pointer rounded bg-blue-800 px-4 py-2.5 text-white hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-gray-400"
          type="submit"
          disabled={!file || inputs.title.length <= 3}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
