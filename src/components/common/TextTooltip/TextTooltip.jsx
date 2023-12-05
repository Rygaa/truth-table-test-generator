import React from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";
import classes from "./TextTooltip.module.scss";

const TextTooltip = ({ text, children, ...props }) => {
  const [open, setOpen] = React.useState(false);
  const { x, y, refs, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: "top",
    // Make sure the tooltip stays on the screen
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        fallbackAxisSideDirection: "start",
      }),
      shift(),
    ],
  });

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus, dismiss, role]);

  const divRef = React.useRef();
  const [isTruncated, setIsTruncated] = React.useState(false);

  React.useEffect(() => {
    const divElement = divRef.current;
    const childElement = divElement.firstChild; // Getting the first child element
    console.log(childElement)
    // Checking if the first child is a <p> tag
    if (childElement && childElement.tagName === "P") {
      if (isTextTruncated(childElement)) {
        setIsTruncated(true);
      }
      // } else {
      // }
    }
  }, []);

  const isTextTruncated = (element) => {
    console.log(element.scrollWidth)
    return element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
  };

  return (
    <div {...props} className={classes["container"]}>
      <div ref={refs.setReference} {...getReferenceProps()}>
        <div ref={divRef} className={classes['']}>
          <p>{text}</p>
        </div>
      </div>
      {open && isTruncated && (
        <div
          className={classes["edit-input"]}
          ref={refs.setFloating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            zIndex: 5000000000
          }}
          {...getFloatingProps()}
        >
          <span>{text}</span>
        </div>
      )}
    </div>
  );
};

export default TextTooltip;
