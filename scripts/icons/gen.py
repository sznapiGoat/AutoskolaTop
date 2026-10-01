"""
Autoškola TOP icon set, derived from the logo geometry. Run: python scripts/icons/gen.py

Tokens (measured from the traced logo, see measure.py):
  canvas 24, live area 2..22
  stroke 2.5 (logo stem ~0.21 x cap height), butt caps, miter joins, radius 0
  chamfer: free ends cut at 37 deg (the wing-tip angle): dx = h * 1.33
  stripes: bar 2.5 / gap 1 (logo 25:10), each bar steps in by 3 (1.2 x bar)
  accent: one element per icon at most, in the signature orange (var --icon-accent)

Markup mini-language (converted to JSX):
  s  = stroked (default)        f = filled with currentColor
  a  = filled accent            sa = stroked accent
  k  = knock-out fill (sits on a filled shape)
"""
import os, re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "..", "src", "components", "icons", "Icons.tsx")


def stripes(x_right, y, n=3, h=2.5, gap=1.0, w0=7.0, step=3.0, cls="a"):
    """Wing stripes: right-aligned bars, each shorter, outer (left) end cut at 37deg."""
    out = []
    cut = h * 1.33
    for i in range(n):
        yy = y + i * (h + gap)
        x0 = x_right - w0 + i * step
        out.append(f'<path class="{cls}" d="M{x0:g} {yy:g}H{x_right:g}V{yy + h:g}H{x0 + cut:g}Z"/>')
    return "".join(out)


