'use client'
import { useState, useEffect } from 'react'
import { myProfile } from '@/api/auth'
import { useRouter } from 'next/navigation'
import { deleteCookie } from '@/actions/cookies'


const EventOrgPage = () => {
    
    const router = useRouter();
    const [user, setUser] = useState({} as any);
    async function getProfile() {

        try {
          const res = await myProfile();
    
          setUser(res.data.profile);
          if (res.data.profile.role === 'customer') {
            router.push('/unauthorized');
          }
        } catch (error: any) {
          if (error.response.status === 500) {
            // router.push('/');
          }
        }
      }

    useEffect(() => {
        document.title = "Event Organizer Page"
        getProfile()

    }, [])
    return <div>Event Organizer Page</div>;
  };
  
export default EventOrgPage;