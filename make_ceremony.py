from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY

# 注册中文字体
pdfmetrics.registerFont(UnicodeCIDFont("MSung-Light"))

doc = SimpleDocTemplate("whitepaper/blackout.pdf", pagesize=A4)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='MyTitle', fontName="MSung-Light", fontSize=24, alignment=TA_CENTER, spaceAfter=40))
styles.add(ParagraphStyle(name='Heading', fontName="MSung-Light", fontSize=16, spaceBefore=20, spaceAfter=10))
styles.add(ParagraphStyle(name='Body', fontName="MSung-Light", fontSize=12, leading=20, alignment=TA_JUSTIFY))

story = []

# 封面
story.append(Spacer(1, 200))
story.append(Paragraph("⚡ 停电协议", styles['MyTitle']))
story.append(Paragraph("The Blackout Protocol", styles['MyTitle']))
story.append(Spacer(1, 300))
story.append(Paragraph("—— 一场关于未来、控制与自由的技术革命 ——", styles['Heading']))

# 目录
story.append(Spacer(1, 100))
story.append(Paragraph("目录", styles['Heading']))
for item in ["1. 前言", "2. 技术愿景", "3. 哲学基础", "4. 应用场景", "5. 隐藏章节"]:
    story.append(Paragraph(item, styles['Body']))

# 正文
story.append(Spacer(1, 50))
story.append(Paragraph("第一章 前言", styles['Heading']))
story.append(Paragraph("停电不是终结，而是新秩序的开端。", styles['Body']))

story.append(Paragraph("第二章 技术愿景", styles['Heading']))
story.append(Paragraph("去中心化能源治理，摆脱单一电网依赖。", styles['Body']))

story.append(Paragraph("第三章 哲学基础", styles['Heading']))
story.append(Paragraph("黑暗是一种隐喻，它让我们看清真正的依赖。", styles['Body']))

story.append(Paragraph("第四章 应用场景", styles['Heading']))
story.append(Paragraph("剧场、社会实验、能源治理的未来。", styles['Body']))

# 隐藏章节提示
story.append(Spacer(1, 50))
story.append(Paragraph("第五章 隐藏章节", styles['Heading']))
story.append(Paragraph("⚠️ 本文档未揭示停电协议的全部。更多内容，将在未来的停电中被点亮。", styles['Body']))

doc.build(story)