ICONS = {
    # ---- UI ----
    "Check": '<path d="M3.5 12.5 9.5 18.5 20.5 6"/>',
    "CheckTile": '<path class="a" d="M2 2H22V17.5L16 22H2Z"/><path class="ks" d="M6.5 12 10.5 16 17.5 8.5"/>',
    "Close": '<path d="M5 5 19 19M19 5 5 19"/>',
    "Plus": '<path d="M12 4V20M4 12H20"/>',
    "Menu": stripes(21, 5, n=3, h=2.5, gap=3.25, w0=18, step=4, cls="f"),
    "ArrowRight": '<path d="M3 12H19.5M13.5 5.5 20 12 13.5 18.5"/>',
    "ArrowLeft": '<path d="M21 12H4.5M10.5 5.5 4 12 10.5 18.5"/>',
    "ArrowUpRight": '<path d="M5.5 18.5 17.5 6.5M8 5.5H18.5V16"/>',
    "CaretDown": '<path d="M5 8.5 12 15.5 19 8.5"/>',
    "CaretRight": '<path d="M8.5 5 15.5 12 8.5 19"/>',
    "External": '<path d="M10 4H4V20H20V14M13 4H20V11M19.5 4.5 11 13"/>',
    "Spinner": '<path d="M12 3A9 9 0 1 0 21 12"/>',
    "Info": '<path d="M2.5 2.5H21.5V17L17 21.5H2.5Z"/><path class="f" d="M10.75 10H13.25V17.5H10.75ZM10.75 6H13.25V8.5H10.75Z"/>',
    "Warning": '<path d="M12 3 22 20.5H2Z"/><path class="f" d="M10.75 9H13.25V14.5H10.75ZM10.75 16H13.25V18.5H10.75Z"/>',
    # ---- contact ----
    "Phone": '<path class="f" d="M3 3H9L10.5 8 8 10 14 16 16 13.5 21 15V21H17L3 7Z"/>' + stripes(21, 3, n=2, h=2, gap=1, w0=6, step=2.5),
    "Mail": '<path d="M2.5 5H21.5V19H2.5Z"/><path d="M3 6 12 13 21 6"/>',
    "Pin": '<path class="f" fill-rule="evenodd" d="M4.5 2.5H19.5V13L12 22 4.5 13ZM9.5 6.5V11.5H14.5V6.5Z"/>',
    "Clock": '<circle cx="12" cy="12" r="9"/><path d="M12 6.5V12.5H16.5"/>',
    "Chat": '<path d="M2.5 3.5H21.5V16H10L5 21V16H2.5Z"/><path class="a" d="M7 8.5H17V10.5H7ZM7 12H13V14H7Z"/>',
    # ---- brand / services ----
    "Car": stripes(6, 7.5, n=3, h=2, gap=1, w0=5.5, step=1.5)
    + '<path class="f" fill-rule="evenodd" d="M6.5 18.5V12L9.5 11.2 12.2 6H19.2L22.4 11.2 23.5 12V18.5ZM13.5 8.2 12.2 10.8H15.6V8.2ZM17.4 8.2V10.8H20.3L18.7 8.2Z"/>'
    + '<circle class="k" cx="11" cy="18.5" r="3"/><circle class="k" cx="19.5" cy="18.5" r="3"/>'
    + '<circle class="f" cx="11" cy="18.5" r="1.75"/><circle class="f" cx="19.5" cy="18.5" r="1.75"/>',
    "Licence": '<path d="M2.5 5H21.5V19H2.5Z"/><path class="a" d="M5.5 8.5H10V15.5H5.5Z"/>'
    + '<path class="f" fill-rule="evenodd" d="M12.5 8H16.6L18 9.4V11.2L17.2 12 18 12.8V14.6L16.6 16H12.5ZM14.4 9.7V11.2H16.1V9.7ZM14.4 12.8V14.3H16.1V12.8Z"/>',
    "LicenceReturn": '<path d="M2.5 10H15.5V21H2.5Z"/><path class="f" d="M5 13H9V18H5Z"/>'
    + '<path class="sa" d="M11 5.5H20.5V13.5H17M19 10.5 16 13.5 19 16.5"/>',
    "Tram": '<path d="M9 2.5H15M12 2.5V5"/><path class="f" fill-rule="evenodd" d="M7.5 5H16.5L19 7.5V19.5H5V7.5ZM7.5 8V12.5H16.5V8Z"/>'
    + '<path class="k" d="M7 15H9.5V17H7ZM14.5 15H17V17H14.5Z"/><path class="a" d="M3 21.5H21V23H3Z"/>',
    "Parking": '<path class="a" fill-rule="evenodd" d="M2 2H22V17.5L16 22H2ZM8 6V18H11V14H14L16.5 11.5V8.5L14 6ZM11 8.8V11.2H13.5V8.8Z"/>',
    "Wheel": '<circle cx="12" cy="12" r="9"/><path d="M3.5 11H8.5M15.5 11H20.5M12 14.5V20.5"/><path class="a" d="M9.5 9.5H14.5V14.5H9.5Z"/>',
    "Training": '<path d="M2.5 3.5H21.5V16H2.5Z"/><path d="M12 16V21.5M7.5 21.5 12 17.5 16.5 21.5"/>'
    + stripes(18, 6.5, n=2, h=2, gap=1.25, w0=11, step=3),
    "City": '<path class="f" d="M2 21V12H5V8L6.5 3.5 8 8V12H10V9.5H14V12H16V8L17.5 3.5 19 8V12H22V21Z"/>'
    + '<path class="k" d="M4.5 15H6.5V17.5H4.5ZM11 13H13V15.5H11ZM17.5 15H19.5V17.5H17.5Z"/>',
    # ---- content ----
    "Calendar": '<path d="M3 5.5H21V21H3Z"/><path class="f" d="M3 5.5H21V9.5H3Z"/><path d="M8 2.5V6M16 2.5V6"/><path class="sa" d="M8 15 11 18 16.5 12.5"/>',
    "Coins": '<path class="f" d="M2 18.5H15V21.5H2ZM3.5 14.5H16.5V17.5H3.5ZM5 10.5H13.5V13.5H5Z"/><circle class="a" cx="17" cy="7.5" r="5"/><path class="k" d="M16 5H18V10H16Z"/>',
    "Receipt": '<path d="M5 2.5H19V21L16.5 19.25 14 21 11.5 19.25 9 21 6.5 19.25 5 20.25Z"/><path d="M8.5 7.5H15.5M8.5 11H15.5M8.5 14.5H12.5"/>',
    "Document": '<path d="M5 2.5H14.5L19 7V21.5H5Z"/><path d="M8.5 11.5H15.5M8.5 15H15.5M8.5 18.5H12.5"/><path class="f" d="M13.5 2.5H14.5L19 7V8H13.5Z"/>',
    "Medical": '<path d="M2.5 2.5H21.5V17L17 21.5H2.5Z"/><path class="a" d="M10.5 6H13.5V10.5H18V13.5H13.5V18H10.5V13.5H6V10.5H10.5Z"/>',
    "IdCard": '<path d="M2.5 5H21.5V19H2.5Z"/><path class="f" d="M5.5 8.5H10.5V15.5H5.5Z"/><path d="M13 10H18.5M13 13.5H18.5"/>',
    "Calm": '<circle cx="12" cy="12" r="9"/><path class="f" d="M8 8.5H10.5V11H8ZM13.5 8.5H16V11H13.5Z"/><path class="sa" d="M7.5 14 12 16.5 16.5 14"/>',
    "Friends": '<circle class="a" cx="17" cy="7" r="2.75"/><path class="a" d="M13.5 11.5H20.5L22.5 20H15Z"/><circle class="f" cx="8" cy="6" r="3.25"/><path class="f" d="M3 11H13L15 21H1Z"/>',
    "Heart": '<path class="a" d="M12 21 2.5 11.5V6.5L5.5 3.5H9L12 6.5 15 3.5H18.5L21.5 6.5V11.5Z"/>',
    "Briefcase": '<path d="M2.5 7H21.5V20.5H2.5Z"/><path d="M9 7V4H15V7"/><path class="a" d="M2.5 11.5H21.5V13.5H2.5Z"/>',
    "Home": '<path d="M2.5 11.5 12 3.5 21.5 11.5"/><path d="M5 9.5V20.5H19V9.5"/><path class="a" d="M10 14H14V20.5H10Z"/>',
}

