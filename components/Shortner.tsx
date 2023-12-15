import React, { useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';


interface MySession extends Session {
  accessToken?: string;  // use the exact property name as it appears in your actual session object
}

function URLShortenerForm() {
  const { data: sessionData } = useSession();
  const session = sessionData as MySession;
  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [loading, setLoading] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous error

    try {
      const response = await axios.post(
        'https://cherubin-shortner.onrender.com/api/api/url',
        {
          url, // this is the long URL value
          domain: 'scissors.com', // this value can be dynamic based on your needs
          alias, // this is the alias for the URL
        },
        {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`, // assuming the token is stored in accessToken property
          },
        }
      );

      if (response.data?.shortenedUrl) {
        setShortenedUrl(response.data.shortenedUrl);
      }
    } catch (error) {
      console.error('An error occurred while shortening the URL:', error);
      setError('An error occurred. Please try again.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='bg-[#1E3448] flex justify-center items-center py-20 max-md:px-3'>
      <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center p-12 max-md:px-8 rounded-xl max-w-[476px]'>
        <input
          className='border border-blue-600 rounded-xl px-5 py-3 placeholder:text-blue-600'
          type="text"
          name="url"
          id="url"
          placeholder='Paste URL here....'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <div className='flex justify-between max-md:flex-col mt-5 gap-2 max-md:gap-5'>
          <select name="scissor" title='shortner' id="" className='border border-blue-600 rounded-xl p-3 text-blue-600'>
            <option value="scissors.com">Choose Domain</option>
            <option value="scissors.com">scissors.com</option>
            <option value="scissors.com">Enter Domain</option>
          </select>
          <input
            className='border border-blue-600 rounded-xl p-3 placeholder:text-blue-600'
            type="text"
            name="alias"
            id="alias"
            placeholder='Type Alias here'
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
        </div>
        <button type="submit" className='text-white bg-blue-600 px-6 py-3 my-5 rounded-full cursor-pointer' disabled={loading}>
          {loading ? 'Trimming...' : 'Trim'}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      {shortenedUrl && (
        <div className="mt-4 p-4 border border-blue-600 rounded-md">
          <h3 className="font-bold text-blue-600">Shortened URL:</h3>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {shortenedUrl}
          </a>
        </div>
      )}
    </section>
  );
}

export default URLShortenerForm;
