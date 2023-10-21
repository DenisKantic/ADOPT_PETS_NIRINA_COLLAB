import React, {useEffect} from 'react'

const Donate = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0});
  };

  useEffect(()=>{
    scrollToTop();
  },[])
  return (
    <div>
      
        Donate
    </div>
  )
}

export default Donate