import test from 'tape';
import element from 'magic-virtual-element';
import { renderString, tree } from 'deku';
import Timeago from './index';

test('Timeago', function (t) {
  t.equal(renderString(tree(<Timeago date={new Date() - 1000} />)),
    '<span>1 second ago</span>');

  t.equal(renderString(tree(<Timeago class='custom-class' date={new Date() - 1000} />)),
    '<span class="custom-class">1 second ago</span>');

  t.end();
});
