import React from "react";
import './Banner.scss'

type BannerType = 'square' | 'circle' | 'circle-rotate'

type BannerProps = {
  label: string,
  type?: BannerType
}
export function Banner(props: BannerProps){

  let className = 'image-overlay'
  switch (props.type) {
    case 'square':
      className = 'image-overlay-square';
      break;
    case 'circle':
      className = 'image-overlay image-overlay-straight'
  }

  return <div className='image-overlay image-overlay-straight'>
    {props.label.split(' ').map(x=><p>{x}</p>)}
  </div>
}