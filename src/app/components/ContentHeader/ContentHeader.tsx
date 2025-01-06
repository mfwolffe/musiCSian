
interface ContentHeaderProps {
  title:  string;
  inCard: boolean;
}


const ContentHeader: React.FC<ContentHeaderProps> = ({ title, inCard }) => {
  return (
    <div className="pl-8 pt-6 pb-4">
      <h1 className={`mr-auto subpixel-antialiased ${inCard ? 'text-2xl' : 'text-4xl'}`}>{ title }</h1>
    </div>
  );
}

export default ContentHeader;