import {
  assertInInjectionContext,
  inject,
  HostAttributeToken,
} from '@angular/core';

export function hostAttr<T>(key: string, defaultValue: T): T {
  assertInInjectionContext(hostAttr);

  return (
    (inject(new HostAttributeToken(key), { optional: true }) as T) ??
    defaultValue
  );
}

hostAttr.required = function <T>(key: string): T {
  assertInInjectionContext(hostAttr);
  return inject(new HostAttributeToken(key)) as T;
};
