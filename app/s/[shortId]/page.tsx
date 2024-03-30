'use client'
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
interface ShortUrlRedirectProps {
  docId: string;
}
const ShortUrlRedirect: React.FC<ShortUrlRedirectProps> = ({ docId }) => {

  const pathname = usePathname();
  // const docId = pathname.split('/').pop();
  const router = useRouter();

  useEffect(() => {
    console.log('ShortUrlRedirect component loaded with shortId:', docId);
    const redirectToOriginalUrl = async () => {
      if (!docId) return;

      try {
        const docRef = doc(db, 'shortenedUrls', docId);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data())
        if (docSnap.exists() && docSnap.data().originalUrl) {
          router.push(docSnap.data().originalUrl);
        } else {
          console.error('No URL found for:', docId);
          // Optional: Redirect to a 404 page or home page
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    redirectToOriginalUrl();
  }, [docId, router]);

  return <p>Redirecting...</p>;
}
export default ShortUrlRedirect;
