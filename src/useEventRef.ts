import { ref, Ref } from 'vue'
import { useEvent, DocumentEventHandler, DocumentEvents, HandlerOptions } from './useEvent'

export function useEventRef<T extends DocumentEvents>(
  event: T,
  handler: DocumentEventHandler<T>,
  options?: HandlerOptions
): [Ref<Element | null>, () => void] {
  const target: Ref<Element | null> = ref(null)
  const [, clear] = useEvent(event, handler, options, target)
  return [target, clear]
}
