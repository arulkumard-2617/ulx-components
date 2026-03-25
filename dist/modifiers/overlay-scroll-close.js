import { modifier } from 'ember-modifier';

var overlayScrollClose = modifier((_, [when], {
  target,
  onClose
}) => {
  if (!when || typeof onClose !== 'function' || !target?.addEventListener) return;
  const handleScroll = event => {
    onClose(event);
  };
  target.addEventListener('scroll', handleScroll);
  return () => {
    target.removeEventListener('scroll', handleScroll);
  };
});

export { overlayScrollClose as default };
//# sourceMappingURL=overlay-scroll-close.js.map
