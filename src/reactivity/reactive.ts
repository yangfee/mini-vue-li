import { track, trigger } from "./effect";

export function reactive(raw) {
    return new Proxy(raw, {
      get(target, key) {
        track(target, key)
        return Reflect.get(target, key);
      },
      set(target, key, val) {
        Reflect.set(target, key, val);
        trigger(target, key)
        return true
      },
    });
  }