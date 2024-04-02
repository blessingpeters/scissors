'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function ShortUrlRedirect() {
  const router = useRouter();
  const urlParams = new URLSearchParams(window.location.search);
  const docId = urlParams.get('docId');

  useEffect(() => {
    const redirectToOriginalUrl = async () => {
      if (!docId) return; // Ensure docId is present

      try {
        const docRef = doc(db, 'shortenedUrls', docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists() && docSnap.data().originalUrl) {
          // Redirect to the original URL
          router.push(docSnap.data().originalUrl);
        } else {
          console.error('No URL found for:', docId);
          // Optional: Redirect to a 404 page or home page
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    // Wait for the router to be ready before trying to read the query parameters
    // This is necessary because on the first render, query parameters may not be available immediately

      redirectToOriginalUrl();

  }, [router, docId]); // Re-run the effect if docId changes

  return <p>Redirecting...</p>;
}

