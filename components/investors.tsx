import Image from 'next/image'
import React from 'react'

const Investors = () => {
  return (
    <div>
    <div className="flex justify-center text-4xl m-12">
      Our Investors
    </div>
    <div className="flex justify-center gap-8 pb-6 flex-wrap m-10">
    <Image height={170} width={170} alt='' src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/64b6d839d89f189ef8251c4d_image%2089%20(1).png" />
    <Image height={170} width={170} alt='' src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/64b6d827d786eb0f4c9f6485_image%2087%20(1).png"     />
    <Image height={170} width={170} alt='' src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/654c4b579205d64741ad7046_image%2090.png"    />
    <Image height={170} width={170} alt='' src="https://assets-global.website-files.com/632ccb00bcdae75835d251df/654c4b7977adfcb8ecde4a73_image%2088.png"  />
</div>
    
    </div>
  )
}

export default Investors