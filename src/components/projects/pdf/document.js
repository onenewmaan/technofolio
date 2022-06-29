import React, { useState } from 'react';
import styled from "styled-components";
import LogoComponent from "../../../subComponents/LogoComponent";
import { Document, Page, pdfjs } from 'react-pdf';
import Arcitecture_Domain from './Arcitecture_Domain.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Box =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 5px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: fit-content;

  z-index: 3;
  line-height: 1.5;
  font-family: monospace;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  left: 50%;
  transform: translate(-50%, 0);
  top: 5rem;
  font-family: 'Ubuntu Mono', monospace;

`
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};

const Domain1 = () => {

  // const [file, setFile] = useState('./doc.pdf');
  const [numPages, setNumPages] = useState(null);

  // function onFileChange(event) {
  //   setFile(event.target.files[0]);
  // }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <>
    <LogoComponent />
        <Box
        initial={{height:0}}
        animate={{height:'55vh'}}
        transition={{type: 'spring', duration:2, delay:1 }}
        >
          <div>
            <Document file={Arcitecture_Domain} onLoadSuccess={onDocumentLoadSuccess} options={options} onContextMenu={(e) => e.preventDefault()}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
            </Document>
          </div>

        </Box>
        <div className="bottom-space" />   
      </>
  )
}

export default Domain1