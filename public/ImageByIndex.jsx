import image1 from './carousel_2.jpg'
import image2 from './carousel_3.jpg'
import image3 from './franco.png'
import image4 from './franco.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex