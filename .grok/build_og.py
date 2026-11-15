#!/usr/bin/env python3
"""Sticker-book OG card: real Indie photograph, flat palette, no painted shield."""
from __future__ import annotations

import math
from collections import deque

import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SRC = "/workspace/attachments/7f516461-9af5-497f-bd0e-7bab6653260c.png"
OUT = "/workspace/.grok/og-master.png"

W, H = 2400, 1260  # exactly 1200×630 at 2×

CARBON = (0, 0, 0)
PAPER = (255, 255, 255)
SKY = (220, 238, 255)       # #dceeff
BLUE = (77, 162, 255)       # #4da2ff
MINT = (85, 219, 156)       # #55db9c
LAVENDER = (233, 204, 255)  # #e9ccff
EMBER = (251, 73, 3)        # #fb4903
SUN = (255, 215, 49)        # #ffd731
VIOLET = (92, 74, 222)      # #5c4ade

FONT_PATH = "/usr/share/fonts/opentype/tlwg/Loma-Bold.otf"
FONT_SI = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"


def border_connected(bg: np.ndarray) -> np.ndarray:
    h, w = bg.shape
    vis = np.zeros((h, w), dtype=np.uint8)
    q = deque()

    def push(y: int, x: int) -> None:
        if 0 <= y < h and 0 <= x < w and bg[y, x] and vis[y, x] == 0:
            vis[y, x] = 1
            q.append((y, x))

    for x in range(w):
        push(0, x)
        push(h - 1, x)
    for y in range(h):
        push(y, 0)
        push(y, w - 1)
    while q:
        y, x = q.pop()
        push(y - 1, x)
        push(y + 1, x)
        push(y, x - 1)
        push(y, x + 1)
    return vis.astype(bool)


def dog_sticker() -> Image.Image:
    im = Image.open(SRC).convert("RGB")
    arr = np.asarray(im).astype(np.int16)
    r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
    lum = arr.mean(axis=2)
    # Dark studio backdrop, plus the cool gray floor. Interior dark pixels
    # (eyes, nose, the costume print already in the photo) stay, because they
    # are not connected to the border.
    dark = lum < 58
    cool = (b > r + 7) & (g + 2 >= r) & (np.abs(b - g) < 28) & (lum > 48) & (lum < 175)
    bg = border_connected(dark | cool)
    subject = ~bg

    alpha = Image.fromarray((subject.astype(np.uint8) * 255))
    # Catch fur fringe, then harden so the sticker edge stays crisp.
    alpha = alpha.filter(ImageFilter.MaxFilter(5))
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.8))
    a = np.array(alpha)
    a = np.where(a > 140, 255, 0).astype(np.uint8)

    # Gentle shadow lift so the cream coat reads on pastel paper. Same pixels.
    f = np.clip(arr.astype(np.float32) / 255.0, 0, 1)
    f = np.clip(f ** 0.74, 0, 1)
    rgb = (f * 255.0).astype(np.uint8)
    rgba = np.dstack([rgb, a])
    dog = Image.fromarray(rgba, "RGBA")

    ys, xs = np.where(a > 128)
    pad = 8
    dog = dog.crop((xs.min() - pad, ys.min() - pad, xs.max() + pad, ys.max() + pad))

    # White die-cut margin + thick carbon outline. Flat, no blur shadow.
    core = dog.split()[-1]
    white_m = core.filter(ImageFilter.MaxFilter(21))
    black_m = white_m.filter(ImageFilter.MaxFilter(17))
    w, h = dog.size
    plate = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    plate.paste((0, 0, 0, 255), (0, 0), black_m)
    plate.paste((255, 255, 255, 255), (0, 0), white_m)
    plate.paste(dog, (0, 0), dog)
    return plate


def star_points(cx, cy, r, points=5, inner=0.46):
    pts = []
    for i in range(points * 2):
        ang = -math.pi / 2 + i * math.pi / points
        rad = r if i % 2 == 0 else r * inner
        pts.append((cx + rad * math.cos(ang), cy + rad * math.sin(ang)))
    return pts


def outlined_polygon(base: Image.Image, pts, fill, outline_scale=1.14):
    cx = sum(p[0] for p in pts) / len(pts)
    cy = sum(p[1] for p in pts) / len(pts)
    black = [((x - cx) * outline_scale + cx, (y - cy) * outline_scale + cy) for x, y in pts]
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.polygon(black, fill=CARBON)
    d.polygon(pts, fill=fill)
    return Image.alpha_composite(base, layer)


def disk(base, cx, cy, r, fill, stroke=14):
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.ellipse((cx - r - stroke, cy - r - stroke, cx + r + stroke, cy + r + stroke), fill=CARBON)
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=fill)
    return Image.alpha_composite(base, layer)


def round_rect_sticker(base, box, fill, radius, stroke=14, rotation=0):
    x0, y0, x1, y1 = box
    pad = stroke + 8
    w, h = int(x1 - x0 + pad * 2), int(y1 - y0 + pad * 2)
    tile = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(tile)
    d.rounded_rectangle((pad - stroke, pad - stroke, w - pad + stroke, h - pad + stroke), radius=radius + stroke, fill=CARBON)
    d.rounded_rectangle((pad, pad, w - pad, h - pad), radius=radius, fill=fill)
    if rotation:
        tile = tile.rotate(rotation, expand=True, resample=Image.Resampling.BICUBIC)
    base.alpha_composite(tile, (int(x0 - pad), int(y0 - pad)))
    return base


