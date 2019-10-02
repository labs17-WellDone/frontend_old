import ImageSlice from "../slices/ImageSlice"
import TextSlice from "../slices/TextSlice"

export default function SliceResolver({ slice_type, ...rest }) {
  switch (slice_type) {
    case "image_with_button":
      return <ImageSlice {...rest} />
    case "text":
      return <TextSlice {...rest} />
    default:
      return <div />
  }
}
