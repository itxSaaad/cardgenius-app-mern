import dynamic from 'next/dynamic';

import Loader from '../ui/Loader';

const TemplateItem = dynamic(() => import('./TemplateItem'), {
  loading: () => <Loader />,
});

function TemplateList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {props.templates.map((template) => (
        <TemplateItem
          key={template.id}
          template={template}
          onSelect={props.onSelect}
        />
      ))}
    </div>
  );
}

export default TemplateList;
