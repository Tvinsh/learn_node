
var assert = require('power-assert');

// describe('Promise Test', function () {
//     context('When Callback(high-order function)', function () {
//         it("should use `done` for test?", function (done) {
// 		    var promise = Promise.resolve(42);
// 		    promise.then(function (value) {
// 		        assert(value === 42);
// 		        done();
// 		    });
// 		});
//     });
// });

// 在对Promise进行测试的时候，不使用 done() 这样的回调风格的代码编写方式，而是返回一个promise对象

var assert = require('power-assert');
describe('Promise Test', function () {

	//  测试失败
	// it("should be fail", function () {
	//     return Promise.resolve().then(function () {
	//         assert(false);// => 测试失败
	//     });
	// });

    it('should return a promise object', function () {
        var promise = Promise.resolve(1);
        return promise.then(function (value) {				// 返回结果为promise对象
            assert(value === 1);
        });
    });

});