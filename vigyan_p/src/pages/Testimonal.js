import React, {useRef} from 'react';

import TestimonialCarousel from '../components/Testimonal/TestimonialsCarousel.js';
import VoicesInspire from '../components/Testimonal/VoicesInspire.js';
import StudentVoice from '../components/Testimonal/StudentVoice.js';
import SuccessNav from '../components/Testimonal/SuccessNav.js';

const Testimonal = () => {

  const Hearfrom=useRef(null);
  const WhatStudent=useRef(null);

  const handleScroll=(target)=>{

    const Scroll=(ref)=>{

      if(ref.current){
        window.scrollTo({
        top: ref.current.offsetTop - 80, // 80px offset for navbar
          behaviour:"smooth"

        })
      }

    }

    if(target==="Hearfrom") Scroll(Hearfrom)
    if(target==="WhatStudent") Scroll(WhatStudent)

    

  }
  return (
    <div>
      <SuccessNav onScroll={handleScroll}/>
      
      <VoicesInspire/>
        <div ref={Hearfrom}><TestimonialCarousel/></div>
          <div ref={WhatStudent}> <StudentVoice/></div>
   
    </div>
  );
};

export default Testimonal;
