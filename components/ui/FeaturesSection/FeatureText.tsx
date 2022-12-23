import React from 'react'

interface FeatureTextProps {
  title: string
  description: string
}

const FeatureText: React.FC<FeatureTextProps> = ({ title, description }) => {
  return (
    <div>
      <div className='font-bold'>{title}</div>
      <div className='mb-6 lg:w-96'>{description}</div>
    </div>
  )
}

export default FeatureText
