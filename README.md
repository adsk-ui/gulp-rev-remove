gulp-rev-remove
===============

Remove files which have been renamed by gulp-rev. 
**Careful not to remove your source files! This is not intended to be used if you are using gulp-rev and gulp-rev-replace directly on source files.**
```
var assets = require('useref').assets(),
    rev = require('gulp-rev'),
    revreplace = require('gulp-rev-replace'),
    revremove = require('gulp-rev-remove');
    
gulp.src('build/index.html')
	.pipe(assets)               // assets referenced in index.html
	.pipe(rev())                // cachebust the names of referenced assets
	.pipe(assets.restore())     // back to the html file
	.pipe(revreplace())         // replace asset references in index.html with renamed (cachebusted) asset references
	.pipe(gulp.dest('build/'))  // write the updated html file and renamed assets
	.pipe(revremove());         // remove the files originally referenced in build/index.html
```
