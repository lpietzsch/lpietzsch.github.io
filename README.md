# About This Repository + www.lara-pietzsch.de

This repository contains source code and deployment mechanisms (using GitHub pages and TravisCI) for [www.lara-pietzsch.de](https://www.lara-pietzsch.de). It uses Gatsby as a static site CMS. All pages were generated on build time.

The next sections will provide german in-depth tutorials on how to use this repository as a CMS backend for the website served by GH pages.

## Anleitung #1 – Neuen Blogpost schreiben

1. Auf der Repository-Ansicht nach [content/posts/](content/posts/) navigieren.
2. "Create new file" Button oben rechts
3. Dateiname im Format `[some-shiny-post-name].md` im ersten Feld eintragen
4. "Edit new File" für den Inhalt des Posts nutzen. Das Format ist Markdown. [Zum Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Ein Post beginnt immer mit der in `---` angeführten und beendeten Sektion, in der wichtige Metainformationen stehen. Danach folgt der Inhalt des Artikels. Hier ein Beispiel mit Metainformationen und einem kurzen Post, der verschiedene Markdown-Features nutzt:


```markdown
---

type: "post"
title: "Fischers Fritz fischt frische Fische"
author: "Lara Pietzsch"
category: "kommunikation"
date: "2018-12-24"
slug: "/frischers-fritz-fischt-frische-fische"
postImage: "./img/neu-hinzugefuegtes-bild.jpg"
metaDescription: "Zirka 150 Zeichen gebündelter Teaser, der im Google SERP Snippet angezeigt werden soll, damit Suchmaschinen-Nutzer klicken"

---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Der erste Abschnitt halt.

![Ein Alternativ-Text für dieses Bild, das eigentlich in voller Breite erscheinen sollte](./img/some-picture-file-that-exists-in-img.jpg)

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Zweiter Abschnitt halt.

## Eine Überschrift der zweiten Hierarchie (h2)

...h1, also das erste Level, ist dem Titel des Artikels allein vorbehalten. Der wird automatisch gerendert.

Es geht weiter:

> Das ist ein Zitat, von einer Person die schlau ist.

```

**Achtung:** Alle Pfade zu Bildern sollten so aussehen: `./img/bild-name.jpg`. Diese Pfade sind wichtig. Bevor oder nach Schritt 5 dieser Anleitung sollten diese Bilder nach [content/posts/img/](content/posts/img/) hochgeladen werden.

5. Commit-Titel und Beschreibung müssen nicht angegeben werden. Es kann auf "Commit new file" geklickt werden.
6. Nach dem Commit und dem hinzufügen der Bild-Dateien (siehe "Achtung-Notiz" in Schritt 4) kann der [Status des Builds und Deployments in TravisCI](https://travis-ci.org/lpietzsch/lpietzsch.github.io) beobachtet werden. Wenn der Job grün und fertig ist...
7. ...prüfen ob der neue Artikel auf https://www.lara-pietzsch.de/blog live ist und alles gut aussieht. Wenn nicht, anpassen.

## Anleitung #2 – Existierenden Blog-Post bearbeiten

1. Auf der Repository-Ansicht nach [content/posts/](content/posts/) navigieren.
2. Zu bearbeitenden Post als Datei (.md) suchen und mit einem Klick auf den Dateinamen öffnen.
3. In der Datei-Ansicht oben rechts in der Leiste auf das Stift-Icon klicken.
4. Änderungen in der Datei machen.
5. "Commit changes" drücken
6. Nach dem Commit kann der [Status des Builds und Deployments in TravisCI](https://travis-ci.org/lpietzsch/lpietzsch.github.io) beobachtet werden. Wenn der Job grün und fertig ist...
7. ...prüfen ob der Artikel auf https://www.lara-pietzsch.de/blog wie gewünscht und geändert erscheint.