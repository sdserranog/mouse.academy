import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Brand = ({ type = 'logo', theme = 'dark', height = 50, width = 156 }) => {
  return (
    <Link href="/">
      <a>
        <Image
          src={`/assets/images/${type}_mouse_academy_${theme}.png`}
          alt="Logo mouse academy"
          height={height}
          width={width}
        />
      </a>
    </Link>
  )
}

export default Brand
