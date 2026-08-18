from docx import Document
from docx.shared import Inches, Pt
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
import hashlib, os, pandas as pd

base="/mnt/data"
files = [
    ("E-01", "cargo_manifest.txt", "Manifest kargo digital", 2063, "557f14bd96aab1d589cd5c6e0af25b07eed377614098daf53d17fea7aa4ae348"),
    ("E-02", "9736828632638273.pcapng", "Capture jaringan PCAPNG", 3165, "d4e90ccd687c081a9579e385bc0df9425dc81a916002c5b076c99224ac0e84c2"),
    ("E-03", "38627362847846286.csv", "Log GPS kendaraan", 654, "492e8c60a6e5da40dc8ea925d6ff0f6e22aec1cdab6657a11cbb59ede681f462"),
]

df=pd.read_csv(f"{base}/38627362847846286.csv")
last=df.iloc[-1]

# ---------- DOCX ----------
doc=Document()
sec=doc.sections[0]
sec.top_margin=Inches(.7); sec.bottom_margin=Inches(.7); sec.left_margin=Inches(.8); sec.right_margin=Inches(.8)

styles=doc.styles
styles["Normal"].font.name="Arial"; styles["Normal"].font.size=Pt(9.5)
for s in ["Title","Heading 1","Heading 2"]:
    styles[s].font.name="Arial"

p=doc.add_paragraph()
p.alignment=WD_ALIGN_PARAGRAPH.CENTER