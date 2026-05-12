import 'photoswipe/dist/photoswipe.css';
import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
// eslint-disable-next-line camelcase
import Gallery1 from '../../assets/images/gallery-1.jpg';
// eslint-disable-next-line camelcase
import Gallery2 from '../../assets/images/gallery-2.jpg';
// eslint-disable-next-line camelcase
import Gallery3 from '../../assets/images/gallery-3.jpg';
// eslint-disable-next-line camelcase
import Gallery4 from '../../assets/images/gallery-4.jpg';

export default function Photos() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: Gallery1, width: 1920, height: 1080 },
          { src: Gallery2, width: 1920, height: 1080 },
          { src: Gallery3, width: 1920, height: 1080 },
          { src: Gallery4, width: 1920, height: 1080 },
        ]}
      />
    </>
  );
}
