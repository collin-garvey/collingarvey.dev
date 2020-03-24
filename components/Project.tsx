import React from 'react';
import {Url} from 'url';

interface IProjectProps {
  url?: string;
  title: string;
}

const Project: React.FC<IProjectProps> = props => {
  return (
    <div className="project">
      <a href={props.url}>
        <span className="project__title">{props.title}</span>
      </a>
    </div>
  );
};

export default Project;
