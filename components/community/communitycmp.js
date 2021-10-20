import React, { useState } from "react";
import Gallery from "react-photo-gallery";
import Photo from "./Photo";
import { arrayMove } from "react-sortable-hoc";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
const photos = [
  {
    src: "/images/teambuilding/teambuilding1.webp",
    width: 5,
    height: 4
  },
  {
    src: "/images/teambuilding/teambuilding2.webp",
    width: 3,
    height: 2
  },
  {
    src: "/images/teambuilding/teambuilding3.webp",
    width: 3,
    height: 4
  },
  {
    src: "/images/teambuilding/teambuilding4.webp",
    width: 3,
    height: 4
  },
  {
    src: "/images/teambuilding/teambuilding5.webp",
    width: 3,
    height: 4
  },
  {
    src: "/images/teambuilding/teambuilding6.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding7.webp",
    width: 3,
    height: 4
  },
  {
    src: "/images/teambuilding/teambuilding8.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding9.webp",
    width: 4,
    height: 3
  },
  
  {
    src: "/images/teambuilding/teambuilding11.webp",
    width: 4,
    height: 3
  },
  
  {
    src: "/images/teambuilding/teambuilding13.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding14.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding15.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding16.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding17.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding18.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding19.webp",
    width: 4,
    height: 3
  },
  {
    src: "/images/teambuilding/teambuilding20.webp",
    width: 4,
    height: 3
  }
];
const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));
export default function Communitycmp() {
  const [items, setItems] = useState(photos);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  
  return (
    <section className="ftco-section mt-5 pt-5">
         <div className="row justify-content-center mb-1 pb-3 mt-5 pt-5">
          <div className="col-md-7 heading-section  text-center ">
            <h2 className="mb-1 ">Our TeamBuilding</h2>
          </div>
        </div>
      <div className="row justify-content-center">
      <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </div>
    </section>
  );
}
