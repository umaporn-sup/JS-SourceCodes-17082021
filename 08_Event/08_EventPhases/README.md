# Event Phase
- The eventPhase property of the Event interface indicates which phase of the event flow is currently being evaluated.  
- It returns an integer value which specifies the current evaluation phase of the event flow. Possible values are listed in Event phase constants:
  1. Event.NONE	(0)	No event is being processed at this time.
  2. Event.CAPTURING_PHASE (1) the event handler is called during the capture phase.
  3. Event.AT_TARGET (2) the event handler is at the target.
  4. Event.BUBBLING_PHASE (3) the event handler is during the bubble phase.

  