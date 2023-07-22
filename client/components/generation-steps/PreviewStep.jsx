import Button from '../ui/Button';
import Card from '../ui/Card';

function PreviewStep(props) {
  const handleDownloadPDF = () => {
    // Code to create PDF with svgContent and initiate download
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-violet-600 mb-4 lg:mb-6">
        Preview & Download Your Card
      </h1>

      <div>
        <Card className="flex flex-col items-center justify-center"></Card>
        <Button
          variant="secondary"
          className="rounded-md"
          onClick={handleDownloadPDF}
        >
          Download as PDF
        </Button>
      </div>
    </div>
  );
}

export default PreviewStep;