ATTR = {"fill-rule": "fillRule"}


def to_jsx(markup):
    def fix(tag):
        cls = re.search(r'class="(\w+)"', tag)
        c = cls.group(1) if cls else "s"
        tag = re.sub(r'\s*class="\w+"', "", tag)
        extra = {
            "s": "",
            "f": ' fill="currentColor" stroke="none"',
            "a": ' fill="var(--icon-accent, currentColor)" stroke="none"',
            "sa": ' stroke="var(--icon-accent, currentColor)"',
            "k": ' fill="var(--icon-knock, var(--bg))" stroke="none"',
            "ks": ' stroke="var(--icon-knock, var(--bg))"',
        }[c]
        for k, v in ATTR.items():
            tag = tag.replace(f"{k}=", f"{v}=")
        return tag.replace("/>", f"{extra} />")

    return re.sub(r"<(path|circle)[^>]*/>", lambda m: fix(m.group(0)), markup)


header = '''/*
  Autoškola TOP icon set. Drawn from the logo's geometry rather than a stock library:
  heavy 2.5 strokes with flat ends and sharp corners (like the condensed AUTOŠKOLA caps),
  free ends cut at 37 degrees (the wing-tip angle), and the stepped wing stripes as motif.
  One accent element per icon uses --icon-accent (the orange of the "Rakovník" signature).
  Generated by scripts/icons/gen.py (python scripts/icons/gen.py); edit geometry there, not by hand.
*/
import type { SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number | string;
  /** Accessible name. Without it the icon is decorative (aria-hidden). */
  title?: string;
};

function Svg({ size = 24, title, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit={10}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}
'''

body = []
for name, markup in ICONS.items():
    body.append(
        f"export function Icon{name}(props: IconProps) {{\n  return (\n    <Svg {{...props}}>\n      {to_jsx(markup)}\n    </Svg>\n  );\n}}\n"
    )

os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, "w", encoding="utf8").write(header + "\n" + "\n".join(body))

# preview sheet for own QA
cells = []
for name, markup in ICONS.items():
    m = markup
    m = re.sub(r'class="f"', 'fill="currentColor" stroke="none"', m)
    m = re.sub(r'class="a"', 'fill="#e8791e" stroke="none"', m)
    m = re.sub(r'class="sa"', 'stroke="#e8791e"', m)
    m = re.sub(r'class="k"', 'fill="#f3f3f1" stroke="none"', m)
    m = re.sub(r'class="ks"', 'stroke="#f3f3f1"', m)
    svg = f'<svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#141414" stroke-width="2.5" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10">{m}</svg>'
    small = svg.replace('width="48" height="48"', 'width="20" height="20"')
    cells.append(f'<div class="c">{svg}{small}<span>{name}</span></div>')
html = f'''<html><body style="margin:0;padding:20px;background:#f3f3f1;font:12px sans-serif">
<style>.g{{display:grid;grid-template-columns:repeat(8,140px);gap:10px}}.c{{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;background:#fbfbfa;border:1px solid #ddd}}</style>
<div class="g">{"".join(cells)}</div></body></html>'''
open(os.path.join(HERE, "preview.html"), "w", encoding="utf8").write(html)  # open in a browser to review the set
print(len(ICONS), "icons")
