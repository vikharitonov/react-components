import React, { ComponentPropsWithRef, CSSProperties } from "react";

import "./Image.css";

export interface ImageInterface extends ComponentPropsWithRef<"img"> {
  size?: number;
  width?: number | string | undefined;
  height?: number | string | undefined;
}

const Image = ({ size, width, height, ...props }: ImageInterface) => {
  const imgWidth = size ? size : width;
  const imgHeight = size ? size : height;
  const className = `img ${props.className ? props.className : null}`;
  const alt = props.alt ? props.alt : `${props.src}`;

  return (
    <img
      className={className}
      alt={alt}
      {...props}
      width={imgWidth}
      height={imgHeight}
      style={{ width: imgWidth, height:imgHeight }}
    />
  );
};

// const Image = ({src, ...props}:ImageInterface)=>{
//     const style : CSSProperties = {
//         height:'100%',
//         width:'100%',
//         backgroundSize:'cover',
//         backgroundPosition:'center',
//         backgroundImage:`url(${src})`,
//     };
//     const className = `img ${props.className ? props.className : null}`;
//     return (
//         <div style={style} {...props}/>
//     )
// }

export default Image;
