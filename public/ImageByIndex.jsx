import image3 from './carousel_1.webp'
import image2 from './carousel_2.jpg'
import image1 from './mobile_start_video_wide.gif'
import image4 from './carousel_4.gif'

//import image1_mob from './carousel_1_mobile.jpg'
import image1_mob from './mobile_start_video.gif'
import image2_mob from './carousel_2_mobile.jpg'
import image3_mob from './carousel_3_mobile.jpg'
import image4_mob from './carousel_4_mobile.jpg'

export const images = [image1, image2, image3, image4]
export const imagesMob = [image1_mob, image2_mob, image3_mob, image4_mob]

const imageByIndex = (index, mobile) => mobile ? imagesMob[index % imagesMob.length] : images[index % images.length]

export default imageByIndex