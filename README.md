# Webbutveckling III

### av Malin Lind, mali1710@student.miun.se

# Projekt - adminsida

Det här är administrationssidan för https://github.com/mali1710/projekt-sida. Den implementerar CRUD mot
API som finns här https://github.com/mali1710/projekt-app. Den här sidan använder fetch för att läsa ut, redigera,
uppdatera och radera poster.

### Paket som används

De paket jag har använt är:

#### Gulp

Används för automatiseringsprocessen

#### Gulp-concat

Slår ihop alla javascript-filer till en fil

#### Gulp-uglify-es

Minifierar JavaScript-filen

#### Gulp-sass

Kompilerar Sass

#### gulp-postcss

Kör autoprefixer och cssnano

#### autoprefixer

Skriver automatiskt ut prefixer för CSS så den funkar cross-browser

#### cssnano

Minifierar CSS-filen

#### Gulp-imagemin

Minifierar bilderna på sidan.

#### Gulp-sourcemaps

Mappar ut CSS och Javascript för utvecklingsverktygen i browsern så man lätt kan hitta till rätt SCSS-fil eller JavaScriptfil.

#### gulp-babel

Konverterar ES6 och nya till ES5

## Om systemet

För att använda detta system så klonar man ner det till sin egna dator med länken: [https://github.com/mali1710/projekt-admin].

Kör sedan "npm init" för att installera. För att sätta igång gulp-processerna kör kommandot "gulp".
