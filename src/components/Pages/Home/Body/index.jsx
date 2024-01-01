import BannerSection from "./BannerSection"
import BlogSection from "./BlogSection"
import Category from "./Category" 
import FeaturesSectionFruits from "./FeaturesSectionFruits.tsx"
import FeatureSectionBreakfast from "./FeatureSectionBreakfast"
import Hero from "./Hero"



const BodyIndex = () => {
  return (
    <>
      <Hero />
      <Category />
      <FeaturesSectionFruits />
      <FeatureSectionBreakfast />
      <BannerSection />
      <BlogSection />
    </>
  )
}

export default BodyIndex
