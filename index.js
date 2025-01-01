```javascript
// pages/about.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function About() {
  const router = useRouter();
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    if (router.pathname === '/') {
        setShowHome(true);
    }
  }, [router.pathname]);

  const handleClick = () => {
    router.push('/');
    setShowHome(false);
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
      {showHome && (
          <div>
              <h1>Welcome to my Next.js app!</h1>
              <Link href='/about'><a>Go to About page</a></Link>
          </div>
      )}
    </div>
  );
}
```