def tape(base, cx, cy, w, h, fill, rotation):
    tile = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(tile)
    d.rounded_rectangle((0, 0, w - 1, h - 1), radius=10, fill=CARBON)
    inset = 10
    d.rounded_rectangle((inset, inset, w - 1 - inset, h - 1 - inset), radius=6, fill=fill)
    tile = tile.rotate(rotation, expand=True, resample=Image.Resampling.BICUBIC)
    base.alpha_composite(tile, (int(cx - tile.size[0] / 2), int(cy - tile.size[1] / 2)))
    return base


def build() -> Image.Image:
    canvas = Image.new("RGBA", (W, H), SKY + (255,))

    # Edge stickers — flat paper, thick carbon outlines. Kept off the title block.
    canvas = disk(canvas, 190, 210, 108, BLUE, 16)
    canvas = disk(canvas, 2140, 1080, 130, LAVENDER, 16)
    canvas = disk(canvas, 360, 1120, 64, EMBER, 14)
    canvas = disk(canvas, 2060, 250, 46, SUN, 12)
    canvas = outlined_polygon(canvas, star_points(2200, 190, 120), MINT)
    canvas = outlined_polygon(canvas, star_points(150, 860, 78), SUN)
    canvas = outlined_polygon(canvas, star_points(1980, 640, 54), VIOLET, 1.18)
    canvas = tape(canvas, 430, 150, 280, 70, PAPER, -18)
    canvas = tape(canvas, 1880, 980, 320, 64, MINT, 12)
    canvas = tape(canvas, 120, 560, 210, 58, SUN, 72)
    canvas = round_rect_sticker(canvas, (1980, 760, 2260, 900), VIOLET, 36, 14, -8)
    canvas = round_rect_sticker(canvas, (80, 980, 250, 1140), LAVENDER, 40, 14, 10)

    # Small flat confetti dots.
    for cx, cy, col, r in (
        (620, 180, EMBER, 22),
        (1780, 140, BLUE, 18),
        (2280, 480, MINT, 26),
        (90, 300, SUN, 16),
        (1500, 160, VIOLET, 14),
        (700, 1160, BLUE, 20),
        (1700, 1140, EMBER, 16),
    ):
        canvas = disk(canvas, cx, cy, r, col, 8)

    sticker = dog_sticker()
    # Fit the photograph into the lower center, clear of the title.
    max_w, max_h = 1500, 700
    sw, sh = sticker.size
    scale = min(max_w / sw, max_h / sh)
    sticker = sticker.resize((int(sw * scale), int(sh * scale)), Image.Resampling.LANCZOS)
    sticker = sticker.rotate(-3.5, expand=True, resample=Image.Resampling.BICUBIC)
    sx = (W - sticker.size[0]) // 2 + 10
    sy = H - sticker.size[1] - 78
    canvas.alpha_composite(sticker, (sx, sy))

    # Title lockup, drawn last so nothing covers a glyph.
    title_font = ImageFont.truetype(FONT_PATH, 300)
    draw = ImageDraw.Draw(canvas)
    lines = ["Super", "Indie"]
    bboxes = [draw.textbbox((0, 0), line, font=title_font, stroke_width=22) for line in lines]
    widths = [b[2] - b[0] for b in bboxes]
    heights = [b[3] - b[1] for b in bboxes]
    gap = 8
    block_h = sum(heights) + gap
    top = 48
    # If the block would collide with the dog, it still stays in the upper band.
    y = top
    for line, bb, tw, th in zip(lines, bboxes, widths, heights):
        x = (W - tw) // 2 - bb[0]
        draw.text((x, y - bb[1]), line, font=title_font, fill=PAPER, stroke_width=22, stroke_fill=CARBON)
        y += th + gap

    # $SI mint sticker under the lockup.
    si_font = ImageFont.truetype(FONT_SI, 78)
    label = "$SI"
    bb = draw.textbbox((0, 0), label, font=si_font)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    pad_x, pad_y = 36, 14
    pw, ph = tw + pad_x * 2, th + pad_y * 2
    pill = Image.new("RGBA", (pw + 20, ph + 20), (0, 0, 0, 0))
    pd = ImageDraw.Draw(pill)
    pd.rounded_rectangle((0, 0, pw + 19, ph + 19), radius=28, fill=CARBON)
    pd.rounded_rectangle((8, 8, pw + 11, ph + 11), radius=22, fill=MINT)
    pd.text((8 + pad_x - bb[0], 8 + pad_y - bb[1]), label, font=si_font, fill=CARBON)
    px = (W - pill.size[0]) // 2
    py = y + 6
    canvas.alpha_composite(pill, (px, py))

    return canvas.convert("RGB")


if __name__ == "__main__":
    img = build()
    img.save(OUT, "PNG")
    print("saved", OUT, img.size)
