const withRaf = cb => {
  let isTicking = false;
  return e => {
    if (!isTicking) {
      isTicking = true;
      window.requestAnimationFrame(() => cb(e));
      isTicking = false;
    }
  };
};

export default withRaf;