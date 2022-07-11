// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf';
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer() {
  const resume = './PrathmeshResume.pdf';

  return (
    <Document file={resume} style={{ margin: '0 auto' }}>
      <Page pageNumber={1} />
    </Document>
  );
}
