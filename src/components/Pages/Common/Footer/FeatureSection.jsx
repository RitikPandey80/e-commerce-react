import FeatureCard from './FeatureCard.tsx';
import {
    LiaShippingFastSolid,
    LiaMoneyBillWaveSolid,
    LiaGiftSolid,
} from 'react-icons/lia';
import { FiPhoneCall } from 'react-icons/fi';

const data = [
    {
        id:0,
        title: "Free Shipping",
        icon: <LiaShippingFastSolid />,
    },
    {
        id:1,
        title: "Best Price Guarantee",
        icon: <LiaMoneyBillWaveSolid />,
    },
    {
        id:2,
        title: "Free Curbside Pickup",
        icon: <LiaGiftSolid />
    },
    {
        id:3,
        title: "Support 24/7",
        icon: <FiPhoneCall />
    },
]

const FeatureSection = () => {
  return (
    <div className='bg-[#cccccc]'>
    <div className="container py-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((el) => <FeatureCard key={el.id} title={el.title} icon={el.icon} />)}
      </div>
    </div>
    </div>
  )
}

export default FeatureSection
