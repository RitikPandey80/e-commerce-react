const BannerSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
           <img className="hover05" 
            src="banner1.png" alt="banner1"
           />
        </div>
        <div className="overflow-hidden rounded-lg">
           <img className="hover05" 
            src="banner2.png" alt="banner2"
           />
        </div>
      </div>
    </div>
  )
}

export default BannerSection
