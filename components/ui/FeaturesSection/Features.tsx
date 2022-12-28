import Image from 'next/image'
import React from 'react'
import text from '../../../utils/text.json'
import FeatureText from './FeatureText'

//TODO: Change placholder image once done, fix responsiveness

export const Features = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex gap-x-12 justify-center my-16'>
        <div className='pr-16 hidden md:block my-auto'>
          <Image
            src='/images/features.jpg'
            alt='features'
            height='378'
            width='400'
          />
        </div>
        <div>
          <div className='my-36'>
            <FeatureText
              title={text.features_title_1}
              description={text.features_description_1}
            />
            <FeatureText
              title={text.features_title_2}
              description={text.features_description_2}
            />
            <FeatureText
              title={text.features_title_3}
              description={text.features_description_3}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
