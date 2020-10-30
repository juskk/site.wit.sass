var gulp = require('gulp');
var sass = require('gulp-sass');



gulp.task('sass', function(done) {
    gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./prod/styles'));

});


gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/**/*.sass', gulp.series('sass') );
})


