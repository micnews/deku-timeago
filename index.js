import element from 'magic-virtual-element';
import Timeago from 'time-ago';

const timeago = Timeago().ago;

export default {
  render: function ({ props }) {
    return <span class={props.class}>{ timeago(props.date) }</span>;
  }
};
