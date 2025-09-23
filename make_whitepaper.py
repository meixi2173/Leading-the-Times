from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

doc = SimpleDocTemplate("whitepaper.pdf", pagesize=A4)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="TitleStyle", fontName="Helvetica-Bold", fontSize=22, alignment=TA_CENTER, spaceAfter=30))
styles.add(ParagraphStyle(name="HeadingStyle", fontName="Helvetica-Bold", fontSize=16, spaceAfter=12))
styles.add(ParagraphStyle(name="BodyStyle", fontName="Helvetica", fontSize=12, alignment=TA_JUSTIFY, leading=18))

story = []
story.append(Paragraph("The Blackout Protocol - Whitepaper", styles["TitleStyle"]))
story.append(Spacer(1, 24))

sections = [
    ("1. Introduction", 
     "The Blackout Protocol is not only a technical standard, but also a philosophical experiment. It simulates society's response to the collapse of energy and order."),
    ("2. Core Ideas", 
     "At the heart lies entropy and choice. When systems fail, narratives continue. Human imagination, collaboration, and uncertainty build new forms of order."),
    ("3. Technical Framework", 
     "The system consists of three layers:\n- Narrative Engine (events and chapters)\n- Oracle Monitoring (real-time logs and feedback)\n- Black Hole Paradox Field (philosophical gravity center)"),
    ("4. Potential Impact", 
     "The protocol may influence:\n- Digital art and immersive theatre\n- Decentralized narrative networks\n- Education and philosophical platforms"),
    ("5. Conclusion", 
     "The Blackout Protocol transforms chaos into a stage for freedom and critical thinking. It offers a vision for the future of human-technology relations.")
]

for title, content in sections:
    story.append(Paragraph(title, styles["HeadingStyle"]))
    story.append(Paragraph(content, styles["BodyStyle"]))
    story.append(Spacer(1, 18))

doc.build(story)
