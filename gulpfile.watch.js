var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
 
var tsProject = ts.createProject({
	declaration: true,
	noExternalResolve: true
});
 
gulp.task('scripts', function() {
	var tsResult = gulp.src('src/*.ts')
					.pipe(ts(tsProject));
 
	return merge([ 
		// Merge the two output streams, 
		// so this task is finished when the IO of both 
		// operations are done. 
		tsResult.dts.pipe(gulp.dest('dist/definitions')),
		tsResult.js.pipe(gulp.dest('dist/js'))
	]);
});

gulp.task('default', ['scripts'], function() {
    gulp.watch('src/*.ts', ['scripts']);
});
