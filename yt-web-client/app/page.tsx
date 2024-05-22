import styles from "./page.module.css";
import {getVideos} from './firebase/functions'; // Import the missing module
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const videos = await getVideos(); // Call the getVideos function
  
  return (
    <main>
      {
        videos.map((video) => (
          <Link href={`/watch?v=${video.filename}`}>
            <Image src={'/thumbnail.png'} alt='video' width={120} height={80}
              className={styles.thumbnail}/>
          </Link>
        ))
      }
      
    </main> // Added closing tag for the main element
  )
}