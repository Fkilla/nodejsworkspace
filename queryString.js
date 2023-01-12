var querystring = require('querystring'); //물음표 뒤에 붙어오는 파레메터값이 쿼리스트링
var url = require('url');

var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code= B4250257160'); 
//쿼리문자열을 쿼리 객체로 변환해 리턴
console.log(querystring.parse(parseObject.query));
