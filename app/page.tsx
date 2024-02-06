import EmblaCarousel from "./components/Carousel";
import ServicesPreview from "./components/ServicesPreview";
import ClientsPreview from "./components/ClientsPreview";
import ProjectsPreview from "./components/ProjectsPreview";
import PageTitle from "./components/PageTitle";

import styles from './page.module.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 4
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {

  return (
    <>
      <PageTitle></PageTitle>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <ProjectsPreview/>
      <ServicesPreview/>
      <ClientsPreview/>
    </>
  )
}
