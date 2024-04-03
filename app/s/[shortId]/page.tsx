'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '@/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function ShortUrlRedirect({ params }: { params: { shortId: string } }) {
  const router = useRouter();
  const { shortId } = params;

  useEffect(() => {
    const redirectToOriginalUrl = async (shortId: string): Promise<void> => {
      if (!shortId) return;

      const q = query(collection(db, "shortenedUrls"), where("shortId", "==", shortId));

      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {

          const docData = querySnapshot.docs[0].data();
          if (docData.originalUrl) {
            router.replace(docData.originalUrl);
          } else {
            console.error('Document does not contain an original URL.');
            //TODO: Redirect to a 404 page or home page
          }
        } else {
          console.error('No document found for:', shortId);
          //TODO: Redirect to a 404 page or home page
        }
      } catch (error) {
        console.error('Error querying document:', error);
      }
    };

    redirectToOriginalUrl(shortId);
  }, [shortId, router]);

  return <p>Redirecting...</p>;
}
