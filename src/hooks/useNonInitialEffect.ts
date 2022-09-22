import { useEffect, useRef } from 'react';

const useNonInitialEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const initialRender = useRef(true);

  useEffect(() => {
    let effectReturns: void | (() => void) = () => {};
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      effectReturns = effect();
    }
    if (effectReturns && typeof effectReturns === 'function') {
      return effectReturns;
    }
  }, deps);
};

export default useNonInitialEffect;
