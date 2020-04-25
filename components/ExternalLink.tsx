import React from 'react';

interface IExternalLinkProps {
  href: string;
}

const ExternalLink: React.SFC<IExternalLinkProps> = props => {
  return (
    <a href={props.href} rel="noopener" target="_blank">
      {props.children}
    </a>
  );
};

export default ExternalLink;
