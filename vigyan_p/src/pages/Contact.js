import React, {useRef} from 'react';
import Contact from '../components/Contact/Contact.js'
import ContactForm from '../components/Contact/ContactForm.js'
import ContactNav from '../components/Contact/ContactNav.js';


const ContactF = () => {
  const  contact= useRef(null)
  const stayconnected=useRef(null)

  const handleclick =(target)=>{
    

    const scrollWith = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // 80px offset for navbar
        behavior: "smooth"
      });
    }
  }
    if(target==="contact") scrollWith(contact)
      if(target==="stayconnected") scrollWith(stayconnected)
  }
  return (
    <div>
      <ContactNav onScroll={handleclick}/>
        <div ref={contact}><ContactForm/></div>

        <div ref={stayconnected}><Contact/></div>

        

    </div>
  );
};

export default ContactF;


// import React, { Suspense } from 'react';

// // Lazy load components
// const LazyContact = React.lazy(() => import('../components/Contact/Contact.js'));
// const LazyContactForm = React.lazy(() => import('../components/Contact/ContactForm.js'));

// const Contact = () => {
//   return (
//     <div>
//       {/* Suspense component to show fallback while components are loading */}
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyContact />
//         <LazyContactForm />
//       </Suspense>
//     </div>
//   );
// };

// export default Contact;

