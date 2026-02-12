import { helper } from '@ember/component/helper';
import { t as translate } from 'ulx-components';

export default helper(function t(positional, named) {
  const key = positional[0];
  return translate(key, named);
});
