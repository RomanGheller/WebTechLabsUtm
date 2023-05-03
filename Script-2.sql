create table account (
	id serial primary key,
	name varchar(40),
	email varchar(40),
	password varchar(40),
	key varchar(40) default null
)

drop table  account
insert into account (
    name ,
	email ,
	password 
)
values (
	'Roma',
	'romgel2003@gmail.com',
	'Starcraft'
)

select * from account;

delete from account where id = 4;

