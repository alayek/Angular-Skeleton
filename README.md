[![Build Status](https://travis-ci.org/alayek/Angular-Skeleton.svg?branch=master)](https://travis-ci.org/alayek/Angular-Skeleton)

# Angular-Skeleton
A skeleton repository, for Angular JS projects, based on this tutorial: http://manuel.kiessling.net/2014/06/09/creating-a-useful-angularjs-project-structure-and-toolchain/

This contains a sample grunt-based test runner template.

To use it, do the following. You need npm installed beforehand.

`$ git clone https://github.com/alayek/Angular-Skeleton`
`$ cd Angular-Skeleton`
`$ npm install`

Then you can run the test if you wish to. It should show all test cases passed successfully.
`$ grunt test`


# Issues

The `Gruntfile.js` looks abysmal, hardcoding each and every dependency.

This is because in its current version, Grunt is not flattening the data.files type array.

See this: https://github.com/karma-runner/grunt-karma/issues/136
