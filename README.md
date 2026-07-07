# Kallos Media — Site

Στατικό site (HTML/CSS/JS) με τα 3 πακέτα προσφορών και στοιχεία επικοινωνίας. Έτοιμο για GitHub Pages — δεν χρειάζεται καμία επιπλέον ρύθμιση (π.χ. email service) για να λειτουργήσει.

## 1. Ανέβασμα στο GitHub

1. Δημιούργησε ένα **public** repository στο [github.com](https://github.com), π.χ. `kallos-media`.
2. Ανέβασε **όλα** τα αρχεία αυτού του φακέλου (`index.html`, `style.css`, `script.js`, τον φάκελο `images/`) στο root του repo — με drag & drop από το "Add file → Upload files" ή με git.
3. Πήγαινε **Settings → Pages**, στο "Source" επίλεξε branch `main`, folder `/root`, και Save.
4. Μετά από λίγα λεπτά το site σου θα είναι live στο:
   `https://TO-USERNAME-SOU.github.io/kallos-media/`

## 2. Επικοινωνία

Το site δεν στέλνει email — δείχνει τις 3 προσφορές και, στο τέλος, δίνει στον επισκέπτη τρόπους να επικοινωνήσει απευθείας μαζί σου:

- Κλήση: **+30 698 358 9908**
- Email: **kallosmedia1.618@gmail.com**
- Instagram: **[@kallosmedia1.618](https://instagram.com/kallosmedia1.618)**

Αν θελήσεις στο μέλλον να προσθέσεις φόρμα επικοινωνίας που στέλνει mail αυτόματα, μπορούμε να το προσθέσουμε ξανά.

## 3. Βάλε τη δική σου φωτογραφία background

Η τελευταία ενότητα (επικοινωνία) χρησιμοποιεί προς το παρόν ένα σκούρο gradient αντί για φωτογραφία.

1. Βάλε τη φωτογραφία σου μέσα στον φάκελο `images/` και ονόμασέ την `background.jpg`.
2. Στο `style.css`, μέσα στο `.cta{ ... }`, ξε-σχολίασε (κατάργησε το `/* */`) τη γραμμή:
   ```css
   background: linear-gradient(180deg, rgba(10,47,71,.55), rgba(10,31,40,.85)), url('images/background.jpg') center/cover no-repeat;
   ```
   και σβήσε ή σχολίασε το `background:` block από πάνω της.

## Δομή αρχείων

```
kallos-media/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/          ← βάλε εδώ το background.jpg σου
```
