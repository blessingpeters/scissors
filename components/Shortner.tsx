import React, { useState } from 'react';
import { db } from '@/firebase'; // Adjust this path to your Firebase config
import { collection, addDoc } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function URLShortenerForm() {
  const { data: session } = useSession();
  const [url, setUrl] = useState<string>('');
  const [alias, setAlias] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [shortenedUrl, setShortenedUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const generateShortId = (alias: string): string => {
    return alias || Math.random().toString(36).substr(2, 8);
  };
    const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const shortId = generateShortId(alias);

    const data = {
      originalUrl: url,
      shortId: shortId,
      createdAt: new Date(),
      userId: session?.user?.email
    };

    // Add document to Firestore and get the auto-generated ID
    addDoc(collection(db, 'shortenedUrls'), data)
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
        

        // router.push(`/s/${shortId}?docId=${docRef.id}`);
        const shortUri = `${window.location.origin}/s/${shortId}`;
        setShortenedUrl(shortUri);
      })
      .catch(err => {
        console.error('Error adding document: ', err);
        setError('Failed to shorten the URL. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };



  return (
    <section className='bg-[#1E3448] flex justify-center items-center py-20 max-md:px-3'>
      <form onSubmit={handleSubmit} className='bg-white flex flex-col justify-center p-12 max-md:px-8 rounded-xl max-w-[476px] w-full'>
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
        {shortenedUrl && (
        <div className="mt-4 whitespace-nowrap">
          <h3 className="font-bold text-blue-600">Shortened URL:</h3>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {shortenedUrl}
          </a>
        </div>
      )}
      </form>

    </section>
  );
}

export default URLShortenerForm;
