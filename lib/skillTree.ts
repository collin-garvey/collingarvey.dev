import * as d3 from 'd3';
import data from '../data/skillsData';

const setup = (props: {labelClass: string}) => {
  const rootElem = document.getElementById('skillTreeRoot');
  const width = rootElem.clientWidth;
  const height = rootElem.clientHeight;

  console.log(width, height);

  const pack = data =>
    d3
      .pack()
      .size([width, height])
      .padding(5)(
      d3
        .hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value),
    );

  const root = pack(data);
  let focus = root;
  let view;

  const color = d3
    .scaleLinear()
    .domain([0, 4])
    // @ts-ignore
    .range(['hsl(247,24%,7%)', 'hsl(7,86%,62%)'])
    .interpolate(d3.interpolateHcl);

  const svg = d3
    .create('svg')
    .attr('viewBox', `-${width / 2} -${(height - 110) / 2} ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .style('display', 'block')
    .style('margin', '0 0')
    .style('background', color(0))
    .style('cursor', 'pointer')
    .on('click', () => zoom(root));

  const node = svg
    .append('g')
    .selectAll('circle')
    .data(root.descendants().slice(1))
    .join('circle')
    .attr('fill', d => (d.children ? color(d.depth) : '#f25f4c'))
    .attr('pointer-events', d => (!d.children ? 'none' : null))
    .on('mouseover', function() {
      d3.select(this)
        .attr('stroke', 'rgba(255, 255, 255, 0.5)')
        .attr('stroke-width', '3px');
    })
    .on('mouseout', function() {
      d3.select(this).attr('stroke', null);
    })
    .on('click', d => focus !== d && (zoom(d), d3.event.stopPropagation()));

  const label = svg
    .append('g')
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .selectAll('text')
    .data(root.descendants())
    .join('text')
    .attr('class', props.labelClass)
    .style('fill-opacity', d => {
      return d.parent === root ? 1 : 0;
    })
    .style('background-color', '#000000')
    .style('display', d => (d.parent === root ? 'inline-block' : 'none'))
    .text(d => {
      // @ts-ignore
      const valueStr = d.data.value ? ` - ${d.data.value}` : '';
      // @ts-ignore
      return `${d.data.name}${valueStr}`;
    });

  zoomTo([root.x, root.y, root.r * 2]);

  function zoomTo(v: number[]) {
    const k = width / v[2];

    view = v;

    label.attr(
      'transform',
      d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`,
    );
    node.attr(
      'transform',
      d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`,
    );
    node.attr('r', d => d.r * k);
  }

  function zoom(d: d3.HierarchyCircularNode<unknown>) {
    const focus0 = focus;

    focus = d;

    const transition = svg
      .transition()
      .duration(d3.event.altKey ? 7500 : 750)
      .tween('zoom', d => {
        const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
        return t => zoomTo(i(t));
      });

    label
      .filter(function(d) {
        // @ts-ignore
        return d.parent === focus || this.style.display === 'inline-block';
      })
      .transition(transition)
      .style('fill-opacity', d => (d.parent === focus ? 1 : 0))

      .on('start', function(d) {
        // @ts-ignore
        if (d.parent === focus) this.style.display = 'inline-block';
      })
      .on('end', function(d) {
        // @ts-ignore
        if (d.parent !== focus) this.style.display = 'none';
      });
  }

  const finalNode = svg.node();
  rootElem.appendChild(finalNode);
};

export default setup;
