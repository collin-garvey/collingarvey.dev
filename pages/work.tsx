import Project from '../components/ProjectCard';
import Grid from '../components/Grid';

import React from 'react';

const Work = () => {
  return (
    <>
      <Grid columns={2}>
        <Project
          url="https://facebook.com/"
          title="Facebook Connectivity App"
        />
        <Project
          url="https://transparency.facebook.com/"
          title="Facebook Transparency"
        />
        <Project url="https://www.oculus.com/medium/" title="Oculus Medium" />
        <Project
          url="https://politics.facebook.com/"
          title="Facebook Government Politics &amp; Advocacy"
        />
      </Grid>
    </>
  );
};

export default Work;
