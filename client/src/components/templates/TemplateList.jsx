import PropTypes from 'prop-types';
import React, { Suspense } from 'react';

import Loader from '../ui/Loader';

const TemplateItem = React.lazy(() => import('./TemplateItem'));

function TemplateList(props) {
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {props.templates.map((template) => (
          <TemplateItem
            key={template.id}
            template={template}
            onSelect={props.onSelect}
          />
        ))}
      </div>
    </Suspense>
  );
}

TemplateList.propTypes = {
  templates: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default TemplateList;
