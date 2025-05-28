import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Settings, Plus, Minus, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownOption {
  id: string;
  label: string;
  onClick?: () => void;
}

export interface DropdownProps {
  options: DropdownOption[];
  type?: "icon" | "register";
  iconType?: "editProfile" | "more";
  align?: "top" | "bottom";
  className?: string;
}

export default function DropdownButton({
  options,
  type = "icon",
  iconType = "editProfile",
  align = "bottom",
  className,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (option.onClick) {
      option.onClick();
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative w-fit" ref={dropdownRef}>
      {type === "icon" ? (
        <Button
          variant="withIcon"
          size="icon"
          onClick={toggleDropdown}
          className={cn(
            iconType === "more" &&
              "hover:bg-zinc-200 text-primary bg-transparent size-7",
          )}
        >
          {iconType === "editProfile" && <Settings />}
          {iconType === "more" && <MoreVertical size={20} />}
        </Button>
      ) : (
        <Button
          variant="add"
          onClick={toggleDropdown}
          size={!isOpen ? "default" : "icon"}
        >
          <div className="flex justify-center items-center gap-0.5">
            {!isOpen ? (
              <>
                <Plus size={16} strokeWidth={3} />
                <p>등록하기</p>
              </>
            ) : (
              <Minus size={16} strokeWidth={3} />
            )}
          </div>
        </Button>
      )}
      {isOpen && (
        <div className="relative">
          <ul
            className={cn(
              "absolute flex flex-col bg-white shadow-md rounded-sm p-2 right-0 z-10",
              align === "bottom" && "top-1",
              align === "top" && "bottom-10",
            )}
          >
            {options.map((option) => (
              <li key={option.id}>
                <Button
                  variant="ghost"
                  className="text-primary hover:bg-[var(--primary-o2)] hover:text-primary cursor-pointer shadow-none w-full"
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
