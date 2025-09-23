from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

doc = SimpleDocTemplate("protocol-guide.pdf", pagesize=A4)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="TitleStyle", fontName="Helvetica-Bold", fontSize=20, alignment=TA_CENTER, spaceAfter=25))
styles.add(ParagraphStyle(name="HeadingStyle", fontName="Helvetica-Bold", fontSize=15, spaceAfter=10))
styles.add(ParagraphStyle(name="BodyStyle", fontName="Helvetica", fontSize=12, alignment=TA_JUSTIFY, leading=18))

story = []
story.append(Paragraph("The Blackout Protocol - Ceremony Guide", styles["TitleStyle"]))
story.append(Spacer(1, 20))

sections = [
    ("1. Preparation", 
     "Gather participants in a dark room. Ensure silence and minimal external interference."),
    ("2. The Blackout", 
     "At the signal, all lights and devices must be turned off. Darkness represents both uncertainty and freedom."),
    ("3. The Oracle", 
     "A designated participant acts as the Oracle, introducing fragments of truth and deception to challenge perception."),
    ("4. The Restart", 
     "After reflection, lights are turned back on. The group discusses insights, decisions, and the meaning of the blackout."),
    ("5. Closing", 
     "The ritual ends with a collective statement of intent: to embrace uncertainty and co-create new narratives.")
]

for title, content in sections:
    story.append(Paragraph(title, styles["HeadingStyle"]))
    story.append(Paragraph(content, styles["BodyStyle"]))
    story.append(Spacer(1, 16))

doc.build(story)
