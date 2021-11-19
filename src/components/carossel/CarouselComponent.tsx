import React from 'react';
import Carousel from 'react-elastic-carousel';    

function CarouselComponent() {
  return (
<Carousel isRTL={false} enableAutoPlay autoPlaySpeed={4000}>
<div>
<img src="https://i.imgur.com/iId3ls3.png" alt="" /> 

</div>
<div>
<img src="https://i.imgur.com/7Ji45Yg.png" alt="" /> 

</div>
<div>
<img src="https://i.imgur.com/7CpCs3c.png" alt="" /> 

</div>
<div>
<img src="https://i.imgur.com/siaSrOC.png" alt="" /> 

</div>
<div>
<img src="https://i.imgur.com/3QSvia2.png" alt="" /> 

</div>
</Carousel>
  )
}

export default CarouselComponent
