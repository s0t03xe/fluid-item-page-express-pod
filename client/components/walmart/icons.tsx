import type { SVGProps } from "react";

/**
 * Walmart Living Design (LD) icon set.
 *
 * chevron-left / search / barcode / cart are the exact LD SVGs exported from
 * the Figma LD kit. The remaining glyphs are drawn to LD's visual spec
 * (24px grid, 1.5px stroke, rounded joins) so the whole app reads as one
 * coherent icon family. All icons paint with `currentColor` unless an
 * explicit `fill` is passed, so colour is driven by Tailwind text utilities.
 */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function svgProps({ size = 24, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
  };
}

/* ---- Exact LD glyphs (from Figma) ---------------------------------- */

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M7.74897 12.5652L16.9624 21L18 19.8695L9.40402 12L18 4.13049L16.9624 3L7.74897 11.4348C7.59033 11.58 7.5 11.7851 7.5 12C7.5 12.2149 7.59033 12.42 7.74897 12.5652Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M16.2511 11.4348L7.03763 3L6 4.13049L14.596 12L6 19.8695L7.03763 21L16.2511 12.5652C16.4097 12.42 16.5 12.2149 16.5 12C16.5 11.7851 16.4097 11.58 16.2511 11.4348Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Search({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })} viewBox="0 0 16 16">
      <path
        d="M11.3018 12.0211C10.2107 12.951 8.79592 13.5123 7.25 13.5123C3.79822 13.5123 1 10.714 1 7.26227C1 3.81049 3.79822 1.01227 7.25 1.01227C10.7018 1.01227 13.5 3.81049 13.5 7.26227C13.5 8.80815 12.9388 10.223 12.0089 11.314L14.3536 13.6587L13.6465 14.3658L11.3018 12.0211ZM12.5 7.26227C12.5 4.36277 10.1495 2.01227 7.25 2.01227C4.35051 2.01227 2 4.36277 2 7.26227C2 10.1618 4.35051 12.5123 7.25 12.5123C10.1495 12.5123 12.5 10.1618 12.5 7.26227Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Barcode(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M1.5 4.05C1.5 3.4701 1.9701 3 2.55 3H8.25V4.5H3V19.5H8.25V21H2.55C1.9701 21 1.5 20.5299 1.5 19.95V4.05Z"
        fill="currentColor"
      />
      <path
        d="M21.0002 4.5H15.7502V3H21.4502C22.0301 3 22.5002 3.4701 22.5002 4.05V19.95C22.5002 20.5299 22.0301 21 21.4502 21H15.7502V19.5H21.0002V4.5Z"
        fill="currentColor"
      />
      <path d="M8.25018 9V15H9.75018V9H8.25018Z" fill="currentColor" />
      <path d="M17.2502 15V9H18.7502V15H17.2502Z" fill="currentColor" />
      <path d="M14.2502 9V15H15.7502V9H14.2502Z" fill="currentColor" />
      <path d="M11.2502 15V9H12.7502V15H11.2502Z" fill="currentColor" />
      <path d="M5.25018 9V15H6.75018V9H5.25018Z" fill="currentColor" />
    </svg>
  );
}

