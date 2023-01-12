var url = require('url');
var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160'); //url문자열을 url객체로 변환해서 리턴한다.
console.log(parseObject);