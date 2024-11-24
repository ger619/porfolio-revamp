import 'photoswipe/dist/photoswipe.css';
import * as React from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import mseals from '../../assets/images/Abolger.png';

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
          { src: mseals },
        ]}
      />
    </>
  );
}