export function Cart(props: IconProps) {
  return (
    <svg {...svgProps(props)}>
      <path
        d="M4.27679 3H1.5V4.5H3.94198L6.03163 11.4655L7.46837 11.0345L5.95802 6H20.8901L19.7093 11.3138L7.79844 12.6372C6.81733 12.7462 6.07507 13.5755 6.07507 14.5627C6.07507 15.6326 6.94244 16.5 8.01238 16.5H20.25V15H8.01238C7.77086 15 7.57507 14.8042 7.57507 14.5627C7.57507 14.3399 7.74262 14.1527 7.96409 14.1281L20.1947 12.7691C20.641 12.7195 21.0063 12.3916 21.1037 11.9533L22.4761 5.77778C22.6218 5.12204 22.1228 4.5 21.4511 4.5H5.50802L5.28251 3.74828C5.14927 3.30415 4.74048 3 4.27679 3Z"
        fill="currentColor"
      />
      <path
        d="M9 21C9.82843 21 10.5 20.3284 10.5 19.5C10.5 18.6716 9.82843 18 9 18C8.17157 18 7.5 18.6716 7.5 19.5C7.5 20.3284 8.17157 21 9 21Z"
        fill="currentColor"
      />
      <path
        d="M18.75 21C19.5784 21 20.25 20.3284 20.25 19.5C20.25 18.6716 19.5784 18 18.75 18C17.9216 18 17.25 18.6716 17.25 19.5C17.25 20.3284 17.9216 21 18.75 21Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ---- LD-spec glyphs ------------------------------------------------- */

export function Store({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4 9.5V19.5C4 20.0523 4.44772 20.5 5 20.5H19C19.5523 20.5 20 20.0523 20 19.5V9.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.2 9.5C2.4 9.5 1.9 8.7 2.2 7.96L3.74 4.13C3.89 3.75 4.26 3.5 4.67 3.5H19.33C19.74 3.5 20.11 3.75 20.26 4.13L21.8 7.96C22.1 8.7 21.6 9.5 20.8 9.5C19.81 9.5 19 8.69 19 7.7V7.5C19 8.6 18.1 9.5 17 9.5C15.9 9.5 15 8.6 15 7.5C15 8.6 14.1 9.5 13 9.5H11C9.9 9.5 9 8.6 9 7.5C9 8.6 8.1 9.5 7 9.5C5.9 9.5 5 8.6 5 7.5V7.7C5 8.69 4.19 9.5 3.2 9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ size = 24, ...props }: IconProps) {
  if (size <= 16) {
    return (
      <svg {...svgProps({ size, ...props })} viewBox="0 0 16 16">
        <path
          d="M10.81 3.03381C11.656 3.03381 12.4674 3.37445 13.0657 3.9808C13.6639 4.58714 14 5.40953 14 6.26703V6.34811C14 7.80761 12.94 9.26712 11.59 10.5138C10.5603 11.4352 9.43738 12.2438 8.24001 12.926C8.16615 12.966 8.08372 12.9868 8.00001 12.9868C7.9163 12.9868 7.83388 12.966 7.76001 12.926C6.56264 12.2438 5.43975 11.4352 4.41002 10.5138C3.06003 9.26712 2.00002 7.80761 2.00002 6.34811V6.26703C1.99292 5.63706 2.16813 5.01878 2.504 4.48865C2.83986 3.95852 3.32165 3.53979 3.88981 3.28422C4.45796 3.02864 5.08756 2.94744 5.70075 3.05065C6.31395 3.15386 6.88385 3.43695 7.34001 3.86492L7.63001 4.13858C7.73226 4.22979 7.8638 4.28012 8.00001 4.28012C8.13622 4.28012 8.26777 4.22979 8.37001 4.13858L8.66001 3.86492C9.2467 3.31906 10.0136 3.01538 10.81 3.01355M10.81 2C9.76771 2.0068 8.76552 2.40804 8.00001 3.12503C7.40066 2.56981 6.65472 2.20354 5.85334 2.07096C5.05196 1.93839 4.22984 2.04525 3.4874 2.3785C2.74497 2.71175 2.11436 3.25695 1.67264 3.9475C1.23091 4.63805 0.997194 5.44405 1.00003 6.26703V6.34811C1.00003 7.93938 1.92002 9.59146 3.74002 11.2638C4.82428 12.2364 6.00761 13.0892 7.27001 13.8078C7.49322 13.9338 7.7445 14 8.00001 14C8.25552 14 8.5068 13.9338 8.73001 13.8078C9.99242 13.0892 11.1758 12.2364 12.26 11.2638C14.08 9.59146 15 7.9191 15 6.34811V6.26703C14.9974 5.14154 14.5551 4.06291 13.7699 3.26707C12.9847 2.47123 11.9204 2.02294 10.81 2.02027V2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.125 3C19.6458 3 22.5 5.85418 22.5 9.375C22.5 13.625 19 17.5 12 21C4.99999 17.5 1.5 13.625 1.5 9.375C1.5 5.85418 4.35418 3 7.875 3C9.44849 3 10.8888 3.57006 12.0008 4.51493C13.1118 3.56981 14.5519 3 16.125 3ZM16.125 4.5C15.0419 4.5 14.0171 4.85276 13.1784 5.49178L12.9727 5.65746L12.0013 6.48379L11.0295 5.65798C10.1541 4.91414 9.04851 4.5 7.875 4.5C5.18261 4.5 3 6.68261 3 9.375C3 12.7071 5.75078 15.9581 11.4986 19.0507L12 19.315L12.1137 19.2566C17.9977 16.1697 20.8763 12.9224 20.9961 9.5923L21 9.375C21 6.68261 18.8174 4.5 16.125 4.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Close({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ChevronDown({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M12.5652 16.251L21 7.03764L19.8695 6L12 14.596L4.13049 6L3 7.03764L11.4348 16.251C11.58 16.4097 11.7851 16.5 12 16.5C12.2149 16.5 12.42 16.4097 12.5652 16.251Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Bookmark({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M6.5 3.75C6.08579 3.75 5.75 4.08579 5.75 4.5V20.25L12 16.5L18.25 20.25V4.5C18.25 4.08579 17.9142 3.75 17.5 3.75H6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Share({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M12 3.5V15.5M12 3.5L8 7.5M12 3.5L16 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 12.5V18.5C5 19.6046 5.89543 20.5 7 20.5H17C18.1046 20.5 19 19.6046 19 18.5V12.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sliders({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9" cy="6" r="2" fill="white" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="12" r="2" fill="white" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="18" r="2" fill="white" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Gift({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <rect x="3.75" y="7.75" width="16.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 11.75V19a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7.75V20" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.75S10.5 4 8.5 4 6 5 6 5.875 6.75 7.75 8.5 7.75H12ZM12 7.75S13.5 4 15.5 4 18 5 18 5.875 17.25 7.75 15.5 7.75H12Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Card({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <rect x="2.75" y="5.25" width="18.5" height="13.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9.25H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 14.75H10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Services({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <rect x="3.75" y="3.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.75" y="3.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3.75" y="13.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
      <rect x="13.75" y="13.75" width="6.5" height="6.5" rx="1.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function User({ size = 24, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <circle cx="12" cy="8" r="3.75" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M4.75 20C4.75 16.5482 7.99 13.75 12 13.75C16.01 13.75 19.25 16.5482 19.25 20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Play({ size = 13, fill = "none", ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M7 4.5L17 12L7 19.5V4.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={fill}
      />
    </svg>
  );
}

export function Dot({ size = 9, fill = "currentColor", ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <circle cx="12" cy="12" r="7" fill={fill} />
    </svg>
  );
}

export function Cube({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M4 7.5L12 12M12 12L20 7.5M12 12V21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Headphones({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4.5 16V12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect x="3" y="13.5" width="3.5" height="6" rx="1.75" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17.5" y="13.5" width="3.5" height="6" rx="1.75" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Repeat({ size = 16, ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M4 9C4 6.79086 5.79086 5 8 5H17M17 5L14 2M17 5L14 8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 15C20 17.2091 18.2091 19 16 19H7M7 19L10 22M7 19L10 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Star({ size = 15, fill = "currentColor", ...props }: IconProps) {
  return (
    <svg {...svgProps({ size, ...props })}>
      <path
        d="M12 2.5L14.81 8.45L21 9.27L16.5 13.97L17.62 20.5L12 17.27L6.38 20.5L7.5 13.97L3 9.27L9.19 8.45L12 2.5Z"
        fill={fill}
      />
    </svg>
  );
}

/** Sparky AI face — Walmart's spark mark on the assistant nav item. */
export function SparkyFace() {
  return (
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-walmart-yellow">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="4.5" cy="5.5" r="1.1" fill="#16191f" />
        <circle cx="9.5" cy="5.5" r="1.1" fill="#16191f" />
        <path
          d="M3.8 8.4a3.6 3.6 0 0 0 6.4 0"
          stroke="#16191f"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
