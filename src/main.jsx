import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import NAVBAR from './navbar.jsx';
import SEARCH from './search.jsx';
import BACK from './back.jsx';
import JobDetail from './jobDetail.jsx';
import RelatedJobs from './RelatedJobs.jsx';
import Announcement from './announcements.jsx';
import Filter from './filter.jsx';
import Authentication from './authorization.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <div className='h-screen'> */}
      <Announcement/>
      {/* <Authentication action={'Signup'} headline={'Create your account'}/> */}
    {/* </div> */}
  </StrictMode>
);

{/* <div className="h-screen">
      <NAVBAR />
      <SEARCH />
      <div className='h-full flex gap-12 justify-end mr-32'>
        <div className=''>
          <JobDetail/>
        </div>
        <div className=''>
          <RelatedJobs kind='Related Jobs'/>
        </div>
      </div>
    </div> */}