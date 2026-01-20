Lucis Life Redesign

Ein modernes, minimalistisches Redesign der Lucis Life Website, fokussiert auf saubere Typografie und Health-Tech Ästhetik.

📂 Projektstruktur

Wenn du dieses Projekt lokal oder auf GitHub einrichtest, empfehle ich folgende Ordnerstruktur, um den Code sauber zu halten:

/lucis-project
├── index.html              # Die Hauptdatei (HTML Markup)
├── README.md               # Diese Datei
└── assets/
    ├── css/
    │   └── style.css       # Hierhin den Inhalt des <style> Tags verschieben
    ├── js/
    │   └── main.js         # Hierhin den Inhalt des <script> Tags verschieben
    └── images/
        └── image_f7dfc2.png  # Dein Dashboard-Screenshot


🚀 Erste Schritte

Repository klonen oder Ordner erstellen.

Dateien aufteilen:

Kopiere den CSS-Code (alles zwischen <style> und </style>) in assets/css/style.css.

Verlinke ihn im <head> der index.html:
<link rel="stylesheet" href="assets/css/style.css">

Kopiere den JS-Code (alles zwischen <script> und </script>) in assets/js/main.js.

Verlinke ihn am Ende des <body>:
<script src="assets/js/main.js"></script>

Bilder hinzufügen:

Lege dein Bild (image_f7dfc2.png) in den Ordner assets/images/.

Aktualisiere den <img> Tag in der index.html.

🎨 Design System

Fonts: Inter (UI/Text), Playfair Display (Headlines)

Farben:

Primary: Black (#000000)

Background: White (#ffffff)

Surface: Light Gray (#f9fafb)

Accent: Blue (#3b82f6 - sparsam eingesetzt)

🛠 Tech Stack

HTML5

CSS3 (Custom Properties / CSS Variables)

Vanilla JavaScript (Kein Framework notwendig)
