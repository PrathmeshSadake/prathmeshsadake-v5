import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../components/pdf-viewer'), {
  ssr: false,
});

export default function PDF() {
  return (
    <div className='max-h-full w-full py-12'>
      <PDFViewer onLoadError={console.error} />
      <a
        className='max-w-min mx-auto py-3 px-8 text-base justify-between  hover:bg-gray-800 font-medium leading-none text-white bg-gray-700 flex items-center transition-colors'
        href={`https://drive.google.com/uc?export=download&id=1M_UiFPGf8zJlg4B8qv4B9AI76EWFMPIS`}
        target='_blank'
        rel='noreferrer'
        download={true}
      >
        Download
      </a>
    </div>
  );
}
