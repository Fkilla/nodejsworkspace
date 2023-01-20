show databases;

alter user 'root'@'localhost' identified with mysql_native_password by '1234';

FLUSH PRIVILEGES;

create database company;

use company;

drop table products;

create table products(
	id int not null auto_increment primary key,
    name varchar(50) not null,
    modelnumber varchar(15) not null,
    series varchar(30) not null
) default character set utf8 collate utf8_general_ci;

select * from products;

-- 정수 : int
-- 실수 : double
-- 문자 : varchar
-- 날짜 : date

insert into products(name,  modelnumber, series)
values ('Erica', '0112223333','Artist');
insert into products(name,  modelnumber, series)
values ('Jeff', '0113335555','Artist');
insert into products(name,  modelnumber, series)
values ('merry', '0112223333','American Deluxe');
insert into products(name,  modelnumber, series)
values ('chris', '0112221234','American Army');

commit;

select * from products
where series = 'Artist';

select * from products LIMIT 5;
select * from products LIMIT 2,2; 
-- 상위 두개를 건너 뛰고 그 다음부터 두개를 가져오라는 소리임.
-- mysql만 허용하는 문법

select * from products 
order by id asc limit 2;

SET SQL_SAFE_UPDATES = 0;