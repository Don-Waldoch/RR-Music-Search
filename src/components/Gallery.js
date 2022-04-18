import GalleryItem from './GalleryItem'
import React, { useContext } from "react";
import StylesContext from "./StylesContext"

function Gallery(props){
    const ourstyle = React.useContext(StylesContext)

    const display = props.data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div style={ourstyle}>
            {display}
        </div>
    )
}

export default Gallery