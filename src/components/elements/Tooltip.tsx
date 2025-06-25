"use client";
import {
  useFloating,
  offset,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react";
import { useState, cloneElement } from "react";

interface TooltipProps {
  children: React.ReactElement;
  label: string;
  placement?: "top" | "bottom";
}

export default function Tooltip({ children, label, placement = "top" }: TooltipProps) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [offset(8)],
  });

  const hover = useHover(context, { move: false });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    dismiss,
    role,
  ]);

  return (
    <>
      {cloneElement(children, {
        ref: refs.setReference,
        ...getReferenceProps(),
      })}

      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
            className="px-3 py-2 text-sm rounded-md bg-neutral-700 text-white shadow-md z-50"
          >
            {label}
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
