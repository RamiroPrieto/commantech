import image1 from './carousel_1.webp'
import image2 from './carousel_2.webp'
import image3 from './carousel_3.webp'
import image4 from './franco.png'

import image1_mob from './carousel_1_mobile.jpg'
import image2_mob from './carousel_2_mobile.jpg'

export const images = [image1, image2, image3, image4]
export const imagesMob = [image1_mob, image2_mob]

const imageByIndex = (index, mobile) => mobile ? imagesMob[index % imagesMob.length] : images[index % images.length]

export default imageByIndex